const V = 'mre-v14';
const CORE = ['./', 'index.html', 'css/app.css', 'js/app.js', 'js/data.js', 'js/lessons2.js', 'js/sfx.js', 'manifest.webmanifest', 'fonts/fonts.css', 'icon-192.png', 'icon-180.png',
  'img/blue_stand.png', 'img/blue_cheer.png', 'img/green_stand.png', 'img/green_cheer.png'];
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await c.addAll(CORE);
    try { const f = await (await fetch('fonts/fonts.css')).text(); const u = [...f.matchAll(/url\(([^)]+)\)/g)].map((m) => 'fonts/' + m[1]); await Promise.all(u.map((x) => c.add(x).catch(() => {}))); } catch (e) {}
    try { const m = await (await fetch('audio/manifest.json')).json(); await Promise.all(m.lines.map((l) => c.add('audio/' + l.id + '.m4a').catch(() => c.add('audio/' + l.id + '.mp3').catch(() => {})))); } catch (e) {}
  })());
  self.skipWaiting();
});
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const c = await caches.open(V);
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then((r) => { if (r && r.ok && r.status === 200) c.put(e.request, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || new Response('', { status: 504 });
  })());
});
