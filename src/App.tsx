import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { StudentPortal } from './components/StudentPortal';
import { LessonView } from './components/LessonView';
import { PlacementTest } from './components/PlacementTest';
import { VideoLibrary } from './components/VideoLibrary';
import { DictionaryView } from './components/DictionaryView';
import { AdminPortal } from './components/AdminPortal';
import { AuthModal } from './components/AuthModal';
import { AssumptionsModal } from './components/AssumptionsModal';
import { User, StudentProfile, Lesson, CEFRLevel, ContactMessage, PaymentRecord, AuditLogItem, LevelAccessRecord } from './types';
import { MOCK_LESSONS, MOCK_CONTACT_MESSAGES, MOCK_PAYMENTS, MOCK_AUDIT_LOGS, MOCK_ACCESS_RECORDS, LEVEL_INFOS } from './mockData';
import { Sparkles, BookOpen, Video, Award, User as UserIcon, ShieldCheck, HelpCircle, DollarSign, Send, CheckCircle2, Lock } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>({
    id: 'u-student',
    name: 'محمد عبدالله',
    email: 'mohamed@example.com',
    role: 'student',
    isLoggedIn: true
  });

  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    id: 'stu-1',
    userId: 'u-student',
    currentLevel: 'A1',
    progressPercent: 35,
    completedLessons: ['l-a1-1-1'],
    unlockedLevels: ['A1', 'A2'],
    placementTestCompleted: false,
    xpPoints: 125,
    badges: ['مبتدئ نشط', 'أول درس']
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [authModalRole, setAuthModalRole] = useState<'student' | 'admin' | null>(null);
  const [assumptionsModalOpen, setAssumptionsModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  // DB state for admin
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(MOCK_CONTACT_MESSAGES);
  const [payments, setPayments] = useState<PaymentRecord[]>(MOCK_PAYMENTS);
  const [auditLogs, setAuditLogs] = useState<AuditLogItem[]>(MOCK_AUDIT_LOGS);
  const [unlockedRecords, setUnlockedRecords] = useState<LevelAccessRecord[]>(MOCK_ACCESS_RECORDS);

  // Support contact form state for dedicated contact page
  const [supportForm, setSupportForm] = useState({ name: '', email: '', type: 'level_unlock', message: '' });
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const unlockedLevelsList = studentProfile.unlockedLevels;

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    if (user.role === 'admin') {
      setActiveTab('admin');
    } else {
      setActiveTab('student');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('home');
  };

  const handleUnlockLevelAdmin = (studentEmail: string, level: CEFRLevel, amountUSD: number, notes: string) => {
    const newRecord: LevelAccessRecord = {
      id: 'acc-' + Date.now(),
      studentId: 'stu-x',
      studentName: studentEmail.split('@')[0],
      studentEmail,
      level,
      grantedBy: currentUser?.name || 'مدير النظام',
      grantedAt: new Date().toISOString().split('T')[0],
      amountUSD,
      notes,
      status: 'active'
    };
    setUnlockedRecords([newRecord, ...unlockedRecords]);

    if (!studentProfile.unlockedLevels.includes(level)) {
      setStudentProfile({
        ...studentProfile,
        unlockedLevels: [...studentProfile.unlockedLevels, level]
      });
    }

    setPayments([
      {
        id: 'pay-' + Date.now(),
        studentName: studentEmail.split('@')[0],
        studentEmail,
        level,
        amountUSD,
        date: new Date().toISOString().split('T')[0],
        paymentMethod: 'bank_transfer',
        status: 'completed',
        receiptNumber: 'REC-' + Math.floor(1000 + Math.random() * 9000)
      },
      ...payments
    ]);

    setAuditLogs([
      {
        id: 'log-' + Date.now(),
        adminName: currentUser?.name || 'مدير النظام',
        action: 'فتح مستوى (Level Unlock)',
        target: `الطالب: ${studentEmail} (مستوى ${level})`,
        timestamp: new Date().toLocaleString(),
        details: notes
      },
      ...auditLogs
    ]);
  };

  const handleCompleteLesson = (lessonId: string) => {
    if (!studentProfile.completedLessons.includes(lessonId)) {
      setStudentProfile({
        ...studentProfile,
        completedLessons: [...studentProfile.completedLessons, lessonId],
        xpPoints: studentProfile.xpPoints + 25
      });
    }
  };

  const handlePlacementComplete = (scores: { reading: number; listening: number; writing: number; speaking: number }, recommendedLevel: CEFRLevel) => {
    setStudentProfile({
      ...studentProfile,
      placementTestCompleted: true,
      placementResult: {
        recommendedLevel,
        scores,
        date: new Date().toISOString().split('T')[0]
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Tajawal',sans-serif]" dir="rtl">
      
      <Navbar
        currentUser={currentUser}
        studentProfile={studentProfile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAuth={(role) => setAuthModalRole(role)}
        onLogout={handleLogout}
        onOpenAssumptions={() => setAssumptionsModalOpen(true)}
      />

      <main className="flex-1 pb-20 md:pb-0">
        {activeTab === 'home' && (
          <Home
            setActiveTab={setActiveTab}
            onSelectLevel={(lvl) => {
              if (unlockedLevelsList.includes(lvl) || lvl === 'A1') {
                setActiveTab('student');
              } else {
                setActiveTab('contact');
              }
            }}
            onOpenAuth={(role) => setAuthModalRole(role)}
          />
        )}

        {activeTab === 'levels' && (
          <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-bold">
                الخطط والأسعار والمستويات الأربعة
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900">مقارنة المستويات والرسوم الدراسية</h1>
              <p className="text-slate-600 text-sm">اختر المستوى المناسب لطموحك واطلب التفعيل الفوري من الإدارة.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LEVEL_INFOS.map((lvl) => {
                const isUnlocked = unlockedLevelsList.includes(lvl.level);
                return (
                  <div key={lvl.level} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-amber-600">{lvl.level}</span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700" dir="ltr">
                          ${lvl.priceUSD} USD
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{lvl.titleAr}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{lvl.descriptionAr}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="text-xs text-slate-500 font-medium">{lvl.bookTitle}</div>
                      <button
                        onClick={() => {
                          if (isUnlocked || lvl.isFree) {
                            setActiveTab('student');
                          } else {
                            setActiveTab('contact');
                          }
                        }}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm ${
                          isUnlocked || lvl.isFree ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                      >
                        {isUnlocked || lvl.isFree ? 'الدخول للمحتوى' : `طلب فتح المستوى ($${lvl.priceUSD})`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'student' && (
          <StudentPortal
            studentProfile={studentProfile}
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              setActiveTab('lesson');
            }}
            setActiveTab={setActiveTab}
            unlockedLevels={unlockedLevelsList}
          />
        )}

        {activeTab === 'lesson' && selectedLesson && (
          <LessonView
            lesson={selectedLesson}
            onBack={() => setActiveTab('student')}
            onCompleteLesson={handleCompleteLesson}
            onOpenPdfModal={() => setPdfModalOpen(true)}
          />
        )}

        {activeTab === 'placement' && (
          <PlacementTest
            onCompleteTest={handlePlacementComplete}
            onBackToHome={() => setActiveTab('student')}
          />
        )}

        {activeTab === 'videos' && (
          <VideoLibrary unlockedLevels={unlockedLevelsList} />
        )}

        {activeTab === 'dictionary' && (
          <DictionaryView />
        )}

        {activeTab === 'contact' && (
          <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200 space-y-6">
              <div className="text-center space-y-2">
                <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold">الدعم الفني وطلبات التفعيل</span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">مركز المساعدة والتواصل</h1>
                <p className="text-slate-600 text-sm">اختر نوع الطلب (فتح مستوى، تغيير البريد، مشكلة تقنية) وسنتواصل معك سريعاً.</p>
              </div>

              {supportSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-2 text-emerald-800">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-lg">تم إرسال طلبك بنجاح!</h3>
                  <p className="text-sm">تم تسجيل تذكرتك في لوحة الإدارة وسيتم الرد خلال ساعات عمل قصيرة.</p>
                  <button onClick={() => setSupportSubmitted(false)} className="mt-4 px-6 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl">إرسال طلب جديد</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSupportSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">نوع الطلب</label>
                    <select
                      value={supportForm.type}
                      onChange={(e) => setSupportForm({ ...supportForm, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="level_unlock">طلب فتح مستوى مدفوع (A2 - C2)</option>
                      <option value="email_change">تغيير البريد الإلكتروني</option>
                      <option value="tech_issue">مشكلة تقنية في الدروس أو الصوت</option>
                      <option value="other">استفسار عام</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">الاسم الكامل</label>
                      <input type="text" required value={supportForm.name} onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" placeholder="اسمك الكريم" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">البريد الإلكتروني</label>
                      <input type="email" required autoComplete="email" value={supportForm.email} onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" placeholder="name@example.com" dir="ltr" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">تفاصيل الرسالة أو رقم الحوالة</label>
                    <textarea rows={4} required value={supportForm.message} onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm" placeholder="اكتب تفاصيل طلبك هنا..." />
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب للإدارة</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {activeTab === 'admin' && (
          <AdminPortal
            unlockedLevels={unlockedLevelsList}
            onUnlockLevelAdmin={handleUnlockLevelAdmin}
            contactMessages={contactMessages}
            payments={payments}
            auditLogs={auditLogs}
            unlockedRecords={unlockedRecords}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation Bar (per UX report requirements) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-amber-100 px-4 py-2 z-40 flex items-center justify-around shadow-lg">
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${activeTab === 'home' ? 'text-amber-600' : 'text-slate-500'}`}
        >
          <BookOpen className="w-5 h-5" />
          <span>الرئيسية</span>
        </button>
        <button
          onClick={() => setActiveTab('levels')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${activeTab === 'levels' ? 'text-amber-600' : 'text-slate-500'}`}
        >
          <Sparkles className="w-5 h-5" />
          <span>المستويات</span>
        </button>
        <button
          onClick={() => setActiveTab('student')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${activeTab === 'student' ? 'text-amber-600' : 'text-slate-500'}`}
        >
          <UserIcon className="w-5 h-5" />
          <span>التعلم</span>
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${activeTab === 'videos' ? 'text-amber-600' : 'text-slate-500'}`}
        >
          <Video className="w-5 h-5" />
          <span>الفيديو</span>
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex flex-col items-center gap-1 text-[11px] font-bold ${activeTab === 'contact' ? 'text-amber-600' : 'text-slate-500'}`}
        >
          <HelpCircle className="w-5 h-5" />
          <span>الدعم</span>
        </button>
      </div>

      <Footer
        setActiveTab={setActiveTab}
        onOpenAssumptions={() => setAssumptionsModalOpen(true)}
      />

      {/* Auth Modal */}
      {authModalRole && (
        <AuthModal
          role={authModalRole}
          onClose={() => setAuthModalRole(null)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Assumptions Modal */}
      {assumptionsModalOpen && (
        <AssumptionsModal onClose={() => setAssumptionsModalOpen(false)} />
      )}

      {/* PDF Modal Reader */}
      {pdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-8 shadow-2xl border border-slate-200 relative space-y-4">
            <button
              onClick={() => setPdfModalOpen(false)}
              className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs"
            >
              إغلاق العارض
            </button>
            <h3 className="text-xl font-bold text-slate-900 border-r-4 border-amber-500 pr-3">
              عرض كتاب المنهج (Discover 1 PDF Viewer)
            </h3>
            <div className="w-full h-[60vh] bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200 text-slate-500 text-sm">
              <div className="text-center space-y-2">
                <div className="text-4xl">📖</div>
                <div className="font-bold">عراض كتاب Discover 1 Student Book & Workbook التفاعلي</div>
                <p className="text-xs text-slate-400">حسب إعدادات الحماية: العرض مباشر داخل المنصة بدون زر تنزيل افتراضي.</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
