import React, { useState } from 'react';
import { Sun, BookOpen, Award, CheckCircle2, Lock, Sparkles, ArrowRight, Play, FileText, Check, ArrowLeft } from 'lucide-react';
import { StudentProfile, CEFRLevel, Lesson, Unit } from '../types';
import { LEVEL_INFOS, MOCK_UNITS, MOCK_LESSONS } from '../mockData';

interface StudentPortalProps {
  studentProfile: StudentProfile;
  onSelectLesson: (lesson: Lesson) => void;
  setActiveTab: (tab: string) => void;
  unlockedLevels: string[];
}

export const StudentPortal: React.FC<StudentPortalProps> = ({
  studentProfile,
  onSelectLesson,
  setActiveTab,
  unlockedLevels
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const levelInfo = selectedLevel ? LEVEL_INFOS.find(l => l.level === selectedLevel) : null;
  const levelUnits = selectedLevel ? MOCK_UNITS.filter(u => u.level === selectedLevel) : [];
  
  const rawLessons = selectedUnit ? MOCK_LESSONS.filter(l => l.unitId === selectedUnit.id || l.level === selectedUnit.level) : [];
  const unitLessons: Lesson[] = selectedUnit ? (rawLessons.length > 0 ? rawLessons : Array.from({ length: 10 }, (_, i) => ({
    id: `l-${selectedUnit.level}-${selectedUnit.unitNumber}-${i + 1}`,
    unitId: selectedUnit.id,
    level: selectedUnit.level,
    title: `Lesson ${i + 1}: ${selectedUnit.title} - Part ${i + 1}`,
    titleAr: `الدرس ${i + 1}: ${selectedUnit.titleAr} (الجزء ${i + 1})`,
    descriptionAr: `منهاج ${selectedUnit.level} التفاعلي المعتمد: دراسة المفردات، القواعد، الحوارات، وتطوير المهارات الأربع.`,
    durationMinutes: 15,
    objectives: [
      'فهم المفردات الأساسية للدرس واستخدامها في جمل مفيدة.',
      'التدرب على القاعدة النحوية وتطبيقاتها.',
      'تنمية مهارات القراءة والكتابة والاستماع والتحدث.'
    ],
    vocabulary: [
      { id: `v-${i}-1`, word: 'Advanced', ipa: '/ədˈvænst/', arabicMeaning: 'متقدم / تطوري', exampleSentence: 'This is an advanced lesson.', exampleArabic: 'هذا درس متقدم.' },
      { id: `v-${i}-2`, word: 'Practice', ipa: '/ˈpræktɪs/', arabicMeaning: 'ممارسة / تدريب', exampleSentence: 'Practice makes perfect.', exampleArabic: 'الممارسة تؤدي إلى الإتقان.' },
      { id: `v-${i}-3`, word: 'Skill', ipa: '/skɪl/', arabicMeaning: 'مهارة لغوية', exampleSentence: 'Improve your English skills.', exampleArabic: 'حسن مهاراتك في اللغة الإنجليزية.' }
    ],
    grammarExplanationAr: `في هذا الدرس من مستوى ${selectedUnit.level}، نركز على الهياكل اللغوية والتطبيق العملي للمهارات الأربع لضمان طلاقة الطالب وثقته في التواصل.`,
    readingText: {
      english: `Welcome to Lesson ${i + 1} of ${selectedUnit.title}. In this module, we explore essential concepts and practice real-world communication skills.\nLet us read carefully and practice every single sentence with accurate pronunciation and grammar.`,
      arabic: `أهلاً بك في الدرس ${i + 1} من ${selectedUnit.titleAr}. في هذه الوحدة نستكشف المفاهيم الأساسية ونمارس مهارات التواصل الواقعية.\nلنقرأ بعناية ونمارس كل جملة بدقة نطق وقواعد.`
    },
    dialogue: [
      { speaker: 'Ahmed', text: `Hello! How are you progressing in Lesson ${i + 1}?`, textAr: `مرحباً! كيف تتقدم في الدرس ${i + 1}؟` },
      { speaker: 'Sarah', text: 'I am learning very fast and practicing every day!', textAr: 'أنا أتعلم بسرعة وأمارس اللغة كل يوم!' }
    ],
    exercises: [
      { id: `ex-${i}-1`, type: 'mcq' as const, question: `ما هو الهدف الأساسي من الدرس ${i + 1} في هذا المستوى؟`, options: ['إتقان المفردات والقواعد', 'تجاهل اللغة', 'حفظ النصوص فقط', 'لا شيء مما ذكر'], correctAnswer: 'إتقان المفردات والقواعد', explanation: 'الهدف الرئيسي هو الفهم والتطبيق العملي.' },
      { id: `ex-${i}-2`, type: 'short_writing' as const, question: 'اكتب جملة قصيرة تعبر عن ما تعلمته في هذا الدرس:', options: [], correctAnswer: '', explanation: 'يتم تقييم الكتابة بناءً على صحة القواعد.' }
    ],
    summaryAr: `ملخص الدرس ${i + 1}: تم التدرب على المفردات، القواعد، الحوارات، وحل التمارين التفاعلية.`,
    bookPageStart: 10 + i * 2,
    bookPageEnd: 11 + i * 2
  }))) : [];

  const isLevelUnlocked = (lvl: CEFRLevel) => {
    const info = LEVEL_INFOS.find(l => l.level === lvl);
    return unlockedLevels.includes(lvl) || (info ? info.isFree : false);
  };

  // View 3: Lesson list of a specific unit
  if (selectedUnit) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedUnit(null)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 shadow-md shadow-amber-500/20 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة إلى وحدات المستوى {selectedUnit.level}</span>
            </button>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900">
              الوحدة {selectedUnit.unitNumber}
            </span>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">{selectedUnit.titleAr}</h1>
            <p className="text-slate-600 text-sm leading-relaxed">{selectedUnit.descriptionAr}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-r-4 border-amber-500 pr-3">قائمة دروس الوحدة (10 دروس تفاعلية متكاملة)</h3>
            <div className="grid grid-cols-1 gap-4">
              {unitLessons.map((lesson, idx) => {
                const isCompleted = studentProfile.completedLessons.includes(lesson.id);
                return (
                  <div
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson)}
                    className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-amber-400 cursor-pointer transition-all flex items-center justify-between shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 ${
                        isCompleted ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-amber-100 text-amber-900'
                      }`}>
                        {isCompleted ? <Check className="w-6 h-6" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-amber-600">الدرس {idx + 1}</span>
                          <span className="text-xs text-slate-400">• {lesson.durationMinutes} دقيقة</span>
                        </div>
                        <h4 className="text-base font-black text-slate-900 group-hover:text-amber-700 transition-colors">{lesson.titleAr}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{lesson.descriptionAr}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-amber-600 font-bold text-xs bg-amber-50 px-4 py-2 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                      <span>فتح الدرس</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View 2: Units list of a specific level
  if (selectedLevel) {
    const lvlInfo = LEVEL_INFOS.find(l => l.level === selectedLevel)!;
    const unlocked = isLevelUnlocked(selectedLevel);

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedLevel(null)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 shadow-md transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              <span>العودة لجميع المستويات</span>
            </button>
            <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-amber-100 text-amber-900">
              المستوى {selectedLevel}
            </span>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white shadow-xl space-y-4">
            <h1 className="text-3xl font-black">{lvlInfo.titleAr}</h1>
            <p className="text-amber-100 text-sm leading-relaxed max-w-2xl">{lvlInfo.descriptionAr}</p>
            <div className="flex items-center gap-4 pt-2">
              <span className="bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold">📚 كتاب المنهج: {lvlInfo.bookTitle}</span>
              <span className="bg-white/20 px-3.5 py-1 rounded-full text-xs font-bold">🎯 3 وحدات رئيسية • 30 درساً</span>
            </div>
          </div>

          {!unlocked ? (
            <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-3xl mx-auto shadow-lg">
                🔒
              </div>
              <h3 className="text-2xl font-black text-amber-900">المستوى {selectedLevel} مقفل حالياً</h3>
              <p className="text-amber-800 text-sm max-w-md mx-auto">
                هذا المستوى مدفوع ($ {lvlInfo.priceUSD}) ويتطلب تفعيل الإدارة. يمكنك التواصل مع الدعم لفتح المستوى فوراً.
              </p>
              <button
                onClick={() => setActiveTab('contact')}
                className="px-8 py-3.5 rounded-2xl bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 shadow-lg"
              >
                طلب فتح المستوى عبر الإدارة
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">اختر الوحدة الدراسية:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {levelUnits.map((unit, idx) => (
                  <div
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-amber-400 cursor-pointer shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                          الوحدة {idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">{unit.lessonsCount} درساً</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{unit.titleAr}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{unit.descriptionAr}</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
                      <span>استعراض دروس الوحدة</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // View 1: Main Levels Overview (Student Dashboard with Username & Email)
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Student Header with Username & Email */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>طالب نشط على المنصة</span>
            </div>
            <h1 className="text-3xl font-black">مرحباً بك، محمد عبدالله</h1>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span>البريد الإلكتروني:</span>
              <span className="font-mono bg-white/10 px-3 py-1 rounded-lg text-amber-300" dir="ltr">mohamed@example.com</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center shrink-0">
            <div className="text-xs text-slate-300">المستوى الحالي</div>
            <div className="text-2xl font-black text-amber-400">{studentProfile.currentLevel}</div>
          </div>
        </div>

        {/* Levels Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 border-r-4 border-amber-500 pr-3">مستويات الإطار الأوروبي الستة (CEFR A1 - C2)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEVEL_INFOS.map((lvl) => {
              const unlocked = isLevelUnlocked(lvl.level);
              return (
                <div
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  className={`bg-white rounded-3xl p-8 border cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                    lvl.level === 'A1' ? 'border-amber-400 shadow-lg shadow-amber-500/5 ring-2 ring-amber-400/20' : 'border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-amber-600">{lvl.level}</span>
                      <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                        unlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-900 text-amber-400'
                      }`}>
                        {unlocked ? 'مفتوح للتعلم' : `مقفل ($${lvl.priceUSD})`}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">{lvl.titleAr}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{lvl.descriptionAr}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                    <span>اضغط لفتح المستوى وتصفح وحداته</span>
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
