// node build_manifest.js  -> audio/manifest.json + audio/manifest.tsv
const D = require('./js/data.js'); const fs = require('fs');
const lines = [];
const add = (o) => lines.push(o);
D.UI.forEach((u) => add({ id: u.id, group: 'ui', text: u.say, personal: !!u.personal, note: u.note || u.kind || '' }));
D.LESSONS.forEach((L) => {
  L.steps.forEach((s, i) => add({ id: s.id, group: L.id + ':lesson', text: s.say, personal: !!s.personal, note: (s.say_it ? 'repeat-after-me line, English words slow and clear' : 'lesson step ' + (i + 1)) + ' | on screen: ' + s.en }));
  L.quiz.forEach((q, i) => {
    add({ id: q.id, group: L.id + ':quiz', text: q.say, personal: false, note: 'quiz question ' + (i + 1) });
    add({ id: q.id + '_right', group: L.id + ':quiz', text: q.right, personal: false, note: 'after correct answer (plays after a cheer line)' });
    add({ id: q.id + '_fix', group: L.id + ':quiz', text: q.fix, personal: false, note: 'hint after 2 wrong taps, gentle' });
  });
});
const out = { app: 'Mr English', voice: 'Shalabi: Orus, deep warm giant monster, Egyptian Arabic, playful, slow clear English words', format: 'audio/<id>.mp3 (ogg/m4a also accepted)', count: lines.length, lines };
fs.mkdirSync('audio', { recursive: true });
fs.writeFileSync('audio/manifest.json', JSON.stringify(out, null, 1));
fs.writeFileSync('audio/manifest.tsv', 'id\tgroup\tpersonal\ttext\tnote\n' + lines.map((l) => [l.id, l.group, l.personal ? 'Y' : '', l.text, l.note].join('\t')).join('\n') + '\n');
console.log(lines.length + ' lines');

fs.writeFileSync('img/e/list.json', JSON.stringify(fs.readdirSync('img/e').filter((f) => f.endsWith('.svg')).sort()));
