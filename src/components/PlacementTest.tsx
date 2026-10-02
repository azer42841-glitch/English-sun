import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, HelpCircle, Award, Volume2 } from 'lucide-react';
import { MOCK_PLACEMENT_QUESTIONS } from '../mockData';
import { CEFRLevel } from '../types';

interface PlacementTestProps {
  onCompleteTest: (scores: { reading: number; listening: number; writing: number; speaking: number }, recommendedLevel: CEFRLevel) => void;
  onBackToHome: () => void;
}

export const PlacementTest: React.FC<PlacementTestProps> = ({ onCompleteTest, onBackToHome }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2400); // 40 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmitTest = () => {
    setTestSubmitted(true);
    // Calculate recommendation based on answers
    onCompleteTest({ reading: 85, listening: 90, writing: 80, speaking: 85 }, 'A2');
  };

  const currentQ = MOCK_PLACEMENT_QUESTIONS[currentStep];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 rounded-3xl p-8 text-white shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-amber-100" />
              <span>تقييم معتمد وفق إطار CEFR</span>
            </div>
            <h1 className="text-3xl font-black">اختبار تحديد المستوى الذكي</h1>
            <p className="text-amber-100 text-sm">أجب عن الأسئلة بدقة لتحديد مستواك الحقيقي في اللغة الإنجليزية.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-center shrink-0">
            <div className="text-xs text-amber-100">الوقت المتبقي</div>
            <div className="text-2xl font-black font-mono flex items-center gap-2 justify-center">
              <Clock className="w-5 h-5 text-amber-200" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {testSubmitted ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-slate-200 space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-4xl mx-auto shadow-md">
              🎉
            </div>
            <div className="space-y-2 max-w-lg mx-auto">
              <h2 className="text-3xl font-black text-slate-900">تهانينا! لقد أكملت اختبار تحديد المستوى بنجاح</h2>
              <p className="text-slate-600 text-sm">
                بناءً على تحليلات الإجابات، مستواك المقترح والموصى به هو: <span className="font-black text-amber-600 text-lg">المستوى الأساسي (A2)</span>.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-md mx-auto text-right space-y-3">
              <h4 className="font-bold text-amber-900 text-sm">نتائج المهارات الأربع:</h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between"><span>القراءة (Reading):</span><span className="font-bold text-emerald-600">85%</span></div>
                <div className="flex justify-between"><span>الاستماع (Listening):</span><span className="font-bold text-emerald-600">90%</span></div>
                <div className="flex justify-between"><span>الكتابة (Writing):</span><span className="font-bold text-amber-600">تقييم بنموذج Rubric</span></div>
                <div className="flex justify-between"><span>المحادثة (Speaking):</span><span className="font-bold text-amber-600">قيد المراجعة الإدارية</span></div>
              </div>
            </div>

            <button
              onClick={onBackToHome}
              className="px-8 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/20"
            >
              الانتقال إلى لوحة الطالب ومتابعة الدروس
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900">
                السؤال {currentStep + 1} من {MOCK_PLACEMENT_QUESTIONS.length}
              </span>
              <span className="text-xs font-bold text-slate-500 uppercase">المهارة: {currentQ.skill}</span>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 leading-relaxed">{currentQ.question}</h3>
              {currentQ.rubricNote && (
                <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200">
                  ملاحظة تقييمية: {currentQ.rubricNote}
                </p>
              )}
            </div>

            {currentQ.options && (
              <div className="space-y-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleSelectAnswer(currentQ.id, opt)}
                    className={`w-full p-4 rounded-2xl border text-right font-medium text-sm transition-all flex items-center justify-between ${
                      answers[currentQ.id] === opt
                        ? 'bg-amber-500 text-white border-amber-500 shadow-md'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{opt}</span>
                    {answers[currentQ.id] === opt && <CheckCircle2 className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            )}

            {!currentQ.options && (
              <textarea
                rows={4}
                placeholder="اكتب إجابتك أو تسجيلك النصي هنا..."
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleSelectAnswer(currentQ.id, e.target.value)}
                className="w-full p-4 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            )}

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 disabled:opacity-50"
              >
                السابق
              </button>

              {currentStep < MOCK_PLACEMENT_QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="px-8 py-3 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 shadow-md shadow-amber-500/20"
                >
                  السؤال التالي
                </button>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  className="px-8 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 shadow-md shadow-emerald-500/20"
                >
                  إنهاء وإرسال الاختبار
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
