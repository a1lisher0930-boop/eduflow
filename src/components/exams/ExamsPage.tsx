import React from 'react';
import { FileText, Calendar, Clock, MapPin, CheckCircle2, User, Sparkles, BookOpen } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { ExamItem } from '../../types';

interface ExamsPageProps {
  exams: ExamItem[];
}

export const ExamsPage: React.FC<ExamsPageProps> = ({ exams }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-300 text-xs font-bold mb-2 border border-rose-200/60 dark:border-rose-800/60">
            <FileText className="w-3.5 h-3.5" />
            <span>Choraklik va Yakuniy Imtihonlar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Imtihonlar Jadvali va Tayyorgarlik
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Yaqinlashayotgan sinovlar va mavzular nazorati
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
          <Sparkles className="w-4 h-4 text-brand-500" />
          <span>Jami {exams.length} ta imtihon rejada</span>
        </div>
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <Card key={exam.id} className="flex flex-col justify-between space-y-6">
            
            {/* Top info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-xl bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-300 border border-rose-200/50 dark:border-rose-800/50">
                  {exam.subject}
                </span>

                <Badge variant="purple" size="sm">
                  {exam.weight}
                </Badge>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Mas’ul o‘qituvchi: {exam.teacher}
                </p>
              </div>
            </div>

            {/* Date, Time, Room Row */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 text-xs text-center">
              <div>
                <span className="text-slate-400 text-[10px] block">Sana</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{exam.date}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Vaqt</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{exam.time}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[10px] block">Xona</span>
                <span className="font-bold text-brand-600 dark:text-cyan-400">{exam.classroom}</span>
              </div>
            </div>

            {/* Preparation Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-500">Tayyorgarlik darajasi</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold">{exam.prepProgress}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${exam.prepProgress}%` }}
                />
              </div>
            </div>

            {/* Key Topics List */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Qamrab olingan asosiy mavzular:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exam.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 flex items-center gap-1"
                  >
                    <BookOpen className="w-3 h-3 text-brand-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </Card>
        ))}
      </div>

    </div>
  );
};
