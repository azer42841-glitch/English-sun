import { LevelInfo, Unit, Lesson, VideoItem, LevelAccessRecord, PlacementQuestion, ContactMessage, PaymentRecord, AuditLogItem, Certificate } from './types';

export const LEVEL_INFOS: LevelInfo[] = [
  {
    level: 'A1',
    titleEn: 'Discover 1 Beginner (American English)',
    titleAr: 'المستوى المبتدئ - Discover 1 (A1)',
    descriptionAr: 'منهج Discover 1 المتكامل: التحيات، الأرقام، البلدان، الرياضات، غرف المنزل، الروتين اليومي، الأفعال المساعدة، والمضارع البسيط.',
    isFree: true,
    priceUSD: 0,
    bookTitle: 'Discover 1 Student Book & Workbook (Virginia Evans - Jenny Dooley)',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
  {
    level: 'A2',
    titleEn: 'Elementary / Waystage',
    titleAr: 'المستوى الأساسي (A2)',
    descriptionAr: 'التحدث عن الخبرات الماضية، العائلة، التسوق، والتعامل مع المواقف البسيطة المباشرة.',
    isFree: false,
    priceUSD: 49,
    bookTitle: 'English Sun A2 Progress Book',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
  {
    level: 'B1',
    titleEn: 'Intermediate / Threshold',
    titleAr: 'المستوى المتوسط (B1)',
    descriptionAr: 'فهم النقاط الأساسية للنقاشات المألوفة، السفر، وصف الأحلام والآمال، وكتابة نصوص مترابطة.',
    isFree: false,
    priceUSD: 69,
    bookTitle: 'English Sun B1 Navigator Book',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
  {
    level: 'B2',
    titleEn: 'Upper-Intermediate / Vantage',
    titleAr: 'المستوى فوق المتوسط (B2)',
    descriptionAr: 'فهم الأفكار المعقدة للنصوص المجردة، التحدث بطلاقة وعفوية مع الناطقين الأصليين.',
    isFree: false,
    priceUSD: 89,
    bookTitle: 'English Sun B2 Mastery Book',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
  {
    level: 'C1',
    titleEn: 'Advanced / Effective Operational Proficiency',
    titleAr: 'المستوى المتقدم (C1)',
    descriptionAr: 'استخدام اللغة بمرونة وفعالية للأغراض الاجتماعية والأكاديمية والمهنية المعقدة.',
    isFree: false,
    priceUSD: 119,
    bookTitle: 'English Sun C1 Professional Book',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
  {
    level: 'C2',
    titleEn: 'Proficiency / Mastery',
    titleAr: 'مستوى الإتقان التام (C2)',
    descriptionAr: 'السهولة في التعبير عن دلالات المعنى المعقدة واستيعاب أي نوع من النصوص المكتوبة أو المنطوقة.',
    isFree: false,
    priceUSD: 149,
    bookTitle: 'English Sun C2 Elite Book',
    bookPdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    unitsCount: 3,
    lessonsCount: 30,
  },
];

export const MOCK_UNITS: Unit[] = [
  // A1 Units corresponding to Discover 1
  { id: 'u-a1-1', level: 'A1', unitNumber: 1, title: 'Starter & Module 1: People Around the World', titleAr: 'الوحدة الأولى: الحروف، الأرقام، والتعارف (Starter & Module 1)', descriptionAr: 'الحروف الإنجليزية، الأرقام، الألوان، الجنسيات، الرياضات، وفعل الكينونة (to be).', lessonsCount: 10 },
  { id: 'u-a1-2', level: 'A1', unitNumber: 2, title: 'Module 2: East West, Home Best', titleAr: 'الوحدة الثانية: المنزل والأجهزة وغرف البيت (Module 2)', descriptionAr: 'غرف المنزل، الأثاث، الأجهزة، There is / There are، حروف الجر.', lessonsCount: 10 },
  { id: 'u-a1-3', level: 'A1', unitNumber: 3, title: 'Module 3: Day After Day', titleAr: 'الوحدة الثالثة: الروتين اليومي والأيام والحيوانات (Module 3)', descriptionAr: 'الأنشطة اليومية، المضارع البسيط، الأيام والشهور، أفراد العائلة.', lessonsCount: 10 },

  // A2 Units
  { id: 'u-a2-1', level: 'A2', unitNumber: 1, title: 'A2 Unit 1: Past Experiences & Memories', titleAr: 'الوحدة الأولى: الخبرات الماضية والذكريات', descriptionAr: 'زمن الماضي البسيط (Simple Past)، الأفعال المنتظمة وغير المنتظمة، والتحدث عن العطلات.', lessonsCount: 10 },
  { id: 'u-a2-2', level: 'A2', unitNumber: 2, title: 'A2 Unit 2: Shopping & Daily Life', titleAr: 'الوحدة الثانية: التسوق والحياة اليومية', descriptionAr: 'الأسعار، الكميات، الملابس، طلب الطعام في المطاعم، والمقارنات.', lessonsCount: 10 },
  { id: 'u-a2-3', level: 'A2', unitNumber: 3, title: 'A2 Unit 3: Future Plans & Travel', titleAr: 'الوحدة الثالثة: خطط المستقبل والسفر', descriptionAr: 'صيغة المستقبل (Going to / Will)، حجوزات الفنادق، ووسائل المواصلات.', lessonsCount: 10 },

  // B1 Units
  { id: 'u-b1-1', level: 'B1', unitNumber: 1, title: 'B1 Unit 1: Life Choices & Ambitions', titleAr: 'الوحدة الأولى: خيارات الحياة والطموحات', descriptionAr: 'الخبرات الحياتية مع المضارع التام (Present Perfect)، وصف الشخصيات والأهداف.', lessonsCount: 10 },
  { id: 'u-b1-2', level: 'B1', unitNumber: 2, title: 'B1 Unit 2: Technology & Modern World', titleAr: 'الوحدة الثانية: التكنولوجيا والعالم الحديث', descriptionAr: 'الإنترنت، وسائل التواصل الاجتماعي، المبني للمجهول، والمقارنات المتقدمة.', lessonsCount: 10 },
  { id: 'u-b1-3', level: 'B1', unitNumber: 3, title: 'B1 Unit 3: Travel, Culture & Adventure', titleAr: 'الوحدة الثالثة: السفر والثقافة والمغامرة', descriptionAr: 'حالات التعبير عن الرأي، الجمل الشرطية الأولى والثانية، والثقافات العالمية.', lessonsCount: 10 },

  // B2 Units
  { id: 'u-b2-1', level: 'B2', unitNumber: 1, title: 'B2 Unit 1: Professional Careers & Business', titleAr: 'الوحدة الأولى: المهن الاحترافية وإدارة الأعمال', descriptionAr: 'لغة المقابلات الشخصية، السيرة الذاتية، المصطلحات التجارية، والأزمنة التامة المستمرة.', lessonsCount: 10 },
  { id: 'u-b2-2', level: 'B2', unitNumber: 2, title: 'B2 Unit 2: Science, Health & Environment', titleAr: 'الوحدة الثانية: العلوم والصحة والبيئة', descriptionAr: 'التغير المناخي، الابتكارات الطبية، صياغة الحجج والمناظرات باللغة الإنجليزية.', lessonsCount: 10 },
  { id: 'u-b2-3', level: 'B2', unitNumber: 3, title: 'B2 Unit 3: Arts, Media & Society', titleAr: 'الوحدة الثالثة: الفنون والإعلام والمجتمع', descriptionAr: 'النقد السينمائي والأدبي، التعبير المجازي، والخطابة العامة.', lessonsCount: 10 },

  // C1 Units
  { id: 'u-c1-1', level: 'C1', unitNumber: 1, title: 'C1 Unit 1: Advanced Academic Discourse', titleAr: 'الوحدة الأولى: الخطاب الأكاديمي المتقدم', descriptionAr: 'صياغة الأوراق البحثية، التحليل النقدي للنصوص المعقدة، والمفردات الأكاديمية.', lessonsCount: 10 },
  { id: 'u-c1-2', level: 'C1', unitNumber: 2, title: 'C1 Unit 2: Global Economy & Leadership', titleAr: 'الوحدة الثانية: الاقتصاد العالمي والقيادة', descriptionAr: 'التحليل الاقتصادي، استراتيجيات التفاوض المتقدمة، والتعبير البليغ.', lessonsCount: 10 },
  { id: 'u-c1-3', level: 'C1', unitNumber: 3, title: 'C1 Unit 3: Philosophy, Ethics & Culture', titleAr: 'الوحدة الثالثة: الفلسفة والأخلاق والثقافة', descriptionAr: 'مناقشة المعضلات الأخلاقية، التحليل الفلسفي المتقدم، والإتقان الأسلوبي.', lessonsCount: 10 },

  // C2 Units
  { id: 'u-c2-1', level: 'C2', unitNumber: 1, title: 'C2 Unit 1: Mastery of Nuance & Idioms', titleAr: 'الوحدة الأولى: إتقان الدلالات الدقيقة والتعابير الاصطلاحية', descriptionAr: 'التعابير الاصطلاحية المتقدمة، الفكاهة والنبرة في اللغة الإنجليزية.', lessonsCount: 10 },
  { id: 'u-c2-2', level: 'C2', unitNumber: 2, title: 'C2 Unit 2: Literary & Rhetorical Excellence', titleAr: 'الوحدة الثانية: التميز الأدبي والبلاغي', descriptionAr: 'تحليل الأعمال الأدبية الكلاسيكية، البلاغة، والكتابة الإبداعية المتميزة.', lessonsCount: 10 },
  { id: 'u-c2-3', level: 'C2', unitNumber: 3, title: 'C2 Unit 3: Native-Like Fluency & Leadership', titleAr: 'الوحدة الثالثة: الطلاقة الشبيهة بالمتحدث الأصلي والقيادة', descriptionAr: 'الخطابة الارتجالية رفيعة المستوى، المفردات النادرة، والإتقان التام.', lessonsCount: 10 },
];

export const MOCK_LESSONS: Lesson[] = [
  // Unit 1 Lessons (1 to 10)
  {
    id: 'l-a1-1-1',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 1: The Alphabet & Cardinal Numbers (1-100)',
    titleAr: 'الدرس 1: الأبجدية الإنجليزية والأرقام من 1 إلى 100',
    descriptionAr: 'من كتاب Discover 1 (صفحة 5-6): حفظ الحروف الهجائية والعد والسؤال عن العناوين وأرقام الهواتف.',
    durationMinutes: 15,
    objectives: [
      'نطق وحفظ 26 حرفاً هجائياً إنجليزياً.',
      'العد من 1 إلى 100 وتكوين الأرقام الترتيبية (1st, 2nd, 3rd).',
      'السؤال عن العنوان ورقم الهاتف (What is your address?).'
    ],
    vocabulary: [
      { id: 'v1', word: 'Alphabet', ipa: '/ˈælfəbet/', arabicMeaning: 'الأبجدية', exampleSentence: 'Learn the English alphabet.', exampleArabic: 'تعلم الأبجدية الإنجليزية.' },
      { id: 'v2', word: 'Hundred', ipa: '/ˈhʌndrəd/', arabicMeaning: 'مائة', exampleSentence: 'Count to one hundred.', exampleArabic: 'اعد حتى المائة.' },
      { id: 'v3', word: 'Address', ipa: '/əˈdres/', arabicMeaning: 'عنوان', exampleSentence: 'What is your address?', exampleArabic: 'ما هو عنوانك؟' },
      { id: 'v4', word: 'Telephone', ipa: '/ˈtelɪfoʊn/', arabicMeaning: 'هاتف', exampleSentence: 'My telephone number is 572-8309.', exampleArabic: 'رقم هاتفي هو 572-8309.' }
    ],
    grammarExplanationAr: 'للحديث عن الأرقام الأساسية نستخدم (one, two, three)، وللترتيب نستخدم الأرقام الترتيبية (first, second, third). للسؤال عن العنوان أو الهاتف نستخدم صيغة (What is your address/telephone number?).',
    readingText: {
      english: 'A: What is your address?\nB: 212 Milton Street.\nA: And your telephone number?\nB: Two-one-two, Milton Avenue, five-seven-two, eight-three-zero-nine.',
      arabic: 'أ: ما هو عنوانك؟\nب: 212 شارع ميلتون.\nأ: وما هو رقم هاتفك؟\nب: 212، شارع ميلتون، 572-8309.'
    },
    dialogue: [
      { speaker: 'A', text: 'What is your address?', textAr: 'ما هو عنوانك؟' },
      { speaker: 'B', text: '128 Burton Street.', textAr: '128 شارع بيرتون.' }
    ],
    exercises: [
      { id: 'ex-1', type: 'mcq', question: 'ما هو الرقم الترتيبى الأول (1st) بالإنجليزية؟', options: ['first', 'second', 'third', 'fourth'], correctAnswer: 'first', explanation: 'الرقم 1st يلفظ ويكتب first.' },
      { id: 'ex-2', type: 'fill_blank', question: 'أكمل: What is ________ telephone number?', options: ['your', 'you', 'he'], correctAnswer: 'your', explanation: 'نستخدم your للسؤال عن ملكية الشخص لشيء.' }
    ],
    summaryAr: 'تم التدرب على الأبجدية، الأرقام الأساسية والترتيبية، وسؤال العنوان والهاتف.',
    bookPageStart: 5,
    bookPageEnd: 6
  },
  {
    id: 'l-a1-1-2',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 2: School Subjects & Colors (A/An)',
    titleAr: 'الدرس 2: المواد المدرسية والألوان وقاعدة (A/An)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 6): التعرف على أدوات المدرسة، المواد الدراسية، الألوان، واستخدام أداة النكرة a/an.',
    durationMinutes: 20,
    objectives: [
      'حفظ أسماء المواد المدرسية (Math, History, English, Art).',
      'التعرف على ألوان الطيف والألوان الأساسية.',
      'استخدام a قبل الساكن و an قبل المتحرك.'
    ],
    vocabulary: [
      { id: 'v5', word: 'Atlas', ipa: '/ˈætləs/', arabicMeaning: 'أطلس / خريطة', exampleSentence: 'This is an atlas.', exampleArabic: 'هذا أطلس.' },
      { id: 'v6', word: 'Notebook', ipa: '/ˈnoʊtbʊk/', arabicMeaning: 'دفتر ملاحظات', exampleSentence: 'Open your notebook.', exampleArabic: 'افتح دفترك.' },
      { id: 'v7', word: 'Schoolbag', ipa: '/ˈskuːlbæg/', arabicMeaning: 'حقيبة مدرسية', exampleSentence: 'My schoolbag is blue.', exampleArabic: 'حقيبتي المدرسية لونه أزرق.' },
      { id: 'v8', word: 'Eraser', ipa: '/ɪˈreɪsər/', arabicMeaning: 'ممسااة / محاية', exampleSentence: 'I have an eraser.', exampleArabic: 'لدي ممحاة.' }
    ],
    grammarExplanationAr: 'نستخدم (a) قبل الأسماء المفردة التي تبدأ بحرف ساكن (a book, a pen)، ونستخدم (an) قبل الأسماء المفردة التي تبدأ بحرف متحرك a, e, i, o, u (an atlas, an eraser).',
    readingText: {
      english: 'A: What is this?\nB: It is an atlas.\nA: What color is it?\nB: It is blue.',
      arabic: 'أ: ما هذا؟\nب: إنه أطلس.\nأ: ما لونه؟\nب: إنه لونه أزرق.'
    },
    exercises: [
      { id: 'ex-3', type: 'mcq', question: 'اختر الأداة الصحيحة: This is ______ apple.', options: ['a', 'an', 'the'], correctAnswer: 'an', explanation: 'تبدأ كلمة apple بحرف a المتحرك فنستخدم an.' }
    ],
    summaryAr: 'تم تعلم المواد الدراسية والألوان وقاعدة أداة النكرة a/an.',
    bookPageStart: 6,
    bookPageEnd: 7
  },
  {
    id: 'l-a1-1-3',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 3: Countries & Nationalities',
    titleAr: 'الدرس 3: البلدان والجنسيات (Countries & Nationalities)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 7): التعرف على دول العالم وجنسيات سكانها وكيف تقول من أين أنت.',
    durationMinutes: 15,
    objectives: [
      'معرفة أسماء الدول مثل (Poland, Spain, USA, England, Mexico).',
      'تكوين اسم الجنسية (Polish, Spanish, American, Mexican).',
      'استخدام عبارة I am from ... و I am ...'
    ],
    vocabulary: [
      { id: 'v9', word: 'Country', ipa: '/ˈkʌntri/', arabicMeaning: 'دولة / بلد', exampleSentence: 'What is your country?', exampleArabic: 'ما هي دولتك؟' },
      { id: 'v10', word: 'Nationality', ipa: '/ˌnæʃəˈnæləti/', arabicMeaning: 'جنسية', exampleSentence: 'He is from Spain. He is Spanish.', exampleArabic: 'هو من إسبانيا. إنه إسباني.' },
      { id: 'v11', word: 'Flag', ipa: '/flæg/', arabicMeaning: 'علم الدولة', exampleSentence: 'The flag of the USA.', exampleArabic: 'علم الولايات المتحدة الأمريكية.' }
    ],
    grammarExplanationAr: 'للتعبير عن بلدك وجنسيتك، نقول: (I am from [الدولة]. I am [الجنسية]). مثل: I am from Spain. I am Spanish.',
    readingText: {
      english: 'Hi! I am Halina and I am from Poland. She is Polish.\nJuan is from Spain. He is Spanish.\nLaura is from the USA. She is American.',
      arabic: 'مرحباً! أنا هالينا وأنا من بولندا. هي بولندية.\nخوان من إسبانيا. إنه إسباني.\nلورا من الولايات المتحدة الأمريكية. إنها أمريكية.'
    },
    exercises: [
      { id: 'ex-4', type: 'mcq', question: 'ما هي جنسية شخص يقيم في England؟', options: ['English', 'Spanish', 'Mexican', 'Polish'], correctAnswer: 'English', explanation: 'المقيم في إنجلترا جنسيته English.' }
    ],
    summaryAr: 'تم تعلم أسماء الدول والجنسيات وطريقة تقديم البلد الأصلي.',
    bookPageStart: 7,
    bookPageEnd: 8
  },
  {
    id: 'l-a1-1-4',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 4: Sports & Hobbies (Module 1a)',
    titleAr: 'الدرس 4: الرياضات والهوايات المفضلة (Sports & Hobbies)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 8): تعلم الرياضات مثل volleyball, cycling, photography وتكوين الجمل عنها.',
    durationMinutes: 20,
    objectives: [
      'حفظ مفردات الرياضات والهوايات.',
      'استخدام صيغة (My favorite sport is...).',
      'التحدث عن هوايات أصدقائك.'
    ],
    vocabulary: [
      { id: 'v12', word: 'Hobby', ipa: '/ˈhɑːbi/', arabicMeaning: 'هواية', exampleSentence: 'What is your favorite hobby?', exampleArabic: 'ما هي هوايتك المفضلة؟' },
      { id: 'v13', word: 'Volleyball', ipa: '/ˈvɑːlibɔːl/', arabicMeaning: 'كرة الطائرة', exampleSentence: 'They play volleyball.', exampleArabic: 'هم يلعبون كرة الطائرة.' },
      { id: 'v14', word: 'Photography', ipa: '/fəˈtɑːɡrəfi/', arabicMeaning: 'التصوير الفوتوغرافي', exampleSentence: 'She loves photography.', exampleArabic: 'هي تحب التصوير الفوتوغرافي.' },
      { id: 'v15', word: 'Cycling', ipa: '/ˈsaɪklɪŋ/', arabicMeaning: 'ركوب الدراجات', exampleSentence: 'Cycling is fun.', exampleArabic: 'ركوب الدراجات ممتع.' }
    ],
    grammarExplanationAr: 'للتعبير عن الهواية المفضلة، نستخدم التركيبة: (My favorite sport/hobby is [النشاط]).',
    readingText: {
      english: 'John and Bob\'s favorite hobby is playing computer games.\nMy favorite sport is soccer. Sandra likes reading and painting.',
      arabic: 'الهواية المفضلة لجون وبوب هي لعب ألعاب الكمبيوتر.\nرياضتي المفضلة هي كرة القدم. ساندرا تحب القراءة والرسم.'
    },
    exercises: [
      { id: 'ex-5', type: 'mcq', question: 'ما معنى كلمة Cycling بالعربية؟', options: ['ركوب الدراجات', 'السباحة', 'كرة القدم', 'القراءة'], correctAnswer: 'ركوب الدراجات', explanation: 'Cycling تعني ركوب الدراجات.' }
    ],
    summaryAr: 'تم التدرب على مفردات الرياضات والهوايات والتحدث عنها.',
    bookPageStart: 8,
    bookPageEnd: 8
  },
  {
    id: 'l-a1-1-5',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 5: The Verb "To Be" (Affirmative)',
    titleAr: 'الدرس 5: فعل الكينونة To Be في الإثبات',
    descriptionAr: 'من كتاب Discover 1 (صفحة 8): تصريف وتطبيق verb to be (am, is, are) مع الضمائر المفردة والجمع.',
    durationMinutes: 20,
    objectives: [
      'حفظ تصريف verb to be في الإثبات (I am, You are, He/She/It is).',
      'استخدام الاختصارات (I\'m, You\'re, He\'s).',
      'تكوين جمل صحيحة عن العمر والجنسية.'
    ],
    vocabulary: [
      { id: 'v16', word: 'Affirmative', ipa: '/əˈfɜːrmətɪv/', arabicMeaning: 'صيغة الإثبات', exampleSentence: 'Affirmative sentences.', exampleArabic: 'جمل الإثبات.' },
      { id: 'v17', word: 'Pronoun', ipa: '/ˈproʊnaʊn/', arabicMeaning: 'ضمير', exampleSentence: 'Subject pronouns like I, he, she.', exampleArabic: 'ضمائر الفاعل مثل أنا، هو، هي.' }
    ],
    grammarExplanationAr: 'تصريف Verb To Be: I am (I\'m), You are (You\'re), He/She/It is (He\'s/She\'s/It\'s), We/You/They are (We\'re/They\'re).',
    readingText: {
      english: 'I am 17 years old. You are my friend. He is from Spain. She is a student.',
      arabic: 'أنا عمري 17 سنة. أنت صديقي. هو من إسبانيا. هي طالبة.'
    },
    exercises: [
      { id: 'ex-6', type: 'fill_blank', question: 'أكمل الجملة: He __________ a student.', options: ['am', 'is', 'are'], correctAnswer: 'is', explanation: 'ضمير المفرد المذكر He يأخذ الفعل is.' }
    ],
    summaryAr: 'تم إتقان تصريف واختصار فعل الكينونة To Be في حالة الإثبات.',
    bookPageStart: 8,
    bookPageEnd: 9
  },
  {
    id: 'l-a1-1-6',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 6: Star Forum & Reading Comprehension',
    titleAr: 'الدرس 6: منتدى النجوم وقراءة النصوص (Star Forum)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 9): قراءة نص تعريف الشخصيات والمراهقين (Marco & Orla) وفهم التفاصيل.',
    durationMinutes: 20,
    objectives: [
      'قراءة وفهم نص Star Forum.',
      'استخراج المعلومات المحددة من النص.',
      'التعرف على كلمات مفتاحية مثل (student, famous, dream, hero).'
    ],
    vocabulary: [
      { id: 'v18', word: 'Famous', ipa: '/ˈfeɪməs/', arabicMeaning: 'مشهور', exampleSentence: 'Cristiano Ronaldo is a famous player.', exampleArabic: 'كريستيانو رونالدو لاعب مشهور.' },
      { id: 'v19', word: 'Dream', ipa: '/driːm/', arabicMeaning: 'حلم', exampleSentence: 'My dream is to become a basketball player.', exampleArabic: 'حلمي أن أصبحت لاعب كرة سلة.' },
      { id: 'v20', word: 'Hero', ipa: '/ˈhɪroʊ/', arabicMeaning: 'بطل', exampleSentence: 'Pau Gasol is my hero.', exampleArabic: 'باو جاسول هو بطلدي.' }
    ],
    grammarExplanationAr: 'في النصوص التعريفية، نستخدم زمن المضارع البسيط وفعل To Be للحديث عن العمر، البلد، والأحلام الرياضية.',
    readingText: {
      english: 'Hi! My name is Marco and I am from Spain. I am 17 years old and I am a student. My favorite sport is basketball. My dream is to become a famous basketball player like my hero, Pau Gasol.',
      arabic: 'مرحباً! اسمي ماركو وأنا من إسبانيا. عمري 17 عاماً وأنا طالب. رياضتي المفضلة هي كرة السلة. حلمي أن أصبح لاعباً مشهوراً لكرة السلة مثل بطلدي باو جاسول.'
    },
    exercises: [
      { id: 'ex-7', type: 'mcq', question: 'من أين ماركو (Marco) في النص؟', options: ['Spain', 'Ireland', 'Mexico', 'Peru'], correctAnswer: 'Spain', explanation: 'ماركو من إسبانيا (Spain).' }
    ],
    summaryAr: 'تم تطبيق مهارة القراءة والفهم على نصوص المراهقين في Star Forum.',
    bookPageStart: 9,
    bookPageEnd: 10
  },
  {
    id: 'l-a1-1-7',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 7: Jobs & Occupations (Module 1b)',
    titleAr: 'الدرس 7: الوظائف والمهن (Jobs & Occupations)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 10): مفردات الوظائف مثل vet, astronaut, waiter, electrician, artist.',
    durationMinutes: 20,
    objectives: [
      'تعلم أسماء المهن والوظائف المختلفة.',
      'تكوين جمل باستخدام (Laura is a vet).',
      'طرح أسئلة عن الوظائف.'
    ],
    vocabulary: [
      { id: 'v21', word: 'Vet', ipa: '/vet/', arabicMeaning: 'طبيب بيطري', exampleSentence: 'Laura is a vet.', exampleArabic: 'لورا طبيبة بيطرية.' },
      { id: 'v22', word: 'Astronaut', ipa: '/ˈæstrənɔːt/', arabicMeaning: 'رائد فضاء', exampleSentence: 'Tony is an astronaut.', exampleArabic: 'توني رائد فضاء.' },
      { id: 'v23', word: 'Electrician', ipa: '/ɪlekˈtrɪʃn/', arabicMeaning: 'كهربائي', exampleSentence: 'He is a professional electrician.', exampleArabic: 'إنه كهربائي محترف.' },
      { id: 'v24', word: 'Artist', ipa: '/ˈɑːrtɪst/', arabicMeaning: 'فنان / رسام', exampleSentence: 'She is a talented artist.', exampleArabic: 'إنها فنانة موهوبة.' }
    ],
    grammarExplanationAr: 'للحديث عن الوظيفة، نستخدم أداة النكرة a أو an قبل اسم المهنة (He is a doctor, She is an artist).',
    readingText: {
      english: 'Peter is an artist. Kelly is a nurse. Anna is an actress. Steven is a pilot.',
      arabic: 'بيتر فنان. كيلي ممرضة. أنا ممثلة. ستيفن طيار.'
    },
    exercises: [
      { id: 'ex-8', type: 'mcq', question: 'ما معنى كلمة Astronaut؟', options: ['رائد فضاء', 'طبيب', 'مهندس', 'طيار'], correctAnswer: 'رائد فضاء', explanation: 'Astronaut تعني رائد فضاء.' }
    ],
    summaryAr: 'تم حفظ مفردات الوظائف والمهن وطريقة التعبير عنها.',
    bookPageStart: 10,
    bookPageEnd: 11
  },
  {
    id: 'l-a1-1-8',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 8: Verb To Be (Negative & Questions)',
    titleAr: 'الدرس 8: فعل To Be في النفي والاستفهام',
    descriptionAr: 'من كتاب Discover 1 (صفحة 11): تكوين الجمل المنفية والأسئلة القصيرة (Short Answers) بـ To Be.',
    durationMinutes: 20,
    objectives: [
      'صياغة النفي بـ (am not, isn\'t, aren\'t).',
      'طرح أسئلة بـ (Am I...?, Is he...?, Are you...?).',
      'الإجابة المختصرة (Yes, I am / No, he isn\'t).'
    ],
    vocabulary: [
      { id: 'v25', word: 'Negative', ipa: '/ˈneɡətɪv/', arabicMeaning: 'نفي', exampleSentence: 'Negative sentences with not.', exampleArabic: 'جمل النفي بـ لا.' },
      { id: 'v26', word: 'Question', ipa: '/ˈkwestʃən/', arabicMeaning: 'سؤال', exampleSentence: 'Ask a question.', exampleArabic: 'اطرح سؤالاً.' }
    ],
    grammarExplanationAr: 'النفي: I\'m not, He isn\'t, We aren\'t. الأسئلة: Is he from Mexico? Yes, he is. / No, he isn\'t.',
    readingText: {
      english: 'A: Is he from Mexico?\nB: No, he isn\'t. He is from Japan.\nA: Are they Spanish?\nB: No, they aren\'t. They are English.',
      arabic: 'أ: هل هو من المكسيك؟\nب: لا، ليس كذلك. إنه من اليابان.\nأ: هل هم إسبان؟\nب: لا، ليسوا كذلك. إنهم إنجليز.'
    },
    exercises: [
      { id: 'ex-9', type: 'mcq', question: 'ما هي الإجابة المختصرة الصحيحة لـ: Is she a teacher? (No)', options: ['No, she is.', 'No, she isn\'t.', 'No, she aren\'t.'], correctAnswer: 'No, she isn\'t.', explanation: 'النفي المناسب للمفرد المؤنث مع Is هو isn\'t.' }
    ],
    summaryAr: 'تم التدرب على النفي والإجابات المختصرة باستخدام فعل To Be.',
    bookPageStart: 11,
    bookPageEnd: 12
  },
  {
    id: 'l-a1-1-9',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 9: Subject Pronouns & Possessive Adjectives',
    titleAr: 'الدرس 9: ضمائر الفاعل وصفات الملكية (Possessive Adjectives)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 12): التعرف على ضمائر الملكية (my, your, his, her, its, our, their).',
    durationMinutes: 20,
    objectives: [
      'التمييز بين ضمائر الفاعل وصفات الملكية.',
      'استخدام (my book, her car, their house).',
      'حل تمارين القواعد بتميز.'
    ],
    vocabulary: [
      { id: 'v27', word: 'Possessive', ipa: '/pəˈzesɪv/', arabicMeaning: 'الملكية', exampleSentence: 'Possessive adjectives show ownership.', exampleArabic: 'صفات الملكية توضح التملك.' },
      { id: 'v28', word: 'Pronoun', ipa: '/ˈproʊnaʊn/', arabicMeaning: 'ضمير', exampleSentence: 'His favorite sport is tennis.', exampleArabic: 'رياضته المفضلة هي التنس.' }
    ],
    grammarExplanationAr: 'صفات الملكية: I -> my, you -> your, he -> his, she -> her, it -> its, we -> our, they -> their. تأتي دائماً قبل الاسم (This is my book).',
    readingText: {
      english: 'Ann is from Italy. Her favorite sport is basketball. Bob and Sally are British. Their favorite actor is Brad Pitt.',
      arabic: 'آن من إيطاليا. رياضتها المفضلة هي كرة السلة. بوب وسالي بريطانيان. ممثلهم المفضلة هو براد بيت.'
    },
    exercises: [
      { id: 'ex-10', type: 'fill_blank', question: 'أكمل: This is ______ book. (I)', options: ['my', 'me', 'mine'], correctAnswer: 'my', explanation: 'صفة الملكية العائدة على I هي my.' }
    ],
    summaryAr: 'تم إتقان صفات الملكية وربطها بضمائر الفاعل المناسبة.',
    bookPageStart: 12,
    bookPageEnd: 12
  },
  {
    id: 'l-a1-1-10',
    unitId: 'u-a1-1',
    level: 'A1',
    title: 'Lesson 10: Culture Corner - The Flag of the USA',
    titleAr: 'الدرس 10: ركن الثقافة - علم الولايات المتحدة الأمريكية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 13): قراءة ثقافية عن علم أمريكا، الأيام والشهور، والأعياد الوطنية.',
    durationMinutes: 20,
    objectives: [
      'معرفة أيام الأسبوع والشهور بالإنجليزية.',
      'قراءة نص ثقافي عن The Flag of the USA.',
      'الإجابة على أسئلة الفهم العام.'
    ],
    vocabulary: [
      { id: 'v29', word: 'Symbol', ipa: '/ˈsɪmbl/', arabicMeaning: 'رمز', exampleSentence: 'The flag is a symbol of freedom.', exampleArabic: 'العلم رمز للحرية.' },
      { id: 'v30', word: 'Stripes', ipa: '/straɪps/', arabicMeaning: 'خطوط / أشرطة', exampleSentence: 'Red and white stripes.', exampleArabic: 'خطوط حمراء وبيضاء.' },
      { id: 'v31', word: 'Institution', ipa: '/ˌɪnstɪˈtuːʃn/', arabicMeaning: 'مؤسسة', exampleSentence: 'Public institutions.', exampleArabic: 'مؤسسات عامة.' }
    ],
    grammarExplanationAr: 'نستخدم حرف الجر (on) مع أيام الأسبوع (on Monday), وحرف (in) مع الشهور (in January).',
    readingText: {
      english: 'The flag of the USA is the symbol of a great nation. It has seven red stripes and six white stripes. It also has 50 white stars, one for each state.',
      arabic: 'علم الولايات المتحدة الأمريكية هو رمز أمة عظيمة. يحتوي على سبعة خطوط حمراء وستة خطوط بيضاء. ولديه أيضاً 50 نجمة بيضاء، واحدة لكل ولاية.'
    },
    exercises: [
      { id: 'ex-11', type: 'mcq', question: 'كم عدد النجوم البيضاء في علم أمريكا؟', options: ['10', '25', '50', '100'], correctAnswer: '50', explanation: 'يحتوي علم أمريكا على 50 نجمة بعدد الولايات.' }
    ],
    summaryAr: 'تم إتمام الوحدة الأولى بقراءة ثقافية ومعرفة الأيام والشهور وعلم أمريكا.',
    bookPageStart: 13,
    bookPageEnd: 14
  },

  // Unit 2 Lessons (11 to 20): Module 2 - East West, Home Best
  {
    id: 'l-a1-2-1',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 11: Rooms in a House & Furniture (Module 2)',
    titleAr: 'الدرس 11: غرف المنزل والأثاث (Rooms in a House)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 21): غرف البيت (kitchen, bedroom, bathroom, living room) وقطع الأثاث.',
    durationMinutes: 20,
    objectives: [
      'حفظ أسماء الغرف المنزلية.',
      'التعرف على الأثاث (bathtub, sink, couch, armchair, rug).',
      'التحدث عما يوجد في منزلك.'
    ],
    vocabulary: [
      { id: 'v32', word: 'Kitchen', ipa: '/ˈkɪtʃen/', arabicMeaning: 'المطبخ', exampleSentence: 'Cooking in the kitchen.', exampleArabic: 'الطبخ في المطبخ.' },
      { id: 'v33', word: 'Bathroom', ipa: '/ˈbæθruːm/', arabicMeaning: 'حمام', exampleSentence: 'The bathtub is in the bathroom.', exampleArabic: 'حوض الاستحمام في الحمام.' },
      { id: 'v34', word: 'Couch', ipa: '/kaʊtʃ/', arabicMeaning: 'أريكة / كنبة', exampleSentence: 'Sit on the couch.', exampleArabic: 'اجلس على الأريكة.' },
      { id: 'v35', word: 'Armchair', ipa: '/ˈɑːrmtʃer/', arabicMeaning: 'كرسي ذو مسندين', exampleSentence: 'A comfortable armchair.', exampleArabic: 'كرسي مريح.' }
    ],
    grammarExplanationAr: 'للوصف المنزلي، نستخدم (In my house there is...) و (My favorite room is...).',
    readingText: {
      english: 'In Tom\'s house there is a big kitchen and a nice living room. His favorite room is his bedroom.',
      arabic: 'في منزل توم يوجد مطبخ كبير وغرفة معيشة لطيفة. غرفته المفضلة هي غرفة نومه.'
    },
    exercises: [
      { id: 'ex-12', type: 'mcq', question: 'أين نجد الحوض والـ bathtub عادةً؟', options: ['Kitchen', 'Bathroom', 'Bedroom', 'Yard'], correctAnswer: 'Bathroom', explanation: 'نجد حوض الاستحمام في الحمام (Bathroom).' }
    ],
    summaryAr: 'تم تعلم غرف المنزل وقطع الأثاث والمفردات المتعلقة بها.',
    bookPageStart: 21,
    bookPageEnd: 22
  },
  {
    id: 'l-a1-2-2',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 12: There is / There are (Affirmative & Negative)',
    titleAr: 'الدرس 12: قاعدتا There is و There are',
    descriptionAr: 'من كتاب Discover 1 (صفحة 22): استخدام There is للمفرد و There are للجمع في الإثبات والنفي.',
    durationMinutes: 20,
    objectives: [
      'استخدام There is للمفرد و There are للجمع.',
      'صياغة النفي (There isn\'t / There aren\'t).',
      'طرح الأسئلة (Is there...? / Are there...?).'
    ],
    vocabulary: [
      { id: 'v36', word: 'Bookcase', ipa: '/ˈbʊkkeɪs/', arabicMeaning: 'خزانة كتب', exampleSentence: 'Books in the bookcase.', exampleArabic: 'الكتب في خزانة الكتب.' },
      { id: 'v37', word: 'Pillow', ipa: '/ˈpɪloʊ/', arabicMeaning: 'وسادة', exampleSentence: 'Pillows on the bed.', exampleArabic: 'وسائد على السرير.' }
    ],
    grammarExplanationAr: 'There is + اسم مفرد (There is a bed). There are + اسم جمع (There are some books). في النفي: There isn\'t / There aren\'t.',
    readingText: {
      english: 'There is a bed in the bedroom. There are some pillows on the bed. Is there a window? Yes, there is.',
      arabic: 'يوجد سرير في غرفة النوم. توجد بعض الوسائد على السرير. هل توجد نافذة؟ نعم، توجد.'
    },
    exercises: [
      { id: 'ex-13', type: 'fill_blank', question: 'أكمل: There __________ a table in the kitchen.', options: ['is', 'are', 'am'], correctAnswer: 'is', explanation: 'كلمة a table مفردة فنستخدم معها There is.' }
    ],
    summaryAr: 'تم إتقان قاعدتي There is و There are للمفرد والجمع.',
    bookPageStart: 22,
    bookPageEnd: 23
  },
  {
    id: 'l-a1-2-3',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 13: Life in a Shell (Reading & Vocabulary)',
    titleAr: 'الدرس 13: الحياة في قوقعة - قراءة استيعابية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 23): قراءة وصف منزل فريد على شكل صدفة بحرية في المكسيك (The Nautilus House).',
    durationMinutes: 20,
    objectives: [
      'قراءة نص The Nautilus House وفهم التفاصيل.',
      'التعرف على مفردات وصف المباني (spiral staircase, seashell, earthquake proof).'
    ],
    vocabulary: [
      { id: 'v38', word: 'Seashell', ipa: '/ˈsiːʃel/', arabicMeaning: 'صدفة بحرية', exampleSentence: 'A house in the shape of a seashell.', exampleArabic: 'منزل على شكل صدفة بحرية.' },
      { id: 'v39', word: 'Staircase', ipa: '/ˈsterkeɪs/', arabicMeaning: 'درج / سلم', exampleSentence: 'Spiral staircases.', exampleArabic: 'سلالم حلزونية.' },
      { id: 'v40', word: 'Earthquake', ipa: '/ˈɜːrθkweɪk/', arabicMeaning: 'زلزال', exampleSentence: 'Earthquake proof house.', exampleArabic: 'منزل مقاوم للزلازل.' }
    ],
    grammarExplanationAr: 'وصف المباني المعمارية باستخدام الصفات (huge, bright, colorful) وأفعال الوصف.',
    readingText: {
      english: 'Imagine living in a house in the shape of a seashell. In Mexico City, there is a house like that. The Nautilus House is the house of a young couple and their two children.',
      arabic: 'تخيل أن تعيش في منزل على شكل صدفة بحرية. في مكسيكو سيتي، يوجد منزل كهذا. منزل نوتيلوس هو منزل زوجين شابين وطفليهما.'
    },
    exercises: [
      { id: 'ex-14', type: 'mcq', question: 'على أي شكل يبدو منزل Nautilus House؟', options: ['Seashell', 'Square', 'Circle', 'Triangle'], correctAnswer: 'Seashell', explanation: 'المنزل مصمم على شكل صدفة بحرية (seashell).' }
    ],
    summaryAr: 'تم التدرب على مهارة القراءة المعمارية والمفردات المرتبطة بها.',
    bookPageStart: 23,
    bookPageEnd: 24
  },
  {
    id: 'l-a1-2-4',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 14: Appliances & Plurals (Module 2b)',
    titleAr: 'الدرس 14: الأجهزة المنزلية وقاعدة الجمع (Plurals)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 24): أجهزة المنزل (fridge, washing machine, toaster) وقواعد جمع الأسماء الشاذة والمنتظمة.',
    durationMinutes: 20,
    objectives: [
      'حفظ مفردات الأجهزة المنزلية (fridge, oven, dishwasher).',
      'تعلم قواعد جمع الأسماء (add -s, -es, -ies).',
      'معرفة الجموع الشاذة (child-children, tooth-teeth).'
    ],
    vocabulary: [
      { id: 'v41', word: 'Fridge', ipa: '/frɪdʒ/', arabicMeaning: 'ثلاجة', exampleSentence: 'Food is in the fridge.', exampleArabic: 'الطعام في الثلاجة.' },
      { id: 'v42', word: 'Oven', ipa: '/ˈʌvn/', arabicMeaning: 'فرن', exampleSentence: 'Baking in the oven.', exampleArabic: 'الخبز في الفرن.' },
      { id: 'v43', word: 'Dishwasher', ipa: '/ˈdɪʃwɑːʃər/', arabicMeaning: 'غسالة الأطباق', exampleSentence: 'Modern dishwasher.', exampleArabic: 'غسالة أطباق حديثة.' }
    ],
    grammarExplanationAr: 'الجمع المنتظم بإضافة -s أو -es (box -> boxes). الأسماء المنتهية بحرف ساكن + y تتحول إلى -ies (lady -> ladies). الجمع الشاذ: child -> children, man -> men, foot -> feet.',
    readingText: {
      english: 'Life in space is very different. The space station has a vacuum cleaner, an oven, and a fridge. There aren\'t any forks or knives because everything is wet.',
      arabic: 'الحياة في الفضاء مختلفة جداً. محطة الفضاء بها مكنسة كهربائية وفرن وثلاجة. لا توجد أي شوك أو سكاكين لأن كل شيء رطب.'
    },
    exercises: [
      { id: 'ex-15', type: 'mcq', question: 'ما هو جمع كلمة child؟', options: ['childs', 'children', 'childes', 'childen'], correctAnswer: 'children', 'explanation': 'الجمع الشاذ لكلمة child هو children.' }
    ],
    summaryAr: 'تم تعلم الأجهزة المنزلية وقواعد الجمع المنتظم والشاذ.',
    bookPageStart: 24,
    bookPageEnd: 25
  },
  {
    id: 'l-a1-2-5',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 15: This/That - These/Those & Prepositions',
    titleAr: 'الدرس 15: أسماء الإشارة وحروف الجر المكانية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 25): استخدام this/that للمفرد و these/those للجمع، وحروف الجر (on, in, under, behind, next to).',
    durationMinutes: 20,
    objectives: [
      'التفريق بين أسماء الإشارة للقريب والبعيد.',
      'استخدام حروف الجر لتحديد أماكن الأشياء.',
      'طرح أسئلة بـ What is this? و What are those?.'
    ],
    vocabulary: [
      { id: 'v44', word: 'Iron', ipa: '/ˈaɪərn/', arabicMeaning: 'مكواة', exampleSentence: 'This is an iron.', exampleArabic: 'هذه مكواة.' },
      { id: 'v45', word: 'Clock', ipa: '/klɑːk/', arabicMeaning: 'ساعة حائط', exampleSentence: 'That is a clock.', exampleArabic: 'تلك ساعة حائط.' }
    ],
    grammarExplanationAr: 'للقريب: This (مفرد), These (جمع). للبعيد: That (مفرد), Those (جمع). حروف الجر: on (على), in (في), under (تحت), behind (خلف), next to (بجانب).',
    readingText: {
      english: 'This is an iron. That is a clock. These are cups. Those are knives. The ball is on the box.',
      arabic: 'هذه مكواة. تلك ساعة. هذه أكواب. تلك سكاكين. الكرة على الصندوق.'
    },
    exercises: [
      { id: 'ex-16', type: 'mcq', question: 'ماذا نستخدم للإشارة إلى شيء مفرد وقريب؟', options: ['This', 'That', 'These', 'Those'], correctAnswer: 'This', 'explanation': 'نستخدم This للمفرد القريب.' }
    ],
    summaryAr: 'تم التدرب على أسماء الإشارة وحروف الجر المكانية.',
    bookPageStart: 25,
    bookPageEnd: 26
  },
  {
    id: 'l-a1-2-6',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 16: New York City Has It All! (Culture 2c)',
    titleAr: 'الدرس 16: مدينة نيويورك - معالم سياحية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 26): القراءة عن معالم نيويورك (Statue of Liberty, Central Park, Empire State Building).',
    durationMinutes: 20,
    objectives: [
      'قراءة نص سياحي عن معالم نيويورك.',
      'التعرف على مفردات السياحة (skyscraper, statue, boat ride).',
      'تكوين جمل وصفية سياحية.'
    ],
    vocabulary: [
      { id: 'v46', word: 'Statue', ipa: '/ˈstætʃuː/', arabicMeaning: 'تمثال', exampleSentence: 'The Statue of Liberty.', exampleArabic: 'تمثال الحرية.' },
      { id: 'v47', word: 'Skyscraper', ipa: '/ˈskaɪskreɪpər/', arabicMeaning: 'ناطحة سحاب', exampleSentence: 'Skyscrapers in New York.', exampleArabic: 'ناطحات السحاب في نيويورك.' }
    ],
    grammarExplanationAr: 'استخدام صفات التفضيل والوصف (huge, fantastic, beautiful) في النصوص السياحية.',
    readingText: {
      english: 'The Statue of Liberty is on Liberty Island. It is a symbol of American independence. A speedboat ride around the statue is exciting.',
      arabic: 'تمثال الحرية يقع على جزيرة ليبرتي. إنه رمز للاستقلال الأمريكي. جولة بالقارب السريع حول التمثال ممتعة ومثيرة.'
    },
    exercises: [
      { id: 'ex-17', type: 'mcq', question: 'أين يقع تمثال الحرية؟', options: ['Liberty Island', 'Central Park', 'Empire State', 'Bronze Island'], correctAnswer: 'Liberty Island', explanation: 'يقع تمثال الحرية على جزيرة ليبرتي (Liberty Island).' }
    ],
    summaryAr: 'تم قراءة النص السياحي والتعرف على معالم مدينة نيويورك.',
    bookPageStart: 26,
    bookPageEnd: 27
  },
  {
    id: 'l-a1-2-7',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 17: Viewing a House (Everyday English 2d)',
    titleAr: 'الدرس 17: استئجار ومعاينة منزل (Viewing a House)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 27): حوارات حقيقية حول استئجار شقة، السؤال عن الغرف، الطابق، والسعر.',
    durationMinutes: 20,
    objectives: [
      'فهم حوار معاينة شقة سكنية (Real Estate).',
      'السؤال عن السعر (How much is it?) والطابق (Which floor?).',
      'تهجئة الكلمات والعناوين بالإنجليزية (Spell it, please).'
    ],
    vocabulary: [
      { id: 'v48', word: 'Apartment', ipa: '/əˈpɑːrtmənt/', arabicMeaning: 'شقة سكنية', exampleSentence: 'Renting a 3rd floor apartment.', exampleArabic: 'استئجار شقة في الطابق الثالث.' },
      { id: 'v49', word: 'Rent', ipa: '/rent/', arabicMeaning: 'إيجار', exampleSentence: 'The rent is $1,450 per month.', exampleArabic: 'الإيجار هو 1450 دولار شهرياً.' }
    ],
    grammarExplanationAr: 'عبارات شائعة في الاستئجار: (How many rooms does it have?), (And how much is it?), (Which floor is it on?).',
    readingText: {
      english: 'A: Hello, Top Real Estate. How can I help you?\nB: I want to rent an apartment near the university.\nA: It is on the first floor. The rent is $1,450 per month.',
      arabic: 'أ: مرحباً، عقارات توب. كيف يمكنني مساعدتك؟\nب: أريد استئجار شقة بالقرب من الجامعة.\nأ: إنها في الطابق الأول. الإيجار هو 1450 دولاراً شهرياً.'
    },
    exercises: [
      { id: 'ex-18', type: 'mcq', question: 'ماذا تعني كلمة Rent بالعربية؟', options: ['إيجار', 'شراء', 'بيع', 'هدم'], correctAnswer: 'إيجار', explanation: 'Rent تعني إيجار أو يستأجر.' }
    ],
    summaryAr: 'تم التدرب على محادثات معاينة واستئجار الشقق السكنية.',
    bookPageStart: 27,
    bookPageEnd: 28
  },
  {
    id: 'l-a1-2-8',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 18: Special Places - Lake Titicaca (2e)',
    titleAr: 'الدرس 18: أماكن مميزة - الجزر العائمة في بحيرة تيتيكاكا',
    descriptionAr: 'من كتاب Discover 1 (صفحة 28): قراءة استيعابية عن الجزر العائمة المصنوعة من القصب في بيرو وبوليفيا.',
    durationMinutes: 20,
    objectives: [
      'قراءة وفهم نص The Floating Islands of Lake Titicaca.',
      'معالجة مفردات الجغرافيا الطبيعية (island, lake, reed huts).',
      'استكمال الجمل الناقصة بمهارة.'
    ],
    vocabulary: [
      { id: 'v50', word: 'Island', ipa: '/ˈaɪlənd/', arabicMeaning: 'جزيرة', exampleSentence: 'Floating islands made of reed.', exampleArabic: 'جزر عائمة مصنوعة من القصب.' },
      { id: 'v51', word: 'Lake', ipa: '/leɪk/', arabicMeaning: 'بحيرة', exampleSentence: 'Lake Titicaca is very large.', exampleArabic: 'بحيرة تيتيكاكا كبيرة جداً.' }
    ],
    grammarExplanationAr: 'استخدام أزمنة المضارع البسيط والوصف المكاني في المقالات الجغرافية.',
    readingText: {
      english: 'The Floating Islands of Lake Titicaca are home to about 300 people. There are small villages with three to ten families on each island. Uros homes are small reed huts.',
      arabic: 'الجزر العائمة في بحيرة تيتيكاكا هي موطن لحوالي 300 شخص. توجد قرى صغيرة تضم ثلاث إلى عشر عائلات على كل جزيرة. منازل يوروس هي أكواخ قصب صغيرة.'
    },
    exercises: [
      { id: 'ex-19', type: 'mcq', question: 'من ماذا تُصنع المنازل والأكواخ على الجزر العائمة؟', options: ['Reed (القصب)', 'Wood (الخشب)', 'Brick (الطوب)', 'Glass (الزجاج)'], correctAnswer: 'Reed (القصب)', explanation: 'تُصنع الأكواخ من القصب (reed huts).' }
    ],
    summaryAr: 'تم قراءة النص الجغرافي حول الجزر العائمة في بحيرة تيتيكاكا.',
    bookPageStart: 28,
    bookPageEnd: 29
  },
  {
    id: 'l-a1-2-9',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 19: Places in a Town & Giving Directions (2f)',
    titleAr: 'الدرس 19: الأماكن في المدينة وإعطاء الاتجاهات',
    descriptionAr: 'من كتاب Discover 1 (صفحة 30): أماكن المدينة (post office, bakery, pharmacy, bookstore) وقواعد إعطاء الاتجاهات (Go straight, turn left).',
    durationMinutes: 20,
    objectives: [
      'حفظ مفردات أماكن المدينة والخدمات.',
      'إعطاء ووصف الاتجاهات (turn left, turn right, go straight).',
      'استخدام صيغة الأمر (The Imperative) في الإرشادات.'
    ],
    vocabulary: [
      { id: 'v52', word: 'Bakery', ipa: '/ˈbeɪkəri/', arabicMeaning: 'مخبز', exampleSentence: 'You can buy bread at the bakery.', exampleArabic: 'يمكنك شراء الخبز من المخبز.' },
      { id: 'v53', word: 'Pharmacy', ipa: '/ˈfɑːrməsi/', arabicMeaning: 'صيدلية', exampleSentence: 'Medicine is at the pharmacy.', exampleArabic: 'الدواء في الصيدلية.' },
      { id: 'v54', word: 'Imperative', ipa: '/ɪmˈperətɪv/', arabicMeaning: 'صيغة الأمر', exampleSentence: 'Turn right. Don\'t turn left.', exampleArabic: 'استدر يميناً. لا تستدر يساراً.' }
    ],
    grammarExplanationAr: 'صيغة الأمر تبدأ بالفعل مباشرة (Go straight, Turn left). وللنفي نستخدم Don\'t (Don\'t turn right).',
    readingText: {
      english: 'A: Excuse me, can you tell me where the post office is?\nB: Sure. It is on Milton Street. Go down Merton Street, past the bakery and turn left on Main Street.',
      arabic: 'أ: عذراً، هل يمكنك إخباري أين مكتب البريد؟\nب: بالطبع. إنه في شارع ميلتون. انزل في شارع ميرتون، مر بالمخبز واستر يساراً في شارع ماين.'
    },
    exercises: [
      { id: 'ex-20', type: 'mcq', question: 'كيف نأمر شخصاً بالذهاب بشكل مستقيم؟', options: ['Go straight', 'Turn left', 'Stop', 'Run'], correctAnswer: 'Go straight', explanation: 'العبارة الصحيحة هي Go straight.' }
    ],
    summaryAr: 'تم التدرب على أماكن المدينة وإعطاء الاتجاهات وصيغة الأمر.',
    bookPageStart: 30,
    bookPageEnd: 30
  },
  {
    id: 'l-a1-2-10',
    unitId: 'u-a1-2',
    level: 'A1',
    title: 'Lesson 20: Writing an Email about My House (2g)',
    titleAr: 'الدرس 20: كتابة بريد إلكتروني عن منزلي الجديد',
    descriptionAr: 'من كتاب Discover 1 (صفحة 31): كتابة رسالة بريد إلكتروني لوصف المنزل، موقع الهيكل، وعلامات الترقيم.',
    durationMinutes: 20,
    objectives: [
      'كتابة رسالة بريد إلكتروني غير رسمية (Informal Email).',
      'وصف المنزل والحي السكني وغرف النوم.',
      'استخدام علامات الترقيم بشكل صحيح (Periods, Commas, Question Marks).'
    ],
    vocabulary: [
      { id: 'v55', word: 'Neighborhood', ipa: '/ˈneɪbərhʊd/', arabicMeaning: 'حي سكني', exampleSentence: 'A quiet neighborhood opposite the park.', exampleArabic: 'حي سكني هادئ مقابل الحديقة.' },
      { id: 'v56', word: 'Punctuation', ipa: '/ˌpʌŋktʃuˈeɪʃn/', arabicMeaning: 'علامات الترقيم', exampleSentence: 'Use commas and periods.', exampleArabic: 'استخدم الفواصل والنقاط.' }
    ],
    grammarExplanationAr: 'ترتيب الصفات: تأتي الصفة قبل الاسم (a big house, a modern kitchen). استخدام علامات الترقيم (.) و (?) و (,).',
    readingText: {
      english: 'Hi Karen, How are you? I am so excited about my new house and I can\'t wait for you to come and see it. It is on a quiet street opposite the park.',
      arabic: 'مرحباً كارين، كيف حالك؟ أنا متحمسة جداً لمنزلي الجديد ولا أطيق الانتظار حتى تأتي وتراه. إنه في شارع هادئ مقابل الحديقة.'
    },
    exercises: [
      { id: 'ex-21', type: 'mcq', question: 'متى نستخدم علامة الاستفهام (?) في الجملة؟', options: ['At the end of a question', 'At the end of an affirmative sentence', 'In the middle of words'], correctAnswer: 'At the end of a question', 'explanation': 'نستخدم علامة الاستفهام في نهاية الأسئلة.' }
    ],
    summaryAr: 'تم إتمام الوحدة الثانية بكتابة رسالة بريد إلكتروني وصفية ومنظمة.',
    bookPageStart: 31,
    bookPageEnd: 32
  },

  // Unit 3 Lessons (21 to 30): Module 3 - Day After Day
  {
    id: 'l-a1-3-1',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 21: Free-Time Activities & Daily Routines (Module 3)',
    titleAr: 'الدرس 21: أنشطة وقت الفراغ والروتين اليومي',
    descriptionAr: 'من كتاب Discover 1 (صفحة 35): أنشطة أوقات الفراغ (playing board games, watching DVDs, snowboarding, going to the library).',
    durationMinutes: 20,
    objectives: [
      'حفظ مفردات أنشطة وقت الفراغ.',
      'التعبير عما تحب ولا تحب (I like... / I don\'t like...).',
      'وصف الروتين اليومي.'
    ],
    vocabulary: [
      { id: 'v57', word: 'Routine', ipa: '/ruːˈtiːn/', arabicMeaning: 'روتين يومي', exampleSentence: 'My daily routine.', exampleArabic: 'روتيني اليومي.' },
      { id: 'v58', word: 'Snowboarding', ipa: '/ˈsnoʊbɔːrdɪŋ/', arabicMeaning: 'التزلج على الجليد', exampleSentence: 'Peter likes snowboarding.', exampleArabic: 'بيتر يحب التزلج على الجليد.' },
      { id: 'v59', word: 'Hanging', ipa: '/ˈhæŋɪŋ/', arabicMeaning: 'التسكع / الخروج', exampleSentence: 'Hanging out with friends.', exampleArabic: 'الخروج والتسكع مع الأصدقاء.' }
    ],
    grammarExplanationAr: 'للتعبير عن التفضيلات: (I like playing board games) و (I don\'t like watching DVDs). الفعل بعد like يأخذ اللاحقة -ing.',
    readingText: {
      english: 'I like playing board games and listening to music. My friend Peter likes snowboarding and surfing the Net.',
      arabic: 'أنا أحب لعب ألعاب الطاولة والاستماع إلى الموسيقى. صديقي بيتر يحب التزلج على الجليد وتصفح الإنترنت.'
    },
    exercises: [
      { id: 'ex-22', type: 'mcq', question: 'ما صيغة الفعل بعد عبارة I like ...؟', options: ['verb + ing', 'past tense', 'base verb'], correctAnswer: 'verb + ing', explanation: 'نستخدم الفعل مضافاً إليه ing بعد like.' }
    ],
    summaryAr: 'تم تعلم أنشطة أوقات الفراغ وصيغة التفضيل بـ like.',
    bookPageStart: 35,
    bookPageEnd: 35
  },
  {
    id: 'l-a1-3-2',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 22: Daily Routines & Snake Milking (3a)',
    titleAr: 'الدرس 22: الروتين اليومي وحلب الأماكن (Snake Milking)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 36-37): قراءة شيقة عن حلب الأفاعي لاستخراج التمساح وصنع مضاد السموم (Bill Hernandez).',
    durationMinutes: 20,
    objectives: [
      'تعلم الروتين اليومي (get up, take a shower, have breakfast).',
      'قراءة وفهم نص غير تقليدي (Snake Milking).',
      'التعرف على مفردات الحماية من السموم (antivenom, venom, dangerous).'
    ],
    vocabulary: [
      { id: 'v60', word: 'Antivenom', ipa: '/ˌæntiˈvenəm/', arabicMeaning: 'مضاد السموم', exampleSentence: 'Making antivenom for snake bites.', exampleArabic: 'صنع مضاد سموم لدغات الأفاعي.' },
      { id: 'v61', word: 'Dangerous', ipa: '/ˈdeɪndʒərəs/', arabicMeaning: 'خطير', exampleSentence: 'Snake milking is a dangerous job.', exampleArabic: 'حلب الأفاعي عمل خطير.' },
      { id: 'v62', word: 'Enclosure', ipa: '/ɪnˈkloʊʒər/', arabicMeaning: 'محتجز / حظيرة', exampleSentence: 'Snakes in their enclosures.', exampleArabic: 'الأفاعي في حظائرها.' }
    ],
    grammarExplanationAr: 'استخدام زمن المضارع البسيط للحديث عن الحقائق والعادات اليومية (Bill works at a snake farm).',
    readingText: {
      english: 'Every morning, Bill gets up early and walks to the farm. He catches different types of poisonous snakes and \'milks\' them in his laboratory.',
      arabic: 'كل صباح، يستيقظ بيل مبكراً ويمشي إلى المزرعة. إنه يصيد أنواعاً مختلفة من الأفاعي السامة "ويحلبها" في مختبره.'
    },
    exercises: [
      { id: 'ex-23', type: 'mcq', question: 'ما هو عمل بيل (Bill) في المزرعة؟', options: ['Snake milking (حلب الأفاعي)', 'Teaching math', 'Cooking food', 'Driving cars'], correctAnswer: 'Snake milking (حلب الأفاعي)', explanation: 'عمل بيل هو حلب الأفاعي لصنع مضاد السموم.' }
    ],
    summaryAr: 'تم قراءة النص الواقعي المشوق عن حلب الأفاعي ومفرداته.',
    bookPageStart: 36,
    bookPageEnd: 38
  },
  {
    id: 'l-a1-3-3',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 23: Simple Present Tense (Affirmative)',
    titleAr: 'الدرس 23: زمن المضارع البسيط (الإثبات وقواعد الإملاء)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 37): صياغة المضارع البسيط وإضافة -s أو -es للفعل مع المفرد الغائب (He/She/It).',
    durationMinutes: 20,
    objectives: [
      'فهم استخدام المضارع البسيط للروتين والحقائق.',
      'إضافة -s للفعل مع He, She, It (he works, she walks).',
      'قواعد إضافات -es للأفعال المنتهية بـ -ch, -sh, -ss, -x, -o.'
    ],
    vocabulary: [
      { id: 'v63', word: 'Affirmative', ipa: '/əˈfɜːrmətɪv/', arabicMeaning: 'إثبات', exampleSentence: 'Simple present affirmative.', exampleArabic: 'إثبات المضارع البسيط.' },
      { id: 'v64', word: 'Spelling', ipa: '/ˈspelɪŋ/', arabicMeaning: 'تهجئة / إملاء', exampleSentence: 'Spelling rules for 3rd person singular.', exampleArabic: 'قواعد التهجئة للشخص الثالث المفرد.' }
    ],
    grammarExplanationAr: 'مع I, you, we, they يبقى الفعل مجرداً (I work). مع he, she, it نُضيف -s أو -es (He works, She watches, He studies). الحرف y المنتهي بساكن يقلب إلى ies (try -> tries).',
    readingText: {
      english: 'I walk to school. You work in a store. He gets up early. She watches TV in the evening.',
      arabic: 'أنا أمشي إلى المدرسة. أنت تعمل في متجر. هو يستيقظ مبكراً. هي تشاهد التلفاز في المساء.'
    },
    exercises: [
      { id: 'ex-24', type: 'fill_blank', question: 'أكمل: He ________ (watch) TV on Saturdays.', options: ['watch', 'watches', 'watchs'], correctAnswer: 'watches', explanation: 'الفعل المنتهي بـ ch يأخذ es مع المفرد الغائب (watches).' }
    ],
    summaryAr: 'تم إتقان قواعد إثبات المضارع البسيط وقواعد الإملاء للشخص الثالث.',
    bookPageStart: 37,
    bookPageEnd: 37
  },
  {
    id: 'l-a1-3-4',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 24: Work Days & Wildlife Photographer (3b)',
    titleAr: 'الدرس 24: أيام العمل ومصور الحياة البرية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 39): قراءة عن مصور الحياة البرية (Nathan Dell) ونفي المضارع البسيط وأسئلته.',
    durationMinutes: 20,
    objectives: [
      'قراءة نص عن مصور الحياة البرية (Wildlife Photographer).',
      'صياغة النفي بـ (don\'t / doesn\'t work).',
      'طرح الأسئلة بـ (Do you... / Does he...?).'
    ],
    vocabulary: [
      { id: 'v65', word: 'Wildlife', ipa: '/ˈwaɪldlaɪf/', arabicMeaning: 'الحياة البرية', exampleSentence: 'Wildlife photographer.', exampleArabic: 'مصور حياة برية.' },
      { id: 'v66', word: 'Jungle', ipa: '/ˈdʒʌŋɡl/', arabicMeaning: 'غابة', exampleSentence: 'Hiding in the jungle.', exampleArabic: 'الاختباء في الغابة.' }
    ],
    grammarExplanationAr: 'النفي: I/we/they + don\'t + verb (don\'t work), He/she/it + doesn\'t + verb (doesn\'t work). الأسئلة: Do you work? / Does he work?',
    readingText: {
      english: 'Nathan Dell is a wildlife photographer. He works outdoors. He often gets up before dawn, has breakfast, then gets ready to go to work.',
      arabic: 'ناثان ديل هو مصور حياة برية. إنه يعمل في الهواء الطلق. غالباً ما يستيقظ قبل الفجر، يتناول إفطاره، ثم يستعد للذهاب إلى العمل.'
    },
    exercises: [
      { id: 'ex-25', type: 'mcq', question: 'ما هو النفي الصحيح لـ: He works outdoors.', options: ['He don\'t work outdoors.', 'He doesn\'t work outdoors.', 'He isn\'t work outdoors.'], correctAnswer: 'He doesn\'t work outdoors.', explanation: 'مع المفرد الغائب He نستخدم doesn\'t ثم الفعل مجرداً.' }
    ],
    summaryAr: 'تم التدرب على نفي وأسئلة المضارع البسيط وقراءة قصة مصور الحياة البرية.',
    bookPageStart: 39,
    bookPageEnd: 39
  },
  {
    id: 'l-a1-3-5',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 25: Adverbs of Frequency & Time Prepositions',
    titleAr: 'الدرس 25: ظروف التكرار وحروف جر الوقت (in, at, on)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 40): ظروف التكرار (always, usually, often, sometimes, never) وحروف جر الوقت.',
    durationMinutes: 20,
    objectives: [
      'فهم نسب ظروف التكرار (100% always إلى 0% never).',
      'معرفة موقع ظرف التكرار قبل الفعل الرئيسي وبعد verb to be.',
      'استخدام حروف الجر (at, in, on) مع الأوقات والأيام.'
    ],
    vocabulary: [
      { id: 'v67', word: 'Always', ipa: '/ˈɔːlweɪz/', arabicMeaning: 'دائماً (100%)', exampleSentence: 'He is always on time.', exampleArabic: 'هو دائماً في الموعد المحدد.' },
      { id: 'v68', word: 'Never', ipa: '/ˈnevər/', arabicMeaning: 'أبداً (0%)', exampleSentence: 'He is never late.', exampleArabic: 'هو لا يتأخر أبداً.' }
    ],
    grammarExplanationAr: 'موقع ظرف التكرار: ياتي قبل الفعل الرئيسي (I usually get up early), ولكن يأتي بعد فعل To Be (He is always happy). حروف الوقت: at (الساعات), in (الشهور والفصول والصباح), on (الأيام والتواريخ).',
    readingText: {
      english: 'Tommy often goes skating. He is never late. My birthday is on December 20th. I have a dancing lesson at 6 o\'clock.',
      arabic: 'تومي يذهب للتزلج غالباً. إنه لا يتأخر أبداً. عيد ميلادي في 20 ديسمبر. لدي درس رقص في تمام الساعة السادسة.'
    },
    exercises: [
      { id: 'ex-26', type: 'mcq', question: 'أي حرف جر نستخدمه مع الساعات (at 3 o\'clock)؟', options: ['at', 'in', 'on', 'to'], correctAnswer: 'at', explanation: 'نستخدم حرف الجر at دائماً مع الساعات المحددة.' }
    ],
    summaryAr: 'تم تعلم ظروف التكرار وموقعها وقواعد حروف جر الوقت بدقة.',
    bookPageStart: 40,
    bookPageEnd: 40
  },
  {
    id: 'l-a1-3-6',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 26: Culture Corner - College Life in the US (3c)',
    titleAr: 'الدرس 26: الحياة الجامعية في الولايات المتحدة الأمريكية',
    descriptionAr: 'من كتاب Discover 1 (صفحة 41): قراءة عن حياة الطلاب في الجامعات الأمريكية، السكن الجامعي، والنوادي.',
    durationMinutes: 20,
    objectives: [
      'قراءة نص عن الحياة الجامعية الأمريكية (College Life).',
      'التعرف على مفردات السكن والنوادي (dorm, campus, meal plan, fraternity).',
      'الإجابة عن أسئلة الفهم والصواب والخطأ.'
    ],
    vocabulary: [
      { id: 'v69', word: 'Campus', ipa: '/ˈkæmpəs/', arabicMeaning: 'الحرم الجامعي', exampleSentence: 'Living on campus.', exampleArabic: 'السكن في الحرم الجامعي.' },
      { id: 'v70', word: 'Dorm', ipa: '/dɔːrm/', arabicMeaning: 'سكن الطلاب الداخلي', exampleSentence: 'Share a room in the dorm.', exampleArabic: 'مشاركة غرفة في السكن الداخلي.' }
    ],
    grammarExplanationAr: 'استخدام المضارع البسيط في عرض الحقائق عن حياة الطلاب والنظام الدراسي.',
    readingText: {
      english: 'College life in the US is very exciting. College students study hard, learn a lot of things, make new friends, and have a lot of fun.',
      arabic: 'الحياة الجامعية في أمريكا ممتعة للغاية. طلاب الكلية يدرسون بجد، يتعلمون الكثير من الأشياء، يصنعون صداقات جديدة، ويستمتعون كثيراً.'
    },
    exercises: [
      { id: 'ex-27', type: 'mcq', question: 'ماذا تعني كلمة Dorm بالعربية؟', options: ['سكن الطلاب الداخلي', 'مكتبة', 'ملعب', 'مستشفى'], correctAnswer: 'سكن الطلاب الداخلي', explanation: 'Dorm تعني سكن الطلاب الداخلي أو القسم الداخلي.' }
    ],
    summaryAr: 'تم قراءة النص الثقافي حول الحياة الجامعية في الولايات المتحدة.',
    bookPageStart: 41,
    bookPageEnd: 41
  },
  {
    id: 'l-a1-3-7',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 27: Asking for / Telling the Time (Everyday English 3d)',
    titleAr: 'الدرس 27: السؤال عن الوقت وإخباره وترتيب المواعيد',
    descriptionAr: 'من كتاب Discover 1 (صفحة 42): قراءة الساعة (six o\'clock, half past six, a quarter past) وترتيب المواعيد.',
    durationMinutes: 20,
    objectives: [
      'السؤال عن الوقت (What time is it? / Do you have the time?).',
      'قراءة الساعة بالساعات الكاملة والأرباع وأنصاف الساعات.',
      'ترتيب المواعيد والاقتراحات (Let\'s meet at 7:30).'
    ],
    vocabulary: [
      { id: 'v71', word: 'Quarter', ipa: '/ˈkwɔːrtər/', arabicMeaning: 'ربع (الساعة)', exampleSentence: 'A quarter past three (3:15).', exampleArabic: 'الرابعة والربع (3:15).' },
      { id: 'v72', word: 'Arrange', ipa: '/əˈreɪndʒ/', arabicMeaning: 'ترتيب / تنسيق موعد', exampleSentence: 'Making arrangements to meet.', exampleArabic: 'ترتيب مواعيد اللقاء.' }
    ],
    grammarExplanationAr: 'للسؤال عن الوقت: (What time is it?). للتعبير عن الموعد: (Let\'s meet at 7:30). للاستجابة: (That sounds good).',
    readingText: {
      english: 'Tom: Do you want to play tennis in the park?\nJamie: That sounds good. What time do you want to meet?\nTom: What time is it now?\nJamie: It\'s a quarter past three.',
      arabic: 'توم: هل تريد أن تلعب التنس في الحديقة؟\nجيمي: يبدو ذلك رائعاً. في أي وقت تريد أن نلتقي؟\nتوم: كم الساعة الآن؟\nجيمي: إنها الثالثة والربع.'
    },
    exercises: [
      { id: 'ex-28', type: 'mcq', question: 'ماذا تعني عبارة half past six؟', options: ['6:30', '6:15', '6:45', '7:00'], correctAnswer: '6:30', 'explanation': 'half past six تعني النصف بعد السادسة أي 6:30.' }
    ],
    summaryAr: 'تم التدرب على قراءة الساعات وترتيب المواعيد اليومية.',
    bookPageStart: 42,
    bookPageEnd: 42
  },
  {
    id: 'l-a1-3-8',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 28: True Friends - Animals at Giraffe Manor (3e)',
    titleAr: 'الدرس 28: أصدقاء حقيقيون - الحيوانات في فندق Giraffe Manor',
    descriptionAr: 'من كتاب Discover 1 (صفحة 43-44): قراءة عن الزرافات التي تشارك الضيوف الإفطار من النوافذ في كينيا.',
    durationMinutes: 20,
    objectives: [
      'حفظ أسماء الحيوانات البرية (giraffe, elephant, bear, monkey, parrot).',
      'قراءة نص متقدم حول تفاعل الزرافات مع البشر.',
      'استخراج المرادفات والصفات من النص.'
    ],
    vocabulary: [
      { id: 'v73', word: 'Giraffe', ipa: '/dʒəˈræf/', arabicMeaning: 'زرافة', exampleSentence: 'A 16-foot tall giraffe.', exampleArabic: 'زرافة يبلغ طولها 16 قدماً.' },
      { id: 'v74', word: 'Endangered', ipa: '/ɪnˈdeɪndʒərd/', arabicMeaning: 'مهدد بالانقراض', exampleSentence: 'Rare endangered animal.', exampleArabic: 'حيوان نادر مهدد بالانقراض.' },
      { id: 'v75', word: 'Friendly', ipa: '/ˈfrendli/', arabicMeaning: 'ودود / لطيف', exampleSentence: 'Gentle and friendly animals.', exampleArabic: 'حيوانات لطيفة وودودة.' }
    ],
    grammarExplanationAr: 'استخدام أزمنة المضارع البسيط والصفات الوصفية المتقدمة لوصف سلوك الحيوانات.',
    readingText: {
      english: 'What is it like to wake up in the morning and see Lynne, a 16-foot tall Rothschild giraffe, staring through your window? It sounds strange, but this is a normal morning at Giraffe Manor in Kenya.',
      arabic: 'كيف تبدو الاستيقاظ صباحاً ورؤية لين، زرافة روتشيلد يبلغ طولها 16 قدماً، وهي تحدق من نافذتك؟ يبدو الأمر غريباً، لكن هذا صباح عادي في قصر الزرافات في كينيا.'
    },
    exercises: [
      { id: 'ex-29', type: 'mcq', question: 'أين يقع قصر الزرافات (Giraffe Manor) في النص؟', options: ['Kenya', 'Egypt', 'Brazil', 'Spain'], correctAnswer: 'Kenya', 'explanation': 'يقع قصر الزرافات في كينيا (Kenya).' }
    ],
    summaryAr: 'تم قراءة النص الشيق عن الزرافات في كينيا وإتقان مفردات الحيوانات.',
    bookPageStart: 43,
    bookPageEnd: 44
  },
  {
    id: 'l-a1-3-9',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 29: Family Members & Possessive Case (3f)',
    titleAr: 'الدرس 29: أفراد العائلة وحالة التملك (Possessive \'s)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 45): مفردات العائلة (father, mother, brother, sister, aunt, uncle) وحالة التملك بـ \'s.',
    durationMinutes: 20,
    objectives: [
      'حفظ مفردات شجرة العائلة (Family Tree).',
      'استخدام التملك الصحيح (John\'s car, the girls\' school).',
      'طرح أسئلة بـ Who\'s... و Whose...?'
    ],
    vocabulary: [
      { id: 'v76', word: 'Grandfather', ipa: '/ˈɡrænfɑːðər/', arabicMeaning: 'جد', exampleSentence: 'My grandfather and grandmother.', exampleArabic: 'جدي وجدتي.' },
      { id: 'v77', word: 'Cousin', ipa: '/ˈkʌzn/', arabicMeaning: 'ابن العم / الخال', exampleSentence: 'She is my cousin.', exampleArabic: 'إنها ابنة عمي/خالي.' },
      { id: 'v78', word: 'Possession', ipa: '/pəˈzeʃn/', arabicMeaning: 'ملكية / إمتلاك', exampleSentence: 'Using \'s for possession.', exampleArabic: 'استخدام apostrophe s للتملك.' }
    ],
    grammarExplanationAr: 'حالة التملك: اسم مفرد + \'s (Mary\'s book). اسم جمع منتهي بـ s + \' (the girls\' room). اسم جمع شاذ + \'s (the children\'s toys). للسؤال عن المالك نستخدم (Whose is this?).',
    readingText: {
      english: 'Mark is Lynn\'s brother. John and Stella are Peter\'s grandparents. Mary is Lisa and Karla\'s aunt.',
      arabic: 'مارك هو شقيق لين. جون وسيلا هما جد وجدة بيتر. ماري هي خالة/عمة ليزا وكارلا.'
    },
    exercises: [
      { id: 'ex-30', type: 'mcq', question: 'كيف نعبر عن كتاب أحمد باستخدام التملك؟', options: ['Ahmed\'s book', 'book Ahmed', 'Ahmed book', 'the book Ahmed'], correctAnswer: 'Ahmed\'s book', 'explanation': 'نستخدم Ahmed\'s book للتعبير عن ملكية الكتاب لأحمد.' }
    ],
    summaryAr: 'تم تعلم أفراد العائلة وقاعدة التملك بـ Apostrophe S.',
    bookPageStart: 45,
    bookPageEnd: 45
  },
  {
    id: 'l-a1-3-10',
    unitId: 'u-a1-3',
    level: 'A1',
    title: 'Lesson 30: Science Cross-Curricular - Reptiles (3h)',
    titleAr: 'الدرس 30: علوم - الزواحف (Reptiles & Science Quiz)',
    descriptionAr: 'من كتاب Discover 1 (صفحة 46): قراءة علمية عن الزواحف (alligator, iguana, turtle, snake, komodo dragon) وحقائق الطبيعة.',
    durationMinutes: 20,
    objectives: [
      'معرفة أسماء الزواحف وخصائصها العلمية.',
      'قراءة مسابقة العلوم (Reptiles Quiz).',
      'إكمال المستوى الأول (A1) بنجاح وإصدار الشهادة.'
    ],
    vocabulary: [
      { id: 'v79', word: 'Reptile', ipa: '/ˈreptaɪl/', arabicMeaning: 'زاحف / زواحف', exampleSentence: 'Alligators and snakes are reptiles.', exampleArabic: 'التماسيح والأفاعي زواحف.' },
      { id: 'v80', word: 'Poisonous', ipa: '/ˈpɔɪzənəs/', arabicMeaning: 'سام', exampleSentence: 'Some snakes are poisonous.', exampleArabic: 'بعض الأفاعي سامة.' },
      { id: 'v81', word: 'Backbone', ipa: '/ˈbækboʊn/', arabicMeaning: 'عمود فقري', exampleSentence: 'Reptiles have a backbone.', exampleArabic: 'الزواحف لها عمود فقري.' }
    ],
    grammarExplanationAr: 'استخدام الأسئلة العلمية والمضارع البسيط في تقرير حقائق الحيوانات والزواحف.',
    readingText: {
      english: 'Which well-known reptiles don\'t exist anymore? Dinosaurs. Where do most reptiles live? In hot places. The largest lizard is the Komodo dragon.',
      arabic: 'ما هي الزواحف الشهيرة التي لم تعد موجودة؟ الديناصورات. أين تعيش معظم الزواحف؟ في الأماكن الحارة. أكبر سطيحة هي تننين كومودو.'
    },
    exercises: [
      { id: 'ex-31', type: 'mcq', question: 'ما هو أكبر حيوان زاحف (سحلية) في العالم حسب النص؟', options: ['Komodo dragon', 'Alligator', 'Iguana', 'Turtle'], correctAnswer: 'Komodo dragon', 'explanation': 'تنين كومودو (Komodo dragon) هو أكبر سحلية.' }
    ],
    summaryAr: 'تم إكمال دروس المستوى الأول (Discover 1) الـ 30 بنجاح وإتقان.',
    bookPageStart: 46,
    bookPageEnd: 47
  }
];

export const MOCK_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Discover 1 A1: Alphabet, Numbers & Greetings',
    titleAr: 'فيديو Discover 1 A1: الحروف والأرقام والتحيات',
    level: 'A1',
    skill: 'speaking',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isYoutubeEmbed: false,
    duration: '12:10',
    descriptionAr: 'شرح مرئي مبسط لأبجديات وأرقام منهج Discover 1.',
    unitId: 'u-a1-1',
    rightsConfirmed: true
  },
  {
    id: 'vid-2',
    title: 'Discover 1 A2: Rooms and House Furniture',
    titleAr: 'فيديو Discover 1: غرف المنزل والأثاث',
    level: 'A1',
    skill: 'listening',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isYoutubeEmbed: false,
    duration: '15:00',
    descriptionAr: 'جولة مرئية داخل غرف المنزل وأسمائها باللغة الإنجليزية.',
    unitId: 'u-a1-2',
    rightsConfirmed: true
  }
];

export const MOCK_ACCESS_RECORDS: LevelAccessRecord[] = [
  {
    id: 'acc-1',
    studentId: 'stu-1',
    studentName: 'محمد عبدالله',
    studentEmail: 'mohamed@example.com',
    level: 'A2',
    grantedBy: 'مدير النظام (أحمد)',
    grantedAt: '2026-09-15',
    amountUSD: 49,
    notes: 'تم الدفع عبر التحويل البنكي رقم #9821',
    status: 'active'
  }
];

export const MOCK_PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: 'pq-1',
    skill: 'reading',
    level: 'A1',
    question: 'Read: "Hello, my name is John. I live in London." Where does John live?',
    options: ['Paris', 'London', 'Cairo', 'New York'],
    correctAnswer: 'London'
  },
  {
    id: 'pq-2',
    skill: 'reading',
    level: 'A2',
    question: 'Read: "Yesterday, Mary went to the supermarket to buy fresh vegetables and fruit." What did Mary do yesterday?',
    options: ['She stayed at home', 'She went to the supermarket', 'She traveled abroad', 'She wrote a book'],
    correctAnswer: 'She went to the supermarket'
  },
  {
    id: 'pq-3',
    skill: 'listening',
    level: 'B1',
    question: 'Listen to the audio clip (simulated): "If I had more free time, I would learn Spanish." What does this sentence imply?',
    options: ['He is learning Spanish now', 'He does not have enough free time right now', 'He hates Spanish', 'He speaks Spanish fluently'],
    correctAnswer: 'He does not have enough free time right now'
  },
  {
    id: 'pq-4',
    skill: 'writing',
    level: 'B2',
    question: 'Writing Task: Write a short paragraph (3-4 sentences) about the advantages and disadvantages of online learning.',
    rubricNote: 'Evaluate on grammar, vocabulary diversity, and logical flow.'
  },
  {
    id: 'pq-5',
    skill: 'speaking',
    level: 'C1',
    question: 'Speaking Task: Record a 30-second audio expressing your opinion on artificial intelligence in modern education.',
    rubricNote: 'Evaluate on fluency, pronunciation, and complexity of structure.'
  }
];

export const MOCK_CONTACT_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'سارة خالد',
    email: 'sara@example.com',
    subject: 'استفسار عن فتح مستوى A2',
    message: 'مرحباً، لقد أتممت اختبار تحديد المستوى ونصحتوني بـ A2، كيف يمكنني سداد الرسوم؟',
    createdAt: '2026-09-28 10:30',
    status: 'new'
  }
];

export const MOCK_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-1',
    studentName: 'محمد عبدالله',
    studentEmail: 'mohamed@example.com',
    level: 'A2',
    amountUSD: 49,
    date: '2026-09-15',
    paymentMethod: 'bank_transfer',
    status: 'completed',
    receiptNumber: 'REC-9821'
  }
];

export const MOCK_AUDIT_LOGS: AuditLogItem[] = [
  {
    id: 'log-1',
    adminName: 'مدير النظام (أحمد)',
    action: 'فتح مستوى (Level Unlock)',
    target: 'الطالب: محمد عبدالله (المستوى A2)',
    timestamp: '2026-09-15 14:22',
    details: 'تم التحقق من حوالة بنكية بقيمة $49 وفتح المستوى بنجاح.'
  }
];

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-1',
    studentName: 'محمد عبدالله',
    level: 'A1',
    issueDate: '2026-09-10',
    certificateCode: 'ESUN-A1-88921'
  }
];
