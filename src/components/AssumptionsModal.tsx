import React from 'react';
import { X, FileText, CheckCircle2 } from 'lucide-react';

interface AssumptionsModalProps {
  onClose: () => void;
}

export const AssumptionsModal: React.FC<AssumptionsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200 relative space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900">ملف الافتراضات والتصميم (ASSUMPTIONS.md)</h2>
            <p className="text-xs text-slate-500">التوثيق الفني ومعمارية منصة «شمس الإنجليزية – English Sun»</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>1. المصادقة والأمان (Authentication & OTP)</span>
            </h3>
            <p className="text-xs text-slate-600">
              تم اعتماد تسجيل الدخول عبر البريد الإلكتروني ورمز التحقق لمرة واحدة (OTP) افتراضياً للطلاب، مع وجود حساب مدير النظام الافتراضي (admin@englishsun.edu / admin123) للإدارة والتحكم.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>2. صلاحيات فتح المستويات (Level Unlocking)</span>
            </h3>
            <p className="text-xs text-slate-600">
              المستوى (A1) مجاني تماماً ومفتوح للجميع بعد التسجيل. المستويات من (A2 إلى C2) مقفلة افتراضياً ولا يستطيع الطالب فتحها بنفسه؛ يتم تفعيلها حصرياً من لوحة الإدارة بعد التحقق من سداد الرسوم مع تسجيل تاريخ الفتح والمشرف المسئول في سجل التدقيق (Audit Log).
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>3. حقوق النشر والفيديو</span>
            </h3>
            <p className="text-xs text-slate-600">
              تم توفير مكتبة فيديو مرخصة مع إمكانية دمج مشغل حديث ودعم ملفات الترجمة (VTT)، مع اشتراط تأكيد الإدارة لملكية الحقوق الفكرية للفيديوهات المضافة.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>4. المدفوعات والمالية</span>
            </h3>
            <p className="text-xs text-slate-600">
              في المرحلة الأولى، يتم الدفع خارج المنصة (تحويل بنكي / محفظة) مع تسجيل الإدارة لبيانات الحوالة ورقم الإيصال لفتح المستوى، مع جاهزية الهيكل لإضافة بوابات الدفع الإلكتروني لاحقاً.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md"
        >
          إغلاق نافذة التوثيق
        </button>
      </div>
    </div>
  );
};
