import React, { useState } from 'react';
import { Sun, Sparkles, BookOpen, Video, Award, CheckCircle2, ArrowRight, Play, Star, Send, ShieldCheck, Headphones, MessageSquare } from 'lucide-react';
import { LEVEL_INFOS } from '../mockData';
import { CEFRLevel } from '../types';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  onSelectLevel: (level: CEFRLevel) => void;
  onOpenAuth: (role: 'student' | 'admin') => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab, onSelectLevel, onOpenAuth }) => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [loadingContact, setLoadingContact] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingContact(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await res.json();
      if (data.success) {
        setContactSubmitted(true);
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setContactSubmitted(true);
    } finally {
      setLoadingContact(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50/50 to-white pt-16 pb-24 border-b border-amber-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>المنصة الرائدة لتعليم الإنجليزية وفق معايير CEFR الستة</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                أشرق بمستقبلك مع <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">شمس الإنجليزية</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                تعلم اللغة الإنجليزية تفاعلياً (قراءة، كتابة، استماع، ومحادثة) من الصفر حتى الإتقان. محتوى أكاديمي معتمد، اختبارات ذكية، وقاموس ناطق مصمم خصيصاً للطلاب العرب.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setActiveTab('levels')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <span>ابدأ المستوى الأول (A1) مجاناً</span>
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button
                  onClick={() => setActiveTab('placement')}
                  className="px-7 py-4 rounded-2xl bg-white border-2 border-amber-200 text-amber-900 font-bold text-base hover:bg-amber-50 transition-all flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>اختبار تحديد المستوى</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-amber-200/60 max-w-xl">
                <div>
                  <div className="text-2xl font-black text-slate-900">6</div>
                  <div className="text-xs text-slate-500 font-medium">مستويات أوروبية (CEFR)</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">180+</div>
                  <div className="text-xs text-slate-500 font-medium">درساً تفاعلياً شاملاً</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">منهج مخصص للعرب</div>
                </div>
              </div>
            </div>

            {/* Hero Image / Illustration */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-25 blur-lg"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-amber-100 space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
                        ☀️
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">منصة English Sun</h3>
                        <p className="text-xs text-slate-500">طريقك المضمون لإتقان الإنجليزية</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      نشط الآن
                    </span>
                  </div>

                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between text-sm font-bold text-slate-700">
                      <span>تقدم التعلم (مستوى A1)</span>
                      <span className="text-amber-600">35%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full w-[35%]"></div>
                    </div>
                    <div className="text-[11px] text-slate-500 flex justify-between">
                      <span>3 وحدات رئيسية</span>
                      <span>10 دروس مكتملة</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onOpenAuth('student')}
                      className="p-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-sm text-center transition-colors"
                    >
                      دخول الطالب (OTP)
                    </button>
                    <button
                      onClick={() => onOpenAuth('admin')}
                      className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm text-center transition-colors"
                    >
                      لوحة الإدارة
                    </button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 6 CEFR Levels Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            المستويات الأوروبية المعتمدة
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            رحلة تعلم متكاملة من المبتدئ إلى الخبير (A1 - C2)
          </h2>
          <p className="text-slate-600 text-base">
            المستوى الأول (A1) مجاني تماماً ومفتوح لجميع المسجلين. أما المستويات من (A2 إلى C2) فمقفل لضمان جودة التسلسل الأكاديمي ويتم فتحها عبر إدارة المنصة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEVEL_INFOS.map((lvl) => (
            <div
              key={lvl.level}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                lvl.isFree ? 'border-amber-400 shadow-lg shadow-amber-500/5 ring-2 ring-amber-400/20' : 'border-slate-200'
              }`}
            >
              {lvl.isFree && (
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md">
                  مفتوح مجاناً للجميع
                </div>
              )}
              {!lvl.isFree && (
                <div className="absolute -top-3.5 right-6 bg-slate-900 text-amber-400 text-xs font-extrabold px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                  <span>مستوى مقفل</span>
                  <span>(${lvl.priceUSD})</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {lvl.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {lvl.unitsCount} وحدات • {lvl.lessonsCount} درساً
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{lvl.titleAr}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{lvl.descriptionAr}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-amber-500" /> كتاب PDF المنهجي</span>
                  <span className="font-bold text-slate-700">{lvl.bookTitle}</span>
                </div>

                <button
                  onClick={() => {
                    onSelectLevel(lvl.level);
                    setActiveTab('student');
                  }}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    lvl.isFree
                      ? 'bg-amber-500 text-white hover:bg-amber-600 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{lvl.isFree ? 'دخول ومتابعة الدرس' : 'طلب فتح المستوى عبر الإدارة'}</span>
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works & Four Skills */}
      <section className="py-20 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-400 text-xs font-bold tracking-wider uppercase bg-amber-950/60 px-3.5 py-1.5 rounded-full border border-amber-700/50">
              منهجية معتمدة
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              كيف تتعلم اللغة الإنجليزية بكفاءة تامة؟
            </h2>
            <p className="text-amber-200/80 text-base">
              نغطي المهارات الأربع الأساسية للغة الإنجليزية مع قاموس ناطق ودروس تفاعلية فورية التصحيح.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-amber-950/60 border border-amber-700/40 rounded-3xl p-6 space-y-4 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
                📖
              </div>
              <h3 className="text-xl font-bold text-white">القراءة (Reading)</h3>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                نصوص متدرجة الصعوبة مع ترجمة فورية، إبراز مفردات، وقاموس داخلي بضغطة زر واحدة.
              </p>
            </div>

            <div className="bg-amber-950/60 border border-amber-700/40 rounded-3xl p-6 space-y-4 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
                🎧
              </div>
              <h3 className="text-xl font-bold text-white">الاستماع (Listening)</h3>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                مقاطع صوتية أصلية، حوارات حية، وتدريبات استماع مع نطق بطيء وسريع.
              </p>
            </div>

            <div className="bg-amber-950/60 border border-amber-700/40 rounded-3xl p-6 space-y-4 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
                ✍️
              </div>
              <h3 className="text-xl font-bold text-white">الكتابة (Writing)</h3>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                مهام كتابية فقرات قصيرة مع نموذج تقييم معتمد (Rubric) وتصحيح دقيق من المشرفين.
              </p>
            </div>

            <div className="bg-amber-950/60 border border-amber-700/40 rounded-3xl p-6 space-y-4 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl">
                🗣️
              </div>
              <h3 className="text-xl font-bold text-white">المحادثة (Speaking)</h3>
              <p className="text-amber-100/70 text-sm leading-relaxed">
                تمارين تسجيل صوتي ومحاكاة محادثات حية لتعزيز ثقتك في التحدث بطلاقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-black text-slate-900">ما يقوله طلابنا عن منصة شمس الإنجليزية</h2>
          <p className="text-slate-600">قصص نجاح حقيقية لطلاب أنهوا مستوياتهم وتفوقوا في دراستهم وعملهم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              «بدأت من المستوى A1 وكنت لا أعرف سوى القليل، بفضل الله ثم بفضل الدروس التفاعلية والقاموس الناطق أصبحت أتحدث بطلاقة وأنهيت A2 بنجاح.»
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center">م</div>
              <div>
                <div className="font-bold text-sm text-slate-900">محمد عبدالله</div>
                <div className="text-xs text-slate-500">طالب في المستوى A2</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              «اختبار تحديد المستوى كان دقيقاً للغاية وأظهر نقاط ضعفي في الاستماع، والآن أتابع دروس المكتبة المرئية بشكل يومي. أنصح الجميع بالمنصة.»
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">س</div>
              <div>
                <div className="font-bold text-sm text-slate-900">سارة خالد</div>
                <div className="text-xs text-slate-500">طالبة في المستوى B1</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500" />)}
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">
              «لوحة تحكم الإدارة ممتازة وتتيح تفعيل المستويات بسرعة، وتتبع تقدم الطلاب بدقة تامة. عمل جبار ومهني.»
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center">د</div>
              <div>
                <div className="font-bold text-sm text-slate-900">د. إبراهيم الفايز</div>
                <div className="text-xs text-slate-500">مشرف أكاديمي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">تواصل مع إدارة المنصة</h2>
              <p className="text-slate-600 text-sm">لديك استفسار حول الدورات أو طرق سداد الرسوم؟ أرسل لنا رسالة وسنرد عليك سريعاً.</p>
            </div>

            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-sm">شكراً لتواصلك معنا. تم تسجيل رسالتك في لوحة الإدارة وسنرد عليك قريباً.</p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">موضوع الرسالة</label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder="مثال: استفسار عن فتح مستوى A2"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">نص الرسالة</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    placeholder="اكتب رسالتك بالتفصيل هنا..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loadingContact}
                  className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{loadingContact ? 'جاري الإرسال...' : 'إرسال الرسالة للإدارة'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
