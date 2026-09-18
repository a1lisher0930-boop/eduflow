import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { AcademicCalendarEvent } from '../../types';

interface CalendarPageProps {
  events: AcademicCalendarEvent[];
}

export const CalendarPage: React.FC<CalendarPageProps> = ({ events }) => {
  const [currentMonthStr, setCurrentMonthStr] = useState('Sentyabr 2026');

  // Days matrix for Sentyabr 2026
  const calendarDaysArray = Array.from({ length: 30 }, (_, i) => i + 1);

  const getEventBadge = (type: AcademicCalendarEvent['type']) => {
    switch (type) {
      case 'exam': return <Badge variant="danger" size="sm">Imtihon</Badge>;
      case 'homework': return <Badge variant="warning" size="sm">Uy vazifasi</Badge>;
      case 'event': return <Badge variant="purple" size="sm">Tadbir</Badge>;
      case 'holiday': return <Badge variant="success" size="sm">Bayram</Badge>;
      default: return <Badge variant="primary" size="sm">Dars</Badge>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-brand-600 dark:text-cyan-400 text-xs font-bold mb-2 border border-indigo-200/60 dark:border-indigo-800/60">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>To‘liq Akademik Taqvim</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Akademik Kalendar
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Darslar, imtihonlar, vazifalar va maktab tadbirlari taqvimi
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-700">
          <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 px-3">
            {currentMonthStr}
          </span>
          <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Calendar Grid (2 cols) */}
        <Card className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-7 text-center font-bold text-xs text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span>Du</span>
            <span>Se</span>
            <span>Cho</span>
            <span>Pay</span>
            <span>Jum</span>
            <span>Sha</span>
            <span>Yak</span>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDaysArray.map((dayNum) => {
              const dayStr = `2026-09-${dayNum < 10 ? '0' + dayNum : dayNum}`;
              const dayEvents = events.filter(e => e.date === dayStr);
              const hasEvents = dayEvents.length > 0;

              return (
                <div
                  key={dayNum}
                  className={`min-h-[70px] sm:min-h-[85px] p-2 rounded-2xl border transition-all flex flex-col justify-between ${
                    hasEvents
                      ? 'bg-indigo-50/50 dark:bg-indigo-950/30 border-brand-500/40 dark:border-cyan-400/40'
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200/50 dark:border-slate-800'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {dayNum}
                  </span>

                  <div className="space-y-1">
                    {dayEvents.map((ev) => (
                      <div
                        key={ev.id}
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded-lg truncate bg-brand-600 text-white shadow-xs"
                        title={ev.title}
                      >
                        {ev.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Event List Drawer (1 col) */}
        <Card className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-500" />
            Sentyabr Muhim Voqealari
          </h3>

          <div className="space-y-3">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {ev.date.split('-')[2]}-Sentyabr
                  </span>
                  {getEventBadge(ev.type)}
                </div>

                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {ev.title}
                </h4>

                {ev.time && (
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-brand-500" />
                    Vaqt: {ev.time}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card>

      </div>

    </div>
  );
};
