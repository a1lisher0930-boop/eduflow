'use client';

import React from 'react';
import { 
  Award, 
  Trophy, 
  CalendarCheck, 
  BookCheck, 
  Calculator, 
  Code2, 
  Languages, 
  Sparkles,
  Lock
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { AchievementItem } from '../../types';

interface AchievementsPageProps {
  achievements: AchievementItem[];
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ achievements }) => {
  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-7 h-7 text-amber-400" />;
      case 'CalendarCheck': return <CalendarCheck className="w-7 h-7 text-emerald-400" />;
      case 'BookCheck': return <BookCheck className="w-7 h-7 text-indigo-400" />;
      case 'Calculator': return <Calculator className="w-7 h-7 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-7 h-7 text-blue-400" />;
      case 'Languages': return <Languages className="w-7 h-7 text-purple-400" />;
      case 'Trophy': return <Trophy className="w-7 h-7 text-amber-500" />;
      default: return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-xs font-bold mb-2 border border-purple-200/60 dark:border-purple-800/60">
            <Award className="w-3.5 h-3.5" />
            <span>Nishonlar va Mukofotlar Collection</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Akademik Yutuqlar va Nishonlar
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Faollik va yutuqlaringiz uchun maxsus unvon hamda nishonlar
          </p>
        </div>

        {/* Unlocked Stats */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 flex items-center gap-4">
          <Trophy className="w-10 h-10 text-amber-300" />
          <div>
            <span className="text-xs font-medium opacity-90 block">Egalangan nishonlar</span>
            <span className="font-extrabold text-xl block">{unlockedCount} / {achievements.length} ta unlocked</span>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item) => {
          const percent = Math.round((item.progress / item.maxProgress) * 100);

          return (
            <Card
              key={item.id}
              className={`relative flex flex-col justify-between space-y-4 overflow-hidden border ${
                item.isUnlocked
                  ? 'border-indigo-500/30 dark:border-indigo-500/40 shadow-glow'
                  : 'border-slate-200 dark:border-slate-800 opacity-80'
              }`}
            >
              {/* Badge Icon Header */}
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 ${
                  item.isUnlocked
                    ? 'bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-white/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                }`}>
                  {item.isUnlocked ? getBadgeIcon(item.icon) : <Lock className="w-6 h-6 text-slate-400" />}
                </div>

                {item.isUnlocked ? (
                  <Badge variant="success" size="sm">
                    Egalandi ✓
                  </Badge>
                ) : (
                  <Badge variant="slate" size="sm">
                    Qulflangan
                  </Badge>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Progress Toward Next Unlock */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between text-[11px] font-bold text-slate-500">
                  <span>Jarayon</span>
                  <span className="text-brand-600 dark:text-cyan-400">{item.progress} / {item.maxProgress}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.isUnlocked ? 'bg-gradient-to-r from-brand-600 to-cyan-400' : 'bg-slate-400'
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>

            </Card>
          );
        })}
      </div>

    </div>
  );
};
