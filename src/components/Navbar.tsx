import React, { useState } from 'react';
import { Sun, BookOpen, Video, Award, BookMarked, PhoneCall, ShieldCheck, User as UserIcon, LogOut, Menu, X, Sparkles } from 'lucide-react';
import { User, StudentProfile } from '../types';

interface NavbarProps {
  currentUser: User | null;
  studentProfile: StudentProfile;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAuth: (role: 'student' | 'admin') => void;
  onLogout: () => void;
  onOpenAssumptions: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  studentProfile,
  activeTab,
  setActiveTab,
  onOpenAuth,
  onLogout,
  onOpenAssumptions
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center text-white shadow-md shadow-amber-500/20 transform hover:rotate-6 transition-transform">
              <Sun className="w-7 h-7 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  شمس الإنجليزية
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                  English Sun
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">منصة التعليم التفاعلي CEFR</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'home' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => setActiveTab('levels')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'levels' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              المستويات (6 CEFR)
            </button>
            <button
              onClick={() => setActiveTab('placement')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'placement' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              اختبار تحديد المستوى
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'videos' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Video className="w-4 h-4" />
              المكتبة المرئية
            </button>
            <button
              onClick={() => setActiveTab('dictionary')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'dictionary' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              القاموس والكلمات
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'contact' ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              اتصل بنا
            </button>
          </nav>

          {/* User Actions & Auth */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenAssumptions}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              افترضات المشروع
            </button>

            {currentUser ? (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab(currentUser.role === 'admin' ? 'admin' : 'student')}
                  className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                    {currentUser.name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold">{currentUser.name}</div>
                    <div className="text-[10px] text-amber-700">
                      {currentUser.role === 'admin' ? 'مدير النظام' : `مستوى ${studentProfile.currentLevel}`}
                    </div>
                  </div>
                </button>
                <button
                  onClick={onLogout}
                  title="تسجيل الخروج"
                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenAuth('student')}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all flex items-center gap-1.5"
                >
                  <UserIcon className="w-4 h-4" />
                  دخول الطالب
                </button>
                <button
                  onClick={() => onOpenAuth('admin')}
                  className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  دخول الإدارة
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 px-4 pt-2 pb-6 space-y-2 shadow-xl">
          <button
            onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700"
          >
            الرئيسية
          </button>
          <button
            onClick={() => { setActiveTab('levels'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700"
          >
            المستويات (6 CEFR)
          </button>
          <button
            onClick={() => { setActiveTab('placement'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            اختبار تحديد المستوى
          </button>
          <button
            onClick={() => { setActiveTab('videos'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700"
          >
            المكتبة المرئية
          </button>
          <button
            onClick={() => { setActiveTab('dictionary'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700"
          >
            القاموس والكلمات
          </button>
          <button
            onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
            className="w-full text-right px-4 py-3 rounded-xl text-sm font-semibold hover:bg-amber-50 text-slate-700"
          >
            اتصل بنا
          </button>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {currentUser ? (
              <>
                <button
                  onClick={() => { setActiveTab(currentUser.role === 'admin' ? 'admin' : 'student'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold text-sm text-center"
                >
                  لوحة التحكم ({currentUser.name})
                </button>
                <button
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-xl bg-red-50 text-red-600 font-bold text-sm text-center"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { onOpenAuth('student'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-xl bg-amber-100 text-amber-900 font-bold text-sm text-center"
                >
                  دخول الطالب
                </button>
                <button
                  onClick={() => { onOpenAuth('admin'); setMobileMenuOpen(false); }}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm text-center"
                >
                  دخول الإدارة
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
