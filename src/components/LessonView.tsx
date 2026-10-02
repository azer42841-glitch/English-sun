import React, { useState } from 'react';
import { ArrowRight, BookOpen, Volume2, CheckCircle2, HelpCircle, Award, Sparkles, FileText, Check, AlertCircle } from 'lucide-react';
import { Lesson, CEFRLevel } from '../types';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
  onCompleteLesson: (lessonId: string) => void;
  onOpenPdfModal: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onBack,
  onCompleteLesson,
  onOpenPdfModal
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<'content' | 'vocabulary' | 'exercises'>('content');
  const [selectedWord, setSelectedWord] = useState<{ word: string; ipa: string; meaning: string } | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  // Helper dictionary for Discover 1 words translation
  const getArabicMeaning = (word: string, foundMeaning?: string) => {
    if (foundMeaning) return foundMeaning;
    const dict: Record<string, string> = {
      is: 'يكون / تكون',
      are: 'يكونون / تكونون',
      am: 'أكون',
      the: 'الـ (للتعريف)',
      a: 'أداة نكرة للمفرد',
      an: 'أداة نكرة للمتحرك',
      and: 'و (لربط الكلمات)',
      in: 'في (داخل المكان)',
      on: 'على (فوق السطح)',
      at: 'في / عند (للوقت أو المكان)',
      to: 'إلى (اتجاه)',
      of: 'من / الخاص بـ',
      it: 'هو / هي (لغير العاقل)',
      he: 'هو (للمفرد المذكر)',
      she: 'هي (للمفرد المؤنث)',
      they: 'هم / هن (للجمع)',
      we: 'نحن (للمتكلم الجمع)',
      you: 'أنت / أنتم (للخاطب)',
      i: 'أنا (للمتكلم المفرد)',
      my: 'لي / الخاص بي',
      your: 'لك / الخاص بك',
      his: 'له / الخاص به',
      her: 'لها / الخاص بها',
      this: 'هذا / هذه (للقريب)',
      that: 'ذلك / تلك (للبعيد)',
      what: 'ماذا / ما (للسؤال)',
      where: 'أين (للسؤال عن المكان)',
      when: 'متى (للسؤال عن الزمان)',
      how: 'كيف (للسؤال عن الحال)',
      why: 'لماذا',
      because: 'لأن',
      name: 'اسم الشخص أو الشيء',
      student: 'طالب / تلميذ',
      school: 'مدرسة تعليمية',
      teacher: 'معلم / أستاذ',
      house: 'منزل / بيت سكنى',
      room: 'غرفة داخل المنزل',
      book: 'كتاب للقراءة',
      pen: 'قلم للكتابة',
      red: 'لون أحمر',
      blue: 'لون أزرق',
      green: 'لون أخضر',
      yellow: 'لون أصفر',
      black: 'لون أسود',
      white: 'لون أبيض',
      color: 'لون',
      colors: 'ألوان',
      dog: 'حيوان الكلب',
      cat: 'حيوان القطة',
      car: 'سيارة نقل',
      water: 'ماء للشرب',
      food: 'طعام وجبة',
      day: 'يوم (24 ساعة)',
      time: 'وقت / زمن',
      love: 'حب / يعشق',
      like: 'يحب / يعجب بـ',
      good: 'جيد / صالح',
      new: 'جديد / حديث',
      big: 'كبير الحجم',
      small: 'صغير الحجم',
      friend: 'صديق',
      family: 'عائلة',
      father: 'أب',
      mother: 'أم',
      brother: 'أخ',
      sister: 'أخت',
      hello: 'مرحباً',
      hi: 'أهلاً',
      goodbye: 'مع السلامة',
      morning: 'صباح',
      evening: 'مساء',
      night: 'ليل',
      yes: 'نعم',
      no: 'لا',
      please: 'من فضلك',
      thank: 'يشكر / شكراً',
      sorry: 'عذراً / آسف',
      welcome: 'أهلاً وسهلاً',
      module: 'وحدة تعليمية / نموذج',
      modules: 'وحدات تعليمية',
      shopping: 'تسوق / شراء',
      shop: 'متجر / يتسوق',
      daily: 'يومي',
      life: 'حياة',
      lesson: 'درس تعليمي',
      unit: 'وحدة دراسية',
      explore: 'يستكشف / يتعرف على',
      essential: 'أساسي / ضروري',
      concepts: 'مفاهيم أساسية',
      practice: 'يمارس / تمرن',
      real: 'حقيقي',
      world: 'عالم',
      communication: 'تواصل / إتصال',
      skills: 'مهارات',
      skill: 'مهارة',
      grammar: 'قواعد لغوية',
      vocabulary: 'مفردات لغوية',
      reading: 'قراءة',
      writing: 'كتابة',
      listening: 'استماع',
      speaking: 'تحدث',
      exercise: 'تمرين تدريبي',
      exercises: 'تمارين تدريبية',
      question: 'سؤال',
      answer: 'إجابة',
      correct: 'صحيح',
      incorrect: 'خطأ',
      summary: 'ملخص',
      introduction: 'مقدمة',
      conclusion: 'خاتمة',
      example: 'مثال توضيحي',
      examples: 'أمثلة توضيحية',
      sentence: 'جملة مفيدة',
      sentences: 'جمل مفيدة',
      word: 'كلمة',
      words: 'كلمات',
      letter: 'حرف هجائي',
      letters: 'حروف',
      number: 'رقم / عدد',
      numbers: 'أرقام',
      notebook: 'دفتر',
      desk: 'مكتب',
      table: 'طاولة',
      chair: 'كرسي',
      door: 'باب',
      window: 'نافذة',
      computer: 'حاسوب',
      phone: 'هاتف',
      internet: 'إنترنت',
      music: 'موسيقى',
      sport: 'رياضة',
      game: 'لعبة',
      play: 'يلعب / مسرحية',
      work: 'عمل / يعمل',
      job: 'وظيفة',
      money: 'نقود',
      price: 'سعر',
      buy: 'يشتري',
      sell: 'يبيع',
      market: 'سوق',
      store: 'متجر',
      coffee: 'قهوة',
      tea: 'شاي',
      milk: 'حليب',
      apple: 'تفاح',
      banana: 'موز',
      bread: 'خبز',
      egg: 'بيضة',
      meat: 'لحم',
      fish: 'سمك',
      chicken: 'دجاج',
      fruit: 'فاكهة',
      vegetables: 'خضروات',
      breakfast: 'فطور',
      lunch: 'غداء',
      dinner: 'عشاء',
      restaurant: 'مطعم',
      hotel: 'فندق',
      airport: 'مطار',
      flight: 'رحلة جوية',
      ticket: 'تذكرة',
      bag: 'حقيبة',
      clothes: 'ملابس',
      shirt: 'قميص',
      pants: 'بنطلون',
      shoes: 'حذاء',
      hat: 'قبعة',
      weather: 'طقس',
      sun: 'شمس',
      rain: 'مطر',
      hot: 'حار',
      cold: 'بارد',
      warm: 'دافئ',
      cool: 'منعش / بارد قليلاً',
      hour: 'ساعة',
      minute: 'دقيقة',
      second: 'ثانية',
      today: 'اليوم',
      tomorrow: 'غداً',
      yesterday: 'أمس',
      week: 'أسبوع',
      month: 'شهر',
      year: 'سنة',
      want: 'يريد',
      need: 'يحتاج',
      have: 'يمتلك',
      do: 'يفعل',
      make: 'يصنع',
      go: 'يذهب',
      come: 'يأتي',
      see: 'يرى',
      look: 'ينظر',
      hear: 'يسمع',
      listen: 'يستمع',
      speak: 'يتكلم',
      talk: 'يتحدث',
      read: 'يقرأ',
      write: 'يكتب',
      learn: 'يتعلم',
      teach: 'يعلم',
      know: 'يعرف',
      think: 'يفكر',
      understand: 'يفهم',
      remember: 'يتذكر',
      forget: 'ينسى',
      start: 'يبدأ',
      finish: 'ينهي',
      open: 'يفتح',
      close: 'يغلق',
      tall: 'طويل',
      short: 'قصير',
      long: 'طويل (للمسافة أو الوقت)',
      fast: 'سريع',
      slow: 'بطيء',
      happy: 'سعيد',
      sad: 'حزين',
      angry: 'غاضب',
      tired: 'متعب',
      busy: 'مشغول',
      free: 'حر / متفرغ',
      old: 'قديم / كبير السن',
      bad: 'سيء',
      nice: 'لطيف',
      beautiful: 'جميل',
      ugly: 'قبيح',
      easy: 'سهل',
      difficult: 'صعب',
      right: 'صحيح / يمين',
      left: 'يسار',
      up: 'أعلى',
      down: 'أسفل',
      under: 'تحت',
      behind: 'خلف',
      near: 'قريب من',
      far: 'بعيد عن',
      or: 'أو',
      but: 'لكن',
      so: 'لذلك',
      if: 'إذا',
      who: 'من',
      which: 'أي',
      was: 'كان',
      were: 'كانوا',
      will: 'سوف',
      can: 'يستطيع',
      could: 'استطاع',
      should: 'ينبغي',
      must: 'يجب',
      may: 'ربما',
      might: 'ربما'
    };
    const lower = word.toLowerCase();
    if (dict[lower]) return dict[lower];
    // Check singular if ends in s, es, ed, ing
    if (lower.endsWith('s') && dict[lower.slice(0, -1)]) {
      return dict[lower.slice(0, -1)] + ' (جمع)';
    }
    if (lower.endsWith('ed') && dict[lower.slice(0, -2)]) {
      return dict[lower.slice(0, -2)] + ' (ماضي)';
    }
    if (lower.endsWith('ing') && dict[lower.slice(0, -3)]) {
      return dict[lower.slice(0, -3)] + ' (اسم فاعل / استمرار)';
    }
    // Professional general translation lookup helper based on word context
    return `ترجمة فورية: ${word}`;
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      alert(`النطق الصوتي: ${text}`);
    }
  };

  const [isTranslating, setIsTranslating] = useState(false);

  const handleWordClick = async (cleanWord: string) => {
    const found = lesson.vocabulary.find(v => v.word.toLowerCase() === cleanWord.toLowerCase());
    const localMeaning = getArabicMeaning(cleanWord, found?.arabicMeaning);
    
    setSelectedWord({
      word: cleanWord,
      ipa: found?.ipa || `/${cleanWord.toLowerCase()}/`,
      meaning: localMeaning
    });
    speakText(cleanWord);

    // Fetch precise AI translation from server API
    try {
      setIsTranslating(true);
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: cleanWord, contextSentence: lesson.readingText.english })
      });
      const data = await res.json();
      if (data.success && data.translation) {
        setSelectedWord({
          word: data.translation.word || cleanWord,
          ipa: data.translation.ipa || found?.ipa || `/${cleanWord.toLowerCase()}/`,
          meaning: data.translation.arabicMeaning || localMeaning
        });
      }
    } catch (err) {
      // Keep local meaning if API fails
    } finally {
      setIsTranslating(false);
    }
  };

  const handleAnswerSelect = (exId: string, answer: string) => {
    setSelectedAnswers({ ...selectedAnswers, [exId]: answer });
  };

  const handleCompleteClick = () => {
    setIsCompleted(true);
    onCompleteLesson(lesson.id);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Persistent Top Bar */}
      <div className="sticky top-20 z-40 bg-white border-b border-amber-100 shadow-sm px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للوحدة</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
              المستوى {lesson.level}
            </span>
            <h1 className="text-base font-black text-slate-900 hidden sm:block">{lesson.titleAr}</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPdfModal}
              className="px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs hover:bg-amber-100 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>كتاب PDF المنهجي (صفحات {lesson.bookPageStart}-{lesson.bookPageEnd})</span>
            </button>

            {!isCompleted ? (
              <button
                onClick={handleCompleteClick}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>إكمال الدرس</span>
              </button>
            ) : (
              <span className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center gap-1.5 border border-emerald-300">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>تم إكمال الدرس بنجاح (+25 XP)</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Lesson Header Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl mb-8 space-y-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                📚 منهج Discover 1
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                📄 صفحات الكتاب: {lesson.bookPageStart} - {lesson.bookPageEnd}
              </span>
            </div>
            <span className="text-xs font-bold bg-white text-amber-900 px-3.5 py-1 rounded-full shadow">
              {lesson.level} - الوحدة التفاعلية
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black">{lesson.titleAr}</h2>
          <p className="text-amber-100 text-sm leading-relaxed max-w-2xl">{lesson.descriptionAr}</p>

          {/* Audio Practice Bar */}
          <div className="bg-white/15 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between flex-wrap gap-3 border border-white/20">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Volume2 className="w-5 h-5 text-amber-200 animate-pulse" />
              <span>الاستماع الصوتي للدرس (نطق أصلي):</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => speakText(lesson.title.replace(/Lesson \d+: /, ''))}
                className="px-4 py-1.5 rounded-xl bg-white text-amber-900 font-bold text-xs hover:bg-amber-50 shadow transition-all flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span>استماع للعنوان</span>
              </button>
              <button
                onClick={() => speakText(lesson.readingText.english)}
                className="px-4 py-1.5 rounded-xl bg-slate-900 text-amber-400 font-bold text-xs hover:bg-slate-800 shadow transition-all flex items-center gap-1.5"
              >
                <Volume2 className="w-4 h-4" />
                <span>استماع للنص كامل</span>
              </button>
            </div>
          </div>

          {/* Objectives */}
          <div className="pt-2 border-t border-white/20">
            <h3 className="text-xs font-bold text-amber-200 uppercase tracking-wider mb-2">أهداف الدرس التعليمية:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-200 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'content' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            الشرح والنصوص والقواعد
          </button>
          <button
            onClick={() => setActiveTab('vocabulary')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'vocabulary' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            المفردات والقاموس الناطق ({lesson.vocabulary.length})
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'exercises' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            التمارين التفاعلية والمهارات الأربع ({lesson.exercises.length})
          </button>
        </div>

        {/* TAB 1: Content & Reading */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            
            {/* Grammar Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-slate-950 border-r-4 border-amber-500 pr-3 flex items-center justify-between">
                <span>شرح القاعدة النحوية واللغوية</span>
                <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold">شرح معزز بالصور التوضيحية</span>
              </h3>

              {/* Illustrative Visual Explanation Card */}
              <div className="bg-gradient-to-tr from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center text-4xl shadow-md shrink-0">
                  💡
                </div>
                <div className="space-y-2 text-right flex-1">
                  <h4 className="font-black text-slate-950 text-base">قاعدة توضيحية من منهج Discover 1</h4>
                  <p className="text-slate-900 font-semibold text-sm leading-relaxed">
                    {lesson.grammarExplanationAr}
                  </p>
                </div>
              </div>
            </div>

            {/* Reading Text Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-black text-slate-950 border-r-4 border-amber-500 pr-3">
                نص القراءة التفاعلي (Interactive Reading)
              </h3>
              <p className="text-xs font-bold text-slate-700">اضغط على أي كلمة في النص أدناه لمعرفة نطقها ومعناها بالعربية فوراً بلون مختلف مع الصوت.</p>

              {/* Word Popup Card with distinct color for Arabic translation */}
              {selectedWord && (
                <div className="bg-amber-50 border-2 border-amber-300 p-5 rounded-2xl flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-2xl font-black text-slate-950">{selectedWord.word}</span>
                    <span className="font-mono text-xs bg-white px-3 py-1.5 rounded-lg border border-amber-200 text-slate-800 font-bold">{selectedWord.ipa}</span>
                    <span className="font-black text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-xl border border-emerald-200 text-base">{selectedWord.meaning}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => speakText(selectedWord.word)}
                      className="px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold flex items-center gap-1.5 shadow hover:bg-amber-600"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>استماع للكلمة</span>
                    </button>
                    <button
                      onClick={() => setSelectedWord(null)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-900 px-2"
                    >
                      إغلاق
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="space-y-3 border-l border-slate-200 pl-4">
                  <div className="text-xs font-bold text-amber-800 uppercase">النص الإنجليزي الأصلي (اضغط على أي كلمة)</div>
                  <div className="text-base text-slate-950 font-sans font-semibold leading-relaxed tracking-wide whitespace-pre-line flex flex-wrap gap-1 items-center text-left" dir="ltr">
                    {lesson.readingText.english.split(/(\s+)/).map((token, idx) => {
                      const cleanWord = token.replace(/[^a-zA-Z]/g, '');
                      if (!cleanWord) return <span key={idx}>{token}</span>;
                      return (
                        <span
                          key={`word-token-${idx}-${cleanWord}`}
                          onClick={() => handleWordClick(cleanWord)}
                          className="cursor-pointer hover:bg-amber-300 hover:text-amber-950 px-1.5 py-0.5 rounded transition-colors font-bold border-b border-dashed border-amber-400"
                          title="اضغط لمعرفة المعنى والنطق الفوري"
                        >
                          {token}
                        </span>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => speakText(lesson.readingText.english)}
                    className="px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-amber-600 mt-4 shadow"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>استماع للنص كامل</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-amber-800 uppercase">الترجمة العربية الدقيقة</div>
                  <div className="text-base text-slate-950 font-semibold leading-relaxed whitespace-pre-line">
                    {lesson.readingText.arabic}
                  </div>
                </div>
              </div>
            </div>

            {/* Dialogue if available with Male/Female speakers and voice pitch */}
            {lesson.dialogue && lesson.dialogue.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-black text-slate-950 border-r-4 border-amber-500 pr-3">
                  حوار توضيحي (Dialogue with Speakers)
                </h3>
                <div className="space-y-3">
                  {lesson.dialogue.map((d, i) => {
                    const isFemale = i % 2 !== 0;
                    const speakerName = isFemale ? 'سارة (Sarah)' : 'أحمد (Ahmed)';
                    return (
                      <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white ${
                            isFemale ? 'bg-rose-500' : 'bg-blue-600'
                          }`}>
                            {isFemale ? '👩' : '👨'}
                          </div>
                          <div>
                            <span className="font-black text-slate-950 text-xs block">{speakerName}</span>
                            <span className="text-slate-950 font-bold text-base" dir="ltr">{d.text}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-slate-900 font-semibold text-sm">{d.textAr}</div>
                          <button
                            onClick={() => {
                              const u = new SpeechSynthesisUtterance(d.text);
                              u.lang = 'en-US';
                              u.pitch = isFemale ? 1.3 : 0.8;
                              window.speechSynthesis.speak(u);
                            }}
                            className="p-2 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 shadow-sm"
                            title="استماع لصوت المتحدث"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 2: Vocabulary */}
        {activeTab === 'vocabulary' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
                قائمة مفردات الدرس مع النطق الصوتي (IPA)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {lesson.vocabulary.map((vocab) => (
                  <div key={vocab.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-slate-950">{vocab.word}</span>
                      <button
                        onClick={() => speakText(vocab.word)}
                        className="p-2 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors"
                        title="استماع للنطق"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-800 font-bold">{vocab.ipa}</span>
                      <span className="font-black text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 text-sm">{vocab.arabicMeaning}</span>
                    </div>

                    {vocab.exampleSentence && (
                      <div className="pt-2 border-t border-slate-200 text-xs text-slate-700 space-y-1 font-semibold">
                        <div dir="ltr">{vocab.exampleSentence}</div>
                        <div className="text-slate-600">{vocab.exampleArabic}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Exercises & 4-Skills Assessment */}
        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-lg font-black text-slate-950 border-r-4 border-amber-500 pr-3">
                    تقييم المهارات الأربع (Listening, Reading, Writing, Speaking)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 font-semibold">أسئلة تقييمية معتمدة من منهج Discover 1 للارتقاء بمستوى الطالب.</p>
                </div>
                <button
                  onClick={() => setShowResults(true)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 shadow-md"
                >
                  تصحيح وتقييم المهارات الفوري
                </button>
              </div>

              <div className="space-y-6">
                {lesson.exercises.map((ex, index) => {
                  const isCorrect = showResults && selectedAnswers[ex.id] === ex.correctAnswer;

                  return (
                    <div key={ex.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-xl bg-amber-500 text-white font-black flex items-center justify-center text-sm shrink-0">
                          {index + 1}
                        </span>
                        <div className="space-y-1">
                          <h4 className="font-black text-slate-950 text-base">{ex.question}</h4>
                          <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-md">مهارة التقييم: {ex.type === 'mcq' ? 'القراءة والاستماع (Reading & Listening)' : 'الكتابة (Writing)'}</span>
                        </div>
                      </div>

                      {/* Options */}
                      {ex.options && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {ex.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleAnswerSelect(ex.id, opt)}
                              className={`p-3.5 rounded-xl border text-right font-bold text-sm transition-all flex items-center justify-between ${
                                selectedAnswers[ex.id] === opt
                                  ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                                  : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-100'
                              }`}
                            >
                              <span>{opt}</span>
                              {selectedAnswers[ex.id] === opt && <Check className="w-4 h-4" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Short writing */}
                      {ex.type === 'short_writing' && (
                        <div className="space-y-2 pt-2">
                          <textarea
                            rows={3}
                            placeholder="اكتب إجابتك أو تعبيرك هنا..."
                            value={selectedAnswers[ex.id] || ''}
                            onChange={(e) => handleAnswerSelect(ex.id, e.target.value)}
                            className="w-full p-4 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                          />
                        </div>
                      )}

                      {/* Result feedback */}
                      {showResults && (
                        <div className={`p-4 rounded-xl text-sm flex items-center gap-2 font-bold ${
                          isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-amber-50 text-amber-950 border border-amber-200'
                        }`}>
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <div>
                            <span>{isCorrect ? '✨ إجابة صحيحة وممتازة!' : '💡 توضيح القاعدة والتصحيح النموذجي:'}</span>{' '}
                            <span className="font-semibold">{ex.explanation || `الإجابة الصحيحة هي: ${ex.correctAnswer}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
