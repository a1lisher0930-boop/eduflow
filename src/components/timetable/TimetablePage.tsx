'use client';

import React, { useState } from 'react';
import { 
  CalendarDays, 
  Clock, 
  MapPin, 
  User, 
  ChevronLeft, 
  ChevronRight, 
  BookOpenCheck,
  Sparkles,
  Layers
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Lesson } from '../../types';

interface TimetablePageProps {
  lessons: Lesson[];
}

export const TimetablePage: React.FC<TimetablePageProps> = ({ lessons }) => {
  const [activeTabMode, setActiveTabMode] = useState<'joriy' | 'butun'>('joriy');
  const [selectedMobileDay, setSelectedMobileDay] = useState<number>(0);

  // Time periods definition (1 to 7)
  const timePeriods = [
    { period: 1, time: '08:00 - 08:45' },
    { period: 2, time: '08:50 - 09:35' },
    { period: 3, time: '09:40 - 10:25' },
    { period: 4, time: '10:45 - 11:30' },
    { period: 5, time: '11:35 - 12:20' },
    { period: 6, time: '12:25 - 13:10' },
    { period: 7, time: '13:15 - 14:00' },
  ];

  // Days list (0: Dush to 6: Yak)
  const daysHeader = [
    { index: 0, shortName: 'Dush', dateStr: '14 Sen', full: 'Dushanba' },
    { index: 1, shortName: 'Sesh', dateStr: '15 Sen', full: 'Seshanba' },
    { index: 2, shortName: 'Chor', dateStr: '16 Sen', full: 'Chorshanba' },
    { index: 3, shortName: 'Pay', dateStr: '17 Sen', full: 'Payshanba' },
    { index: 4, shortName: 'Jum', dateStr: '18 Sen', full: 'Juma' },
    { index: 5, shortName: 'Shan', dateStr: '19 Sen', full: 'Shanba', isWeekend: true },
    { index: 6, shortName: 'Yak', dateStr: '20 Sen', full: 'Yakshanba', isWeekend: true },
  ];

  // Helper to find lesson for specific day and period
  const getLessonForCell = (dayIdx: number, periodNum: number) => {
    return lessons.find(l => l.dayIndex === dayIdx && l.lessonNumber === periodNum);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Controls Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-cyan-400 text-xs font-bold mb-2 border border-brand-200/60 dark:border-brand-800/60">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>2026–2027 O‘quv yili • 1-Chorak</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Haftalik Dars Jadvali
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            8-“B” sinf dars soatlari, kabinetlar va fan o‘qituvchilari matritsasi
          </p>
        </div>

        {/* Filter Toggle Buttons: Joriy Hafta vs Butun davr */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800/90 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
            <button
              onClick={() => setActiveTabMode('joriy')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTabMode === 'joriy'
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Joriy hafta
            </button>
            <button
              onClick={() => setActiveTabMode('butun')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTabMode === 'butun'
                  ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Butun davr uchun jadval
            </button>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
            <button className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>14 Sen — 20 Sen</span>
            <button className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Day Selector Tabs (Shown on small screens) */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {daysHeader.map((d) => (
          <button
            key={d.index}
            onClick={() => setSelectedMobileDay(d.index)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
              selectedMobileDay === d.index
                ? 'bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-500/25'
                : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            {d.shortName}, {d.dateStr}
          </button>
        ))}
      </div>

      {/* Desktop & Tablet Matrix Grid Table */}
      <div className="bg-white dark:bg-[#131b2e] rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            
            {/* Table Header Row: Days */}
            <thead>
              <tr className="bg-slate-50/90 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs">
                <th className="p-3.5 w-16 text-center font-extrabold text-slate-400 border-r border-slate-200/60 dark:border-slate-800">
                  #
                </th>
                {daysHeader.map((d) => (
                  <th
                    key={d.index}
                    className={`p-3.5 font-bold border-r border-slate-200/60 dark:border-slate-800 last:border-r-0 ${
                      d.isWeekend
                        ? 'text-rose-600 dark:text-rose-400 bg-rose-50/30 dark:bg-rose-950/20'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold">{d.shortName}, {d.dateStr}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table Body Rows: Lesson Periods (1 to 7) */}
            <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800 text-xs">
              {timePeriods.map((tp) => (
                <tr key={tp.period} className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors">
                  
                  {/* Left Column: Lesson Number & Time */}
                  <td className="p-3 font-extrabold text-center text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/40 border-r border-slate-200/60 dark:border-slate-800 align-top">
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <span className="text-base font-black text-brand-600 dark:text-cyan-400">
                        {tp.period}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                        {tp.time.split(' - ')[0]}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap">
                        {tp.time.split(' - ')[1]}
                      </span>
                    </div>
                  </td>

                  {/* 7 Days Columns for this period */}
                  {daysHeader.map((d) => {
                    const lesson = getLessonForCell(d.index, tp.period);

                    if (d.index === 6 && !lesson) { // Sunday (Yakshanba) Empty Cell
                      return (
                        <td key={d.index} className="p-2 border-r border-slate-200/60 dark:border-slate-800 last:border-r-0 bg-slate-50/20 dark:bg-slate-900/20 align-top">
                          <div className="h-full min-h-[90px] flex items-center justify-center text-[11px] text-slate-400 italic">
                            Dam olish kuni
                          </div>
                        </td>
                      );
                    }

                    if (!lesson) { // Empty Period Cell
                      return (
                        <td key={d.index} className="p-2 border-r border-slate-200/60 dark:border-slate-800 last:border-r-0 align-top">
                          <div className="h-full min-h-[90px] rounded-2xl border border-dashed border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center text-[10px] text-slate-300 dark:text-slate-700">
                            Dars yo‘q
                          </div>
                        </td>
                      );
                    }

                    const isOngoing = lesson.status === 'ongoing';

                    return (
                      <td key={d.index} className="p-2 border-r border-slate-200/60 dark:border-slate-800 last:border-r-0 align-top">
                        <div
                          className={`p-3 rounded-2xl transition-all border flex flex-col justify-between space-y-2 h-full min-h-[105px] ${
                            isOngoing
                              ? 'bg-gradient-to-br from-brand-600/10 via-indigo-500/10 to-cyan-500/10 border-brand-500 shadow-md ring-2 ring-brand-500/30'
                              : 'bg-white/80 dark:bg-[#162032] border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 hover:shadow-sm'
                          }`}
                        >
                          {/* Subject & Ongoing Badge */}
                          <div className="space-y-1">
                            <div className="flex items-start justify-between gap-1">
                              <h4 className="font-extrabold text-slate-900 dark:text-white text-xs leading-snug">
                                {lesson.subject}
                              </h4>
                              {isOngoing && (
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
                              )}
                            </div>

                            {/* Primary Teacher Name */}
                            <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 truncate">
                              {lesson.teacher}
                            </p>
                          </div>

                          {/* Secondary Lesson Split Group (If applicable) */}
                          {lesson.secondaryLesson && (
                            <div className="pt-1 border-t border-slate-100 dark:border-slate-800/80 space-y-0.5">
                              <span className="text-[9px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block">
                                2-Guruh:
                              </span>
                              <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 truncate">
                                {lesson.secondaryLesson.teacher}
                              </p>
                              <span className="text-[10px] text-slate-400 block">
                                {lesson.secondaryLesson.classroom}
                              </span>
                            </div>
                          )}

                          {/* Time & Classroom Footer */}
                          <div className="pt-1 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                            <span className="truncate">{lesson.time}</span>
                            <span className="font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md">
                              {lesson.classroom}
                            </span>
                          </div>

                          {/* Homework Indicator Badge */}
                          {lesson.hasHomework && (
                            <div className="flex items-center gap-1 text-[10px] font-bold text-amber-600 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-lg border border-amber-200/50 dark:border-amber-800/50 truncate">
                              <BookOpenCheck className="w-3 h-3 text-amber-500 flex-shrink-0" />
                              <span className="truncate">{lesson.homeworkTitle || 'Uy vazifasi'}</span>
                            </div>
                          )}

                        </div>
                      </td>
                    );
                  })}

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
};
