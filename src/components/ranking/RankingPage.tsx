'use client';

import React, { useState } from 'react';
import { Trophy, Award, TrendingUp, Filter, Sparkles, Star, UserCheck } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { GradeBadge } from '../common/GradeBadge';
import { RankingStudent } from '../../types';

interface RankingPageProps {
  rankingList: RankingStudent[];
}

export const RankingPage: React.FC<RankingPageProps> = ({ rankingList }) => {
  const [filterPeriod, setFilterPeriod] = useState<'hafta' | 'oy' | 'chorak' | 'barchasi'>('hafta');

  const currentStudent = rankingList.find(s => s.isCurrentStudent);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 text-xs font-bold mb-2 border border-amber-200/60 dark:border-amber-800/60">
            <Trophy className="w-3.5 h-3.5" />
            <span>8-“B” Sinf O‘quvchilar Reytingi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O‘quvchilar Reytingi va Yetakchilik
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Akademik ballar, davomat va faollik bo‘yicha umumiy reyting
          </p>
        </div>

        {/* Current Student Rank Spotlight Badge */}
        {currentStudent && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-brand-500/25 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-extrabold text-xl">
              #{currentStudent.rank}
            </div>
            <div>
              <span className="text-[11px] font-medium opacity-90 block">Sizning joriy o‘rningiz</span>
              <span className="font-extrabold text-base block">{currentStudent.overallScore} O‘rtacha Ball</span>
              <span className="text-[10px] font-bold bg-emerald-400 text-slate-900 px-2 py-0.5 rounded-full inline-block mt-0.5">
                Bu hafta +2 pog‘ona 🚀
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Period Filter Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'hafta', label: 'Ushbu hafta' },
          { id: 'oy', label: 'Shu oy' },
          { id: 'chorak', label: '1-Chorak' },
          { id: 'barchasi', label: 'Barcha fanlar' }
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilterPeriod(f.id as any)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
              filterPeriod === f.id
                ? 'bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-500/25'
                : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Leaderboard Table Card */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            8-“B” Sinf Top Ro‘yxati
          </h3>
          <span className="text-xs text-slate-500">Jami 28 ta o‘quvchi</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                <th className="pb-3 px-3">O‘rin</th>
                <th className="pb-3 px-3">O‘quvchi</th>
                <th className="pb-3 px-3">Davomat</th>
                <th className="pb-3 px-3">Vazifalar</th>
                <th className="pb-3 px-3 text-right">O‘rtacha Ball</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {rankingList.map((st) => (
                <tr
                  key={st.rank}
                  className={`transition-colors ${
                    st.isCurrentStudent
                      ? 'bg-gradient-to-r from-brand-600/15 via-indigo-500/10 to-cyan-500/15 font-bold border-l-4 border-l-brand-600'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {/* Rank Column */}
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shadow-sm ${
                        st.rank === 1 ? 'bg-amber-400 text-slate-900' :
                        st.rank === 2 ? 'bg-slate-300 text-slate-900' :
                        st.rank === 3 ? 'bg-amber-600 text-white' :
                        'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        #{st.rank}
                      </span>
                    </div>
                  </td>

                  {/* Student Name & Avatar */}
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={st.avatar}
                        alt={st.name}
                        className="w-10 h-10 rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
                      />
                      <div>
                        <span className={`font-bold block ${st.isCurrentStudent ? 'text-brand-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white'}`}>
                          {st.name}
                        </span>
                        {st.isCurrentStudent && (
                          <span className="text-[10px] text-emerald-500 font-bold">
                            Siz (Joriy foydalanuvchi)
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Attendance */}
                  <td className="py-4 px-3 text-slate-600 dark:text-slate-300 font-semibold">
                    {st.attendancePercent}%
                  </td>

                  {/* Homework */}
                  <td className="py-4 px-3 text-slate-600 dark:text-slate-300 font-semibold">
                    {st.completedHomeworkPercent}%
                  </td>

                  <td className="py-4 px-3 text-right">
                    <GradeBadge score={st.overallScore} size="md" showLabel />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

    </div>
  );
};
