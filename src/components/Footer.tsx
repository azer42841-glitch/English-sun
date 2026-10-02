import React from 'react';
import { Sun, Mail, Phone, MapPin, Heart, Shield, FileText } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenAssumptions: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenAssumptions }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-slate-900 font-black shadow-md">
                <Sun className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white">شمس الإنجليزية</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              منصة تعليمية متكاملة لتعلم اللغة الإنجليزية من الصفر حتى الإتقان (A1-C2) وفق أحدث المعايير الأوروبية CEFR وبطريقة تفاعلية ممتعة.
            </p>
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>الرياض، المملكة العربية السعودية</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-4 border-amber-500 pr-3">روابط سريعة</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-amber-400 transition-colors">
                  الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('levels')} className="hover:text-amber-400 transition-colors">
                  المستويات الستة (CEFR)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('placement')} className="hover:text-amber-400 transition-colors">
                  اختبار تحديد المستوى
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('videos')} className="hover:text-amber-400 transition-colors">
                  المكتبة المرئية
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('dictionary')} className="hover:text-amber-400 transition-colors">
                  القاموس التفاعلي
                </button>
              </li>
            </ul>
          </div>

          {/* CEFR Levels */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-4 border-amber-500 pr-3">مستويات المنصة</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex justify-between items-center">
                <span>المستوى المبتدئ (A1)</span>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">مجاني</span>
              </li>
              <li className="flex justify-between items-center">
                <span>المستوى الأساسي (A2)</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">يتطلب تفعيل</span>
              </li>
              <li className="flex justify-between items-center">
                <span>المستوى المتوسط (B1)</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">يتطلب تفعيل</span>
              </li>
              <li className="flex justify-between items-center">
                <span>المستوى فوق المتوسط (B2)</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">يتطلب تفعيل</span>
              </li>
              <li className="flex justify-between items-center">
                <span>المستوى المتقدم (C1 & C2)</span>
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">متقدم</span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-r-4 border-amber-500 pr-3">الدعم والمساعدة</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>support@englishsun.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+966 11 234 5678</span>
              </li>
              <li>
                <button
                  onClick={onOpenAssumptions}
                  className="mt-2 text-xs text-amber-400 hover:underline flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  عرض افتراضات وتوثيق المشروع
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} منصة شمس الإنجليزية (English Sun). جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-300">سياسة الخصوصية</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-300">شروط الاستخدام</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-300">المساعدة والدعم</button>
          </div>
          <p className="flex items-center gap-1">
            صُمم بِعناية لطلاب الوطن العربي <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
