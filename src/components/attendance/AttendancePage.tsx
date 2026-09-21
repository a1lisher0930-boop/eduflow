'use client';

import React, { useState } from 'react';
import { 
  UserCheck, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight,
  BarChart3
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { AttendanceDay, AttendanceStatus } from '../../types';

interface AttendancePageProps {
  attendanceDays: AttendanceDay[];
}

export const AttendancePage: React.FC<AttendancePageProps> = ({ attendanceDays }) => {
  const [currentMonth, setCurrentMonth] = useState('Sentyabr, 2026');

  // Stats calculation
  const totalDays = attendanceDays.length;
  const presentCount = attendanceDays.filter(d => d.status === 'present').length;
  const absentCount = attendanceDays.filter(d => d.status === 'absent').length;
  const lateCount = attendanceDays.filter(d => d.status === 'late').length;
  const excusedCount = attendanceDays.filter(d => d.status === 'excused').length;
  const attendanceRate = Math.round(((presentCount + lateCount + excusedCount) / totalDays) * 100);

  const getStatusBadge = (status: AttendanceStatus) => {
    switch (status) {
      case 'present':
        return <Badge variant="success" size="sm">Kelgan</Badge>;
      case 'absent':
        return <Badge variant="danger" size="sm">Kelmagan</Badge>;
      case 'late':
        return <Badge variant="warning" size="sm">Kechikkan</Badge>;
      case 'excused':
        return <Badge variant="info" size="sm">Sababli</Badge>;
    }
  };

  const getStatusColor = (status: AttendanceStatus) => {
    switch (status) {
      case 'present': return 'bg-emerald-500 text-white';
      case 'absent': return 'bg-rose-500 text-white';
      case 'late': return 'bg-amber-500 text-white';
      case 'excused': return 'bg-cyan-500 text-white';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 text-xs font-bold mb-2 border border-emerald-200/60 dark:border-emerald-800/60">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Davomat Jurnali</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Davomat Nazorati
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Darslarga qatnashish ko‘rsatkichi va oylik taqvim jurnali
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
          <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 px-2">
            {currentMonth}
          </span>
          <button className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Umumiy Davomat
            </span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {attendanceRate}%
            </span>
            <Badge variant="success" size="sm">Namunali</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Target: 95%+</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Qatnashgan Kunlar
            </span>
            <UserCheck className="w-5 h-5 text-brand-500" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
              {presentCount} kun
            </span>
            <span className="text-xs font-semibold text-slate-400">
              /{totalDays} kun
            </span>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">1-Chorak bo‘yicha</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sababsiz Qoldirilgan
            </span>
            <XCircle className="w-5 h-5 text-rose-500" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">
              {absentCount} kun
            </span>
            <Badge variant="danger" size="sm">{absentCount > 0 ? 'Diqqat' : 'A’lo'}</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">28 Sentyabr kuni</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Kechikish va Sababli
            </span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
              {lateCount + excusedCount} kun
            </span>
            <span className="text-xs font-semibold text-slate-400">
              {lateCount} kech, {excusedCount} sababli
            </span>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Hujjatlar biriktirilgan</p>
        </Card>

      </div>

      {/* Monthly Attendance Calendar Grid */}
      <Card className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-brand-500" />
              Sentyabr Oyi Davomat Taqvim Jurnali
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Har bir kun holatini ranglar orqali ko‘rishingiz mumkin
            </p>
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              Kelgan ({presentCount})
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              Kelmagan ({absentCount})
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              Kechikkan ({lateCount})
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium">
              <span className="w-3 h-3 rounded-full bg-cyan-500" />
              Sababli ({excusedCount})
            </span>
          </div>
        </div>

        {/* 30 Days Grid */}
        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3">
          {attendanceDays.map((day) => (
            <div
              key={day.date}
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex flex-col items-center justify-between gap-2 hover:shadow-md transition-all group"
            >
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {day.dayNumber}-Sentyabr
              </span>

              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shadow-sm ${getStatusColor(day.status)}`}>
                {day.dayNumber}
              </div>

              {getStatusBadge(day.status)}
            </div>
          ))}
        </div>
      </Card>

      {/* Attendance Log Table with Notes */}
      <Card className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Maxsus Qaydlar va Izohlar Tarixi
        </h3>

        <div className="space-y-2">
          {attendanceDays.filter(d => d.note).map((day) => (
            <div
              key={day.date}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {day.date}:
                </span>
                <span className="text-slate-600 dark:text-slate-300 italic">
                  "{day.note}"
                </span>
              </div>
              {getStatusBadge(day.status)}
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
};
