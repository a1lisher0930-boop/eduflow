'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Filter, 
  Calendar, 
  ChevronRight, 
  MessageSquare,
  BarChart2,
  Sparkles,
  Search
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { GradeBadge } from '../common/GradeBadge';
import { getGradeColorInfo } from '../../utils/gradeColors';
import { SubjectGradeSummary, GradeItem } from '../../types';

interface GradesPageProps {
  subjectSummaries: SubjectGradeSummary[];
  recentGrades: GradeItem[];
}

export const GradesPage: React.FC<GradesPageProps> = ({ subjectSummaries, recentGrades }) => {
  const [selectedQuarter, setSelectedQuarter] = useState<number>(1);
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [selectedGradeDetail, setSelectedGradeDetail] = useState<GradeItem | null>(null);

  // Filtered Subject Summaries
  const filteredSummaries = subjectSummaries.filter(s => 
    selectedSubjectFilter === 'all' ? true : s.subject === selectedSubjectFilter
  );

  // Overall Statistics (rounded to whole integer 1-10)
  const currentAvg = Math.round(subjectSummaries.reduce((acc, curr) => acc + curr.currentAverage, 0) / subjectSummaries.length);
  const previousAvg = Math.round(subjectSummaries.reduce((acc, curr) => acc + curr.previousAverage, 0) / subjectSummaries.length);
  const highest = Math.max(...subjectSummaries.map(s => s.highestGrade));
  const lowest = Math.min(...subjectSummaries.map(s => s.lowestGrade));

  // Chart dataset for trend bar visualization (integer 1-10 scale)
  const trendData = [
    { label: '1-Hafta', score: 4 },
    { label: '2-Hafta', score: 6 },
    { label: '3-Hafta', score: 7 },
    { label: '4-Hafta', score: 8 },
    { label: '5-Hafta', score: 9 },
    { label: '6-Hafta', score: 10 },
    { label: '7-Hafta', score: 9 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-brand-600 dark:text-cyan-400 text-xs font-bold mb-2 border border-indigo-200/60 dark:border-indigo-800/60">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Akademik Natijalar Daftari</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Baholar va O‘zlashtirish (0 – 10 Ball)
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Barcha fanlar bo‘yicha 10 ballik tizimdagi ko‘rsatkichlar va dinamika
          </p>
        </div>

        {/* Quarter Filter Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200/80 dark:border-slate-700">
          {[1, 2, 3, 4].map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuarter(q)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedQuarter === q
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {q}-Chorak
            </button>
          ))}
        </div>
      </div>

      {/* 4 Metric Boxes */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Joriy O‘rtacha Ball
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <GradeBadge score={currentAvg} size="xl" />
              <span className="text-xs font-bold text-slate-400">/ 10</span>
            </div>
            <Badge variant="success" size="sm">
              +0.3 ball o‘sish
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">1-Chorak ko‘rsatkichi</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            O‘tgan Chorak O‘rtacha
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <GradeBadge score={previousAvg} size="xl" />
              <span className="text-xs font-bold text-slate-400">/ 10</span>
            </div>
            <Badge variant="slate" size="sm">
              Stabil
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">O‘tgan o‘quv yili yakuni</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Eng Yuqori Baho
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <GradeBadge score={highest} size="xl" />
            <Badge variant="success" size="sm">
              10 (A’lo)
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Informatika & Matematika</p>
        </Card>

        <Card className="flex flex-col justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Eng Past Baho
          </span>
          <div className="mt-3 flex items-baseline justify-between">
            <GradeBadge score={lowest} size="xl" />
            <Badge variant="warning" size="sm">
              {lowest} ball
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Fizika fani bo‘yicha</p>
        </Card>

      </div>

      {/* Interactive Progress Trend Bar/Line Chart */}
      <Card className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-brand-500" />
              O‘zlashtirish Dinamikasi Grafigi (10 Ballik Shkala)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Haftalar kesimida umumiy o‘rtacha ball o‘zgarishi (Ranglar 10-ballik gradiyentda)
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              Yuqori (10)
            </span>
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              O‘rta (5)
            </span>
            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              Past (1)
            </span>
          </div>
        </div>

        {/* Visual Custom Interactive SVG Progress Chart */}
        <div className="pt-6 pb-2">
          <div className="h-52 w-full flex items-end justify-between gap-2 sm:gap-4 border-b border-slate-200 dark:border-slate-800 px-2 sm:px-4">
            {trendData.map((item) => {
              const heightPercent = (item.score / 10) * 100;
              const colorInfo = getGradeColorInfo(item.score);

              return (
                <div key={item.label} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                  {/* Tooltip on Hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md">
                    {item.score} ball ({colorInfo.label})
                  </div>

                  <div className="w-full bg-slate-100 dark:bg-slate-800/80 rounded-t-xl h-full flex items-end p-1">
                    <div
                      className="w-full rounded-t-lg transition-all duration-500 group-hover:brightness-110 shadow-sm"
                      style={{ 
                        height: `${heightPercent}%`,
                        backgroundColor: colorInfo.bg,
                      }}
                    />
                  </div>

                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Subject Cards Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Fanlar Bo‘yicha Natijalar
          </h2>

          {/* Subject Filter Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedSubjectFilter}
              onChange={(e) => setSelectedSubjectFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-none"
            >
              <option value="all">Barcha fanlar</option>
              {subjectSummaries.map(s => (
                <option key={s.subject} value={s.subject}>{s.subject}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSummaries.map((sub) => {
            const subColorInfo = getGradeColorInfo(sub.currentAverage);

            return (
              <Card key={sub.subject} className="flex flex-col justify-between space-y-4">
                
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                      {sub.subject}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      O‘qituvchi: {sub.teacher}
                    </p>
                  </div>

                  <GradeBadge score={sub.currentAverage} size="xl" />
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">O‘zlashtirish ko‘rsatkichi</span>
                    <span className="text-slate-800 dark:text-slate-200 font-bold">{sub.currentAverage} ball</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(sub.currentAverage / 10) * 100}%`,
                        backgroundColor: subColorInfo.bg 
                      }}
                    />
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block">Eng yuqori</span>
                    <GradeBadge score={sub.highestGrade} size="sm" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Eng past</span>
                    <GradeBadge score={sub.lowestGrade} size="sm" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block">Jami baholar</span>
                    <span className="font-bold text-brand-600 dark:text-cyan-400">{sub.totalGrades} ta</span>
                  </div>
                </div>

              </Card>
            );
          })}
        </div>
      </div>

      {/* Detailed Recent Grades Log Table */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Barcha Baholar Tarixi
          </h3>
          <span className="text-xs text-slate-500">Baho ustiga bosing (Izohni ko‘rish)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                <th className="pb-3 px-2">Fan</th>
                <th className="pb-3 px-2">Sana</th>
                <th className="pb-3 px-2">Turi</th>
                <th className="pb-3 px-2">Chorak</th>
                <th className="pb-3 px-2 text-right">Baho</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentGrades.map((g) => (
                <tr
                  key={g.id}
                  onClick={() => setSelectedGradeDetail(g)}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-2 font-bold text-slate-800 dark:text-slate-200">
                    {g.subject}
                  </td>
                  <td className="py-3 px-2 text-slate-500">{g.date}</td>
                  <td className="py-3 px-2">
                    <Badge variant={g.type === 'Nazorat' ? 'purple' : 'primary'} size="sm">
                      {g.type}
                    </Badge>
                  </td>
                  <td className="py-3 px-2 text-slate-500">{g.quarter}-Chorak</td>
                  <td className="py-3 px-2 text-right">
                    <GradeBadge score={g.score} variant="solid" size="md" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Grade Detail Modal */}
      <Modal
        isOpen={!!selectedGradeDetail}
        onClose={() => setSelectedGradeDetail(null)}
        title={selectedGradeDetail ? `${selectedGradeDetail.subject} — Baho Tafsiloti` : ''}
      >
        {selectedGradeDetail && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Qo‘yilgan Ball</span>
                <GradeBadge score={selectedGradeDetail.score} size="xl" showLabel />
              </div>
              <Badge variant="primary" size="lg">
                {selectedGradeDetail.type}
              </Badge>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">Sana:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedGradeDetail.date}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                <span className="text-slate-400">Chorak:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedGradeDetail.quarter}-Chorak</span>
              </div>
            </div>

            {selectedGradeDetail.teacherNote && (
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 space-y-1">
                <span className="text-[11px] font-bold text-slate-500 uppercase block">O‘qituvchi izohi:</span>
                <p className="text-xs text-slate-700 dark:text-slate-200 italic">
                  "{selectedGradeDetail.teacherNote}"
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>

    </div>
  );
};

