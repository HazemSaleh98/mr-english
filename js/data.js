/* Mr English: curriculum data (Top Grammar KG). Every spoken line has an id -> audio/<id>.mp3 */
(function (root) {
  const E = (e, extra) => Object.assign({ k: 'emoji', e }, extra || {});
  const SH = (cls) => ({ k: 'sh', cls });
  const SC = (o, p) => ({ k: 'scene', o, p });
  const TX = (t) => ({ k: 'text', t });
  const KICK = (extra) => Object.assign({ k: 'kick' }, extra || {});
  const ART = (extra) => Object.assign({ k: 'emoji', e: '🧑‍🎨' }, extra || {});

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
        { id: 'can_s04', vis: E('🦘'), en: 'It can jump.', ar: 'هو يستطيع القفز، بنقول It للحيوان', say: 'شوف الكنغر بيقفز! It can jump. يعني هو يقدر ينط. بنقول It لما نتكلم عن حيوان. قول معايا: It can jump!', say_it: true },
        { id: 'can_s05', vis: ART(), en: 'I can draw.', ar: 'أنا أستطيع الرسم', say: 'وده رسم جميل! I can draw. يعني أنا أقدر أرسم. قول معايا: I can draw!', say_it: true },
        { id: 'can_s06', vis: E('🏃', { cross: true }), en: "I can't run.", ar: 'أنا لا أستطيع الجري', say: 'وهنا علامة إكس تاني! I can\'t run. يعني أنا مقدرش أجري. قول معايا: I can\'t run!', say_it: true },
        { id: 'can_s07', vis: KICK(), en: 'He can kick.', ar: 'هو يستطيع الركل', say: 'وده ولد بيشوط الكورة! He can kick. يعني هو يقدر يشوط. قول معايا: He can kick!', say_it: true },
        { id: 'can_s08', vis: E('❌'), en: "✕ = can't", ar: 'علامة إكس يعني can\'t', say: 'خد بالك يا بطل! لو الصورة عليها علامة إكس، نقول can\'t. ولو مفيش علامة، نقول can.' },
        { id: 'can_s09', vis: TX("can  ·  can't"), en: "can = أقدر   can't = مقدرش", ar: 'can أقدر، can\'t مقدرش', say: 'برافو عليك يا بطل! can يعني أقدر. can\'t يعني مقدرش. يلا نلعب الأسئلة!' }
      ],
      quiz: [
        { id: 'can_q1', vis: E('🦘', { cap: 'jump' }), prompt: 'It ___ jump.', say: 'الكنغر ده بيقفز، jump. نقول It can ولا It can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'It can jump! الكنغر بينط.', fix: 'الكنغر بيقفز، يبقى can.' },
        { id: 'can_q2', vis: E('🏊', { cap: 'swim', cross: true }), prompt: 'I ___ swim.', say: 'شوف علامة الإكس! swim، يعني أعوم. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "I can't swim! أنا مقدرش أعوم.", fix: 'في علامة إكس، يبقى can\'t.' },
        { id: 'can_q3', vis: ART({ cap: 'draw' }), prompt: 'I ___ draw.', say: 'الرسمة دي حلوة! draw، يعني أرسم. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'I can draw! أنا أقدر أرسم.', fix: 'مفيش علامة إكس، يبقى can.' },
        { id: 'can_q4', vis: E('🏃', { cap: 'run', cross: true }), prompt: 'I ___ run.', say: 'وعلامة إكس تاني! run، يعني أجري. نقول I can ولا I can\'t؟', type: 'word', opts: ['can', "can't"], ans: "can't", right: "I can't run! أنا مقدرش أجري.", fix: 'في علامة إكس، يبقى can\'t.' },
        { id: 'can_q5', vis: KICK({ cap: 'kick' }), prompt: 'He ___ kick.', say: 'الولد بيشوط الكورة، kick. نقول He can ولا He can\'t؟', type: 'word', opts: ['can', "can't"], ans: 'can', right: 'He can kick! هو يقدر يشوط.', fix: 'مفيش علامة إكس، يبقى can.' },
        { id: 'can_q6', vis: TX('I can swim.'), prompt: 'Which one is  I can swim ?', say: 'دوس على الصورة اللي هي I can swim. أنا أقدر أعوم!', type: 'pic', opts: [E('🏊'), E('🏊', { cross: true }), ART()], ans: 0, right: 'I can swim! الولد بيعوم.', fix: 'can swim يعني بيعوم. دوس على الصورة اللي بتعوم من غير إكس.' }
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
      id: 'adj', title: 'Adjectives', ar: 'الصفات', icon: '<span class="pairic"><img class="f" src="img/blue_stand.png" alt=""><img class="t" src="img/blue_stand.png" alt=""></span>', color: ['#f6d365', '#fda085'], book: 'Page 56',
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
    { id: 'these', title: 'these · those', ar: 'دول، دوك', icon: '👆', book: 'Page 24' },
    { id: 'noun', title: 'Nouns', ar: 'الأسماء', icon: '🏠', book: 'Page 29' },
    { id: 'pron', title: 'Pronouns', ar: 'الضمائر', icon: '🧒', book: 'Page 31' },
    { id: 'heshe', title: 'he · she', ar: 'هو، هي', icon: '👦', book: 'Page 32' },
    { id: 'it', title: 'it', ar: 'للحاجات والحيوان', icon: '🐕', book: 'Page 34' },
    { id: 'they', title: 'I · we · they', ar: 'أنا، إحنا، هم', icon: '👪', book: 'Page 38' },
    { id: 'verb', title: 'Verbs', ar: 'الأفعال', icon: '🏃', book: 'Page 43' },
    { id: 'tobe', title: 'verb to be', ar: 'am · is · are', icon: '⭐', book: 'Page 47' },
    { id: 'nbe', title: 'not (is not)', ar: 'النفي', icon: '🚫', book: 'Page 52' },
    { id: 'isit', title: 'Is it ...?', ar: 'هل هو؟', icon: '❓', book: 'Page 60' },
    { id: 'what', title: 'What is it?', ar: 'ده إيه؟', icon: '🔍', book: 'Page 64' },
    { id: 'have', title: 'have · has', ar: 'عندي، عنده', icon: '🎒', book: 'Page 66' },
    { id: 'hish', title: 'his · her', ar: 'بتاعه، بتاعها', icon: '🧢', book: 'Page 70' },
    { id: 'pres', title: 'simple present', ar: 'المضارع البسيط', icon: '🍽️', book: 'Page 73' },
    { id: 'nsimp', title: "don't · doesn't", ar: 'نفي المضارع', icon: '🙅', book: 'Page 73' }
  ];

  /* UI voice lines */
  const UI = [
    { id: 'mike_intro', say: 'أنا مارد، وَشْوَشْنِي! أنا صاحب شلبي، وجاي أشجعك معاه!', kind: 'mike', note: 'Mike (Gemini Puck): first time he appears' },
    { id: 'mike_ok_1', say: 'برافو عليك يا مالك يا بطل! عين واحدة وشايفاك شاطر!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer', personal: true },
    { id: 'mike_ok_2', say: 'الله! إجابة جامدة!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer' },
    { id: 'mike_ok_3', say: 'كده يا مالك يا بطل! كمل!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer', personal: true },
    { id: 'mike_ok_4', say: 'صح! أنا فرحان بيك أوي!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer' },
    { id: 'mike_streak_1', say: 'ولا غلطة! انت نجم يا مالك!', kind: 'mike', note: 'Mike (Gemini Puck): 3 correct in a row', personal: true },
    { id: 'mike_streak_2', say: 'ده انت مولع! كمل كده!', kind: 'mike', note: 'Mike (Gemini Puck): 3 correct in a row' },
    { id: 'mike_retry_1', say: 'ولا يهمك يا مالك يا بطل! جرب تاني، انت تقدر!', kind: 'mike', note: 'Mike (Gemini Puck): after a wrong answer', personal: true },
    { id: 'mike_retry_2', say: 'قربت! فكر تاني شوية.', kind: 'mike', note: 'Mike (Gemini Puck): after a wrong answer' },
    { id: 'mike_retry_3', say: 'الغلط بيعلمنا! يلا تاني!', kind: 'mike', note: 'Mike (Gemini Puck): after a wrong answer' },
    { id: 'mike_done_1', say: 'خلصنا الدرس! انت أحسن واحد في الدنيا يا مالك!', kind: 'mike', note: 'Mike (Gemini Puck): finished a lesson', personal: true },
    { id: 'mike_done_2', say: 'برافو يا مالك يا بطل! شلبي وأنا فخورين بيك أوي!', kind: 'mike', note: 'Mike (Gemini Puck): finished a lesson', personal: true },
    { id: 'mike_done_3', say: 'تعالى نلعب درس تاني؟ أنا جاهز!', kind: 'mike', note: 'Mike (Gemini Puck): finished a lesson' },
    { id: 'mike_ok_1_luka', say: 'برافو عليك يا لوكة يا بطل! عين واحدة وشايفاك شاطر!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer', personal: true },
    { id: 'mike_ok_3_luka', say: 'كده يا لوكة يا بطل! كمل!', kind: 'mike', note: 'Mike (Gemini Puck): after a correct answer', personal: true },
    { id: 'mike_streak_1_luka', say: 'ولا غلطة! انت نجم يا لوكة!', kind: 'mike', note: 'Mike (Gemini Puck): 3 correct in a row', personal: true },
    { id: 'mike_retry_1_luka', say: 'ولا يهمك يا لوكة يا بطل! جرب تاني، انت تقدر!', kind: 'mike', note: 'Mike (Gemini Puck): after a wrong answer', personal: true },
    { id: 'mike_done_1_luka', say: 'خلصنا الدرس! انت أحسن واحد في الدنيا يا لوكة!', kind: 'mike', note: 'Mike (Gemini Puck): finished a lesson', personal: true },
    { id: 'mike_done_2_luka', say: 'برافو يا لوكة يا بطل! شلبي وأنا فخورين بيك أوي!', kind: 'mike', note: 'Mike (Gemini Puck): finished a lesson', personal: true },
    { id: 'ui_cheer_1_luka', say: 'برافو يا لوكة يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_3_luka', say: 'ايوه كده يا لوكة يا بطل! انت جامد!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_4_luka', say: 'شاطر أوي يا لوكة يا بطل!', personal: true, kind: 'correct', note: 'luka variant' },
    { id: 'ui_cheer_5_luka', say: 'ممتاز يا لوكة يا بطل! انت أقوى حد في صحابك!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_8_luka', say: 'تمام التمام يا لوكة يا بطل! كمّل كده!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_10_luka', say: 'صح يا سيدي! دماغك تقيلة يا لوكة يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_13_luka', say: 'ده انت مش سهل يا لوكة يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_hello', say: 'أهلاً أهلاً يا مالك! أنا شلبي سولوفانة، مستر إنجلش بتاعك! يلا نتعلم إنجليزي ونلعب. اختار الدرس يا وحش!', personal: true, note: 'plays when the home screen opens (once per app launch)' },
    { id: 'ui_quiz_intro', say: 'يلا بينا! وقت الأسئلة! دوس على الإجابة الصح!', note: 'start of every quiz' },
    { id: 'ui_your_turn', say: 'دورك يا وحش!', note: 'after a repeat-after-me line', short: true },
    { id: 'ui_locked', say: 'الدرس ده لسه مجهز. قريب جداً! جرب درس تاني.', note: 'tap on a locked lesson card' },
    { id: 'ui_cheer_1', say: 'برافو يا مالك يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_2', say: 'صح! عظمة عظمة!', kind: 'correct' },
    { id: 'ui_cheer_3', say: 'ايوه كده يا مالك يا بطل! انت جامد!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_4', say: 'شاطر أوي يا مالك يا بطل!', personal: true, kind: 'correct', note: 'with belly laugh' },
    { id: 'ui_cheer_5', say: 'ممتاز يا مالك يا بطل! انت أقوى حد في صحابك!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_6', say: 'يا سلام! مستر إنجلش فخور بيك!', kind: 'correct' },
    { id: 'ui_try_1', say: 'قريب! جرب تاني يا بطل.', kind: 'wrong' },
    { id: 'ui_try_2', say: 'ولا يهمك، جرب تاني!', kind: 'wrong' },
    { id: 'ui_try_3', say: 'مممم، لأ. فكر تاني وانت هتعرف!', kind: 'wrong' },
    { id: 'ui_try_4', say: 'ماتزعلش، كلنا بنغلط. جرب تاني!', kind: 'wrong' },
    { id: 'ui_done_3', say: 'ثلاث نجوم يا مالك! انت بطل البطل! يلا نتعلم درس جديد؟', personal: true, kind: 'result', note: '3 stars' },
    { id: 'ui_done_2', say: 'نجمتين يا مالك! شاطر أوي! ممكن تاخد تلاتة لو لعبت تاني. جرب!', personal: true, kind: 'result', note: '2 stars' },
    { id: 'ui_done_1', say: 'نجمة يا مالك! بداية حلوة! العب الدرس تاني وهتبقى أحسن!', personal: true, kind: 'result', note: '1 star' },
    { id: 'ui_fun_aan_1', say: 'تفاحة؟ an apple! ريحة التفاح فتحت نفسي!', kind: 'correct', note: 'joke after a correct answer in the aan lesson (plays about 1 in 3)' },
    { id: 'ui_fun_aan_2', say: 'a ball وan egg! هو انت اللي بتعلمني!', kind: 'correct', note: 'joke after a correct answer in the aan lesson (plays about 1 in 3)' },
    { id: 'ui_fun_aan_3', say: 'a و an! انت بقيت أستاذ!', kind: 'correct', note: 'joke after a correct answer in the aan lesson (plays about 1 in 3)' },
    { id: 'ui_fun_can_1', say: 'can! لو أنا أقدر أنط، فانت أقدر مني!', kind: 'correct', note: 'joke after a correct answer in the can lesson (plays about 1 in 3)' },
    { id: 'ui_fun_can_2', say: 'الكنغر بيقول It can jump! وأنا بقول: برافو عليك!', kind: 'correct', note: 'joke after a correct answer in the can lesson (plays about 1 in 3)' },
    { id: 'ui_fun_can_3', say: 'مين يقدر؟ انت تقدر! can can can!', kind: 'correct', note: 'joke after a correct answer in the can lesson (plays about 1 in 3)' },
    { id: 'ui_fun_prep_1', say: 'العصفورة مبسوطة، عرفت مكانها!', kind: 'correct', note: 'joke after a correct answer in the prep lesson (plays about 1 in 3)' },
    { id: 'ui_fun_prep_2', say: 'under و on و next to و in! أنا لسه بدور على الصندوق!', kind: 'correct', note: 'joke after a correct answer in the prep lesson (plays about 1 in 3)' },
    { id: 'ui_fun_prep_3', say: 'عينك زي الرادار! بتلاقي كل حاجة!', kind: 'correct', note: 'joke after a correct answer in the prep lesson (plays about 1 in 3)' },
    { id: 'ui_fun_adj_1', say: 'أنا الكبير التخين وانت الشاطر! صح صح!', kind: 'correct', note: 'joke after a correct answer in the adj lesson (plays about 1 in 3)' },
    { id: 'ui_fun_adj_2', say: 'طويل وقصير! أنا الطويل وانت الذكي!', kind: 'correct', note: 'joke after a correct answer in the adj lesson (plays about 1 in 3)' },
    { id: 'ui_fun_adj_3', say: 'القطر السريع! تشو تشو! صح عليك!', kind: 'correct', note: 'joke after a correct answer in the adj lesson (plays about 1 in 3)' },
    { id: 'ui_cheer_7', say: 'الله! إجابة زي الفل!', kind: 'correct' },
    { id: 'ui_cheer_8', say: 'تمام التمام يا مالك يا بطل! كمّل كده!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_9', say: 'هو ده! عينك زي الصقر!', kind: 'correct' },
    { id: 'ui_cheer_10', say: 'صح يا سيدي! دماغك تقيلة يا مالك يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_11', say: 'ما شاء الله عليك! انت ذكي!', kind: 'correct' },
    { id: 'ui_cheer_12', say: 'أيوه! عشرة على عشرة!', kind: 'correct' },
    { id: 'ui_cheer_13', say: 'ده انت مش سهل يا مالك يا بطل!', personal: true, kind: 'correct' },
    { id: 'ui_cheer_14', say: 'برافو عليك! كده بتتعلم بجد!', kind: 'correct' },
    { id: 'ui_streak_1', say: 'ثلاثة ورا بعض! انت نار!', kind: 'streak', note: '3 correct in a row (replaces the cheer)' },
    { id: 'ui_streak_2', say: 'ولا غلطة! انت ماشي زي الصاروخ!', kind: 'streak', note: '3 correct in a row (replaces the cheer)' },
    { id: 'ui_streak_3', say: 'انت مش بتغلط النهارده!', kind: 'streak', note: '3 correct in a row (replaces the cheer)' },
    { id: 'ui_streak_4', say: 'تلاتة صح ورا بعض! مين يوقفك؟', kind: 'streak', note: '3 correct in a row (replaces the cheer)' },
    { id: 'ui_try_5', say: 'لأ مش كده، بس انت قريب! جرب تاني!', kind: 'wrong' },
    { id: 'ui_try_6', say: 'همم، مش دي. بص كويس وجرب!', kind: 'wrong' },
    { id: 'ui_try_7', say: 'حصل خير! المرة الجاية هتبقى صح!', kind: 'wrong' },
    { id: 'ui_try_8', say: 'فكر كده شوية وجرب تاني، انت تقدر!', kind: 'wrong' },
    { id: 'ui_try_9', say: 'أوبس! مش دي. بس مفيش مشكلة!', kind: 'wrong' },
    { id: 'ui_try_10', say: 'مش مهم، الغلطة بتعلمنا. جرب كمان مرة!', kind: 'wrong' },
    { id: 'ui_hint_1', say: 'استنى، هساعدك!', kind: 'hint', note: 'plays right before the lesson-specific _fix hint (after 2 wrong taps)' },
    { id: 'ui_hint_2', say: 'تعالى أقولك سر صغير!', kind: 'hint', note: 'plays right before the lesson-specific _fix hint (after 2 wrong taps)' },
    { id: 'ui_hint_3', say: 'ركز معايا شوية، بص كده!', kind: 'hint', note: 'plays right before the lesson-specific _fix hint (after 2 wrong taps)' },
    { id: 'ui_hint_4', say: 'مفيش مشكلة، هنفكر سوا!', kind: 'hint', note: 'plays right before the lesson-specific _fix hint (after 2 wrong taps)' },
    { id: 'ui_quiz_intro_2', say: 'جاهز يا بطل؟ يلا نشوف اللي اتعلمته!', note: 'start of every quiz (variant)' },
    { id: 'ui_quiz_intro_3', say: 'أسئلة حلوة جاية! ركز وجاوب!', note: 'start of every quiz (variant)' },
    { id: 'ui_quiz_intro_4', say: 'وقت التحدي! اختار الإجابة الصح!', note: 'start of every quiz (variant)' },
    { id: 'ui_quiz_intro_5', say: 'يلا يا وحش، وريني شطارتك!', note: 'start of every quiz (variant)' },
    { id: 'ui_your_turn_2', say: 'قولها معايا!', note: 'after a repeat-after-me line (variant)' },
    { id: 'ui_your_turn_3', say: 'يلا قول!', note: 'after a repeat-after-me line (variant)' },
    { id: 'ui_your_turn_4', say: 'اسمعني وقول زيي!', note: 'after a repeat-after-me line (variant)' },
    { id: 'ui_your_turn_5', say: 'دورك، وريني!', note: 'after a repeat-after-me line (variant)' },
    { id: 'ui_your_turn_6', say: 'قولها بصوت عالي!', note: 'after a repeat-after-me line (variant)' },
    { id: 'ui_done_3_2', say: 'ثلاث نجوم! ولا غلطة! انت أسطورة يا مالك!', kind: 'result', personal: true, note: '3 stars (variant)' },
    { id: 'ui_done_3_3', say: 'كامل الدسم! تلات نجوم! يلا على درس جديد؟', kind: 'result', note: '3 stars (variant)' },
    { id: 'ui_done_3_4', say: 'تلات نجوم! مستر إنجلش فخور بيك أوي!', kind: 'result', note: '3 stars (variant)' },
    { id: 'ui_done_2_2', say: 'نجمتين! حلو أوي! جرب مرة كمان وهتاخد التلاتة!', kind: 'result', note: '2 stars (variant)' },
    { id: 'ui_done_2_3', say: 'نجمتين يا بطل! قريب من الكمال!', kind: 'result', note: '2 stars (variant)' },
    { id: 'ui_done_2_4', say: 'شاطر! نجمتين في الجيب!', kind: 'result', note: '2 stars (variant)' },
    { id: 'ui_done_1_2', say: 'نجمة! حلو! كل مرة هتبقى أحسن!', kind: 'result', note: '1 stars (variant)' },
    { id: 'ui_done_1_3', say: 'نجمة النهارده، وبكرة اتنين! جرب تاني!', kind: 'result', note: '1 stars (variant)' },
    { id: 'ui_done_1_4', say: 'بداية كويسة يا بطل! نلعبها تاني؟', kind: 'result', note: '1 stars (variant)' },
    { id: 'ui_start_1', say: 'يلا نبدأ درس جديد!', note: 'lesson start, any lesson' },
    { id: 'ui_start_2', say: 'جاهز؟ اسمعني كويس!', note: 'lesson start, any lesson' },
    { id: 'ui_start_3', say: 'درس حلو جاي! ركز معايا!', note: 'lesson start, any lesson' },
    { id: 'ui_start_4', say: 'يلا بينا نتعلم حاجة جديدة!', note: 'lesson start, any lesson' },
    { id: 'ui_start_5', say: 'اتفضل يا بطل، هنبدأ!', note: 'lesson start, any lesson' },
    { id: 'ui_start_aan_1', say: 'النهارده هنعرف إمتى نقول a وإمتى an!', note: 'start of the aan lesson' },
    { id: 'ui_start_aan_2', say: 'a و an، سر صغير وهتعرفه! يلا!', note: 'start of the aan lesson' },
    { id: 'ui_start_can_1', say: 'النهارده هنعرف إيه اللي نقدر نعمله وإيه اللي مانقدرش!', note: 'start of the can lesson' },
    { id: 'ui_start_can_2', say: 'can و can\'t! هنتكلم عن اللي بنقدر عليه!', note: 'start of the can lesson' },
    { id: 'ui_start_prep_1', say: 'هنعرف الحاجة فين! under و on و next to و in!', note: 'start of the prep lesson' },
    { id: 'ui_start_prep_2', say: 'فين العصفورة؟ تعالى نشوف!', note: 'start of the prep lesson' },
    { id: 'ui_start_adj_1', say: 'هنوصف الحاجات! تخين ورفيع، طويل وقصير!', note: 'start of the adj lesson' },
    { id: 'ui_start_adj_2', say: 'الصفات! هنقول الحاجة شكلها إيه!', note: 'start of the adj lesson' },
    { id: 'ui_hello_2', say: 'يا أهلاً بمالك! وحشتني! يلا نلعب إنجليزي!', personal: true, note: 'home screen opens (variant)' },
    { id: 'ui_hello_3', say: 'مين جه؟ ده مالك البطل! يلا نتعلم حاجة جديدة!', personal: true, note: 'home screen opens (variant)' },
    { id: 'ui_hello_4', say: 'أهلاً يا وحش! شلبي هنا. اختار الدرس!', personal: true, note: 'home screen opens (variant)' },
    { id: 'ui_locked_2', say: 'ده لسه بيتجهز، جرب درس تاني!', note: 'locked lesson (variant)' },
    { id: 'ui_locked_3', say: 'استنى شوية! الدرس ده جاي قريب!', note: 'locked lesson (variant)' }
  ];

  /* extra units from the book TOC */
  const MORE = (typeof module !== 'undefined' ? require('./lessons2.js') : root.MRE_MORE)({ E, TX });
  MORE.forEach((l) => LESSONS.push(l));
  // spoken quiz questions: English first, then Arabic
  function enQ(q) {
    const p = q.prompt.replace(/\s+/g, ' ').trim();
    if (q.id === 'this_q6') return 'Which one is this ball?';
    if (/^a or an/.test(p)) return 'Is it a, or an?';
    if (/^Which one is/.test(p)) return p.replace(/ \?$/, '?');
    if (/^The bird is ___/.test(p)) return 'Where is the bird? In, on, under, or next to?';
    if (/___/.test(p) && /can/.test(q.say)) { const b = p.replace(/\.$/, ''); return b.replace('___', 'can') + ', or ' + b.replace('___', "can't") + '?'; }
    if (/___/.test(p)) return p.replace('___', 'blank');
    if (/ or /.test(p)) { const m = p.replace(/\s*\?+$/, '').split(' or '); const a = m[0].trim(); return 'Is it ' + (/^I(\s|$)/.test(a) ? a : a.charAt(0).toLowerCase() + a.slice(1)) + ', or ' + m[1].trim().replace(/\?+$/, '') + '?'; }
    return p;
  }
  LESSONS.forEach(l => (l.quiz || []).forEach(q => {
    if (q._en) return; q._en = enQ(q);
    let ar = q.say; const pr = q.prompt.replace(/\s+/g, ' ').trim().replace(/\?$/, '');
    if (ar.indexOf(pr) === 0) ar = ar.slice(pr.length).replace(/^[؟?]\s*/, '');
    q.say = q._en + ' ' + ar;
  }));
  const BOOK_ORDER = ['aan', 'num', 'plu', 'many', 'cnt', 'prep', 'this', 'these', 'noun', 'pron', 'heshe', 'it', 'they', 'verb', 'can', 'tobe', 'nbe', 'adj', 'isit', 'what', 'have', 'hish', 'pres', 'nsimp'];
  LESSONS.sort((a, b) => { const i = BOOK_ORDER.indexOf(a.id), j = BOOK_ORDER.indexOf(b.id); return (i < 0 ? 99 : i) - (j < 0 ? 99 : j); });
  const have = new Set(LESSONS.map((l) => l.id));
  root.MRE_DATA = { LESSONS, SOON: SOON.filter((s) => !s.id || !have.has(s.id)), UI };
  if (typeof module !== 'undefined') module.exports = root.MRE_DATA;
})(typeof window !== 'undefined' ? window : globalThis);
