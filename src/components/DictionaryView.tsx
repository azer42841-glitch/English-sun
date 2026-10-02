import React, { useState } from 'react';
import { BookMarked, Search, Volume2, Sparkles } from 'lucide-react';
import { MOCK_LESSONS } from '../mockData';

export const DictionaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Extract all vocabulary from lessons
  const allVocab = MOCK_LESSONS.flatMap(l => l.vocabulary);
  const filteredVocab = allVocab.filter(v =>
    v.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.arabicMeaning.includes(searchTerm)
  );

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(word);
      u.lang = 'en-US';
      window.speechSynthesis.speak(u);
    } else {
      alert(word);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
            <BookMarked className="w-4 h-4 text-white" />
            <span>القاموس الإنجليزي - العربي الذكي</span>
          </div>
          <h1 className="text-3xl font-black">القاموس والمفردات الصوتية</h1>
          <p className="text-amber-100 text-sm max-w-2xl">
            ابحث عن أي كلمة إنجليزية لمعرفة نطقها بالرموز الصوتية (IPA)، معناها بالعربية، وسماع نطقها الصوتي الفوري.
          </p>

          <div className="relative pt-2">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 mt-1" />
            <input
              type="text"
              placeholder="ابحث عن كلمة إنجليزية أو عربية (مثال: Hello, تفاحة)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-12 py-4 rounded-2xl bg-white text-slate-900 font-medium text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
        </div>

        {/* Vocab Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVocab.map((vocab) => (
            <div key={vocab.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 hover:border-amber-400 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-slate-900">{vocab.word}</span>
                  <button
                    onClick={() => speakWord(vocab.word)}
                    className="p-2.5 rounded-xl bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors"
                    title="استماع"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs bg-slate-100 px-2.5 py-1 rounded-lg text-slate-600 border border-slate-200">{vocab.ipa}</span>
                  <span className="font-bold text-amber-700 text-base">{vocab.arabicMeaning}</span>
                </div>

                {vocab.exampleSentence && (
                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                    <div className="font-semibold text-slate-800">{vocab.exampleSentence}</div>
                    <div className="text-slate-500">{vocab.exampleArabic}</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
