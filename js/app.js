/* Mr English: app logic */
(function () {
  'use strict';
  const D = window.MRE_DATA, LESSONS = D.LESSONS;
  const DEFAULT_NAME = 'Malek';
  const KEY = 'mre.v1';
  const app = document.getElementById('app');
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const rand = (a) => a[Math.floor(Math.random() * a.length)];
  /* Variety pools: Shalabi never repeats the same line back to back, cycles through every line before reusing one,
     and only picks lines whose audio is actually available. */
  const seq = (p, n) => Array.from({ length: n }, (_, i) => p + (i + 1));
  const POOLS = {
    cheer: seq('ui_cheer_', 14), streak: seq('ui_streak_', 4), hello: ['ui_hello', 'ui_hello_2', 'ui_hello_3', 'ui_hello_4'], locked: ['ui_locked', 'ui_locked_2', 'ui_locked_3'],
    wrong1: ['ui_try_1', 'ui_try_2', 'ui_try_5', 'ui_try_9'], wrong2: ['ui_try_3', 'ui_try_6', 'ui_try_8'], wrong3: ['ui_try_4', 'ui_try_7', 'ui_try_10'],
    hint: seq('ui_hint_', 4), qintro: ['ui_quiz_intro', 'ui_quiz_intro_2', 'ui_quiz_intro_3', 'ui_quiz_intro_4', 'ui_quiz_intro_5'], turn: ['ui_your_turn', 'ui_your_turn_2', 'ui_your_turn_3', 'ui_your_turn_4', 'ui_your_turn_5', 'ui_your_turn_6'],
    mike_hello: ['mike_hello'], mike_ok: seq('mike_ok_', 4), mike_streak: seq('mike_streak_', 2), mike_retry: seq('mike_retry_', 3), mike_done: seq('mike_done_', 3),
    done3: ['ui_done_3', 'ui_done_3_2', 'ui_done_3_3', 'ui_done_3_4'], done2: ['ui_done_2', 'ui_done_2_2', 'ui_done_2_3', 'ui_done_2_4'], done1: ['ui_done_1', 'ui_done_1_2', 'ui_done_1_3', 'ui_done_1_4']
  };
  ['aan', 'can', 'prep', 'adj'].forEach((l) => { POOLS['fun_' + l] = seq('ui_fun_' + l + '_', 3); POOLS['start_' + l] = ['ui_start_1', 'ui_start_2', 'ui_start_3', 'ui_start_4', 'ui_start_5', 'ui_start_' + l + '_1', 'ui_start_' + l + '_2', 'ui_start_' + l + '_1', 'ui_start_' + l + '_2']; });
  const bags = {}, lastPick = {};
  async function pick(pool) {
    const all = POOLS[pool] || []; if (!all.length) return null;
    const ok = [];
    for (const id of all) { if ((lineIndex[id] || {}).personal && S.name !== DEFAULT_NAME) continue; if (await getBlob(id)) ok.push(id); }
    if (!ok.length) return all[0];
    let bag = (bags[pool] || []).filter((id) => ok.includes(id));
    if (!bag.length) { bag = ok.slice().sort(() => Math.random() - .5); if (bag.length > 1 && bag[0] === lastPick[pool]) bag.push(bag.shift()); }
    let id = bag.shift(); bags[pool] = bag; lastPick[pool] = id;
    /* personal lines alternate between the two nicknames (Malek / Luka) */
    if ((lineIndex[id] || {}).personal && lineIndex[id + '_luka'] && Math.random() < 0.5 && await getBlob(id + '_luka')) id = id + '_luka';
    return id;
  }
  /* Mike (second character): shows now and then in place of Shalabi, never twice within 3 lines, only when his audio exists */
  const MIKE = { cheer: 'mike_ok', streak: 'mike_streak', wrong1: 'mike_retry', wrong2: 'mike_retry', done3: 'mike_done', done2: 'mike_done', done1: 'mike_done' };
  let sayN = 0, lastMike = -9, mikeIntro = false, mikeHello = false, mikeBusy = false;
  async function mikeSay(id) {
    const meta = lineIndex[id] || {};
    const el = document.createElement('div'); el.className = 'mike';
    el.innerHTML = '<div class="buddy cheer"><img class="s" src="img/green_stand.png" alt=""><img class="c" src="img/green_cheer.png" alt=""></div><div class="mbub">' + esc(meta.say || '') + '</div>';
    document.body.appendChild(el); requestAnimationFrame(() => el.classList.add('on'));
    try { await say(id); } finally { el.classList.remove('on'); setTimeout(() => el.remove(), 350); }
    return true;
  }
  const sayPool = async (pool) => {
    sayN++;
    const mp = MIKE[pool] || (/^fun_/.test(pool) ? 'mike_ok' : null);
    const first = !mikeIntro && (mp || /^start_/.test(pool));
    if (first && await getBlob('mike_intro')) {
      /* deterministic first appearance: Mike introduces himself once per session */
      mikeIntro = true; lastMike = sayN;
      if (/^start_/.test(pool)) { await say(await pick(pool)); return mikeSay('mike_intro'); }
      return mikeSay('mike_intro');
    }
    if (mp && sayN - lastMike > 3 && Math.random() < 0.3) {
      const id = await pick(mp);
      if (id && await getBlob(id)) { lastMike = sayN; return mikeSay(id); }
    }
    return say(await pick(pool));
  };


  /* ---------- state ---------- */
  let S = { name: DEFAULT_NAME, sfx: true, voice: true, lessons: {} };
  try { Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  SFX.set(S.sfx);
  const totalStars = () => Object.values(S.lessons).reduce((a, l) => a + (l.stars || 0), 0);
  const starsOf = (id) => (S.lessons[id] && S.lessons[id].stars) || 0;

  /* ---------- voice ---------- */
  const voiceEl = new Audio(); voiceEl.preload = 'auto'; voiceEl.setAttribute('playsinline', '');
  const blobs = {};
  let vtoken = 0, unlocked = false;
  const lineIndex = {};
  LESSONS.forEach((L) => {
    L.steps.forEach((s) => (lineIndex[s.id] = s));
    L.quiz.forEach((q) => { lineIndex[q.id] = q; lineIndex[q.id + '_right'] = { personal: false }; lineIndex[q.id + '_fix'] = { personal: false }; });
  });
  D.UI.forEach((u) => (lineIndex[u.id] = u));
  function unlock() {
    if (unlocked) return; unlocked = true; SFX.unlock();
    try { voiceEl.muted = true; const p = voiceEl.play(); if (p && p.catch) p.catch(() => {}); voiceEl.pause(); voiceEl.muted = false; } catch (e) {}
  }
  async function getBlob(id) {
    if (id in blobs) return blobs[id];
    for (const ext of ['m4a', 'mp3', 'ogg']) {
      try {
        const r = await fetch('audio/' + id + '.' + ext);
        if (r.ok) { const b = await r.blob(); if (b.size > 800) { blobs[id] = URL.createObjectURL(b); return blobs[id]; } }
      } catch (e) {}
    }
    blobs[id] = null; return null;
  }
  function prefetch(ids) { let i = 0; const run = async () => { while (i < ids.length) await getBlob(ids[i++]); }; run(); run(); }
  function stopVoice() { vtoken++; try { voiceEl.pause(); } catch (e) {} talk(false); }
  function talk(on) { document.querySelectorAll('.sh.tk').forEach((e) => e.classList.toggle('talk', on)); }
  /* resolves true if audio played to the end, false if missing/skipped */
  async function say(id) {
    const my = ++vtoken; talk(false);
    const meta = lineIndex[id] || {};
    if (!S.voice || (meta.personal && S.name !== DEFAULT_NAME)) { await sleep(500); return false; }
    const url = await getBlob(id);
    if (my !== vtoken) return false;
    if (!url) { await sleep(500); return false; }
    return new Promise((res) => {
      let done = false;
      const fin = (v) => { if (done) return; done = true; voiceEl.onended = voiceEl.onerror = null; clearInterval(chk); if (my === vtoken) talk(false); res(v); };
      const chk = setInterval(() => { if (my !== vtoken) fin(false); }, 120);
      voiceEl.onended = () => fin(true); voiceEl.onerror = () => fin(false);
      voiceEl.src = url;
      const p = voiceEl.play();
      if (p && p.then) p.then(() => { if (my === vtoken) talk(true); }).catch(() => fin(false));
    });
  }

  /* ---------- visuals ---------- */
  function ballOld(cx, cy) {
    return '<g><ellipse cx="' + cx + '" cy="' + (cy + 22) + '" rx="22" ry="5" fill="rgba(0,0,0,.15)"/><circle cx="' + cx + '" cy="' + cy + '" r="22" fill="url(#bg1)" stroke="#c0392b" stroke-width="3"/>'
      + '<path d="M' + (cx - 21) + ' ' + (cy - 3) + ' Q' + cx + ' ' + (cy + 9) + ' ' + (cx + 21) + ' ' + (cy - 3) + '" fill="none" stroke="#fff" stroke-width="4" opacity=".85"/>'
      + '<ellipse cx="' + (cx - 8) + '" cy="' + (cy - 10) + '" rx="6" ry="4" fill="#fff" opacity=".6" transform="rotate(-30 ' + (cx - 8) + ' ' + (cy - 10) + ')"/></g>';
  }
  function ball(cx, cy) { return '<ellipse cx="' + cx + '" cy="' + (cy + 22) + '" rx="22" ry="5" fill="rgba(0,0,0,.15)"/><image href="img/e/1f426.svg" x="' + (cx - 26) + '" y="' + (cy - 26) + '" width="52" height="52"/>'; }
  function box(x) {
    return '<g transform="translate(' + x + ',0)"><rect x="60" y="80" width="80" height="60" rx="5" fill="#e3a557" stroke="#a9722d" stroke-width="3"/>'
      + '<rect x="90" y="80" width="20" height="60" fill="#f2c27f" opacity=".7"/><rect x="56" y="74" width="88" height="12" rx="5" fill="#cf8f3d" stroke="#a9722d" stroke-width="3"/></g>';
  }
  function boxIn() {
    return '<g><path d="M62 82 L66 68 L134 68 L138 82 Z" fill="#8a5a20"/><rect x="60" y="80" width="0" height="0"/></g>' + ball(100, 70)
      + '<rect x="60" y="82" width="80" height="58" rx="5" fill="#e3a557" stroke="#a9722d" stroke-width="3"/><rect x="90" y="82" width="20" height="58" fill="#f2c27f" opacity=".7"/>'
      + '<path d="M56 82 L60 66" stroke="#a9722d" stroke-width="6" stroke-linecap="round"/><path d="M144 82 L140 66" stroke="#a9722d" stroke-width="6" stroke-linecap="round"/><rect x="56" y="78" width="88" height="8" rx="4" fill="#cf8f3d" stroke="#a9722d" stroke-width="3"/>';
  }
  function table(x) {
    return '<g transform="translate(' + x + ',0)"><rect x="34" y="52" width="10" height="88" rx="3" fill="#b9742c"/><rect x="156" y="52" width="10" height="88" rx="3" fill="#b9742c"/>'
      + '<rect x="26" y="38" width="148" height="18" rx="8" fill="#e08e3c" stroke="#a9611c" stroke-width="3"/></g>';
  }
  function scene(o, p) {
    let b = '';
    if (o === 'box') {
      if (p === 'in') b = boxIn();
      else if (p === 'on') b = box(0) + ball(100, 58);
      else if (p === 'next') b = box(-34) + ball(160, 118);
    } else {
      if (p === 'under') b = table(0) + ball(100, 118);
      else if (p === 'on') b = table(0) + ball(100, 16);
      else if (p === 'next') b = table(-34) + ball(168, 118);
    }
    return '<svg viewBox="0 -8 200 172" role="img"><defs><radialGradient id="bg1" cx=".35" cy=".3"><stop offset="0" stop-color="#ff8a80"/><stop offset="1" stop-color="#e53935"/></radialGradient></defs>'
      + '<rect x="0" y="140" width="200" height="30" fill="#7bdc6a"/><rect x="0" y="140" width="200" height="6" fill="#5ccb5a"/>' + b + '</svg>';
  }
  function kickSvg() {
    return '<svg viewBox="0 0 200 170" role="img"><rect x="0" y="146" width="200" height="30" fill="#7bdc6a"/><rect x="0" y="146" width="200" height="6" fill="#5ccb5a"/>'
      + '<ellipse cx="98" cy="148" rx="34" ry="5" fill="rgba(0,0,0,.12)"/>'
      + '<line x1="86" y1="70" x2="64" y2="90" stroke="#f5c49b" stroke-width="9" stroke-linecap="round"/>'
      + '<line x1="94" y1="114" x2="92" y2="142" stroke="#f5c49b" stroke-width="11" stroke-linecap="round"/><ellipse cx="97" cy="145" rx="12" ry="6" fill="#fff" stroke="#2b3a67" stroke-width="3"/>'
      + '<line x1="106" y1="114" x2="136" y2="128" stroke="#f5c49b" stroke-width="11" stroke-linecap="round"/><ellipse cx="142" cy="131" rx="12" ry="6" transform="rotate(25 142 131)" fill="#fff" stroke="#2b3a67" stroke-width="3"/>'
      + '<path d="M86 100 L112 100 L114 118 L84 118 Z" fill="#2f5fd0"/><path d="M84 62 L112 62 L110 102 L88 102 Z" fill="#ff8a3d"/>'
      + '<line x1="110" y1="68" x2="132" y2="62" stroke="#f5c49b" stroke-width="9" stroke-linecap="round"/>'
      + '<circle cx="98" cy="44" r="16" fill="#f5c49b"/><path d="M82 42 Q84 26 99 27 Q114 27 114 42 Q106 34 98 35 Q88 35 82 42Z" fill="#3a2a1a"/>'
      + '<circle cx="105" cy="45" r="2.4" fill="#2b2b2b"/><path d="M99 52 Q105 57 110 51" stroke="#c0504d" stroke-width="2.5" fill="none" stroke-linecap="round"/>'
      + '<path d="M150 118 Q160 92 176 86" stroke="#b9dff3" stroke-width="3" stroke-dasharray="4 6" fill="none" stroke-linecap="round"/>'
      + '<g transform="translate(172,78)"><circle r="15" fill="#fff" stroke="#2b3a67" stroke-width="3"/><path d="M0 -6 L6 -2 L4 5 L-4 5 L-6 -2 Z" fill="#2b3a67"/><path d="M0 -6 L0 -15 M6 -2 L14 -5 M4 5 L9 12 M-4 5 L-9 12 M-6 -2 L-14 -5" stroke="#2b3a67" stroke-width="2.5"/></g>'
      + '<path d="M146 98 L138 94 M148 106 L138 106" stroke="#f0b400" stroke-width="3" stroke-linecap="round"/></svg>';
  }
  function vis(v, cls) {
    cls = cls || '';
    if (v.k === 'emoji') return '<div class="vis emoji ' + cls + '"><span>' + v.e + '</span>' + (v.cross ? '<div class="x">✕</div>' : '') + (v.cap ? '<div class="capchip">' + esc(v.cap) + '</div>' : '') + '</div>';
    if (v.k === 'grp') { const n = v.n, g = n <= 2 ? 2 : n <= 4 ? 4 : n <= 6 ? 6 : 10; return '<div class="vis grp g' + g + ' ' + cls + '"><div class="gw">' + Array.from({ length: n }, (_, i) => '<span style="animation-delay:' + i * 0.12 + 's">' + (Array.isArray(v.e) ? v.e[i % v.e.length] : v.e) + '</span>').join('') + '</div>' + (v.cap ? '<div class="capchip">' + esc(v.cap) + '</div>' : '') + '</div>'; }
    if (v.k === 'dist') return '<div class="vis dist ' + (v.far ? 'far' : 'near') + (v.n > 1 ? ' multi' : '') + ' ' + cls + '"><span class="kid">' + (v.kid || '🧒') + '</span><span class="obj">' + (v.n > 1 ? Array.from({ length: v.n }, () => '<i>' + v.e + '</i>').join('') : '<i>' + v.e + '</i>') + '</span><div class="ground"></div>' + (v.cap ? '<div class="capchip">' + esc(v.cap) + '</div>' : '') + '</div>';
    if (v.k === 'sh') return '<div class="vis sfx ' + v.cls + ' ' + cls + '"><img src="img/blue_stand.png" alt=""></div>';
    if (v.k === 'kick') return '<div class="vis ' + cls + '">' + kickSvg() + (v.cap ? '<div class="capchip">' + esc(v.cap) + '</div>' : '') + '</div>';
    if (v.k === 'scene') return '<div class="vis ' + cls + '">' + scene(v.o, v.p) + '</div>';
    return '<div class="vis text ' + cls + '"><span>' + esc(v.t) + '</span></div>';
  }
  const shalabi = (extra) => '<div class="sh tk ' + (extra || '') + '"><img class="s" src="img/blue_stand.png" alt=""><img class="c" src="img/blue_cheer.png" alt=""></div>';
  const buddy = () => '<div class="buddy"><img class="s" src="img/green_stand.png" alt=""><img class="c" src="img/green_cheer.png" alt=""></div>';
  const starRow = (n) => '<div class="st">' + [0, 1, 2].map((i) => '<i class="' + (i < n ? 'on' : '') + '">⭐</i>').join('') + '</div>';

  /* ---------- fx ---------- */
  const cv = document.getElementById('fx'), cx = cv.getContext('2d');
  let parts = [], raf = 0;
  function sizeCv() { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; }
  addEventListener('resize', sizeCv); sizeCv();
  function burst(x, y, n, big) {
    const cols = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#c77dff', '#ff9f1c'];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, sp = (big ? 6 : 4) + Math.random() * (big ? 12 : 7);
      parts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - (big ? 7 : 4), g: 0.3, r: 4 + Math.random() * 6, c: rand(cols), rot: Math.random() * 6, vr: (Math.random() - .5) * .4, life: 90 + Math.random() * 50, sq: Math.random() > .5 });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function rain() { for (let i = 0; i < 70; i++) { setTimeout(() => burst(Math.random() * innerWidth, -10, 1, false), i * 25); } }
  function tick() {
    cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0); cx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter((p) => p.life > 0 && p.y < innerHeight + 30);
    parts.forEach((p) => { p.x += p.vx; p.y += p.vy; p.vy += p.g; p.vx *= 0.99; p.rot += p.vr; p.life--; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = p.c; cx.globalAlpha = Math.min(1, p.life / 30); if (p.sq) cx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); else { cx.beginPath(); cx.arc(0, 0, p.r / 1.5, 0, 7); cx.fill(); } cx.restore(); });
    raf = parts.length ? requestAnimationFrame(tick) : 0; if (!raf) cx.clearRect(0, 0, innerWidth, innerHeight);
  }
  function toast(t) { const e = $('#toast'); e.textContent = t; emojify(e); e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 2200); }
  const EMRE = /(?:\p{Extended_Pictographic}\uFE0F?)/gu;
  function emojify(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), list = [];
    while (w.nextNode()) if (/\p{Extended_Pictographic}/u.test(w.currentNode.nodeValue)) list.push(w.currentNode);
    list.forEach((n) => {
      const f = document.createDocumentFragment();
      const SEQ = /(\p{Extended_Pictographic}\uFE0F?(?:\u200d\p{Extended_Pictographic}\uFE0F?)*)/u;
      n.nodeValue.split(SEQ).forEach((part) => {
        if (/^\p{Extended_Pictographic}/u.test(part)) { const cp = Array.from(part).map((c) => c.codePointAt(0).toString(16)).filter((x) => x !== 'fe0f').join('-'); const im = document.createElement('img'); im.className = 'em'; im.alt = part; im.src = 'img/e/' + cp + '.svg'; im.draggable = false; f.appendChild(im); }
        else if (part) f.appendChild(document.createTextNode(part));
      });
      n.parentNode.replaceChild(f, n);
    });
  }
  function setScreen(html, cls) { app.innerHTML = '<div class="screen ' + (cls || '') + '">' + html + '</div>'; emojify(app); }

  /* ---------- HOME ---------- */
  let greeted = false;
  function home() {
    stopVoice();
    const cards = LESSONS.map((L, i) => '<button class="card' + (starsOf(L.id) ? '' : (i === firstOpen() ? ' new' : '')) + '" data-l="' + L.id + '" style="background:linear-gradient(160deg,' + L.color[0] + ',' + L.color[1] + ');animation-delay:' + (i * 70) + 'ms">'
      + '<div class="ic">' + L.icon + '</div><div class="t">' + esc(L.title) + '</div><div class="a">' + esc(L.ar) + '</div><div class="bk">' + esc(L.book) + '</div>' + starRow(starsOf(L.id)) + '</button>').join('');
    const soon = D.SOON.map((L, i) => '<button class="card locked sm" data-soon="1" style="animation-delay:' + (300 + i * 40) + 'ms"><span class="lk">🔒</span><div class="ic">' + L.icon + '</div><div class="t">' + esc(L.title) + '</div><div class="a">' + esc(L.ar) + '</div><div class="bk">' + esc(L.book) + '</div></button>').join('');
    setScreen('<div class="top"><div class="pill">⭐ ' + totalStars() + '</div><div class="brand">Mr English</div><button class="rbtn" id="gear" aria-label="settings">⚙️</button></div>'
      + '<div class="body"><div class="hero"><div class="bubble"><div>Hi ' + esc(S.name) + '! Let\'s learn English!</div><div class="ar">يلا نتعلم إنجليزي يا ' + esc(S.name === DEFAULT_NAME ? 'مالك' : S.name) + '!</div></div>' + shalabi('big') + buddy() + '</div>'
      + '<div><div class="sec">📚 Lessons</div><div class="grid">' + cards + '</div><div class="sec">🔜 Coming soon</div><div class="grid">' + soon + '</div></div></div>', 'home');
    $('.hero .sh').onclick = () => { unlock(); SFX.pop(); jump($('.hero .sh')); (async () => { await sayPool('hello'); if (!mikeHello && !mikeBusy && S.name === DEFAULT_NAME && S.voice) { const id = await pick('mike_hello'); if (id && await getBlob(id)) { mikeHello = true; mikeBusy = true; lastMike = sayN; try { await mikeSay(id); } finally { mikeBusy = false; } } } })(); };
    app.querySelectorAll('.card[data-l]').forEach((b) => (b.onclick = () => { unlock(); SFX.tap(); startLesson(b.dataset.l); }));
    app.querySelectorAll('.card[data-soon]').forEach((b) => (b.onclick = () => { unlock(); SFX.wrong(); b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 500); b.style.opacity = ''; toast('🔒 Coming soon / قريب'); sayPool('locked'); }));
    let hold; const g = $('#gear');
    const open = () => { SFX.pop(); settings(); };
    g.onpointerdown = () => { hold = setTimeout(open, 900); }; g.onpointerup = g.onpointerleave = () => clearTimeout(hold);
    g.onclick = () => toast('Hold ⚙️ for parents / اضغط مطولاً');
    prefetch(POOLS.hello.concat(POOLS.locked, ['mike_hello', 'mike_hello_luka']));
    if (!greeted) { greeted = true; /* browsers need a tap first; greeting plays after first interaction */ }
  }
  function firstOpen() { for (let i = 0; i < LESSONS.length; i++) if (!starsOf(LESSONS[i].id)) return i; return -1; }
  function jump(el) { el.classList.remove('jump'); void el.offsetWidth; el.classList.add('jump'); setTimeout(() => el.classList.remove('jump'), 800); }

  /* ---------- LESSON ---------- */
  let cur = null;
  function startLesson(id, step) {
    const L = LESSONS.find((l) => l.id === id);
    cur = { L, i: step || 0 };
    const ids = []; L.steps.forEach((s) => ids.push(s.id)); L.quiz.forEach((q) => ids.push(q.id, q.id + '_right', q.id + '_fix'));
    ['qintro', 'turn', 'cheer', 'streak', 'wrong1', 'wrong2', 'wrong3', 'hint', 'start_' + id, 'fun_' + id, 'done1', 'done2', 'done3'].forEach((p) => ids.push(...(POOLS[p] || [])));
    prefetch(ids);
    stepView(true);
  }
  function bar(n, i) { let h = '<div class="bar">'; for (let k = 0; k < n; k++) h += '<i class="' + (k < i ? 'on' : k === i ? 'cur' : '') + '"></i>'; return h + '</div>'; }
  let stepRun = 0;
  async function stepView(first) {
    const { L, i } = cur, s = L.steps[i], run = ++stepRun;
    stopVoice();
    const vc = s.vis.k === 'text' ? 'vcard wide' : 'vcard';
    setScreen('<div class="top"><button class="rbtn" id="x" aria-label="close">✕</button>' + bar(L.steps.length, i) + '<div class="pill">' + L.icon + '</div></div>'
      + '<div class="stage"><div class="' + vc + '">' + vis(s.vis) + '</div><div class="word">' + esc(s.en) + '</div></div>'
      + '<div class="foot">' + shalabi() + '<div class="bubble"><div class="ar">' + esc(s.ar) + '</div></div><div class="ctl"><button class="rbtn" id="rp" aria-label="replay">🔊</button><div class="navrow"><button class="go back" id="bk" aria-label="back">➜</button><button class="go" id="nx" aria-label="next">➜</button></div></div></div>', 'lesson');
    $('#x').onclick = () => { SFX.tap(); home(); };
    $('#nx').onclick = () => { unlock(); SFX.next(); next(); };
    $('#rp').onclick = () => { unlock(); SFX.pop(); play(); };
    $('#bk').onclick = () => { unlock(); SFX.tap(); stopVoice(); stepRun++; if (cur.i > 0) { cur.i--; stepView(); } else home(); };
    if (s.vowels) $('.vis.text span').innerHTML = ['a', 'e', 'i', 'o', 'u'].map((c, k) => '<em style="font-style:normal;color:' + ['#ff6b6b', '#ffa726', '#42a5f5', '#66bb6a', '#ab47bc'][k] + ';-webkit-text-fill-color:currentcolor;animation:pop .4s ' + k * 0.15 + 's both;display:inline-block;margin:0 .12em">' + c + '</em>').join('');
    async function play() {
      const r2 = ++stepRun;
      if (cur.i === 0 && !cur.introDone) { cur.introDone = true; await sayPool('start_' + L.id); if (r2 !== stepRun) return; }
      const ok = await say(s.id);
      if (r2 !== stepRun) return;
      if (s.say_it) {
        const f = $('.foot'); const b = document.createElement('div'); b.className = 'say'; b.innerHTML = '<span class="mic">🎤</span> Your turn!'; emojify(b); f.appendChild(b);
        await sayPool('turn'); if (r2 !== stepRun) return; await sleep(ok ? 2200 : 1500); if (r2 !== stepRun) return; b.remove();
      }
      const n = $('#nx'); if (n) n.classList.add('ready');
    }
    SFX.whoosh();
    if (first) await sleep(250);
    if (run === stepRun) play();
  }
  function next() {
    stopVoice(); stepRun++;
    if (cur.i + 1 < cur.L.steps.length) { cur.i++; stepView(); } else quizStart();
  }

  /* ---------- QUIZ ---------- */
  let Q = null;
  function quizStart() { Q = { L: cur.L, i: 0, mistakes: 0, streak: 0 }; quizView(true); }
  async function quizView(intro) {
    const q = Q.L.quiz[Q.i]; Q.tries = 0; Q.locked = false; const run = ++stepRun;
    stopVoice();
    const isPic = q.type === 'pic', n = q.opts.length;
    const opts = q.opts.map((o, k) => isPic
      ? '<button class="opt pic" data-k="' + k + '" style="animation-delay:' + k * 90 + 'ms">' + vis(o, 'mini') + '</button>'
      : '<button class="opt word c' + (k % 4) + '" data-k="' + k + '" style="animation-delay:' + k * 90 + 'ms">' + esc(o) + '</button>').join('');
    const pr = esc(q.prompt).replace(/\s{2}(.+?)\s{2}/, ' <b>$1</b> ').replace(/\s\s+/g, ' ');
    setScreen('<div class="top"><button class="rbtn" id="x" aria-label="close">✕</button>' + bar(Q.L.quiz.length, Q.i) + '<div class="pill">' + Q.L.icon + '</div></div>'
      + '<div class="stage"><div class="q"><div class="qprompt">' + pr + '</div><div class="vcard ' + (q.vis.k === 'text' ? 'wide' : '') + '">' + vis(q.vis) + '</div>'
      + '<div class="opts ' + (isPic ? 'p' : 'w') + n + '">' + opts + '</div></div></div>'
      + '<div class="foot">' + shalabi() + '<div class="bubble"><div class="ar" id="qb">' + (intro ? 'وقت الأسئلة! 🎯' : 'اختار الإجابة الصح') + '</div></div><div class="ctl"><button class="rbtn" id="rp" aria-label="replay">🔊</button><div class="navrow"><button class="go back" id="bk" aria-label="back">➜</button></div></div></div>', 'lesson quiz');
    $('#x').onclick = () => { SFX.tap(); home(); };
    $('#rp').onclick = () => { unlock(); SFX.pop(); say(q.id); };
    $('#bk').onclick = () => { unlock(); SFX.tap(); stopVoice(); stepRun++; if (Q.i > 0) { Q.i--; quizView(); } else { cur = { L: Q.L, i: Q.L.steps.length - 1 }; stepView(); } };
    app.querySelectorAll('.opt').forEach((b) => (b.onclick = () => { unlock(); answer(b, q); }));
    SFX.whoosh();
    if (intro) { await sleep(250); if (run !== stepRun) return; await sayPool('qintro'); if (run !== stepRun) return; }
    await say(q.id);
  }
  async function answer(btn, q) {
    if (Q.locked) return;
    const k = +btn.dataset.k, sh = $('.foot .sh'); const aIdx = q.type === 'pic' ? q.ans : q.opts.indexOf(q.ans);
    SFX.tap();
    if (k === aIdx) {
      Q.locked = true; const run = ++stepRun;
      btn.classList.add('ok'); SFX.correct(); stopVoice();
      const r = btn.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, 36, false);
      sh.classList.add('cheer'); jump(sh); $('#qb').textContent = '🎉 صح!'; emojify($('#qb'));
      app.querySelectorAll('.opt').forEach((o) => { if (o !== btn) o.classList.add('dim'); });
      await sleep(350); if (run !== stepRun) return;
      Q.streak = (Q.streak || 0) + 1;
      const cp = (Q.streak >= 3 && Q.streak % 3 === 0) ? 'streak' : (Math.random() < .33 && Q.tries === 0 ? 'fun_' + Q.L.id : 'cheer');
      await sayPool(cp); if (run !== stepRun) return;
      await say(q.id + '_right'); if (run !== stepRun) return;
      await sleep(450); if (run !== stepRun) return;
      if (Q.i + 1 < Q.L.quiz.length) { Q.i++; quizView(); } else result();
    } else {
      Q.mistakes++; Q.tries++; Q.streak = 0;
      btn.classList.add('no'); SFX.wrong(); sh.classList.remove('oops'); void sh.offsetWidth; sh.classList.add('oops');
      $('#qb').textContent = 'جرب تاني 💪'; emojify($('#qb'));
      const run = ++stepRun; stopVoice();
      await sayPool(Q.tries >= 3 ? 'wrong3' : Q.tries === 2 ? 'wrong2' : 'wrong1'); if (run !== stepRun) return;
      if (Q.tries >= 2) {
        const right = app.querySelector('.opt[data-k="' + aIdx + '"]'); if (right) right.classList.add('hint');
        await sayPool('hint'); if (run !== stepRun) return;
        await say(q.id + '_fix');
      }
    }
  }

  /* ---------- RESULT ---------- */
  async function result() {
    stopVoice(); const run = ++stepRun;
    const m = Q.mistakes, stars = m === 0 ? 3 : m <= 2 ? 2 : 1, L = Q.L;
    const prev = S.lessons[L.id] || {}; S.lessons[L.id] = { stars: Math.max(prev.stars || 0, stars), plays: (prev.plays || 0) + 1 }; save();
    const idx = LESSONS.indexOf(L), nx = LESSONS[idx + 1];
    setScreen('<div class="top"><div></div><div class="brand">' + (stars === 3 ? 'Perfect!' : stars === 2 ? 'Great job!' : 'Good try!') + '</div><div class="pill">⭐ ' + totalStars() + '</div></div>'
      + '<div class="stage"><div class="rstars">' + [0, 1, 2].map(() => '<i>⭐</i>').join('') + '</div>' + shalabi('rsh cheer') + '<div class="word">' + esc(L.title) + '</div></div>'
      + '<div class="btns"><button class="btn b" id="hm">🏠 Home</button><button class="btn o" id="rp">↻ Again</button>' + (nx ? '<button class="btn g" id="nl">Next ➜</button>' : '') + '</div>', 'result');
    $('#hm').onclick = () => { SFX.tap(); home(); }; $('#rp').onclick = () => { SFX.tap(); startLesson(L.id); };
    if (nx) $('#nl').onclick = () => { SFX.tap(); startLesson(nx.id); };
    SFX.fanfare(); rain(); burst(innerWidth / 2, innerHeight * .4, 80, true);
    const st = app.querySelectorAll('.rstars i');
    for (let i = 0; i < stars; i++) { await sleep(500); if (run !== stepRun) return; st[i].classList.add('on'); SFX.star(i); burst(st[i].getBoundingClientRect().left + 40, st[i].getBoundingClientRect().top + 40, 24, false); }
    await sleep(500); if (run !== stepRun) return;
    await sayPool('done' + stars);
  }

  /* ---------- SETTINGS ---------- */
  function settings() {
    const m = document.createElement('div'); m.className = 'modal';
    m.innerHTML = '<div class="panel"><h2>⚙️ Parents</h2><label>Child name<input type="text" id="nm" maxlength="14" value="' + esc(S.name) + '"></label>'
      + '<small>Voice lines that say the name are recorded for "' + DEFAULT_NAME + '". For another name the app uses the other lines and shows the name on screen.</small>'
      + '<label>Teacher voice<input type="checkbox" id="vo" ' + (S.voice ? 'checked' : '') + '></label><label>Sound effects<input type="checkbox" id="sf" ' + (S.sfx ? 'checked' : '') + '></label>'
      + '<label>Stars collected<b>⭐ ' + totalStars() + '</b></label><div class="btns" style="padding:8px 0 0"><button class="btn o" id="rs">Reset progress</button><button class="btn g" id="ok">Done</button></div><small style="margin-top:12px;text-align:center">Mr English · built by Hazem Saleh</small></div>';
    document.body.appendChild(m); emojify(m);
    $('#ok', m).onclick = () => { S.name = ($('#nm', m).value.trim() || DEFAULT_NAME); S.voice = $('#vo', m).checked; S.sfx = $('#sf', m).checked; SFX.set(S.sfx); save(); m.remove(); home(); };
    $('#rs', m).onclick = () => { if (confirm('Reset all stars?')) { S.lessons = {}; save(); m.remove(); home(); } };
  }

  /* ---------- boot ---------- */
  document.addEventListener('touchstart', unlock, { once: true, passive: true }); document.addEventListener('mousedown', unlock, { once: true });
  const h = location.hash.match(/^#\/(lesson|quiz|result)\/(\w+)(?:\/(\d+))?/);
  if (h && h[1] === 'lesson') startLesson(h[2], +(h[3] || 0));
  else if (h && h[1] === 'quiz') { startLesson(h[2]); cur.i = 0; Q = { L: cur.L, i: +(h[3] || 0), mistakes: 0 }; quizView(+(h[3] || 0) === 0); }
  else if (h && h[1] === 'result') { cur = { L: LESSONS.find((l) => l.id === h[2]) }; Q = { L: cur.L, i: 0, mistakes: +(h[3] || 0) }; result(); }
  else home();
  window.MRE = { home, startLesson, S };
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
