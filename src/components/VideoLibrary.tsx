import React, { useState } from 'react';
import { Video, Play, Search, ShieldCheck, Filter } from 'lucide-react';
import { MOCK_VIDEOS } from '../mockData';
import { CEFRLevel } from '../types';

interface VideoLibraryProps {
  unlockedLevels: string[];
}

export const VideoLibrary: React.FC<VideoLibraryProps> = ({ unlockedLevels }) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [activeVideo, setActiveVideo] = useState<typeof MOCK_VIDEOS[0] | null>(null);

  const filteredVideos = MOCK_VIDEOS.filter(v => selectedLevel === 'all' || v.level === selectedLevel);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 rounded-3xl p-8 text-white shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
              <Video className="w-4 h-4 text-amber-400" />
              <span>المكتبة المرئية التفاعلية</span>
            </div>
            <h1 className="text-3xl font-black">مكتبة الفيديو التعليمية (CEFR)</h1>
            <p className="text-slate-300 text-sm">فيديوهات تعليمية مرخصة ومحمية مع ترجمة وشرح دقيق لكل مستوى.</p>
          </div>

          <div className="flex items-center gap-2">
            {['all', 'A1', 'A2', 'B1'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedLevel === lvl ? 'bg-amber-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {lvl === 'all' ? 'جميع المستويات' : lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Modal if active */}
        {activeVideo && (
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-amber-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">{activeVideo.titleAr}</h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                إغلاق الفيديو
              </button>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center">
              <video
                controls
                src={activeVideo.videoUrl}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-slate-600 text-sm">{activeVideo.descriptionAr}</p>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((vid) => {
            const isAllowed = unlockedLevels.includes(vid.level) || vid.level === 'A1';

            return (
              <div key={vid.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all">
                <div className="aspect-video bg-slate-900 relative flex items-center justify-center group cursor-pointer" onClick={() => isAllowed && setActiveVideo(vid)}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center text-white text-xs font-bold z-10">
                    <span className="bg-amber-500 px-2.5 py-1 rounded-lg">المستوى {vid.level}</span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-lg">{vid.duration}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 text-base">{vid.titleAr}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{vid.descriptionAr}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> مرخص وحقوق محفوظة
                    </span>
                    <button
                      disabled={!isAllowed}
                      onClick={() => setActiveVideo(vid)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold ${
                        isAllowed ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {isAllowed ? 'مشاهدة الفيديو' : 'مستوى مقفل'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
