import React, { useState } from 'react';
import { Card } from '../common/Card';
import { GradeBadge } from '../common/GradeBadge';
import { getGradeColorInfo } from '../../utils/gradeColors';
import { Sparkles, Sliders } from 'lucide-react';

export const GradeColorScaleDemo: React.FC = () => {
  const [testScore, setTestScore] = useState<number>(5);

  const testColorInfo = getGradeColorInfo(testScore);

  return (
    <Card className="space-y-6 border-2 border-brand-500/20 dark:border-cyan-500/20 bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-[#131b2e] dark:via-[#101726] dark:to-[#172339]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold mb-1 border border-rose-200/60 dark:border-rose-800/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>10-Ballik Qizil-Yashil Dinamik Shkala</span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
            Baholar Rangi Sinergiyasi (1 – 10 Ball)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Baho 10 dan qancha past bo‘lsa, shuncha qizarib boradi. 10 — yashil, 1 — to‘q qizil!
          </p>
        </div>

        {/* Live Interactive Tester */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white dark:bg-slate-800/90 shadow-sm border border-slate-200 dark:border-slate-700">
          <Sliders className="w-5 h-5 text-brand-500" />
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Bahoni sinab ko‘ring:</span>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={testScore}
              onChange={(e) => setTestScore(Number(e.target.value))}
              className="w-32 accent-brand-600 cursor-pointer"
            />
          </div>
          <GradeBadge score={testScore} size="lg" showLabel />
        </div>
      </div>

      {/* 1 to 10 Visual Gradient Scale Grid (matching user's screenshot format!) */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
          1 dan 10 gacha baholar rangi gradiyenti:
        </span>
        
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
            const info = getGradeColorInfo(score);
            const isSelected = testScore === score;

            return (
              <button
                key={score}
                onClick={() => setTestScore(score)}
                style={{ backgroundColor: info.bg, color: info.text }}
                className={`py-3 sm:py-4 px-2 rounded-2xl font-black text-base sm:text-lg flex flex-col items-center justify-center gap-1 shadow-md transition-all duration-300 hover:scale-105 ${
                  isSelected ? 'ring-4 ring-offset-2 ring-brand-500 shadow-xl scale-105' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <span>{score}</span>
                <span className="text-[9px] font-bold opacity-85 truncate max-w-full">
                  {score === 10 ? 'Yashil' : score === 5 ? 'Sariq' : score === 1 ? 'Qizil' : ''}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Live Card Display */}
      <div 
        className="p-4 sm:p-6 rounded-2xl transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-4 border"
        style={{ backgroundColor: testColorInfo.bgSoft, borderColor: testColorInfo.border }}
      >
        <div className="flex items-center gap-4">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg"
            style={{ backgroundColor: testColorInfo.bg }}
          >
            {testScore}
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
              Tanlangan Baho: {testScore} ball
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
              Daraja: <span className="font-bold">{testColorInfo.label}</span> • Rang kodi: <code className="px-1.5 py-0.5 rounded bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 font-mono text-[11px]">{testColorInfo.bg}</code>
            </p>
          </div>
        </div>

        <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border border-slate-200/60 dark:border-slate-700">
          {testScore >= 9 ? '🟢 A’lo natija (Yashil)' : testScore >= 7 ? '🟢 Yaxshi natija (Ochiq yashil)' : testScore >= 5 ? '🟡 Qanoatli (Sariq)' : testScore >= 3 ? '🟠 Sust (Zargaldoq)' : '🔴 Qanoatsiz (Qizil)'}
        </div>
      </div>
    </Card>
  );
};
