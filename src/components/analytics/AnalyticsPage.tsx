import React from 'react';
import { BarChart3, TrendingUp, Award, AlertCircle, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2 border border-cyan-200/60 dark:border-cyan-800/60">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Chuqur Tahlil va AI Tavsiyalar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tahlil va Statistika
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Akademik o‘sish, kuchli va rivojlantirish kerak bo‘lgan sohalar diagrammasi
          </p>
        </div>

        <Badge variant="purple" size="lg">
          AI Tahlil Tizimi Faol
        </Badge>
      </div>

      {/* 4 Overview Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            O‘rtacha Ball
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-brand-600 dark:text-cyan-400">
                9
              </span>
              <span className="text-xs font-bold text-slate-400">/ 10</span>
            </div>
            <Badge variant="success" size="sm">+1 ball</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Oy davomidagi o‘sish</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Davomat barqarorligi
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              96.0%
            </span>
            <Badge variant="info" size="sm">A’lo</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Intizom yuksak darajada</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Eng Kuchli Fan
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 truncate">
              Informatika
            </span>
            <Badge variant="success" size="sm">10 ball</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Top 1 sinfda</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            E’tibor Talab Fan
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 truncate">
              Fizika
            </span>
            <Badge variant="warning" size="sm">8 ball</Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Yana +1 ball o‘stirish rejada</p>
        </Card>

      </div>

      {/* Main Analytics Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Chart 1: Subject Strength Heatmap / Distribution */}
        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Fanlar Kesimida O‘zlashtirish Nivelirlanishi
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { subject: 'Informatika', score: 10, color: 'bg-cyan-500' },
              { subject: 'Matematika', score: 9, color: 'bg-brand-600' },
              { subject: 'Tarix', score: 9, color: 'bg-purple-500' },
              { subject: 'Biologiya', score: 9, color: 'bg-emerald-500' },
              { subject: 'Ona tili', score: 9, color: 'bg-pink-500' },
              { subject: 'Ingliz tili', score: 9, color: 'bg-blue-500' },
              { subject: 'Kimyo', score: 9, color: 'bg-amber-500' },
              { subject: 'Fizika', score: 8, color: 'bg-rose-500' },
            ].map((item) => (
              <div key={item.subject} className="space-y-1">
                <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>{item.subject}</span>
                  <span>{item.score} ball</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${(item.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Chart 2: Grade Comparison with Class Average */}
        <Card className="space-y-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-brand-500" />
              Sinf O‘rtachasi Bilan Qiyosiy Solishtiruv
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Alisher (Ko‘k) vs 8-“B” Sinf O‘rtachasi (Kulrang)
            </p>

            <div className="space-y-4 pt-6">
              {[
                { label: '1-Hafta', student: 8, classAvg: 8 },
                { label: '2-Hafta', student: 9, classAvg: 8 },
                { label: '3-Hafta', student: 9, classAvg: 8 },
                { label: '4-Hafta', student: 9, classAvg: 8 },
                { label: '5-Hafta', student: 10, classAvg: 8 },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                    <span>{item.label}</span>
                    <span className="text-brand-600 dark:text-cyan-400">Siz: {item.student} ball (Sinf: {item.classAvg} ball)</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative flex">
                    <div
                      className="h-full bg-slate-300 dark:bg-slate-700 rounded-full"
                      style={{ width: `${(item.classAvg / 10) * 100}%` }}
                    />
                    <div
                      className="h-full bg-gradient-to-r from-brand-600 to-cyan-400 rounded-full absolute top-0 left-0"
                      style={{ width: `${(item.student / 10) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendation Box */}
          <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>EduFlow AI Tavsiyasi:</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Fizikadan vektorlar va Nyuton qonunlariga 2 soat qo‘shimcha amaliyot qilsangiz, o‘rtacha ballingiz 9+ ga ko‘tariladi!
            </p>
          </div>
        </Card>

      </div>

    </div>
  );
};
