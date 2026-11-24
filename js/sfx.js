/* Synth sound effects (WebAudio), no files needed */
window.SFX = (function () {
  let ctx = null, on = true;
  function c() { if (!ctx) { const A = window.AudioContext || window.webkitAudioContext; if (A) ctx = new A(); } if (ctx && ctx.state === 'suspended') ctx.resume(); return ctx; }
  function tone(f, t0, d, type, vol, slideTo) {
    const x = c(); if (!x || !on) return;
    const o = x.createOscillator(), g = x.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, x.currentTime + t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, x.currentTime + t0 + d);
    g.gain.setValueAtTime(0.0001, x.currentTime + t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.2, x.currentTime + t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, x.currentTime + t0 + d);
    o.connect(g); g.connect(x.destination); o.start(x.currentTime + t0); o.stop(x.currentTime + t0 + d + 0.05);
  }
  return {
    unlock() { c(); },
    set(v) { on = v; },
    tap() { tone(520, 0, 0.09, 'triangle', 0.18, 760); },
    pop() { tone(300, 0, 0.12, 'sine', 0.22, 900); },
    next() { tone(440, 0, 0.08, 'triangle', 0.16); tone(660, 0.07, 0.12, 'triangle', 0.16); },
    correct() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.26, 'triangle', 0.2)); tone(1568, 0.36, 0.3, 'sine', 0.1); },
    wrong() { tone(330, 0, 0.18, 'sine', 0.2, 250); tone(250, 0.17, 0.25, 'sine', 0.2, 180); },
    star(i) { const b = [784, 988, 1175][i || 0]; tone(b, 0, 0.35, 'triangle', 0.22); tone(b * 2, 0.02, 0.3, 'sine', 0.1); },
    fanfare() { [523, 523, 523, 659, 784, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, i === 7 ? 0.7 : 0.2, 'square', 0.1)); },
    whoosh() { tone(200, 0, 0.25, 'sawtooth', 0.05, 900); }
  };
})();
