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
        { id: 'can_s01', vis: TX("can  can't"), en: "can  and  can't", ar: 'بنستخدمهم نقول نقدر نعمل حاجة ولا لأ', say: 'يا أهلاً يا مالك! النهارده هنتعلم كلمتين: can، يعني أقدر. وcan\'t، يعني مقدرش. بنقول بيهم أنا أقدر أعمل إيه، ومقدرش أعمل إيه. يلا بينا!', personal: true },
        { id: 'can_s02', vis: E('🏊'), en: 'I can swim.', ar: 'أنا أستطيع السباحة', say: 'شوف الولد بيعوم! I can swim. يعني أنا أقدر أعوم. can، يعني أقدر. قول معايا: I can swim!', say_it: true },
        { id: 'can_s03', vis: E('🏊', { cross: true }), en: "I can't swim.", ar: 'أنا لا أستطيع السباحة', say: 'وهنا علامة إكس! I can\'t swim. يعني أنا مقدرش أعوم. can\'t، يعني مقدرش. قول معايا: I can\'t swim!', say_it: true },
        { id: 'can_s04', vis: E('🦘'), en: 'I can jump.', ar: 'أنا أستطيع القفز', say: 'شوف الكنغر بيقفز! I can jump. يعني أنا أقدر أنط. قول معايا: I can jump!', say_it: true },
        { id: 'can_s05', vis: E('🎨'), en: 'I can draw.', ar: 'أنا أستطيع الرسم', say: 'وده رسم جميل! I can draw. يعني أنا أقدر أرسم. قول معايا: I can draw!', say_it: true },
        { id: 'can_s06', vis: E('🏃', { cross: true }), en: "I can't run.", ar: 'أنا لا أستطيع الجري', say: 'وهنا علامة إكس تاني! I can\'t run. يعني أنا مقدرش أجري. قول معايا: I can\'t run!', say_it: true },
        { id: 'can_s07', vis: E('⚽'), en: 'He can kick.', ar: 'هو يستطيع الركل', say: 'وده ولد بيشوط الكورة! He can kick. يعني هو يقدر يشوط. قول معايا: He can kick!', say_it: true },
        { id: 'can_s08', vis: E('❌'), en: "✕ = can't", ar: 'علامة إكس يعني can\'t', say: 'خد بالك يا بطل! لو الصورة عليها علامة إكس، نقول can\'t. ولو مفيش علامة، نقول can.' },
        { id: 'can_s09', vis: TX("can  ·  can't"), en: "can = أقدر   can't = مقدرش", ar: 'can أقدر، can\'t مقدرش', say: 'برافو عليك يا بطل! can يعني أقدر. can\'t يعني مقدرش. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'can_q1', vis: E('🦘', { cap: 'jump' }), prompt: 'I ___ jump.', say: 'الكنغر ده بيقفز، jump. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'I can jump! أنا أقدر أنط.', fix: 'الكنغر بيقفز، يبقى can.' },
        { id: 'can_q2', vis: E('🏊', { cap: 'swim', cross: true }), prompt: 'I ___ swim.', say: 'شوف علامة الإكس! swim، يعني أعوم. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "I can't swim! أنا مقدرش أعوم.", fix: 'في علامة إكس، يبقى can\'t.' },
        { id: 'can_q3', vis: E('🎨', { cap: 'draw' }), prompt: 'I ___ draw.', say: 'الرسمة دي حلوة! draw، يعني أرسم. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'I can draw! أنا أقدر أرسم.', fix: 'مفيش علامة إكس، يبقى can.' },
        { id: 'can_q4', vis: E('🏃', { cap: 'run', cross: true }), prompt: 'I ___ run.', say: 'وعلامة إكس تاني! run، يعني أجري. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "I can't run! أنا مقدرش أجري.", fix: 'في علامة إكس، يبقى can\'t.' },
        { id: 'can_q5', vis: E('⚽', { cap: 'kick' }), prompt: 'He ___ kick.', say: 'الولد بيشوط الكورة، kick. نقول He can ولا He can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'He can kick! هو يقدر يشوط.', fix: 'مفيش علامة إكس، يبقى can.' },
        { id: 'can_q6', vis: TX('I can swim.'), prompt: 'Which one is  I can swim ?', say: 'دوس على الصورة اللي هي I can swim. أنا أقدر أعوم!', type: 'pic', opts: [E('🏊'), E('🏊', { cross: true }), E('🎨')], ans: 0, right: 'I can swim! الولد بيعوم.', fix: 'can swim يعني بيعوم. دوس على الصورة اللي بتعوم من غير إكس.' }
      ]
    },
    /* ---------------- 3. prepositions (p17) ---------------- */
    {
      id: 'prep', title: 'Preposition', ar: 'حروف الجر', icon: '📦', color: ['#43cea2', '#185a9d'], book: 'Page 17',
      steps: [
        { id: 'prep_s01', vis: SC('box', 'in'), en: 'Where is the bird?', ar: 'حروف الجر بنحدد بيها المكان فين', say: 'أهلاً يا مالك! النهارده هنتعلم حروف الجر. حروف الجر بتقولنا المكان فين! هنقول العصفور فين: under، on، next to، in. يلا بينا!', personal: true },
        { id: 'prep_s02', vis: SC('table', 'under'), en: 'under', ar: 'under يعني تحت', say: 'العصفور ده تحت الترابيزة! under. under، يعني تحت. قول معايا: under!', say_it: true },
        { id: 'prep_s03', vis: SC('box', 'on'), en: 'on', ar: 'on يعني على', say: 'والعصفور ده على الصندوق! on. on، يعني على. قول معايا: on!', say_it: true },
        { id: 'prep_s04', vis: SC('box', 'next'), en: 'next to', ar: 'next to يعني بجانب', say: 'والعصفور ده جنب الصندوق! next to. next to، يعني بجانب. قول معايا: next to!', say_it: true },
        { id: 'prep_s05', vis: SC('box', 'in'), en: 'in', ar: 'in يعني في', say: 'والعصفور ده جوه الصندوق! in. in، يعني في. قول معايا: in!', say_it: true },
        { id: 'prep_s06', vis: TX('under · on · next to · in'), en: 'under  on  next to  in', ar: 'تحت، على، بجانب، في', say: 'برافو عليك يا وحش! under تحت، on على، next to بجانب، in في. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'prep_q1', vis: SC('box', 'in'), prompt: 'The bird is ___ the box.', say: 'العصفور فين؟ in ولا on ولا under ولا next to؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'in', right: 'in the box! العصفور جوه الصندوق.', fix: 'العصفور جوه الصندوق. يبقى in.' },
        { id: 'prep_q2', vis: SC('table', 'under'), prompt: 'The bird is ___ the table.', say: 'والعصفور ده فين بالنسبة للترابيزة؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'under', right: 'under the table! العصفور تحت الترابيزة.', fix: 'العصفور تحت الترابيزة. يبقى under.' },
        { id: 'prep_q3', vis: SC('box', 'on'), prompt: 'The bird is ___ the box.', say: 'والعصفور ده فين بالنسبة للصندوق؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'on', right: 'on the box! العصفور على الصندوق.', fix: 'العصفور على الصندوق. يبقى on.' },
        { id: 'prep_q4', vis: SC('box', 'next'), prompt: 'The bird is ___ the box.', say: 'والعصفور ده فين؟', type: 'word', opts: ['in', 'on', 'under', 'next to'], ans: 'next to', right: 'next to the box! العصفور جنب الصندوق.', fix: 'العصفور جنب الصندوق. يبقى next to.' },
        { id: 'prep_q5', vis: TX('under the table'), prompt: 'Which one is  under the table ?', say: 'دوس على الصورة اللي فيها العصفور under the table. تحت الترابيزة!', type: 'pic', opts: [SC('table', 'on'), SC('table', 'next'), SC('table', 'under')], ans: 2, right: 'under the table! عيني عليك يا شاطر.', fix: 'under يعني تحت. دوس على العصفور اللي تحت الترابيزة.' },
        { id: 'prep_q6', vis: TX('in the box'), prompt: 'Which one is  in the box ?', say: 'دوس على الصورة اللي فيها العصفور in the box. جوه الصندوق!', type: 'pic', opts: [SC('box', 'on'), SC('box', 'in'), SC('box', 'next')], ans: 1, right: 'in the box! العصفور جوه الصندوق.', fix: 'in يعني جوه. دوس على العصفور اللي جوه الصندوق.' }
      ]
    },
    /* ---------------- 4. adjectives (p56) ---------------- */
    {
      id: 'adj', title: 'Adjectives', ar: 'الصفات', icon: '🌈', color: ['#f6d365', '#fda085'], book: 'Page 56',
      steps: [
        { id: 'adj_s01', vis: TX('fat  tall  sad  fast'), en: 'fat · tall · sad · fast', ar: 'الصفة كلمة بتوصف شخص أو شيء', say: 'يا أهلاً يا مالك! إيه هي الصفات يا شاطر؟ الصفة هي كلمة بتوصف شخص أو حاجة معينة. زي: fat، tall، sad، fast. يلا بينا!', personal: true },
        { id: 'adj_s02', vis: SH('fat'), en: 'Shalabi is fat.', ar: 'fat يعني تخين', say: 'شوف شلبي بقى تخين! Shalabi is fat. fat، يعني تخين. قول معايا: fat!', say_it: true },
        { id: 'adj_s03', vis: SH('thin'), en: 'Shalabi is thin.', ar: 'thin يعني رفيع', say: 'وشوف شلبي بقى رفيع! Shalabi is thin. thin، يعني رفيع. قول معايا: thin!', say_it: true },
        { id: 'adj_s04', vis: SH('tall'), en: 'Shalabi is tall.', ar: 'tall يعني طويل', say: 'وشلبي بقى طويل أوي! Shalabi is tall. tall، يعني طويل. قول معايا: tall!', say_it: true },
        { id: 'adj_s05', vis: SH('short'), en: 'Shalabi is short.', ar: 'short يعني قصير', say: 'وشلبي بقى قصير! Shalabi is short. short، يعني قصير. قول معايا: short!', say_it: true },
        { id: 'adj_s06', vis: E('😢'), en: 'a sad girl', ar: 'sad يعني حزين', say: 'وده حزين، بيعيط! a sad girl. sad، يعني حزين. قول معايا: sad!', say_it: true },
        { id: 'adj_s07', vis: E('🚆'), en: 'a fast train', ar: 'fast يعني سريع', say: 'وده قطر سريع أوي! a fast train. fast، يعني سريع. قول معايا: fast!', say_it: true },
        { id: 'adj_s08', vis: E('🐢'), en: 'a slow turtle', ar: 'slow يعني بطيء', say: 'وده سلحفاة بتمشي براحة! a slow turtle. slow، يعني بطيء. قول معايا: slow!', say_it: true },
        { id: 'adj_s09', vis: TX('fat boy\nsad girl\nfast train'), en: 'adjective + noun', ar: 'خد بالك: الصفة بتيجي قبل الاسم', say: 'خد بالك يا شاطر! الصفة بتيجي قبل الاسم. fat boy. sad girl. fast train. الصفة الأول، وبعدها الاسم!' },
        { id: 'adj_s10', vis: TX('fat · thin · tall · short'), en: 'fat/thin  tall/short  sad  fast/slow', ar: 'كل كلمة وعكسها', say: 'برافو عليك يا وحش! fat وthin. tall وshort. sad. fast وslow. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'adj_q1', vis: TX('fat'), prompt: 'Which one is  fat ?', say: 'دوس على الصورة اللي هي fat. مين التخين؟', type: 'pic', opts: [SH('thin'), SH('fat')], ans: 1, right: 'fat! تخين وجميل.', fix: 'fat يعني تخين. دوس على التخين.' },
        { id: 'adj_q2', vis: TX('tall'), prompt: 'Which one is  tall ?', say: 'دوس على الصورة اللي هي tall. مين الطويل؟', type: 'pic', opts: [SH('tall'), SH('short')], ans: 0, right: 'tall! طويل زي الجبل.', fix: 'tall يعني طويل. دوس على الطويل.' },
        { id: 'adj_q3', vis: TX('sad'), prompt: 'Which one is  sad ?', say: 'دوس على الصورة اللي هي sad. مين الحزين؟', type: 'pic', opts: [E('😄'), E('😢')], ans: 1, right: 'sad! حزين شوية. ماتزعلش!', fix: 'sad يعني حزين. دوس على الوش الحزين.' },
        { id: 'adj_q4', vis: TX('fast'), prompt: 'Which one is  fast ?', say: 'دوس على الصورة اللي هي fast. مين السريع؟', type: 'pic', opts: [E('🐢'), E('🚆')], ans: 1, right: 'fast! القطر سريع أوي.', fix: 'fast يعني سريع. دوس على القطر.' },
        { id: 'adj_q5', vis: E('😢'), prompt: 'sad  or  fast ?', say: 'الوش ده بيعيط! هو sad ولا fast؟', type: 'word', opts: ['sad', 'fast'], ans: 'sad', right: 'sad! حزين وبيعيط.', fix: 'الوش بيعيط. يبقى sad.' },
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
