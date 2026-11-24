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
  function vis(v, cls) {
    cls = cls || '';
    if (v.k === 'emoji') return '<div class="vis emoji ' + cls + '"><span>' + v.e + '</span>' + (v.cross ? '<div class="x">✕</div>' : '') + (v.cap ? '<div class="capchip">' + esc(v.cap) + '</div>' : '') + '</div>';
    if (v.k === 'sh') return '<div class="vis sfx ' + v.cls + ' ' + cls + '"><img src="img/blue_stand.png" alt=""></div>';
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
      n.nodeValue.split(/(\p{Extended_Pictographic}\uFE0F?)/u).forEach((part) => {
        if (/^\p{Extended_Pictographic}/u.test(part)) { const cp = part.codePointAt(0).toString(16); const im = document.createElement('img'); im.className = 'em'; im.alt = part; im.src = 'img/e/' + cp + '.svg'; im.draggable = false; f.appendChild(im); }
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
    $('.hero .sh').onclick = () => { unlock(); SFX.pop(); jump($('.hero .sh')); say('ui_hello'); };
    app.querySelectorAll('.card[data-l]').forEach((b) => (b.onclick = () => { unlock(); SFX.tap(); startLesson(b.dataset.l); }));
    app.querySelectorAll('.card[data-soon]').forEach((b) => (b.onclick = () => { unlock(); SFX.wrong(); b.classList.add('no'); setTimeout(() => b.classList.remove('no'), 500); b.style.opacity = ''; toast('🔒 Coming soon / قريب'); say('ui_locked'); }));
    let hold; const g = $('#gear');
    const open = () => { SFX.pop(); settings(); };
    g.onpointerdown = () => { hold = setTimeout(open, 900); }; g.onpointerup = g.onpointerleave = () => clearTimeout(hold);
    g.onclick = () => toast('Hold ⚙️ for parents / اضغط مطولاً');
    prefetch(['ui_hello', 'ui_locked']);
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
    ids.push('ui_quiz_intro', 'ui_your_turn', 'ui_cheer_1', 'ui_cheer_2', 'ui_cheer_3', 'ui_try_1', 'ui_try_2');
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
      + '<div class="foot">' + shalabi() + '<div class="bubble"><div class="ar">' + esc(s.ar) + '</div></div><div class="ctl"><button class="rbtn" id="rp" aria-label="replay">🔊</button><button class="go" id="nx" aria-label="next">➜</button></div></div>', 'lesson');
    $('#x').onclick = () => { SFX.tap(); home(); };
    $('#nx').onclick = () => { unlock(); SFX.next(); next(); };
    $('#rp').onclick = () => { unlock(); SFX.pop(); play(); };
    if (s.vowels) $('.vis.text span').innerHTML = ['a', 'e', 'i', 'o', 'u'].map((c, k) => '<em style="font-style:normal;color:' + ['#ff6b6b', '#ffa726', '#42a5f5', '#66bb6a', '#ab47bc'][k] + ';-webkit-text-fill-color:currentcolor;animation:pop .4s ' + k * 0.15 + 's both;display:inline-block;margin:0 .12em">' + c + '</em>').join('');
    async function play() {
      const r2 = ++stepRun;
      const ok = await say(s.id);
      if (r2 !== stepRun) return;
      if (s.say_it) {
        const f = $('.foot'); const b = document.createElement('div'); b.className = 'say'; b.innerHTML = '<span class="mic">🎤</span> Your turn!'; emojify(b); f.appendChild(b);
        await say('ui_your_turn'); if (r2 !== stepRun) return; await sleep(ok ? 2200 : 1500); if (r2 !== stepRun) return; b.remove();
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
  function quizStart() { Q = { L: cur.L, i: 0, mistakes: 0 }; quizView(true); }
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
      + '<div class="foot">' + shalabi() + '<div class="bubble"><div class="ar" id="qb">' + (intro ? 'وقت الأسئلة! 🎯' : 'اختار الإجابة الصح') + '</div></div><div class="ctl"><button class="rbtn" id="rp" aria-label="replay">🔊</button></div></div>', 'lesson quiz');
    $('#x').onclick = () => { SFX.tap(); home(); };
    $('#rp').onclick = () => { unlock(); SFX.pop(); say(q.id); };
    app.querySelectorAll('.opt').forEach((b) => (b.onclick = () => { unlock(); answer(b, q); }));
    SFX.whoosh();
    if (intro) { await sleep(250); if (run !== stepRun) return; await say('ui_quiz_intro'); if (run !== stepRun) return; }
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
      await say(rand(['ui_cheer_1', 'ui_cheer_2', 'ui_cheer_3', 'ui_cheer_4', 'ui_cheer_5', 'ui_cheer_6'])); if (run !== stepRun) return;
      await say(q.id + '_right'); if (run !== stepRun) return;
      await sleep(450); if (run !== stepRun) return;
      if (Q.i + 1 < Q.L.quiz.length) { Q.i++; quizView(); } else result();
    } else {
      Q.mistakes++; Q.tries++;
      btn.classList.add('no'); SFX.wrong(); sh.classList.remove('oops'); void sh.offsetWidth; sh.classList.add('oops');
      $('#qb').textContent = 'جرب تاني 💪'; emojify($('#qb'));
      const run = ++stepRun; stopVoice();
      await say(rand(['ui_try_1', 'ui_try_2', 'ui_try_3', 'ui_try_4'])); if (run !== stepRun) return;
      if (Q.tries >= 2) {
        const right = app.querySelector('.opt[data-k="' + aIdx + '"]'); if (right) right.classList.add('hint');
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
    await say('ui_done_' + stars);
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
