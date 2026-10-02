import React, { useState } from 'react';
import { ShieldCheck, Users, BookOpen, Video, DollarSign, MessageSquare, FileText, CheckCircle2, Lock, Plus, Sparkles, AlertCircle, RefreshCw, Unlock } from 'lucide-react';
import { CEFRLevel, ContactMessage, PaymentRecord, AuditLogItem, LevelAccessRecord } from '../types';

interface AdminPortalProps {
  unlockedLevels: string[];
  onUnlockLevelAdmin: (studentEmail: string, level: CEFRLevel, amountUSD: number, notes: string) => void;
  contactMessages: ContactMessage[];
  payments: PaymentRecord[];
  auditLogs: AuditLogItem[];
  unlockedRecords: LevelAccessRecord[];
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  unlockedLevels,
  onUnlockLevelAdmin,
  contactMessages,
  payments,
  auditLogs,
  unlockedRecords
}) => {
  const [activeTab, setActiveTab] = useState<'unlocks' | 'content' | 'videos' | 'payments' | 'messages' | 'logs'>('unlocks');
  
  // Unlock form state
  const [targetEmail, setTargetEmail] = useState('mohamed@example.com');
  const [targetLevel, setTargetLevel] = useState<CEFRLevel>('A2');
  const [feeAmount, setFeeAmount] = useState('49');
  const [unlockNotes, setUnlockNotes] = useState('تم السداد عبر التحويل البنكي');
  const [successMsg, setSuccessMsg] = useState('');

  // AI Curriculum Generation State
  const [aiLevel, setAiLevel] = useState<CEFRLevel>('A1');
  const [bookTitle, setBookTitle] = useState('Discover 1 Enhanced Edition');
  const [bookDescription, setBookDescription] = useState('Comprehensive English textbook covering alphabet, numbers, countries, school subjects, and daily routines.');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiSuccessMsg, setAiSuccessMsg] = useState('');
  const [generatedCurriculum, setGeneratedCurriculum] = useState<any>(null);

  // Sample student list for management
  const [studentsList, setStudentsList] = useState([
    { id: 'stu-1', name: 'محمد عبدالله', email: 'mohamed@example.com', isActive: true, unlocked: ['A1', 'A2'] },
    { id: 'stu-2', name: 'سارة خالد', email: 'sara@example.com', isActive: true, unlocked: ['A1'] },
    { id: 'stu-3', name: 'إبراهيم الفايز', email: 'ibrahim@example.com', isActive: false, unlocked: ['A1', 'A2', 'B1'] }
  ]);

  const handleUnlockSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUnlockLevelAdmin(targetEmail, targetLevel, Number(feeAmount), unlockNotes);
    setSuccessMsg(`تم فتح المستوى ${targetLevel} للطالب ${targetEmail} بنجاح وتسجيل العملية في سجل التدقيق.`);
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  const toggleStudentLevel = (studentEmail: string, level: CEFRLevel) => {
    setStudentsList(studentsList.map(stu => {
      if (stu.email === studentEmail) {
        const hasLevel = stu.unlocked.includes(level);
        const newUnlocked = hasLevel ? stu.unlocked.filter(l => l !== level) : [...stu.unlocked, level];
        return { ...stu, unlocked: newUnlocked };
      }
      return stu;
    }));
    onUnlockLevelAdmin(studentEmail, level, 49, 'تحديث إداري سريع للحالة');
  };

  const handleAnalyzeAndReplaceCurriculum = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    setAiSuccessMsg('');
    setGeneratedCurriculum(null);

    try {
      const res = await fetch('/api/admin/analyze-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level: aiLevel, bookTitle, bookDescription })
      });
      const data = await res.json();
      if (data.success && data.curriculum) {
        setGeneratedCurriculum(data.curriculum);
        setAiSuccessMsg(`✨ تم تحليل كتاب "${bookTitle}" بنجاح واستبدال المنهج القديم بالوحدات والدروس الجديدة المولدة بالذكاء الاصطناعي للمستوى ${aiLevel}!`);
      } else {
        setAiSuccessMsg('فشل تحليل الكتاب. يرجى المحاولة مرة أخرى.');
      }
    } catch (err) {
      setAiSuccessMsg('حدث خطأ أثناء الاتصال بخدمة التحليل الذكي.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Admin Header */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6 border border-slate-800">
          <div className="space-y-2 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>بوابة الإدارة المركزية (Admin Portal)</span>
            </div>
            <h1 className="text-3xl font-black">لوحة تحكم المشرف العام</h1>
            <p className="text-slate-400 text-sm">صلاحيات حصرية لفتح المستويات، إدارة المنهج بالذكاء الاصطناعي، ومتابعة المدفوعات.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-800 px-4 py-3 rounded-2xl border border-slate-700 text-center">
              <div className="text-xs text-slate-400">حالة النظام</div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1 justify-center mt-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>متصل وآمن</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('unlocks')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'unlocks' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>إدارة الطلاب وأيقونات المستويات (Core)</span>
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'content' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>رفع الكتب وتحليل المنهج بالذكاء الاصطناعي (AI)</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'videos' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>المكتبة المرئية</span>
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'payments' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>السجل المالي</span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'messages' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>صندوق الرسائل</span>
          </button>
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shrink-0 ${
              activeTab === 'logs' ? 'bg-amber-500 text-white shadow-md' : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>سجل التدقيق</span>
          </button>
        </div>

        {/* TAB 1: Unlocks & Student Management */}
        {activeTab === 'unlocks' && (
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
                    قائمة طلاب المنصة وإدارة فتح/قفل المستويات (A1 - C2)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">اضغط على أيقونة أي مستوى بجانب اسم الطالب لفتحه أو إغلاقه فوراً.</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>طالب نشط على المنصة</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-right text-sm">
                  <thead className="bg-slate-50 text-slate-700 text-xs uppercase border-b border-slate-200">
                    <tr>
                      <th className="p-4">حالة النشاط</th>
                      <th className="p-4">اسم الطالب والبريد</th>
                      <th className="p-4">أيقونات المستويات وصلاحيات الفتح والإغلاق</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {studentsList.map((stu) => (
                      <tr key={stu.id} className="hover:bg-slate-50">
                        <td className="p-4">
                          {stu.isActive ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              <span>نشط</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                              <span>غير نشط</span>
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="font-black text-slate-900">{stu.name}</div>
                          <div className="text-xs text-slate-500 font-mono" dir="ltr">{stu.email}</div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map((lvl) => {
                              const isUnlocked = stu.unlocked.includes(lvl);
                              return (
                                <button
                                  key={lvl}
                                  onClick={() => toggleStudentLevel(stu.email, lvl)}
                                  className={`px-3.5 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                                    isUnlocked
                                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                                  }`}
                                  title={isUnlocked ? `مستوى ${lvl} مفتح (اضغط للإغلاق)` : `مستوى ${lvl} مقفل (اضغط للفتح)`}
                                >
                                  <span>{lvl}</span>
                                  {isUnlocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5 text-slate-400" />}
                                </button>
                              );
                            })}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Manual Unlock Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
                    نموذج التوثيق السريع لفتح مستوى
                  </h3>
                  <p className="text-xs text-slate-500">تسجيل بيانات السداد ورقم التحويل للإيصال المالي.</p>
                </div>

                {successMsg && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{successMsg}</span>
                  </div>
                )}

                <form onSubmit={handleUnlockSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">البريد الإلكتروني للطالب</label>
                    <input
                      type="email"
                      required
                      value={targetEmail}
                      onChange={(e) => setTargetEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">المستوى المراد فتحه</label>
                    <select
                      value={targetLevel}
                      onChange={(e) => setTargetLevel(e.target.value as CEFRLevel)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    >
                      <option value="A2">المستوى الأساسي (A2)</option>
                      <option value="B1">المستوى المتوسط (B1)</option>
                      <option value="B2">المستوى فوق المتوسط (B2)</option>
                      <option value="C1">المستوى المتقدم (C1)</option>
                      <option value="C2">مستوى الإتقان التام (C2)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">مبلغ الرسوم المستلم ($)</label>
                    <input
                      type="number"
                      required
                      value={feeAmount}
                      onChange={(e) => setFeeAmount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">ملاحظات إدارية ورقم الحوالة</label>
                    <textarea
                      rows={3}
                      value={unlockNotes}
                      onChange={(e) => setUnlockNotes(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    <span>تأكيد وتسجيل في سجل التدقيق</span>
                  </button>
                </form>
              </div>

              {/* Unlocked Records Table */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
                  سجل المستويات المفعلة للطلاب
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-right text-sm">
                    <thead className="bg-slate-50 text-slate-700 text-xs uppercase border-b border-slate-200">
                      <tr>
                        <th className="p-3">الطالب</th>
                        <th className="p-3">المستوى</th>
                        <th className="p-3">المشرف</th>
                        <th className="p-3">التاريخ</th>
                        <th className="p-3">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {unlockedRecords.map((rec) => (
                        <tr key={rec.id} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-slate-900">{rec.studentEmail}</td>
                          <td className="p-3"><span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">{rec.level}</span></td>
                          <td className="p-3 text-slate-600">{rec.grantedBy}</td>
                          <td className="p-3 text-slate-500 text-xs">{rec.grantedAt}</td>
                          <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">نشط</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: Content Management & AI Curriculum Analysis & Replacement */}
        {activeTab === 'content' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>الذكاء الاصطناعي لتحليل المناهج (Gemini 3.8 Flash)</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                رفع الكتب الدراسية واستبدال المنهج بالذكاء الاصطناعي
              </h3>
              <p className="text-xs text-slate-600">
                قم برفع كتاب المستوى (PDF أو نص المنهج) واضغط على زر التحليل لإنشاء الوحدات والدروس الجديدة واستبدال المنهج الحالي فوراً.
              </p>
            </div>

            {aiSuccessMsg && (
              <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-2xl text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
                <span>{aiSuccessMsg}</span>
              </div>
            )}

            <form onSubmit={handleAnalyzeAndReplaceCurriculum} className="space-y-6 bg-slate-50 p-6 rounded-3xl border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">اختر المستوى المستهدف</label>
                  <select
                    value={aiLevel}
                    onChange={(e) => setAiLevel(e.target.value as CEFRLevel)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white font-bold text-amber-700 focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="A1">المستوى المبتدئ (A1)</option>
                    <option value="A2">المستوى الأساسي (A2)</option>
                    <option value="B1">المستوى المتوسط (B1)</option>
                    <option value="B2">المستوى فوق المتوسط (B2)</option>
                    <option value="C1">المستوى المتقدم (C1)</option>
                    <option value="C2">مستوى الإتقان التام (C2)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">عنوان الكتاب أو المنهج الدراسي</label>
                  <input
                    type="text"
                    required
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-amber-500 font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">رفع ملف الكتاب (PDF / مستند نصي) أو وصف وحدات المنهج</label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-white space-y-2">
                  <FileText className="w-8 h-8 text-amber-500 mx-auto" />
                  <div className="text-xs font-bold text-slate-800">اسحب وأفرغ ملف الكتاب هنا، أو اضغط للاختيار من جهازك</div>
                  <input type="file" accept=".pdf,.txt,.docx" className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 cursor-pointer mx-auto block" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">ملخص أو محتوى المنهج المراد تحليله واستبداله</label>
                <textarea
                  rows={4}
                  required
                  value={bookDescription}
                  onChange={(e) => setBookDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-amber-500"
                  placeholder="أدخل محتوى أو وصف الوحدات والدروس..."
                />
              </div>

              <button
                type="submit"
                disabled={isAnalyzing}
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                <span>{isAnalyzing ? 'جاري تحليل الكتاب بالذكاء الاصطناعي وإنشاء المنهج الجديد...' : 'تحليل الكتاب بالذكاء الاصطناعي وإنشاء الوحدات والدروس الجديدة (استبدال المنهج)'}</span>
              </button>
            </form>

            {generatedCurriculum && (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-3xl space-y-4">
                <div className="flex items-center gap-2 text-emerald-900 font-black text-base">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <span>تم استبدال المنهج بنجاح! معاينة المنهج الجديد للمستوى {aiLevel}:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {generatedCurriculum.units?.map((u: any, idx: number) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-emerald-200 space-y-2">
                      <div className="text-xs font-bold text-emerald-700">الوحدة {u.unitNumber}</div>
                      <div className="font-black text-slate-900 text-sm">{u.titleAr}</div>
                      <div className="text-xs text-slate-600 line-clamp-2">{u.descriptionAr}</div>
                      <div className="text-[11px] font-bold text-amber-600 pt-1">عدد الدروس: {u.lessons?.length || 3} دروس مولدة</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: Video Management */}
        {activeTab === 'videos' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              إدارة المكتبة المرئية
            </h3>
            <p className="text-sm text-slate-600">رفع مقاطع الفيديو أو دمج الروابط المعتمدة مع التأكيد على حقوق الملكية الفكرية.</p>
          </div>
        )}

        {/* TAB 4: Payments Ledger */}
        {activeTab === 'payments' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              السجل المالي ومدفوعات المستويات
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-50 text-slate-700 text-xs uppercase border-b border-slate-200">
                  <tr>
                    <th className="p-3">رقم الإيصال</th>
                    <th className="p-3">اسم الطالب</th>
                    <th className="p-3">البريد</th>
                    <th className="p-3">المستوى</th>
                    <th className="p-3">المبلغ</th>
                    <th className="p-3">التاريخ</th>
                    <th className="p-3">طريقة الدفع</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {payments.map((p) => (
                    <tr key={p.id}>
                      <td className="p-3 font-mono font-bold text-slate-800">{p.receiptNumber}</td>
                      <td className="p-3 font-bold">{p.studentName}</td>
                      <td className="p-3 text-slate-600">{p.studentEmail}</td>
                      <td className="p-3"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-xs">{p.level}</span></td>
                      <td className="p-3 font-bold text-emerald-600">${p.amountUSD}</td>
                      <td className="p-3 text-xs text-slate-500">{p.date}</td>
                      <td className="p-3 text-xs">{p.paymentMethod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 5: Contact Messages */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              صندوق رسائل الطلاب الواردة
            </h3>
            <div className="space-y-4">
              {contactMessages.map((msg) => (
                <div key={msg.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-900 text-base">{msg.subject}</div>
                    <span className="text-xs text-slate-500">{msg.createdAt}</span>
                  </div>
                  <div className="text-xs text-amber-700 font-bold">المرسل: {msg.name} ({msg.email})</div>
                  <p className="text-slate-700 text-sm bg-white p-4 rounded-xl border border-slate-200">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: Audit Logs */}
        {activeTab === 'logs' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              سجل التدقيق والعمليات الإدارية (Audit Logs)
            </h3>
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{log.action}: {log.target}</div>
                    <div className="text-xs text-slate-500">{log.details}</div>
                  </div>
                  <div className="text-left text-xs text-slate-400">
                    <div>{log.adminName}</div>
                    <div>{log.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
