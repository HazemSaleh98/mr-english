/* Mr English: curriculum data (Top Grammar KG). Every spoken line has an id -> audio/<id>.mp3 */
(function (root) {
  const E = (e, extra) => Object.assign({ k: 'emoji', e }, extra || {});
  const SH = (cls) => ({ k: 'sh', cls });
  const SC = (o, p) => ({ k: 'scene', o, p });
  const TX = (t) => ({ k: 'text', t });

  const LESSONS = [
    /* ---------------- 1. a / an ---------------- */
    {
      id: 'aan', title: 'a / an', ar: 'a و an', icon: '🍎', color: ['#ff9a8b', '#ff6a88'], book: 'Chapter 1',
      steps: [
        { id: 'aan_s01', vis: TX('a  an'), en: 'a  and  an', ar: 'النهارده هنتعلم a و an', say: 'أهلاً يا مالك! أنا شلبي، مستر إنجلش بتاعك! النهارده هنتعلم كلمتين صغيرين أوي: a، وan. جاهز يا وحش؟', personal: true },
        { id: 'aan_s02', vis: E('🐱'), en: 'a cat', ar: 'cat بتبدأ بحرف ساكن، يبقى a', say: 'شوف القطة دي! cat. كلمة cat بتبدأ بحرف ساكن، c. فنقول a. a cat. قول معايا: a cat!', say_it: true },
        { id: 'aan_s03', vis: E('🐶'), en: 'a dog', ar: 'dog كمان بتبدأ بحرف ساكن', say: 'وده كلب! dog. بتبدأ بحرف d، ساكن، يبقى a. a dog. قول معايا: a dog!', say_it: true },
        { id: 'aan_s04', vis: E('⚽'), en: 'a ball', ar: 'ball برضه a', say: 'وده كورة! ball. حرف b، ساكن، يبقى a. a ball. قول معايا: a ball!', say_it: true },
        { id: 'aan_s05', vis: TX('a  e  i  o  u'), en: 'a  e  i  o  u', ar: 'الحروف المتحركة الخمسة', say: 'طب انتبه يا بطل! في خمس حروف متحركة: a، e، i، o، u. لما الكلمة تبدأ بواحد منهم، مش بنقول a. بنقول an!', vowels: true },
        { id: 'aan_s06', vis: E('🍎'), en: 'an apple', ar: 'apple بتبدأ بـ a، يبقى an', say: 'ده تفاحة! apple. بتبدأ بحرف a، متحرك. يبقى an. an apple. قول معايا: an apple!', say_it: true },
        { id: 'aan_s07', vis: E('🥚'), en: 'an egg', ar: 'egg بتبدأ بـ e', say: 'وده بيضة! egg. بتبدأ بحرف e، متحرك. يبقى an. an egg. قول معايا: an egg!', say_it: true },
        { id: 'aan_s08', vis: E('🐘'), en: 'an elephant', ar: 'elephant بتبدأ بـ e', say: 'وده فيل كبير! elephant. حرف e، متحرك. يبقى an. an elephant. قول معايا: an elephant!', say_it: true },
        { id: 'aan_s09', vis: E('☔'), en: 'an umbrella', ar: 'umbrella بتبدأ بـ u', say: 'وده شمسية! umbrella. حرف u، متحرك. يبقى an. an umbrella. قول معايا: an umbrella!', say_it: true },
        { id: 'aan_s10', vis: TX('a  ·  an'), en: 'a + sound  |  an + a e i o u', ar: 'ساكن = a، متحرك = an', say: 'برافو عليك يا وحش! حرف ساكن، نقول a. حرف متحرك، نقول an. يلا نلعب لعبة الأسئلة!' }
      ],
      quiz: [
        { id: 'aan_q1', vis: E('🐱'), prompt: 'a  or  an  ?', say: 'القطة دي، cat. نقول a ولا an؟', type: 'word', opts: ['a', 'an'], ans: 'a', right: 'a cat! عظمة يا بطل، cat بتبدأ بحرف ساكن.', fix: 'cat بتبدأ بحرف ساكن، c. يبقى a cat.' },
        { id: 'aan_q2', vis: E('🍎'), prompt: 'a  or  an  ?', say: 'التفاحة دي، apple. نقول a ولا an؟', type: 'word', opts: ['a', 'an'], ans: 'an', right: 'an apple! تمام، apple بتبدأ بحرف متحرك.', fix: 'apple بتبدأ بحرف a، متحرك. يبقى an apple.' },
        { id: 'aan_q3', vis: E('🐶'), prompt: 'a  or  an  ?', say: 'الكلب ده، dog. نقول a ولا an؟', type: 'word', opts: ['a', 'an'], ans: 'a', right: 'a dog! ممتاز، dog بتبدأ بحرف d.', fix: 'dog بتبدأ بحرف ساكن، d. يبقى a dog.' },
        { id: 'aan_q4', vis: E('🥚'), prompt: 'a  or  an  ?', say: 'البيضة دي، egg. نقول a ولا an؟', type: 'word', opts: ['a', 'an'], ans: 'an', right: 'an egg! جامد، egg بتبدأ بحرف e.', fix: 'egg بتبدأ بحرف e، متحرك. يبقى an egg.' },
        { id: 'aan_q5', vis: E('☔'), prompt: 'a  or  an  ?', say: 'الشمسية دي، umbrella. نقول a ولا an؟', type: 'word', opts: ['a', 'an'], ans: 'an', right: 'an umbrella! برافو، umbrella بتبدأ بحرف u.', fix: 'umbrella بتبدأ بحرف u، متحرك. يبقى an umbrella.' },
        { id: 'aan_q6', vis: TX('an elephant'), prompt: 'Which one is  an elephant ?', say: 'دوس على الصورة اللي هي an elephant. فين الفيل؟', type: 'pic', opts: [E('🐱'), E('🐘'), E('🐶')], ans: 1, right: 'an elephant! فيل كبير زيك يا بطل.', fix: 'الفيل هو elephant. دوس على الفيل.' }
      ]
    },
    /* ---------------- 2. can / can't (p44) ---------------- */
    {
      id: 'can', title: "can / can't", ar: 'يقدر / مش يقدر', icon: '🦸', color: ['#a18cd1', '#6a5acd'], book: 'Page 44',
      steps: [
        { id: 'can_s01', vis: TX("can  can't"), en: "can  and  can't", ar: 'يقدر ومش يقدر', say: 'يا أهلاً يا مالك! النهارده هنتعلم الأبطال الخارقين: can، يعني يقدر، وcan\'t، يعني مش يقدر. يلا بينا!', personal: true },
        { id: 'can_s02', vis: E('🐦'), en: 'A bird can fly.', ar: 'العصفور يقدر يطير', say: 'شوف العصفور! A bird can fly. يعني العصفور يقدر يطير. can، يعني يقدر. قول معايا: A bird can fly!', say_it: true },
        { id: 'can_s03', vis: E('🐟'), en: 'A fish can swim.', ar: 'السمكة تقدر تعوم', say: 'وده سمكة! A fish can swim. السمكة تقدر تعوم. قول معايا: A fish can swim!', say_it: true },
        { id: 'can_s04', vis: E('🐕'), en: 'A dog can run.', ar: 'الكلب يقدر يجري', say: 'وده كلب! A dog can run. الكلب يقدر يجري. قول معايا: A dog can run!', say_it: true },
        { id: 'can_s05', vis: E('🐘', { cross: true }), en: "An elephant can't fly.", ar: 'الفيل مش يقدر يطير', say: 'طب الفيل ده! An elephant can\'t fly. الفيل مش يقدر يطير. can\'t، يعني مش يقدر. قول معايا: An elephant can\'t fly!', say_it: true },
        { id: 'can_s06', vis: E('🐟', { cross: true }), en: "A fish can't walk.", ar: 'السمكة مش تقدر تمشي', say: 'والسمكة! A fish can\'t walk. السمكة مش تقدر تمشي على الأرض. قول معايا: A fish can\'t walk!', say_it: true },
        { id: 'can_s07', vis: E('🐶', { cross: true }), en: "A dog can't fly.", ar: 'الكلب مش يقدر يطير', say: 'والكلب! A dog can\'t fly. الكلب مش يقدر يطير. قول معايا: A dog can\'t fly!', say_it: true },
        { id: 'can_s08', vis: TX('Can a bird fly?'), en: 'Can a bird fly?  Yes, it can.', ar: 'هل العصفور يقدر يطير؟ أيوه', say: 'وفي سؤال كمان! Can a bird fly? هل العصفور يقدر يطير؟ Yes، it can! أيوه، يقدر. وCan a fish fly؟ No، it can\'t! لا، مش يقدر.' },
        { id: 'can_s09', vis: TX("can  ·  can't"), en: "can = يقدر   can't = مش يقدر", ar: 'can يقدر، can\'t مش يقدر', say: 'برافو عليك يا بطل! can يعني يقدر. can\'t يعني مش يقدر. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'can_q1', vis: E('🐦', { cap: 'fly' }), prompt: 'A bird ___ fly.', say: 'العصفور ده، fly، يطير. هو can ولا can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'A bird can fly! العصفور يطير يا بطل.', fix: 'العصفور يقدر يطير. يبقى can.' },
        { id: 'can_q2', vis: E('🐟', { cap: 'fly' }), prompt: 'A fish ___ fly.', say: 'والسمكة دي، fly، تطير؟ هي can ولا can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "A fish can't fly! السمكة مش بتطير، بتعوم.", fix: "السمكة مش تقدر تطير. يبقى can't." },
        { id: 'can_q3', vis: E('🐕', { cap: 'run' }), prompt: 'A dog ___ run.', say: 'الكلب ده، run، يجري. هو can ولا can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'A dog can run! الكلب يجري بسرعة.', fix: 'الكلب يقدر يجري. يبقى can.' },
        { id: 'can_q4', vis: E('🐘', { cap: 'fly' }), prompt: 'An elephant ___ fly.', say: 'والفيل ده، fly، يطير؟ هو can ولا can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "An elephant can't fly! الفيل تقيل أوي.", fix: "الفيل مش يقدر يطير. يبقى can't." },
        { id: 'can_q5', vis: E('🐟', { cap: 'swim' }), prompt: 'A fish ___ swim.', say: 'والسمكة دي، swim، تعوم. هي can ولا can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'A fish can swim! السمكة بتعوم عادي.', fix: 'السمكة تقدر تعوم. يبقى can.' },
        { id: 'can_q6', vis: TX('Who can fly?'), prompt: 'Who  can  fly ?', say: 'مين اللي can fly؟ مين يقدر يطير؟ دوس عليه!', type: 'pic', opts: [E('🐘'), E('🐟'), E('🐦')], ans: 2, right: 'The bird can fly! العصفور بيطير.', fix: 'اللي يقدر يطير هو العصفور. دوس عليه.' }
      ]
    },
    /* ---------------- 3. prepositions (p17) ---------------- */
    {
      id: 'prep', title: 'in · on · under', ar: 'حروف الجر', icon: '📦', color: ['#43cea2', '#185a9d'], book: 'Page 17',
      steps: [
        { id: 'prep_s01', vis: SC('box', 'in'), en: 'Where is the ball?', ar: 'فين الكورة؟', say: 'أهلاً يا مالك! النهارده هنعمل لعبة الاستخباية! هنقول الكورة فين. in، on، under، next to. يلا بينا!', personal: true },
        { id: 'prep_s02', vis: SC('box', 'in'), en: 'in the box', ar: 'in يعني جوه', say: 'الكورة دي جوه الصندوق! The ball is in the box. in، يعني جوه. قول معايا: in the box!', say_it: true },
        { id: 'prep_s03', vis: SC('box', 'on'), en: 'on the box', ar: 'on يعني فوق', say: 'والكورة دي فوق الصندوق! The ball is on the box. on، يعني فوق. قول معايا: on the box!', say_it: true },
        { id: 'prep_s04', vis: SC('table', 'under'), en: 'under the table', ar: 'under يعني تحت', say: 'والكورة دي تحت الترابيزة! The ball is under the table. under، يعني تحت. قول معايا: under the table!', say_it: true },
        { id: 'prep_s05', vis: SC('box', 'next'), en: 'next to the box', ar: 'next to يعني جنب', say: 'والكورة دي جنب الصندوق! The ball is next to the box. next to، يعني جنب. قول معايا: next to the box!', say_it: true },
        { id: 'prep_s06', vis: TX('in · on · under · next to'), en: 'in  on  under  next to', ar: 'جوه، فوق، تحت، جنب', say: 'برافو عليك يا وحش! in جوه، on فوق، under تحت، next to جنب. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'prep_q1', vis: SC('box', 'in'), prompt: 'The ball is ___ the box.', say: 'الكورة فين؟ جوه الصندوق ولا فوقه ولا تحته ولا جنبه؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'in', right: 'in the box! الكورة جوه الصندوق.', fix: 'الكورة جوه الصندوق. يبقى in.' },
        { id: 'prep_q2', vis: SC('table', 'under'), prompt: 'The ball is ___ the table.', say: 'الكورة دي فين بالنسبة للترابيزة؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'under', right: 'under the table! الكورة تحت الترابيزة.', fix: 'الكورة تحت الترابيزة. يبقى under.' },
        { id: 'prep_q3', vis: SC('box', 'on'), prompt: 'The ball is ___ the box.', say: 'والكورة دي فين بالنسبة للصندوق؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'on', right: 'on the box! الكورة فوق الصندوق.', fix: 'الكورة فوق الصندوق. يبقى on.' },
        { id: 'prep_q4', vis: SC('box', 'next'), prompt: 'The ball is ___ the box.', say: 'والكورة دي فين؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'next to', right: 'next to the box! الكورة جنب الصندوق.', fix: 'الكورة جنب الصندوق. يبقى next to.' },
        { id: 'prep_q5', vis: TX('under the table'), prompt: 'Which one is  under the table ?', say: 'دوس على الصورة اللي فيها الكورة under the table. تحت الترابيزة!', type: 'pic', opts: [SC('table', 'on'), SC('table', 'next'), SC('table', 'under')], ans: 2, right: 'under the table! عيني عليك يا شاطر.', fix: 'under يعني تحت. دوس على الكورة اللي تحت الترابيزة.' },
        { id: 'prep_q6', vis: TX('in the box'), prompt: 'Which one is  in the box ?', say: 'دوس على الصورة اللي فيها الكورة in the box. جوه الصندوق!', type: 'pic', opts: [SC('box', 'on'), SC('box', 'in'), SC('box', 'next')], ans: 1, right: 'in the box! الكورة جوه الصندوق.', fix: 'in يعني جوه. دوس على الكورة اللي جوه الصندوق.' }
      ]
    },
    /* ---------------- 4. adjectives (p56) ---------------- */
    {
      id: 'adj', title: 'Adjectives', ar: 'الصفات', icon: '🌈', color: ['#f6d365', '#fda085'], book: 'Page 56',
      steps: [
        { id: 'adj_s01', vis: TX('fat  tall  sad  fast'), en: 'fat · tall · sad · fast', ar: 'كلمات بتوصف حاجات', say: 'يا أهلاً يا مالك! النهارده هنتعلم كلمات بتوصف الحاجات. زي: fat، tall، sad، fast. وكمان عكسهم! يلا بينا!', personal: true },
        { id: 'adj_s02', vis: SH('fat'), en: 'fat', ar: 'fat يعني تخين', say: 'شوف شلبي بقى تخين! fat. fat يعني تخين. قول معايا: fat!', say_it: true },
        { id: 'adj_s03', vis: SH('thin'), en: 'thin', ar: 'thin يعني رفيع', say: 'وشوف شلبي بقى رفيع! thin. thin يعني رفيع. قول معايا: thin!', say_it: true },
        { id: 'adj_s04', vis: SH('tall'), en: 'tall', ar: 'tall يعني طويل', say: 'وشلبي بقى طويل أوي! tall. tall يعني طويل. قول معايا: tall!', say_it: true },
        { id: 'adj_s05', vis: SH('short'), en: 'short', ar: 'short يعني قصير', say: 'وشلبي بقى قصير! short. short يعني قصير. قول معايا: short!', say_it: true },
        { id: 'adj_s06', vis: E('😢'), en: 'sad', ar: 'sad يعني حزين', say: 'وده حزين، بيعيط! sad. sad يعني حزين. قول معايا: sad!', say_it: true },
        { id: 'adj_s07', vis: E('😄'), en: 'happy', ar: 'happy يعني سعيد', say: 'وده سعيد، بيضحك! happy. happy يعني سعيد. قول معايا: happy!', say_it: true },
        { id: 'adj_s08', vis: E('🐆'), en: 'fast', ar: 'fast يعني سريع', say: 'وده فهد بيجري بسرعة! fast. fast يعني سريع. قول معايا: fast!', say_it: true },
        { id: 'adj_s09', vis: E('🐢'), en: 'slow', ar: 'slow يعني بطيء', say: 'وده سلحفاة بتمشي براحة! slow. slow يعني بطيء. قول معايا: slow!', say_it: true },
        { id: 'adj_s10', vis: TX('fat · thin · tall · short'), en: 'fat/thin  tall/short  sad/happy  fast/slow', ar: 'كل كلمة وعكسها', say: 'برافو عليك يا وحش! fat وthin. tall وshort. sad وhappy. fast وslow. كل كلمة وعكسها! يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'adj_q1', vis: TX('fat'), prompt: 'Which one is  fat ?', say: 'دوس على الصورة اللي هي fat. مين التخين؟', type: 'pic', opts: [SH('thin'), SH('fat')], ans: 1, right: 'fat! تخين وجميل.', fix: 'fat يعني تخين. دوس على التخين.' },
        { id: 'adj_q2', vis: TX('tall'), prompt: 'Which one is  tall ?', say: 'دوس على الصورة اللي هي tall. مين الطويل؟', type: 'pic', opts: [SH('tall'), SH('short')], ans: 0, right: 'tall! طويل زي الجبل.', fix: 'tall يعني طويل. دوس على الطويل.' },
        { id: 'adj_q3', vis: TX('sad'), prompt: 'Which one is  sad ?', say: 'دوس على الصورة اللي هي sad. مين الحزين؟', type: 'pic', opts: [E('😄'), E('😢')], ans: 1, right: 'sad! حزين شوية. ماتزعلش!', fix: 'sad يعني حزين. دوس على الوش الحزين.' },
        { id: 'adj_q4', vis: TX('fast'), prompt: 'Which one is  fast ?', say: 'دوس على الصورة اللي هي fast. مين السريع؟', type: 'pic', opts: [E('🐢'), E('🐆')], ans: 1, right: 'fast! الفهد سريع أوي.', fix: 'fast يعني سريع. دوس على الفهد.' },
        { id: 'adj_q5', vis: E('😄'), prompt: 'happy  or  sad ?', say: 'الوش ده بيضحك! هو happy ولا sad؟', type: 'word', opts: ['happy', 'sad'], ans: 'happy', right: 'happy! سعيد وبيضحك.', fix: 'الوش بيضحك. يبقى happy.' },
        { id: 'adj_q6', vis: E('🐢'), prompt: 'fast  or  slow ?', say: 'السلحفاة دي بتمشي براحة. هي fast ولا slow؟', type: 'word', opts: ['fast', 'slow'], ans: 'slow', right: 'slow! السلحفاة بطيئة.', fix: 'السلحفاة بتمشي براحة. يبقى slow.' }
      ]
    }
  ];

  /* Upcoming lessons from the book TOC (locked cards, "coming soon") */
  const SOON = [
    { title: 'one · two · three', ar: 'الأرقام', icon: '🔢', book: 'Chapter 1' },
    { title: 'singular / plural', ar: 'مفرد وجمع', icon: '🍓', book: 'Chapter 1' },
    { title: 'How many?', ar: 'كام؟', icon: '🧮', book: 'Chapter 1' },
    { title: 'this · that', ar: 'ده، دي', icon: '👉', book: 'Chapter 2' },
    { title: 'these · those', ar: 'دول، دوك', icon: '👆', book: 'Chapter 2' },
    { title: 'he · she · it', ar: 'الضمائر', icon: '🧒', book: 'Chapter 3' },
    { title: 'verb to be', ar: 'am · is · are', icon: '⭐', book: 'Chapter 4' },
    { title: 'verb to have', ar: 'have · has', icon: '🎒', book: 'Chapter 4' },
    { title: 'his · her', ar: 'بتاعه، بتاعها', icon: '🧢', book: 'Chapter 5' },
    { title: 'simple present', ar: 'المضارع البسيط', icon: '🏃', book: 'Chapter 5' }
  ];

  /* UI voice lines */
  const UI = [
    { id: 'ui_hello', say: 'أهلاً أهلاً يا مالك! أنا شلبي، مستر إنجلش بتاعك! يلا نتعلم إنجليزي ونلعب. اختار الدرس يا وحش!', personal: true, note: 'plays when the home screen opens (once per app launch)' },
    { id: 'ui_quiz_intro', say: 'يلا بينا! وقت الأسئلة! دوس على الإجابة الصح!', note: 'start of every quiz' },
    { id: 'ui_your_turn', say: 'دورك يا وحش!', note: 'after a repeat-after-me line', short: true },
    { id: 'ui_locked', say: 'الدرس ده لسه مجهز. قريب جداً! جرب درس تاني.', note: 'tap on a locked lesson card' },
    { id: 'ui_cheer_1', say: 'برافو يا وحش!', kind: 'correct' },
    { id: 'ui_cheer_2', say: 'صح! عظمة عظمة!', kind: 'correct' },
    { id: 'ui_cheer_3', say: 'ايوه كده! انت جامد!', kind: 'correct' },
    { id: 'ui_cheer_4', say: 'هاهاها! شاطر أوي يا بطل!', kind: 'correct', note: 'with belly laugh' },
    { id: 'ui_cheer_5', say: 'ممتاز! انت أقوى حد في صحابك!', kind: 'correct' },
    { id: 'ui_cheer_6', say: 'يا سلام! مستر إنجلش فخور بيك!', kind: 'correct' },
    { id: 'ui_try_1', say: 'قريب! جرب تاني يا بطل.', kind: 'wrong' },
    { id: 'ui_try_2', say: 'ولا يهمك، جرب تاني!', kind: 'wrong' },
    { id: 'ui_try_3', say: 'مممم، لأ. فكر تاني وانت هتعرف!', kind: 'wrong' },
    { id: 'ui_try_4', say: 'ماتزعلش، كلنا بنغلط. جرب تاني!', kind: 'wrong' },
    { id: 'ui_done_3', say: 'ثلاث نجوم يا مالك! انت بطل البطل! هاهاها! يلا نتعلم درس جديد؟', personal: true, kind: 'result', note: '3 stars' },
    { id: 'ui_done_2', say: 'نجمتين يا مالك! شاطر أوي! ممكن تاخد تلاتة لو لعبت تاني. جرب!', personal: true, kind: 'result', note: '2 stars' },
    { id: 'ui_done_1', say: 'نجمة يا مالك! بداية حلوة! العب الدرس تاني وهتبقى أحسن!', personal: true, kind: 'result', note: '1 star' }
  ];

  root.MRE_DATA = { LESSONS, SOON, UI };
  if (typeof module !== 'undefined') module.exports = root.MRE_DATA;
})(typeof window !== 'undefined' ? window : globalThis);
