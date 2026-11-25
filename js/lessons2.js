/* Mr English: Top Grammar KG units built from the book TOC (no page photos yet). Aligned word-for-word later when pages arrive. */
(function (root) {
  const make = (h) => {
    const { E, TX } = h;
    const G = (e, n, extra) => Object.assign({ k: 'grp', e, n }, extra || {});
    const D = (e, far, extra) => Object.assign({ k: 'dist', e, far: !!far }, extra || {});
    const S = (id, vis, en, ar, say, o) => Object.assign({ id, vis, en, ar, say }, o || {});
    const SI = (id, vis, en, ar, say) => S(id, vis, en, ar, say, { say_it: true });
    const Q = (id, vis, prompt, say, type, opts, ans, right, fix) => ({ id, vis, prompt, say, type, opts, ans, right, fix });
    const out = [];
    const add = (id, title, ar, icon, color, book, steps, quiz) => out.push({ id, title, ar, icon, color, book, steps, quiz });

    /* ---------------- Numbers (p6) ---------------- */
    const nums = [['one', 1, '🍎', 'تفاحة واحدة'], ['two', 2, '🐱', 'قطتين'], ['three', 3, '🎈', 'تلات بالونات'], ['four', 4, '⭐', 'أربع نجوم'], ['five', 5, '🍌', 'خمس موزات'], ['six', 6, '🐟', 'ست سمكات'], ['seven', 7, '🚗', 'سبع عربيات'], ['eight', 8, '🍓', 'تمن فراولات'], ['nine', 9, '🌸', 'تسع ورود'], ['ten', 10, '🍪', 'عشر بسكوتات']];
    add('num', 'Numbers', 'الأرقام', '🔢', ['#f6d365', '#fda085'], 'Page 6', [
      S('num_s01', TX('1  2  3'), 'one · two · three', 'النهارده هنعد من واحد لعشرة', 'أهلاً يا مالك! أنا شلبي! النهارده هنتعلم نعد بالإنجليزي، من واحد لحد عشرة. جاهز نعد معايا يا وحش؟', { personal: true }),
      ...nums.map((n, i) => SI('num_s' + String(i + 2).padStart(2, '0'), G(n[2], n[1]), n[0] + '  (' + n[1] + ')', n[3] + ' = ' + n[0], 'شوف! ' + n[3] + '. ' + n[0] + '. الرقم ' + n[1] + '. قول معايا: ' + n[0] + '!')),
      S('num_s12', TX('1 2 3 4 5 6 7 8 9 10'), 'one … ten', 'عدينا من واحد لعشرة', 'برافو عليك يا وحش! عديت من one لحد ten. يلا نلعب لعبة الأسئلة!')
    ], [
      Q('num_q1', G('🎈', 3), 'How many?', 'عد البالونات معايا. كام بالونة؟', 'word', ['two', 'three', 'four'], 'three', 'three! تلات بالونات. عديت صح!', 'عد واحدة واحدة: one، two، three. يبقى three.'),
      Q('num_q2', G('🐱', 2), 'How many?', 'كام قطة هنا؟', 'word', ['one', 'two', 'three'], 'two', 'two! قطتين. شاطر!', 'عد القطط: one، two. يبقى two.'),
      Q('num_q3', G('⭐', 5), 'How many?', 'عد النجوم. كام نجمة؟', 'word', ['four', 'five', 'six'], 'five', 'five! خمس نجوم. عظمة!', 'عد النجوم: one، two، three، four، five. يبقى five.'),
      Q('num_q4', G('🍪', 7), 'How many?', 'عد البسكوت. كام بسكوتة؟', 'word', ['six', 'seven', 'eight'], 'seven', 'seven! سبع بسكوتات. جامد!', 'عد واحدة واحدة لحد ما تخلص. هتلاقيها seven.'),
      Q('num_q5', G('🌸', 10), 'How many?', 'ورود كتير! عدها معايا. كام وردة؟', 'word', ['nine', 'ten'], 'ten', 'ten! عشر ورود. برافو!', 'عد الورود كلها: لحد ten.'),
      Q('num_q6', TX('four'), 'Which one is  four ?', 'دوس على الصورة اللي فيها four. أربعة!', 'pic', [G('🍎', 3), G('🍎', 4), G('🍎', 6)], 1, 'four! أربع تفاحات.', 'four يعني أربعة. عد التفاح: one، two، three، four.')
    ]);

    /* ---------------- Singular / plural (p8) ---------------- */
    add('plu', 'singular / plural', 'مفرد وجمع', '🍓', ['#84fab0', '#8fd3f4'], 'Page 8', [
      S('plu_s01', TX('one → many'), 'one  →  many', 'واحد ولا كتير؟', 'أهلاً يا مالك! النهارده هنعرف الفرق بين واحد، وكتير. لما يبقى واحد، نقول مفرد. ولما يبقى كتير، نقول جمع. يلا بينا!', { personal: true }),
      SI('plu_s02', G('🐱', 1), 'a cat', 'قطة واحدة = مفرد', 'شوف! قطة واحدة بس. a cat. ده مفرد. قول معايا: a cat!'),
      SI('plu_s03', G('🐱', 3), 'cats', 'قطط كتير = جمع، زودنا s', 'وهنا قطط كتير! cats. زودنا حرف s في الآخر، وبقت جمع. قول معايا: cats!'),
      SI('plu_s04', G('🐶', 1), 'a dog', 'كلب واحد', 'وده كلب واحد. a dog. قول معايا: a dog!'),
      SI('plu_s05', G('🐶', 4), 'dogs', 'كلاب كتير، زودنا s', 'وهنا كلاب كتير! dogs. زودنا s برضه. قول معايا: dogs!'),
      SI('plu_s06', G('📦', 1), 'a box', 'صندوق واحد', 'وده صندوق واحد. a box. قول معايا: a box!'),
      SI('plu_s07', G('📦', 3), 'boxes', 'الكلمة بتنتهي بـ x فنزود es', 'وهنا صناديق كتير! boxes. الكلمة دي بتنتهي بحرف x، فبنزود es مش s بس. قول معايا: boxes!'),
      S('plu_s08', TX('s   es'), 'cat → cats   box → boxes', 'أغلب الكلمات نزود s', 'برافو عليك يا بطل! عشان نعمل جمع، بنزود s في الآخر. ولو الكلمة بتنتهي بـ x، نزود es. يلا نلعب لعبة الأسئلة!')
    ], [
      Q('plu_q1', G('🐶', 3), 'one  or  many ?', 'كلاب كتير ولا كلب واحد؟ نقول dog ولا dogs؟', 'word', ['dog', 'dogs'], 'dogs', 'dogs! كلاب كتير، زودنا s.', 'في كلاب كتير، يبقى جمع. نزود s: dogs.'),
      Q('plu_q2', G('⚽', 1), 'one  or  many ?', 'كورة واحدة بس. نقول ball ولا balls؟', 'word', ['ball', 'balls'], 'ball', 'ball! كورة واحدة، مفرد.', 'كورة واحدة، يبقى مفرد بدون s: ball.'),
      Q('plu_q3', G('🍎', 5), 'one  or  many ?', 'تفاح كتير! نقول apple ولا apples؟', 'word', ['apple', 'apples'], 'apples', 'apples! تفاح كتير.', 'تفاح كتير يبقى جمع، نزود s: apples.'),
      Q('plu_q4', G('📦', 2), 'one  or  many ?', 'صندوقين! نقول boxs ولا boxes؟', 'word', ['boxs', 'boxes'], 'boxes', 'boxes! الكلمة بتنتهي بـ x، فنزود es.', 'box بتنتهي بحرف x، فنزود es مش s: boxes.'),
      Q('plu_q5', G('🚌', 1), 'one  or  many ?', 'أتوبيس واحد. نقول bus ولا buses؟', 'word', ['bus', 'buses'], 'bus', 'bus! أتوبيس واحد.', 'أتوبيس واحد، يبقى مفرد: bus.'),
      Q('plu_q6', TX('cats'), 'Which one is  cats ?', 'دوس على الصورة اللي هي cats. قطط كتير!', 'pic', [G('🐱', 1), G('🐱', 3)], 1, 'cats! قطط كتير.', 'cats يعني قطط كتير. اختار الصورة اللي فيها أكتر من قطة.')
    ]);

    /* ---------------- How many? (p12) ---------------- */
    add('many', 'How many?', 'كام؟', '🧮', ['#a1c4fd', '#c2e9fb'], 'Page 12', [
      S('many_s01', TX('How many?'), 'How many ... ?', 'كام؟ بنسأل بيها عن العدد', 'أهلاً يا مالك! لما نحب نسأل عن العدد، نقول: How many؟ يعني كام؟ وبعدها بنعد ونجاوب. يلا بينا!', { personal: true }),
      SI('many_s02', G('🍎', 2), 'How many apples? Two apples.', 'كام تفاحة؟ تفاحتين', 'شوف التفاح! How many apples؟ كام تفاحة؟ عد معايا: one، two. Two apples! قول معايا: two apples!'),
      SI('many_s03', G('🎈', 3), 'How many balloons? Three balloons.', 'كام بالونة؟ تلات بالونات', 'وهنا بالونات! How many balloons؟ one، two، three. Three balloons! قول معايا: three balloons!'),
      SI('many_s04', G('🚗', 4), 'How many cars? Four cars.', 'كام عربية؟ أربع عربيات', 'وهنا عربيات! How many cars؟ one، two، three، four. Four cars! قول معايا: four cars!'),
      SI('many_s05', G('⭐', 5), 'How many stars? Five stars.', 'كام نجمة؟ خمس نجوم', 'وهنا نجوم! How many stars؟ one، two، three، four، five. Five stars! قول معايا: five stars!'),
      SI('many_s06', G('🐶', 6), 'How many dogs? Six dogs.', 'كام كلب؟ ست كلاب', 'وهنا كلاب! How many dogs؟ عدهم معايا لحد six. Six dogs! قول معايا: six dogs!'),
      S('many_s07', TX('How many + s ?'), 'How many apples?', 'بعد how many بنقول الجمع', 'برافو عليك يا وحش! بعد How many بنقول الكلمة جمع، زي apples وcars وstars. وبعدين بنجاوب بالرقم. يلا نلعب لعبة الأسئلة!')
    ], [
      Q('many_q1', G('🍎', 3), 'How many apples?', 'How many apples؟ عد التفاح.', 'word', ['two', 'three', 'four'], 'three', 'Three apples! عظمة.', 'عد التفاح: one، two، three. يبقى three.'),
      Q('many_q2', G('🐱', 2), 'How many cats?', 'How many cats؟ كام قطة؟', 'word', ['one', 'two', 'three'], 'two', 'Two cats! شاطر.', 'عد القطط: one، two. يبقى two.'),
      Q('many_q3', G('⭐', 5), 'How many stars?', 'How many stars؟ عد النجوم.', 'word', ['four', 'five', 'six'], 'five', 'Five stars! جامد.', 'عد النجوم واحدة واحدة. هتلاقيها five.'),
      Q('many_q4', G('🚗', 4), 'How many cars?', 'How many cars؟ كام عربية؟', 'word', ['three', 'four', 'five'], 'four', 'Four cars! ممتاز.', 'عد العربيات: one، two، three، four. يبقى four.'),
      Q('many_q5', G('🎈', 1), 'How many balloons?', 'How many balloons؟ كام بالونة؟', 'word', ['one', 'two'], 'one', 'One balloon! بالونة واحدة.', 'في بالونة واحدة بس. يبقى one.'),
      Q('many_q6', TX('Four cars.'), 'Which one is  four cars ?', 'دوس على الصورة اللي فيها four cars. أربع عربيات!', 'pic', [G('🚗', 2), G('🚗', 4), G('🚗', 5)], 1, 'Four cars! أربع عربيات.', 'four يعني أربعة. اختار الصورة اللي فيها أربع عربيات.')
    ]);

    /* ---------------- Countable / uncountable (p15) ---------------- */
    add('cnt', 'countable / uncountable', 'بنعد ولا مش بنعد', '💧', ['#89f7fe', '#66a6ff'], 'Page 15', [
      S('cnt_s01', TX('count ✓  ✗'), 'Can we count it?', 'نقدر نعدها ولا لأ؟', 'أهلاً يا مالك! في حاجات نقدر نعدها، زي التفاح. وفي حاجات مش بنعدها، زي الميه. النهارده هنفرق بينهم!', { personal: true }),
      SI('cnt_s02', G('🍎', 3), 'three apples', 'نقدر نعدها: one، two، three', 'شوف التفاح! نقدر نعده: one، two، three. three apples. قول معايا: three apples!'),
      SI('cnt_s03', G('📚', 2), 'two books', 'الكتب نقدر نعدها', 'وكمان الكتب! نقدر نعدها: two books. قول معايا: two books!'),
      SI('cnt_s04', E('💧'), 'water', 'الميه مش بنعدها', 'لكن الميه! مش بنقول one water، two water. بنقول water بس. قول معايا: water!'),
      SI('cnt_s05', E('🥛'), 'milk', 'اللبن مش بنعده', 'واللبن برضه مش بنعده. بنقول milk. قول معايا: milk!'),
      SI('cnt_s06', E('🍚'), 'rice', 'الأرز مش بنعده', 'والأرز كمان مش بنعده. rice. قول معايا: rice!'),
      SI('cnt_s07', E('🥛', { cap: 'some milk' }), 'some milk', 'نقول some = شوية', 'لما نعوز نقول شوية من حاجة مش بنعدها، بنقول some. some milk. قول معايا: some milk!'),
      S('cnt_s08', TX('1 2 3  ✓     water ✗'), 'count ✓   no count ✗', 'اللي نعده ✓، واللي مش نعده ✗', 'برافو عليك يا بطل! التفاح والكتب نقدر نعدهم. والميه واللبن والأرز مش بنعدهم، بنقول some. يلا نلعب لعبة الأسئلة!')
    ], [
      Q('cnt_q1', E('🍎'), 'Can we count it?', 'التفاحة دي، apple. نقدر نعدها؟', 'word', ['yes', 'no'], 'yes', 'yes! نقدر نعدها: one apple، two apples.', 'التفاح بنعده: one، two، three. يبقى yes.'),
      Q('cnt_q2', E('💧'), 'Can we count it?', 'الميه دي، water. نقدر نعدها؟', 'word', ['yes', 'no'], 'no', 'no! الميه مش بنعدها.', 'الميه مش بنقول one water، two water. يبقى no.'),
      Q('cnt_q3', E('📚'), 'Can we count it?', 'الكتب دي، books. نقدر نعدها؟', 'word', ['yes', 'no'], 'yes', 'yes! الكتب بنعدها.', 'الكتب بنعدها: one book، two books. يبقى yes.'),
      Q('cnt_q4', E('🥛'), 'Can we count it?', 'اللبن ده، milk. نقدر نعده؟', 'word', ['yes', 'no'], 'no', 'no! اللبن مش بنعده.', 'اللبن مش بنعده. بنقول some milk. يبقى no.'),
      Q('cnt_q5', E('🍚'), 'Can we count it?', 'الأرز ده، rice. نقدر نعده؟', 'word', ['yes', 'no'], 'no', 'no! الأرز مش بنعده.', 'الأرز مش بنعده. بنقول some rice. يبقى no.'),
      Q('cnt_q6', TX('some milk'), 'Which one is  some milk ?', 'دوس على الصورة اللي هي some milk. شوية لبن!', 'pic', [E('🥛'), E('🍎'), E('⚽')], 0, 'some milk! شوية لبن.', 'milk يعني لبن. اختار صورة كوباية اللبن.')
    ]);

    /* ---------------- this / that (p20) ---------------- */
    add('this', 'this · that', 'ده · ده بعيد', '👉', ['#ffecd2', '#fcb69f'], 'Page 20', [
      S('this_s01', TX('this   that'), 'this   and   that', 'this للقريب، that للبعيد', 'أهلاً يا مالك! النهارده هنتعلم كلمتين: this وthat. this لما الحاجة قريبة منك، وthat لما تبقى بعيدة. يلا بينا!', { personal: true }),
      SI('this_s02', D('🍎', false), 'this apple', 'التفاحة قريبة منك', 'شوف الولد! التفاحة قريبة منه. نقول this. this apple. قول معايا: this apple!'),
      SI('this_s03', D('🍎', true), 'that apple', 'التفاحة بعيدة', 'وهنا التفاحة بعيدة عنه. نقول that. that apple. قول معايا: that apple!'),
      SI('this_s04', D('🐶', false), 'this dog', 'الكلب قريب', 'وده كلب قريب. this dog. قول معايا: this dog!'),
      SI('this_s05', D('🐶', true), 'that dog', 'الكلب بعيد', 'وده كلب بعيد. that dog. قول معايا: that dog!'),
      SI('this_s06', D('⚽', false), 'This is a ball.', 'دي كورة قريبة', 'شوف الكورة القريبة! This is a ball. يعني دي كورة. قول معايا: This is a ball!'),
      SI('this_s07', D('🚲', true), 'That is a bike.', 'دي عجلة بعيدة', 'وهنا عجلة بعيدة! That is a bike. يعني دي عجلة. قول معايا: That is a bike!'),
      S('this_s08', TX('this = near  |  that = far'), 'this = near   that = far', 'this قريب، that بعيد', 'برافو عليك يا وحش! this للحاجة القريبة، وthat للحاجة البعيدة. يلا نلعب لعبة الأسئلة!')
    ], [
      Q('this_q1', D('🎈', false), 'this  or  that ?', 'البالونة قريبة منه. نقول this ولا that؟', 'word', ['this', 'that'], 'this', 'this balloon! قريبة، يبقى this.', 'البالونة قريبة، يبقى this.'),
      Q('this_q2', D('🌳', true), 'this  or  that ?', 'الشجرة بعيدة. نقول this ولا that؟', 'word', ['this', 'that'], 'that', 'that tree! بعيدة، يبقى that.', 'الشجرة بعيدة، يبقى that.'),
      Q('this_q3', D('🐱', true), 'this  or  that ?', 'القطة بعيدة. نقول this ولا that؟', 'word', ['this', 'that'], 'that', 'that cat! بعيدة، يبقى that.', 'القطة بعيدة، يبقى that.'),
      Q('this_q4', D('🍌', false), 'this  or  that ?', 'الموزة قريبة. نقول this ولا that؟', 'word', ['this', 'that'], 'this', 'this banana! قريبة، يبقى this.', 'الموزة قريبة، يبقى this.'),
      Q('this_q5', D('🚗', true), 'this  or  that ?', 'العربية بعيدة. نقول this ولا that؟', 'word', ['this', 'that'], 'that', 'that car! بعيدة، يبقى that.', 'العربية بعيدة، يبقى that.'),
      Q('this_q6', TX('This is a ball.'), 'Which one is this ?', 'دوس على الصورة اللي هي This is a ball. الكورة القريبة!', 'pic', [D('⚽', false), D('⚽', true)], 0, 'This is a ball! الكورة القريبة.', 'this يعني قريب. اختار الصورة اللي الكورة فيها قريبة.')
    ]);
    return out;
  };
  root.MRE_MORE = make;
  if (typeof module !== 'undefined') module.exports = make;
})(typeof window !== 'undefined' ? window : globalThis);
