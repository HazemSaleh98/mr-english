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

    /* ---------------- these / those (p24) ---------------- */
    add('these', 'these · those', 'دول، دوك', '👆', ['#a8edea', '#fed6e3'], 'Page 24', [
      S('these_s01', TX('these · those'), 'these · those', 'this و that للحاجة الواحدة، these و those لأكتر من واحدة', 'أهلاً يا مالك! عارف this وthat للحاجة الواحدة. النهارده هنعرف these وthose لما يبقوا أكتر من واحدة!', { personal: true }),
      SI('these_s02', D('🍎', false, { n: 3 }), 'these apples', 'دول تفاح قريب مني', 'شوف! تلات تفاحات قريبين مني. these apples. قول معايا: these apples!'),
      SI('these_s03', D('🍎', true, { n: 3 }), 'those apples', 'دوك تفاح بعيد عني', 'والتفاح ده بعيد عني. those apples. قول معايا: those apples!'),
      SI('these_s04', D('🐱', false, { n: 2 }), 'these cats', 'دول قطتين قريبين', 'القطتين دول قريبين. these cats. قول معايا: these cats!'),
      SI('these_s05', D('🐱', true, { n: 2 }), 'those cats', 'دوك قطتين بعيد', 'والقطتين دوك بعيد. those cats. قول معايا: those cats!'),
      SI('these_s06', D('🎈', false, { n: 3 }), 'These are balloons.', 'دول بالونات', 'These are balloons. دول بالونات قريبين. قول معايا: These are balloons!'),
      SI('these_s07', D('🌳', true, { n: 3 }), 'Those are trees.', 'دوك شجر بعيد', 'Those are trees. دوك شجر بعيد. قول معايا: Those are trees!'),
      S('these_s08', TX('these = near   those = far'), 'near → these   far → those', 'قريب these، بعيد those', 'برافو يا وحش! لو كتير وقريب بنقول these، ولو كتير وبعيد بنقول those. يلا نلعب!')
    ], [
      Q('these_q1', D('🍎', false, { n: 3 }), 'these  or  those ?', 'التفاح قريب مني. نقول these ولا those؟', 'word', ['these', 'those'], 'these', 'these apples! قريبين، يبقى these.', 'القريب كتير بنقول these.'),
      Q('these_q2', D('🐱', true, { n: 2 }), 'these  or  those ?', 'القطتين بعيد. نقول these ولا those؟', 'word', ['these', 'those'], 'those', 'those cats! بعيد، يبقى those.', 'البعيد كتير بنقول those.'),
      Q('these_q3', D('🚗', true, { n: 3 }), 'these  or  those ?', 'العربيات بعيد. نقول these ولا those؟', 'word', ['these', 'those'], 'those', 'those cars! بعيد، يبقى those.', 'البعيد كتير بنقول those.'),
      Q('these_q4', D('🍌', false, { n: 3 }), 'these  or  those ?', 'الموز قريب. نقول these ولا those؟', 'word', ['these', 'those'], 'these', 'these bananas! قريب، يبقى these.', 'القريب كتير بنقول these.'),
      Q('these_q5', D('🌸', true, { n: 3 }), 'these  or  those ?', 'الورد بعيد. نقول these ولا those؟', 'word', ['these', 'those'], 'those', 'those flowers! بعيد، يبقى those.', 'البعيد كتير بنقول those.'),
      Q('these_q6', TX('These are balls.'), 'Which one is  these ?', 'دوس على الصورة اللي هي These are balls. كور قريبة!', 'pic', [D('⚽', true, { n: 3 }), D('⚽', false, { n: 3 })], 1, 'These are balls! قريبين.', 'these يعني دول، قريب مني. اختار القريب.')
    ]);

    /* ---------------- Nouns (p29) ---------------- */
    add('noun', 'Nouns', 'الأسماء', '🏠', ['#fbc2eb', '#a6c1ee'], 'Page 29', [
      S('noun_s01', TX('boy · dog · house'), 'Nouns', 'الاسم هو اسم شخص أو حيوان أو مكان أو حاجة', 'أهلاً يا مالك! الاسم، بالإنجليزي noun، هو اسم شخص أو حيوان أو مكان أو حاجة. يلا نشوف!', { personal: true }),
      SI('noun_s02', E('👦'), 'boy', 'اسم شخص', 'ولد. boy. ده اسم شخص. قول معايا: boy!'),
      SI('noun_s03', E('👧'), 'girl', 'اسم شخص', 'بنت. girl. ده كمان اسم شخص. قول معايا: girl!'),
      SI('noun_s04', E('🐶'), 'dog', 'اسم حيوان', 'كلب. dog. ده اسم حيوان. قول معايا: dog!'),
      SI('noun_s05', E('🏠'), 'house', 'اسم مكان', 'بيت. house. ده اسم مكان. قول معايا: house!'),
      SI('noun_s06', E('🏫'), 'school', 'اسم مكان', 'مدرسة. school. ده برضه اسم مكان. قول معايا: school!'),
      SI('noun_s07', E('📚'), 'book', 'اسم حاجة', 'كتاب. book. ده اسم حاجة. قول معايا: book!'),
      S('noun_s08', TX('person · animal · place · thing'), 'person · animal · place · thing', 'شخص، حيوان، مكان، حاجة', 'برافو عليك! الاسم ممكن يكون شخص، أو حيوان، أو مكان، أو حاجة. يلا نلعب!')
    ], [
      Q('noun_q1', E('👦'), 'What kind of noun?', 'الولد ده، boy. هو شخص ولا حيوان ولا مكان ولا حاجة؟', 'word', ['person', 'animal', 'place', 'thing'], 'person', 'person! الولد شخص.', 'الولد شخص. يبقى person.'),
      Q('noun_q2', E('🐶'), 'What kind of noun?', 'الكلب ده، dog. هو إيه؟', 'word', ['person', 'animal', 'place', 'thing'], 'animal', 'animal! الكلب حيوان.', 'الكلب حيوان. يبقى animal.'),
      Q('noun_q3', E('🏠'), 'What kind of noun?', 'البيت ده، house. هو إيه؟', 'word', ['person', 'animal', 'place', 'thing'], 'place', 'place! البيت مكان.', 'البيت مكان. يبقى place.'),
      Q('noun_q4', E('📚'), 'What kind of noun?', 'الكتاب ده، book. هو إيه؟', 'word', ['person', 'animal', 'place', 'thing'], 'thing', 'thing! الكتاب حاجة.', 'الكتاب حاجة. يبقى thing.'),
      Q('noun_q5', E('🏫'), 'What kind of noun?', 'المدرسة دي، school. هي إيه؟', 'word', ['person', 'animal', 'place', 'thing'], 'place', 'place! المدرسة مكان.', 'المدرسة مكان. يبقى place.'),
      Q('noun_q6', TX('an animal'), 'Which one is  an animal ?', 'دوس على الصورة اللي هي an animal. حيوان!', 'pic', [E('🏠'), E('🐶'), E('📚')], 1, 'an animal! الكلب حيوان.', 'animal يعني حيوان. دوس على الكلب.')
    ]);

    /* ---------------- Pronouns (p31) ---------------- */
    add('pron', 'Pronouns', 'الضمائر', '🧒', ['#ffecd2', '#fcb69f'], 'Page 31', [
      S('pron_s01', TX('I · you · he · she'), 'Pronouns', 'الضمير بيحل مكان الاسم', 'أهلاً يا مالك! الضمير، pronoun، بيحل مكان الاسم. بدل ما نقول اسمك كل مرة، بنقول he أو she. يلا نشوف!', { personal: true }),
      SI('pron_s02', E('🧒'), 'I', 'أنا', 'I يعني أنا. أنا مالك. I am Malek. قول معايا: I!'),
      SI('pron_s03', E('👉'), 'you', 'إنت', 'you يعني إنت. قول معايا: you!'),
      SI('pron_s04', E('👦'), 'he', 'هو (ولد)', 'ولد. بنقول he. قول معايا: he!'),
      SI('pron_s05', E('👧'), 'she', 'هي (بنت)', 'بنت. بنقول she. قول معايا: she!'),
      SI('pron_s06', E('🐶'), 'it', 'هو للحاجة أو الحيوان', 'كلب. بنقول it. قول معايا: it!'),
      SI('pron_s07', E('👫'), 'they', 'هم', 'ولد وبنت مع بعض. بنقول they. قول معايا: they!'),
      S('pron_s08', TX('he · she · it · they'), 'he · she · it · they', 'ضمائر بتحل مكان الأسماء', 'برافو! الضمائر بتحل مكان الأسماء. يلا نلعب!')
    ], [
      Q('pron_q1', E('👦'), 'Which pronoun?', 'ده ولد. نقول إيه؟', 'word', ['he', 'she', 'it'], 'he', 'he! ولد يبقى he.', 'الولد بنقول عليه he.'),
      Q('pron_q2', E('👧'), 'Which pronoun?', 'دي بنت. نقول إيه؟', 'word', ['he', 'she', 'it'], 'she', 'she! بنت يبقى she.', 'البنت بنقول عليها she.'),
      Q('pron_q3', E('🐶'), 'Which pronoun?', 'ده كلب. نقول إيه؟', 'word', ['he', 'she', 'it'], 'it', 'it! الكلب بنقول عليه it.', 'الحيوان بنقول عليه it.'),
      Q('pron_q4', E('👫'), 'Which pronoun?', 'دول ولد وبنت مع بعض. نقول إيه؟', 'word', ['it', 'they'], 'they', 'they! اتنين يبقى they.', 'أكتر من واحد بنقول they.'),
      Q('pron_q5', E('🚗'), 'Which pronoun?', 'دي عربية. نقول إيه؟', 'word', ['she', 'it'], 'it', 'it! العربية بنقول عليها it.', 'الحاجة بنقول عليها it.'),
      Q('pron_q6', TX('she'), 'Which one is  she ?', 'دوس على الصورة اللي هي she. البنت!', 'pic', [E('👦'), E('👧'), E('🐶')], 1, 'she! البنت.', 'she يعني هي، للبنت. دوس على البنت.')
    ]);

    /* ---------------- he / she (p32) ---------------- */
    add('heshe', 'he · she', 'هو، هي', '👦', ['#c2e9fb', '#a1c4fd'], 'Page 32', [
      S('heshe_s01', TX('he · she'), 'he · she', 'he للولد، she للبنت', 'أهلاً يا مالك! he للولد، وshe للبنت. يلا نشوف!', { personal: true }),
      SI('heshe_s02', E('👦'), 'He is a boy.', 'هو ولد', 'ولد. He is a boy. قول معايا: He is a boy!'),
      SI('heshe_s03', E('👨'), 'He is a man.', 'هو راجل', 'راجل. He is a man. قول معايا: He is a man!'),
      SI('heshe_s04', E('👧'), 'She is a girl.', 'هي بنت', 'بنت. She is a girl. قول معايا: She is a girl!'),
      SI('heshe_s05', E('👩'), 'She is a woman.', 'هي ست', 'ست. She is a woman. قول معايا: She is a woman!'),
      S('heshe_s06', TX('he = 👦👨   she = 👧👩'), 'he → boy, man   she → girl, woman', 'he للولد والراجل، she للبنت والست', 'برافو! he للولد والراجل، وshe للبنت والست. يلا نلعب!')
    ], [
      Q('heshe_q1', E('👦'), 'he  or  she ?', 'ده ولد. نقول he ولا she؟', 'word', ['he', 'she'], 'he', 'he! ولد يبقى he.', 'الولد بنقول he.'),
      Q('heshe_q2', E('👩'), 'he  or  she ?', 'دي ست. نقول he ولا she؟', 'word', ['he', 'she'], 'she', 'she! ست يبقى she.', 'الست بنقول she.'),
      Q('heshe_q3', E('👨'), 'he  or  she ?', 'ده راجل. نقول he ولا she؟', 'word', ['he', 'she'], 'he', 'he! راجل يبقى he.', 'الراجل بنقول he.'),
      Q('heshe_q4', E('👧'), 'he  or  she ?', 'دي بنت. نقول he ولا she؟', 'word', ['he', 'she'], 'she', 'she! بنت يبقى she.', 'البنت بنقول she.'),
      Q('heshe_q5', E('👦'), 'He is a ___ .', 'He is a boy ولا a girl؟', 'word', ['boy', 'girl'], 'boy', 'He is a boy! تمام.', 'he للولد. يبقى boy.'),
      Q('heshe_q6', TX('She is a girl.'), 'Which one is  she ?', 'دوس على الصورة اللي هي she. البنت!', 'pic', [E('👦'), E('👧')], 1, 'she! البنت.', 'she للبنت. دوس على البنت.')
    ]);

    /* ---------------- it (p34) ---------------- */
    add('it', 'it', 'للحاجات والحيوان', '🐕', ['#d4fc79', '#96e6a1'], 'Page 34', [
      S('it_s01', TX('it'), 'it', 'it للحاجة وللحيوان', 'أهلاً يا مالك! it بنقولها على الحاجات وعلى الحيوانات. مش للولد ولا للبنت. يلا نشوف!', { personal: true }),
      SI('it_s02', E('🐶'), 'It is a dog.', 'هو كلب', 'كلب. It is a dog. قول معايا: It is a dog!'),
      SI('it_s03', E('🐱'), 'It is a cat.', 'هي قطة', 'قطة. It is a cat. قول معايا: It is a cat!'),
      SI('it_s04', E('🚗'), 'It is a car.', 'دي عربية', 'عربية. It is a car. قول معايا: It is a car!'),
      SI('it_s05', E('🍎'), 'It is an apple.', 'دي تفاحة', 'تفاحة. It is an apple. قول معايا: It is an apple!'),
      S('it_s06', TX('it = 🐶🐱🚗🍎'), 'it = animal or thing', 'it للحيوان والحاجة', 'برافو! it للحيوان وللحاجة. يلا نلعب!')
    ], [
      Q('it_q1', E('🐶'), 'Which word?', 'ده كلب. نقول he ولا it؟', 'word', ['he', 'it'], 'it', 'it! الكلب it.', 'الحيوان بنقول it.'),
      Q('it_q2', E('🚗'), 'Which word?', 'دي عربية. نقول she ولا it؟', 'word', ['she', 'it'], 'it', 'it! العربية it.', 'الحاجة بنقول it.'),
      Q('it_q3', E('👧'), 'Which word?', 'دي بنت. نقول she ولا it؟', 'word', ['she', 'it'], 'she', 'she! البنت she.', 'البنت بنقول she مش it.'),
      Q('it_q4', E('🍎'), 'It is an ___ .', 'It is an apple ولا a apple؟ هي حرف علة، فنقول an.', 'word', ['apple', 'dog'], 'apple', 'It is an apple! تمام.', 'an بتيجي قبل apple.'),
      Q('it_q5', E('🐱'), 'Which word?', 'دي قطة. نقول it ولا he؟', 'word', ['it', 'he'], 'it', 'it! القطة it.', 'الحيوان بنقول it.'),
      Q('it_q6', TX('It is a car.'), 'Which one is  it ?', 'دوس على الصورة اللي نقول عليها it. مش الولد!', 'pic', [E('👦'), E('🚗')], 1, 'it! العربية.', 'it للحاجة. دوس على العربية.')
    ]);


    /* ---------------- I / we / they (p38) ---------------- */
    add('they', 'I · we · they', 'أنا، إحنا، هم', '👪', ['#fddb92', '#d1fdff'], 'Page 38', [
      S('they_s01', TX('I · you · we · they'), 'I · you · we · they', 'ضمائر الأشخاص', 'أهلاً يا مالك! النهارده هنتعلم أنا، وإنت، وإحنا، وهم بالإنجليزي. يلا نبدأ!', { personal: true }),
      SI('they_s02', E('🧒'), 'I', 'أنا', 'أنا واحد. I. قول معايا: I!'),
      SI('they_s03', E('👉'), 'you', 'إنت', 'لما أكلم واحد قدامي، أقول you. قول معايا: you!'),
      SI('they_s04', E('🧑‍🤝‍🧑'), 'we', 'إحنا (أنا وإنت)', 'أنا وإنت مع بعض، نقول we. قول معايا: we!'),
      SI('they_s05', E('👪'), 'they', 'هم', 'ناس تانيين، مش أنا ومش إنت، نقول they. قول معايا: they!'),
      SI('they_s06', E('👫'), 'They are friends.', 'هم أصحاب', 'ولد وبنت أصحاب. They are friends. قول معايا: They are friends!'),
      SI('they_s07', E('🧑‍🤝‍🧑'), 'We are friends.', 'إحنا أصحاب', 'أنا وإنت أصحاب. We are friends. قول معايا: We are friends!'),
      S('they_s08', TX('I · you · we · they'), 'I · you · we · they', 'أنا، إنت، إحنا، هم', 'برافو يا وحش! عرفت أنا، وإنت، وإحنا، وهم. يلا نلعب!')
    ], [
      Q('they_q1', E('🧒'), 'Which pronoun?', 'ده أنا لوحدي. نقول إيه؟', 'word', ['I', 'we', 'they'], 'I', 'I! أنا لوحدي.', 'أنا لوحدي بنقول I.'),
      Q('they_q2', E('🧑‍🤝‍🧑'), 'Which pronoun?', 'أنا وصاحبي مع بعض. نقول إيه؟', 'word', ['I', 'we', 'they'], 'we', 'we! إحنا مع بعض.', 'أنا وإنت مع بعض بنقول we.'),
      Q('they_q3', E('👪'), 'Which pronoun?', 'دول ناس تانيين. نقول إيه؟', 'word', ['I', 'we', 'they'], 'they', 'they! هم ناس تانيين.', 'الناس التانيين بنقول they.'),
      Q('they_q4', E('👫'), 'Which pronoun?', 'ولد وبنت بعيد عننا. نقول إيه؟', 'word', ['we', 'they'], 'they', 'they! هم.', 'اللي بعيد عننا بنقول they.'),
      Q('they_q5', E('👉'), 'Which pronoun?', 'أنا بكلم واحد قدامي. نقول إيه؟', 'word', ['you', 'they'], 'you', 'you! إنت.', 'اللي بكلمه بنقول you.'),
      Q('they_q6', TX('We are friends.'), 'Which one is  we ?', 'دوس على الصورة اللي هي we. أنا وإنت!', 'pic', [E('🧒'), E('🧑‍🤝‍🧑'), E('👪')], 1, 'we! إحنا مع بعض.', 'we يعني إحنا. اختار اتنين مع بعض.')
    ]);

    /* ---------------- Verbs (p43) ---------------- */
    add('verb', 'Verbs', 'الأفعال', '🏃', ['#fa709a', '#fee140'], 'Page 43', [
      S('verb_s01', TX('run · swim · jump'), 'Verbs', 'الفعل بيقول الحاجة بتعمل إيه', 'أهلاً يا مالك! الفعل، verb، هو كلمة بتقول حد بيعمل إيه. زي بيجري، وبيعوم، وبينط. يلا نشوف!', { personal: true }),
      SI('verb_s02', E('🏃'), 'run', 'يجري', 'ده بيجري! run. قول معايا: run!'),
      SI('verb_s03', E('🏊'), 'swim', 'يعوم', 'وده بيعوم! swim. قول معايا: swim!'),
      SI('verb_s04', E('🤸'), 'jump', 'ينط', 'وده بينط! jump. قول معايا: jump!'),
      SI('verb_s05', E('💃'), 'dance', 'يرقص', 'وده بترقص! dance. قول معايا: dance!'),
      SI('verb_s06', E('😴'), 'sleep', 'ينام', 'وده نايم! sleep. قول معايا: sleep!'),
      SI('verb_s07', E('🚶'), 'walk', 'يمشي', 'وده ماشي! walk. قول معايا: walk!'),
      S('verb_s08', TX('verb = action'), 'verb = action', 'الفعل هو اللي بنعمله', 'برافو عليك! الفعل هو الحاجة اللي بنعملها. يلا نلعب!')
    ], [
      Q('verb_q1', E('🏃'), 'What is the verb?', 'الولد ده بيعمل إيه؟', 'word', ['run', 'swim', 'sleep'], 'run', 'run! بيجري.', 'الولد بيجري. يبقى run.'),
      Q('verb_q2', E('🏊'), 'What is the verb?', 'ودي بتعمل إيه؟', 'word', ['swim', 'dance', 'walk'], 'swim', 'swim! بيعوم.', 'بيعوم. يبقى swim.'),
      Q('verb_q3', E('😴'), 'What is the verb?', 'وده بيعمل إيه؟', 'word', ['jump', 'sleep', 'run'], 'sleep', 'sleep! نايم.', 'نايم. يبقى sleep.'),
      Q('verb_q4', E('💃'), 'What is the verb?', 'وده بيعمل إيه؟', 'word', ['dance', 'walk', 'jump'], 'dance', 'dance! بترقص.', 'بترقص. يبقى dance.'),
      Q('verb_q5', E('🤸'), 'What is the verb?', 'وده بيعمل إيه؟', 'word', ['jump', 'swim', 'sleep'], 'jump', 'jump! بينط.', 'بينط. يبقى jump.'),
      Q('verb_q6', TX('walk'), 'Which one is  walk ?', 'دوس على الصورة اللي هي walk. الماشي!', 'pic', [E('😴'), E('🚶'), E('🏊')], 1, 'walk! ماشي.', 'walk يعني يمشي. دوس على الماشي.')
    ]);

    /* ---------------- verb to be (p47) ---------------- */
    add('tobe', 'verb to be', 'am · is · are', '⭐', ['#ffd89b', '#19547b'], 'Page 47', [
      S('tobe_s01', TX('am · is · are'), 'am · is · are', 'كلمات بنقول بيها مين هو إيه', 'أهلاً يا مالك! النهارده هنتعلم am وis وare. كلمات صغيرة بنقول بيها مين هو إيه!', { personal: true }),
      SI('tobe_s02', E('🧒'), 'I am happy.', 'أنا مبسوط', 'I am happy. مع I بنقول am. قول معايا: I am happy!'),
      SI('tobe_s03', E('👦'), 'He is tall.', 'هو طويل', 'He is tall. مع he بنقول is. قول معايا: He is tall!'),
      SI('tobe_s04', E('👧'), 'She is nice.', 'هي لطيفة', 'She is nice. مع she بنقول is. قول معايا: She is nice!'),
      SI('tobe_s05', E('🐶'), 'It is a dog.', 'ده كلب', 'It is a dog. مع it بنقول is. قول معايا: It is a dog!'),
      SI('tobe_s06', E('🧑‍🤝‍🧑'), 'We are friends.', 'إحنا أصحاب', 'We are friends. مع we بنقول are. قول معايا: We are friends!'),
      SI('tobe_s07', E('👪'), 'They are happy.', 'هم مبسوطين', 'They are happy. مع they بنقول are. قول معايا: They are happy!'),
      S('tobe_s08', TX('I am · he/she/it is · we/you/they are'), 'I am · he, she, it is · we, you, they are', 'am مع I، is مع he وshe وit، are مع الباقي', 'برافو يا وحش! am مع I. وis مع he وshe وit. وare مع we وyou وthey. يلا نلعب!')
    ], [
      Q('tobe_q1', E('🧒'), 'I ___ happy.', 'أنا مبسوط. I am ولا I is؟', 'word', ['am', 'is', 'are'], 'am', 'I am happy! تمام.', 'مع I بنقول am.'),
      Q('tobe_q2', E('👦'), 'He ___ tall.', 'هو طويل. He is ولا He are؟', 'word', ['am', 'is', 'are'], 'is', 'He is tall! تمام.', 'مع he بنقول is.'),
      Q('tobe_q3', E('🐶'), 'It ___ a dog.', 'ده كلب. It is ولا It are؟', 'word', ['am', 'is', 'are'], 'is', 'It is a dog! تمام.', 'مع it بنقول is.'),
      Q('tobe_q4', E('🧑‍🤝‍🧑'), 'We ___ friends.', 'إحنا أصحاب. We is ولا We are؟', 'word', ['am', 'is', 'are'], 'are', 'We are friends! تمام.', 'مع we بنقول are.'),
      Q('tobe_q5', E('👪'), 'They ___ happy.', 'هم مبسوطين. They is ولا They are؟', 'word', ['is', 'are'], 'are', 'They are happy! تمام.', 'مع they بنقول are.'),
      Q('tobe_q6', TX('She is nice.'), 'Which one is  she is ?', 'دوس على الصورة اللي هي She is nice. البنت!', 'pic', [E('👦'), E('👧'), E('🐶')], 1, 'She is nice! البنت.', 'she للبنت. دوس على البنت.')
    ]);

    /* ---------------- Negative verb to be (p52) ---------------- */
    add('nbe', 'is not · are not', 'النفي مع am, is, are', '🚫', ['#cfd9df', '#e2ebf0'], 'Page 52', [
      S('nbe_s01', TX('is not · are not'), 'is not · are not', 'not يعني لأ', 'أهلاً يا مالك! لو عايزين نقول لأ، نزود كلمة not بعد am أو is أو are. يلا نشوف!', { personal: true }),
      SI('nbe_s02', E('🐱', { cross: true }), 'It is not a dog.', 'ده مش كلب', 'شوف علامة الإكس! It is not a dog. يعني ده مش كلب. قول معايا: It is not a dog!'),
      SI('nbe_s03', E('🐶', { cross: true }), 'It is not a cat.', 'ده مش قطة', 'وهنا إكس تاني! It is not a cat. يعني ده مش قطة. قول معايا: It is not a cat!'),
      SI('nbe_s04', E('😢', { cross: true }), 'I am not sad.', 'أنا مش حزين', 'I am not sad. يعني أنا مش حزين. قول معايا: I am not sad!'),
      SI('nbe_s05', E('👦', { cross: true }), 'He is not a girl.', 'هو مش بنت', 'He is not a girl. يعني هو مش بنت. قول معايا: He is not a girl!'),
      SI('nbe_s06', E('🧑‍🤝‍🧑', { cross: true }), 'We are not sad.', 'إحنا مش حزينين', 'We are not sad. يعني إحنا مش حزينين. قول معايا: We are not sad!'),
      SI('nbe_s07', TX("isn't · aren't"), "isn't · aren't", 'is not = isn\'t، are not = aren\'t', 'وفي طريقة أقصر. is not بتبقى isn\'t، وare not بتبقى aren\'t. قول معايا: isn\'t، aren\'t!'),
      S('nbe_s08', TX('is + not = isn\'t'), 'is not = isn\'t', 'not يعني لأ', 'برافو عليك! not يعني لأ. is not تبقى isn\'t. يلا نلعب!')
    ], [
      Q('nbe_q1', E('🐱', { cross: true }), 'It ___ a dog.', 'علامة إكس! ده مش كلب. It is ولا It is not؟', 'word', ['is', 'is not'], 'is not', 'It is not a dog! تمام.', 'إكس يعني not. يبقى is not.'),
      Q('nbe_q2', E('🐶'), 'It ___ a dog.', 'مفيش علامة إكس. ده كلب فعلاً. It is ولا It is not؟', 'word', ['is', 'is not'], 'is', 'It is a dog! تمام.', 'مفيش إكس. يبقى is.'),
      Q('nbe_q3', E('😢', { cross: true }), 'I ___ sad.', 'علامة إكس! أنا مش حزين. I am ولا I am not؟', 'word', ['am', 'am not'], 'am not', 'I am not sad! تمام.', 'إكس يعني not. يبقى am not.'),
      Q('nbe_q4', E('🧑‍🤝‍🧑', { cross: true }), 'We ___ sad.', 'علامة إكس! إحنا مش حزينين. We are ولا We are not؟', 'word', ['are', 'are not'], 'are not', 'We are not sad! تمام.', 'إكس يعني not. يبقى are not.'),
      Q('nbe_q5', E('👦', { cross: true }), 'He ___ a girl.', 'علامة إكس! هو مش بنت. He is ولا He isn\'t؟', 'word', ['is', "isn't"], "isn't", "He isn't a girl! تمام.", "إكس يعني not. is not تبقى isn't."),
      Q('nbe_q6', TX('It is not a dog.'), 'Which one is  not a dog ?', 'دوس على الصورة اللي مش كلب. It is not a dog!', 'pic', [E('🐶'), E('🐱')], 1, 'It is not a dog! القطة.', 'مش كلب يعني القطة. دوس على القطة.')
    ]);

    /* ---------------- Is it ...? (p60) ---------------- */
    add('isit', 'Is it ...?', 'هل هو؟', '❓', ['#a1c4fd', '#c2e9fb'], 'Page 60', [
      S('isit_s01', TX('Is it ...?'), 'Is it ...?', 'بنسأل: هل هو؟', 'أهلاً يا مالك! النهارده هنتعلم نسأل. Is it a dog؟ يعني هل ده كلب؟ يلا نشوف!', { personal: true }),
      SI('isit_s02', E('🐶'), 'Is it a dog?', 'هل ده كلب؟', 'Is it a dog؟ يعني هل ده كلب؟ قول معايا: Is it a dog?'),
      SI('isit_s03', E('🐶'), 'Yes, it is.', 'أيوه، هو كلب', 'والإجابة: Yes, it is. يعني أيوه هو كلب. قول معايا: Yes, it is!'),
      SI('isit_s04', E('🐱'), 'Is it a dog?', 'هل ده كلب؟', 'وهنا Is it a dog؟ هل ده كلب؟'),
      SI('isit_s05', E('🐱', { cross: true }), "No, it isn't.", 'لأ، مش كلب', "والإجابة: No, it isn't. يعني لأ، مش كلب. قول معايا: No, it isn't!"),
      SI('isit_s06', E('🍎'), 'Is it an apple?', 'هل دي تفاحة؟', 'وده Is it an apple؟ هل دي تفاحة؟ Yes, it is! أيوه!'),
      S('isit_s07', TX('Is it ...?  Yes, it is.  No, it isn\'t.'), "Yes, it is. · No, it isn't.", 'أيوه أو لأ', 'برافو يا وحش! لو الإجابة أيوه نقول Yes, it is. ولو لأ نقول No, it isn\'t. يلا نلعب!')
    ], [
      Q('isit_q1', E('🐶'), 'Is it a dog?', 'هل ده كلب؟', 'word', ['Yes, it is.', "No, it isn't."], 'Yes, it is.', 'Yes, it is! ده كلب.', 'ده كلب فعلاً. يبقى Yes, it is.'),
      Q('isit_q2', E('🐱'), 'Is it a dog?', 'هل ده كلب؟', 'word', ['Yes, it is.', "No, it isn't."], "No, it isn't.", "No, it isn't! دي قطة.", "دي قطة مش كلب. يبقى No, it isn't."),
      Q('isit_q3', E('🍎'), 'Is it an apple?', 'هل دي تفاحة؟', 'word', ['Yes, it is.', "No, it isn't."], 'Yes, it is.', 'Yes, it is! تفاحة.', 'دي تفاحة. يبقى Yes, it is.'),
      Q('isit_q4', E('🚗'), 'Is it a ball?', 'هل دي كورة؟', 'word', ['Yes, it is.', "No, it isn't."], "No, it isn't.", "No, it isn't! دي عربية.", "دي عربية مش كورة. يبقى No, it isn't."),
      Q('isit_q5', E('🐱'), 'Is it a cat?', 'هل دي قطة؟', 'word', ['Yes, it is.', "No, it isn't."], 'Yes, it is.', 'Yes, it is! قطة.', 'دي قطة. يبقى Yes, it is.'),
      Q('isit_q6', TX('Is it a ball?'), 'Which one is  a ball ?', 'دوس على الصورة اللي هي a ball. الكورة!', 'pic', [E('🚗'), E('⚽'), E('🐱')], 1, 'a ball! الكورة.', 'ball يعني كورة. دوس على الكورة.')
    ]);

    /* ---------------- What is it? (p64) ---------------- */
    add('what', 'What is it?', 'ده إيه؟', '🔍', ['#f093fb', '#f5576c'], 'Page 64', [
      S('what_s01', TX('What is it?'), 'What is it?', 'بنسأل: ده إيه؟', 'أهلاً يا مالك! النهارده هنتعلم نسأل: What is it؟ يعني ده إيه؟ ونجاوب It is a ... يلا نشوف!', { personal: true }),
      SI('what_s02', E('🍎'), 'What is it?', 'ده إيه؟', 'شوف! What is it؟ يعني ده إيه؟ قول معايا: What is it?'),
      SI('what_s03', E('🍎'), 'It is an apple.', 'ده تفاحة', 'الإجابة: It is an apple. يعني ده تفاحة. قول معايا: It is an apple!'),
      SI('what_s04', E('🐱'), 'What is it?  It is a cat.', 'ده قطة', 'وده؟ What is it؟ It is a cat. قطة! قول معايا: It is a cat!'),
      SI('what_s05', E('🚗'), 'What is it?  It is a car.', 'دي عربية', 'وده؟ What is it؟ It is a car. عربية! قول معايا: It is a car!'),
      SI('what_s06', E('⚽'), 'What is it?  It is a ball.', 'دي كورة', 'وده؟ What is it؟ It is a ball. كورة! قول معايا: It is a ball!'),
      S('what_s07', TX('What is it?  It is a ...'), 'What is it? · It is a ...', 'السؤال والإجابة', 'برافو عليك! نسأل What is it؟ ونجاوب It is a ... يلا نلعب!')
    ], [
      Q('what_q1', E('🍎'), 'What is it?', 'ده إيه؟', 'word', ['It is an apple.', 'It is a ball.'], 'It is an apple.', 'It is an apple! تفاحة.', 'دي تفاحة. يبقى It is an apple.'),
      Q('what_q2', E('🐱'), 'What is it?', 'ده إيه؟', 'word', ['It is a dog.', 'It is a cat.'], 'It is a cat.', 'It is a cat! قطة.', 'دي قطة. يبقى It is a cat.'),
      Q('what_q3', E('🚗'), 'What is it?', 'ده إيه؟', 'word', ['It is a car.', 'It is a ball.'], 'It is a car.', 'It is a car! عربية.', 'دي عربية. يبقى It is a car.'),
      Q('what_q4', E('⚽'), 'What is it?', 'ده إيه؟', 'word', ['It is a ball.', 'It is an apple.'], 'It is a ball.', 'It is a ball! كورة.', 'دي كورة. يبقى It is a ball.'),
      Q('what_q5', E('🐶'), 'What is it?', 'ده إيه؟', 'word', ['It is a dog.', 'It is a car.'], 'It is a dog.', 'It is a dog! كلب.', 'ده كلب. يبقى It is a dog.'),
      Q('what_q6', TX('It is a car.'), 'Which one is  a car ?', 'دوس على الصورة اللي هي a car. العربية!', 'pic', [E('🍎'), E('⚽'), E('🚗')], 2, 'a car! العربية.', 'car يعني عربية. دوس على العربية.')
    ]);

    /* ---------------- have / has (p66) ---------------- */
    const YN = ['have', 'has'];
    add('have', 'have · has', 'عندي، عنده', '🎒', ['#ffecd2', '#fcb69f'], 'Page 66', [
      S('have_s01', TX('have · has'), 'have · has', 'يعني عندي', 'أهلاً يا مالك! النهارده هنتعلم have وhas. يعني عندي، وعنده. يلا نشوف!', { personal: true }),
      SI('have_s02', E('⚽'), 'I have a ball.', 'أنا عندي كورة', 'I have a ball. يعني أنا عندي كورة. قول معايا: I have a ball!'),
      SI('have_s03', E('📘'), 'You have a book.', 'انت عندك كتاب', 'You have a book. يعني انت عندك كتاب. قول معايا: You have a book!'),
      SI('have_s04', E('🚗'), 'We have a car.', 'إحنا عندنا عربية', 'We have a car. يعني إحنا عندنا عربية. قول معايا: We have a car!'),
      SI('have_s05', E('🐶'), 'He has a dog.', 'هو عنده كلب', 'وهنا He has a dog. يعني هو عنده كلب. لاحظ: He بتاخد has. قول معايا: He has a dog!'),
      SI('have_s06', E('🎒'), 'She has a bag.', 'هي عندها شنطة', 'She has a bag. يعني هي عندها شنطة. قول معايا: She has a bag!'),
      SI('have_s07', E('🐱'), 'It has a tail.', 'هي عندها دنب', 'It has a tail. يعني الحيوان عنده دنب. It بتاخد has. قول معايا: It has a tail!'),
      S('have_s08', TX('I · you · we · they → have'), 'he · she · it → has', 'have و has', 'برافو عليك! I وyou وwe وthey بياخدوا have. وhe وshe وit بياخدوا has. يلا نلعب!')
    ], [
      Q('have_q1', E('⚽'), 'I ___ a ball.', 'أنا عندي كورة. have ولا has؟', 'word', YN, 'have', 'I have a ball! تمام.', 'I بتاخد have.'),
      Q('have_q2', E('🐶'), 'He ___ a dog.', 'هو عنده كلب. have ولا has؟', 'word', YN, 'has', 'He has a dog! تمام.', 'He بتاخد has.'),
      Q('have_q3', E('🚗'), 'We ___ a car.', 'إحنا عندنا عربية. have ولا has؟', 'word', YN, 'have', 'We have a car! تمام.', 'We بتاخد have.'),
      Q('have_q4', E('🎒'), 'She ___ a bag.', 'هي عندها شنطة. have ولا has؟', 'word', YN, 'has', 'She has a bag! تمام.', 'She بتاخد has.'),
      Q('have_q5', E('🐱'), 'It ___ a tail.', 'الحيوان عنده دنب. have ولا has؟', 'word', YN, 'has', 'It has a tail! تمام.', 'It بتاخد has.'),
      Q('have_q6', TX('They ___ a cat.'), 'They ___ a cat.', 'هم عندهم قطة. have ولا has؟', 'word', YN, 'have', 'They have a cat! تمام.', 'They بتاخد have.')
    ]);

    /* ---------------- his / her (p70) ---------------- */
    add('hish', 'his · her', 'بتاعه، بتاعها', '🧢', ['#d4fc79', '#96e6a1'], 'Page 70', [
      S('hish_s01', TX('his · her'), 'his · her', 'بتاعه وبتاعها', 'أهلاً يا مالك! النهارده هنتعلم his وher. his يعني بتاع الولد. وher يعني بتاعة البنت. يلا بينا!', { personal: true }),
      SI('hish_s02', E('👦'), 'his ball', 'الكورة بتاعته', 'شوف الولد ده. الكورة بتاعته. نقول his ball. قول معايا: his ball!'),
      SI('hish_s03', E('👧'), 'her bag', 'الشنطة بتاعتها', 'وشوف البنت دي. الشنطة بتاعتها. نقول her bag. قول معايا: her bag!'),
      SI('hish_s04', E('👦'), 'This is his cap.', 'دي الكاب بتاعه', 'This is his cap. يعني دي الكاب بتاعه. قول معايا: This is his cap!'),
      SI('hish_s05', E('👧'), 'This is her doll.', 'دي العروسة بتاعتها', 'This is her doll. يعني دي العروسة بتاعتها. قول معايا: This is her doll!'),
      SI('hish_s06', E('👨'), 'This is his car.', 'دي عربيته', 'This is his car. يعني دي عربيته. قول معايا: This is his car!'),
      SI('hish_s07', E('👩'), 'This is her book.', 'ده كتابها', 'This is her book. يعني ده كتابها. قول معايا: This is her book!'),
      S('hish_s08', TX('boy → his · girl → her'), 'his = boy · her = girl', 'his للولد، her للبنت', 'برافو عليك يا وحش! his للولد. her للبنت. يلا نلعب!')
    ], [
      Q('hish_q1', E('👦'), 'This is ___ ball.', 'الولد ده. الكورة بتاعته. his ولا her؟', 'word', ['his', 'her'], 'his', 'his ball! تمام.', 'ولد يبقى his.'),
      Q('hish_q2', E('👧'), 'This is ___ bag.', 'البنت دي. الشنطة بتاعتها. his ولا her؟', 'word', ['his', 'her'], 'her', 'her bag! تمام.', 'بنت يبقى her.'),
      Q('hish_q3', E('👨'), 'This is ___ car.', 'الراجل ده. العربية بتاعته. his ولا her؟', 'word', ['his', 'her'], 'his', 'his car! تمام.', 'راجل يبقى his.'),
      Q('hish_q4', E('👩'), 'This is ___ book.', 'الست دي. الكتاب بتاعها. his ولا her؟', 'word', ['his', 'her'], 'her', 'her book! تمام.', 'ست يبقى her.'),
      Q('hish_q5', E('👧'), 'This is ___ doll.', 'البنت دي. العروسة بتاعتها. his ولا her؟', 'word', ['his', 'her'], 'her', 'her doll! تمام.', 'بنت يبقى her.'),
      Q('hish_q6', TX('his cap'), 'Which one is  his ?', 'دوس على الصورة اللي هي his. بتاع الولد!', 'pic', [E('👧'), E('👦')], 1, 'his! الولد.', 'his يعني بتاع الولد. دوس على الولد.')
    ]);

    /* ---------------- simple present (p73) ---------------- */
    add('pres', 'simple present', 'المضارع البسيط', '🍽️', ['#fbc2eb', '#a6c1ee'], 'Page 73', [
      S('pres_s01', TX('I eat · He eats'), 'I eat · He eats', 'بنقول اللي بنعمله كل يوم', 'أهلاً يا مالك! النهارده هنتكلم عن اللي بنعمله كل يوم. زي I eat. وHe eats. يلا نشوف!', { personal: true }),
      SI('pres_s02', E('🍽️'), 'I eat.', 'أنا باكل', 'I eat. يعني أنا باكل. قول معايا: I eat!'),
      SI('pres_s03', E('🏃'), 'They run.', 'هم بيجروا', 'They run. يعني هم بيجروا. قول معايا: They run!'),
      SI('pres_s04', E('🏊'), 'We swim.', 'إحنا بنعوم', 'We swim. يعني إحنا بنعوم. قول معايا: We swim!'),
      SI('pres_s05', E('🍽️'), 'He eats.', 'هو بياكل', 'وهنا He eats. شوف الـ s في الآخر! قول معايا: He eats!'),
      SI('pres_s06', E('😴'), 'She sleeps.', 'هي بتنام', 'She sleeps. برضه فيها s في الآخر. قول معايا: She sleeps!'),
      SI('pres_s07', E('🏃'), 'It runs.', 'هو بيجري', 'It runs. الحيوان بيجري. وفيها s. قول معايا: It runs!'),
      S('pres_s08', TX('he · she · it → verb + s'), 'he · she · it + s', 'هو وهي والحيوان: s', 'برافو عليك! مع he وshe وit بنزود s في آخر الفعل. يلا نلعب!')
    ], [
      Q('pres_q1', E('🍽️'), 'I ___ .', 'أنا باكل. eat ولا eats؟', 'word', ['eat', 'eats'], 'eat', 'I eat! تمام.', 'I مفيهاش s. يبقى eat.'),
      Q('pres_q2', E('🍽️'), 'He ___ .', 'هو بياكل. eat ولا eats؟', 'word', ['eat', 'eats'], 'eats', 'He eats! تمام.', 'He بتاخد s. يبقى eats.'),
      Q('pres_q3', E('🏃'), 'They ___ .', 'هم بيجروا. run ولا runs؟', 'word', ['run', 'runs'], 'run', 'They run! تمام.', 'They مفيهاش s. يبقى run.'),
      Q('pres_q4', E('😴'), 'She ___ .', 'هي بتنام. sleep ولا sleeps؟', 'word', ['sleep', 'sleeps'], 'sleeps', 'She sleeps! تمام.', 'She بتاخد s. يبقى sleeps.'),
      Q('pres_q5', E('🏊'), 'We ___ .', 'إحنا بنعوم. swim ولا swims؟', 'word', ['swim', 'swims'], 'swim', 'We swim! تمام.', 'We مفيهاش s. يبقى swim.'),
      Q('pres_q6', E('🏃'), 'It ___ .', 'الحيوان بيجري. run ولا runs؟', 'word', ['run', 'runs'], 'runs', 'It runs! تمام.', 'It بتاخد s. يبقى runs.')
    ]);

    /* ---------------- negative simple (p73) ---------------- */
    add('nsimp', "don't · doesn't", 'نفي المضارع', '🙅', ['#ffd1ff', '#fad0c4'], 'Page 73', [
      S('nsimp_s01', TX("don't · doesn't"), "don't · doesn't", 'للنفي', 'أهلاً يا مالك! النهارده هنتعلم النفي. don\'t وdoesn\'t. يعني لأ، مش بعمل. يلا بينا!', { personal: true }),
      SI('nsimp_s02', E('🍽️', { cross: true }), "I don't eat.", 'أنا مباكلش', "I don't eat. يعني أنا مباكلش. قول معايا: I don't eat!"),
      SI('nsimp_s03', E('🏃', { cross: true }), "They don't run.", 'هم مبيجروش', "They don't run. يعني هم مبيجروش. قول معايا: They don't run!"),
      SI('nsimp_s04', E('🏊', { cross: true }), "We don't swim.", 'إحنا مبنعومش', "We don't swim. يعني إحنا مبنعومش. قول معايا: We don't swim!"),
      SI('nsimp_s05', E('😴', { cross: true }), "He doesn't sleep.", 'هو منامش', "He doesn't sleep. لاحظ: مع he بنقول doesn't. وsleep من غير s. قول معايا: He doesn't sleep!"),
      SI('nsimp_s06', E('🍽️', { cross: true }), "She doesn't eat.", 'هي مبتاكلش', "She doesn't eat. قول معايا: She doesn't eat!"),
      SI('nsimp_s07', E('🏃', { cross: true }), "It doesn't run.", 'هو مبيجريش', "It doesn't run. الحيوان مبيجريش. قول معايا: It doesn't run!"),
      S('nsimp_s08', TX("I · you · we · they → don't"), "he · she · it → doesn't", "don't و doesn't", "برافو عليك! I وyou وwe وthey بياخدوا don't. وhe وshe وit بياخدوا doesn't. يلا نلعب!")
    ], [
      Q('nsimp_q1', E('🍽️', { cross: true }), 'I ___ eat.', "علامة إكس! أنا مباكلش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "don't", "I don't eat! تمام.", "I بتاخد don't."),
      Q('nsimp_q2', E('😴', { cross: true }), 'He ___ sleep.', "علامة إكس! هو منامش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "doesn't", "He doesn't sleep! تمام.", "He بتاخد doesn't."),
      Q('nsimp_q3', E('🏃', { cross: true }), 'They ___ run.', "علامة إكس! هم مبيجروش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "don't", "They don't run! تمام.", "They بتاخد don't."),
      Q('nsimp_q4', E('🍽️', { cross: true }), 'She ___ eat.', "علامة إكس! هي مبتاكلش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "doesn't", "She doesn't eat! تمام.", "She بتاخد doesn't."),
      Q('nsimp_q5', E('🏊', { cross: true }), 'We ___ swim.', "علامة إكس! إحنا مبنعومش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "don't", "We don't swim! تمام.", "We بتاخد don't."),
      Q('nsimp_q6', E('🏃', { cross: true }), 'It ___ run.', "علامة إكس! الحيوان مبيجريش. don't ولا doesn't؟", 'word', ["don't", "doesn't"], "doesn't", "It doesn't run! تمام.", "It بتاخد doesn't.")
    ]);

    return out;
  };
  root.MRE_MORE = make;
  if (typeof module !== 'undefined') module.exports = make;
})(typeof window !== 'undefined' ? window : globalThis);
