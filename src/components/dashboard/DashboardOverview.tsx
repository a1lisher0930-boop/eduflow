'use client';

import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  UserCheck, 
  Trophy, 
  BookOpenCheck, 
  Clock, 
  MapPin, 
  User, 
  ChevronRight, 
  ArrowUpRight, 
  Calendar,
  AlertCircle,
  FileText,
  Target,
  CheckCircle2,
  PlayCircle
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { GradeBadge } from '../common/GradeBadge';
import { Subtle3DHeader } from '../common/Subtle3DHeader';
import { 
  StudentProfile, 
  Lesson, 
  GradeItem, 
  HomeworkItem, 
  ExamItem, 
  RankingStudent, 
  PageId 
} from '../../types';

interface DashboardOverviewProps {
  student: StudentProfile;
  todayLessons: Lesson[];
  recentGrades: GradeItem[];
  homeworkItems: HomeworkItem[];
  upcomingExams: ExamItem[];
  rankingList: RankingStudent[];
  setActivePage: (page: PageId) => void;
  onToggleHomework: (id: string) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  student,
  todayLessons,
  recentGrades,
  homeworkItems,
  upcomingExams,
  rankingList,
  setActivePage,
  onToggleHomework,
}) => {
  const pendingHomework = homeworkItems.filter(h => !h.completed);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Welcome Banner with Subtle 3D Elements */}
      <div className="relative rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 hero-gradient overflow-hidden shadow-glass">
        <Subtle3DHeader />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-slate-200/80 dark:border-white/15 text-xs font-bold text-brand-600 dark:text-cyan-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3-Akademik Hafta • 1-Chorak</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Assalomu alaykum, {student.name.split(' ')[0]} 👋
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              EduFlow platformasiga xush kelibsiz. Bugun sizni <span className="font-bold text-brand-600 dark:text-cyan-400">5 ta muhim dars</span> va <span className="font-bold text-amber-500">2 ta topshiriq</span> kutmoqda!
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActivePage('timetable')}
              className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg border border-slate-200/80 dark:border-slate-700 hover:border-brand-500 transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-brand-500 group-hover:scale-110 transition-transform" />
              <span>Bugungi jadval</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => setActivePage('ranking')}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-brand-500/20 hover:shadow-brand-500/30 hover:opacity-95 transition-all flex items-center gap-2"
            >
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Reyting: #{student.classRank}</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">
                +{student.weeklyRankChange}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Top 4 Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Overall Score */}
        <Card onClick={() => setActivePage('grades')} className="relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              O‘rtacha Baho
            </span>
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-brand-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <GradeBadge score={student.overallScore} size="lg" />
              <span className="text-xs font-bold text-slate-400">/ 10 ball</span>
            </div>
            <Badge variant="success" size="sm">
              A’lo (+1 ball)
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            Sinf bo‘yicha top 5% ko‘rsatkich
          </p>
        </Card>

        {/* Attendance */}
        <Card onClick={() => setActivePage('attendance')} className="relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Davomat
            </span>
            <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
              <UserCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {student.attendancePercent}%
            </span>
            <Badge variant="info" size="sm">
              Namunali
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            Faqat 1 ta sababli qoldirilgan
          </p>
        </Card>

        {/* Class Ranking */}
        <Card onClick={() => setActivePage('ranking')} className="relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sinf Reytingi
            </span>
            <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              #{student.classRank}
            </span>
            <Badge variant="purple" size="sm">
              +{student.weeklyRankChange} pog‘ona
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            28 ta o‘quvchidan 4-o‘rinda
          </p>
        </Card>

        {/* Completed Homework */}
        <Card onClick={() => setActivePage('homework')} className="relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Uy Vazifalari
            </span>
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
              <BookOpenCheck className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-baseline justify-between">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {student.completedHomeworkPercent}%
            </span>
            <Badge variant="warning" size="sm">
              {pendingHomework.length} ta bajarilmadi
            </Badge>
          </div>
          <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
            Barcha topshiriqlar o‘z vaqtida
          </p>
        </Card>

      </div>

      {/* Main Grid: Today's Lessons vs Quick Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 cols): Today's Schedule (Bugungi Darslar) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-500" />
                Bugungi Darslar
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Dushanba, 14 Sentyabr • Bugun 5 ta dars
              </p>
            </div>

            <button
              onClick={() => setActivePage('timetable')}
              className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              Haftalik jadval
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lessons Card List */}
          <div className="space-y-3">
            {todayLessons.map((lesson) => {
              const isOngoing = lesson.status === 'ongoing';
              const isPassed = lesson.status === 'passed';

              return (
                <div
                  key={lesson.id}
                  className={`p-4 sm:p-5 rounded-2xl transition-all border ${
                    isOngoing
                      ? 'bg-gradient-to-r from-brand-600/10 via-indigo-500/10 to-cyan-500/10 border-brand-500/50 dark:border-cyan-400/50 shadow-md'
                      : isPassed
                      ? 'bg-white/60 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 text-slate-500'
                      : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    {/* Time & Subject */}
                    <div className="flex items-start gap-4">
                      <div className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex flex-col items-center justify-center ${
                        isOngoing
                          ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/40'
                          : isPassed
                          ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                          : 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300'
                      }`}>
                        <span>{lesson.time.split(' — ')[0]}</span>
                        <span className="text-[10px] opacity-80">{lesson.time.split(' — ')[1]}</span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 dark:text-white text-base">
                            {lesson.subject}
                          </h3>

                          {isOngoing && (
                            <Badge variant="primary" glow size="sm">
                              Hozir bo‘lmoqda
                            </Badge>
                          )}
                          {isPassed && (
                            <Badge variant="slate" size="sm">
                              Tugadi
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            {lesson.teacher}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {lesson.classroom}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Homework Indicator & Status */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                      {lesson.hasHomework && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 text-xs font-medium border border-amber-200/50 dark:border-amber-800/50">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                          <span className="truncate max-w-[140px]">{lesson.homeworkTitle}</span>
                        </div>
                      )}

                      <button
                        onClick={() => setActivePage('timetable')}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Homework To-Do List */}
          <div className="pt-4">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Bajarilishi kerak bo‘lgan vazifalar ({pendingHomework.length})
                  </h3>
                </div>
                <button
                  onClick={() => setActivePage('homework')}
                  className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
                >
                  Barchasini ko‘rish
                </button>
              </div>

              <div className="space-y-2">
                {pendingHomework.slice(0, 3).map((hw) => (
                  <div
                    key={hw.id}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-3 hover:border-brand-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <button
                        onClick={() => onToggleHomework(hw.id)}
                        className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 flex items-center justify-center transition-colors flex-shrink-0"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-0 hover:opacity-100 transition-opacity" />
                      </button>
                      <div className="overflow-hidden">
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                          {hw.subject}: {hw.title}
                        </span>
                        <span className="text-[11px] text-slate-400 truncate block">
                          Muddati: {hw.deadlineRelative}
                        </span>
                      </div>
                    </div>

                    <Badge 
                      variant={hw.priority === 'Yuqori' ? 'danger' : 'warning'} 
                      size="sm"
                    >
                      {hw.priority}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column (1 col): Recent Grades, Leaderboard Sneak Peek & Exams */}
        <div className="space-y-6">
          
          {/* Recent Grades Stream */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                Oxirgi baholar (1–10 Ball)
              </h3>
              <button
                onClick={() => setActivePage('grades')}
                className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
              >
                Barchasi
              </button>
            </div>

            <div className="space-y-3">
              {recentGrades.slice(0, 5).map((grade) => (
                <div
                  key={grade.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
                >
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      {grade.subject}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {grade.date} • {grade.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <GradeBadge score={grade.score} variant="solid" size="md" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Upcoming Exams Sneak Peek */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-rose-500" />
                Yaqinlashayotgan imtihonlar
              </h3>
              <button
                onClick={() => setActivePage('exams')}
                className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
              >
                Barchasi
              </button>
            </div>

            <div className="space-y-3">
              {upcomingExams.slice(0, 2).map((exam) => (
                <div
                  key={exam.id}
                  className="p-3 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-700 dark:text-rose-300">
                      {exam.subject}
                    </span>
                    <span className="text-[10px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded-full">
                      {exam.date.split(',')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">
                    {exam.title}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>Tayyorgarlik</span>
                      <span className="font-bold text-slate-700 dark:text-slate-200">{exam.prepProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full"
                        style={{ width: `${exam.prepProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Top Ranking Preview */}
          <Card>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                Sinf Top 3 taligi
              </h3>
              <button
                onClick={() => setActivePage('ranking')}
                className="text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
              >
                Reyting
              </button>
            </div>

            <div className="space-y-2">
              {rankingList.slice(0, 3).map((rk) => (
                <div
                  key={rk.rank}
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/30"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center ${
                      rk.rank === 1 ? 'bg-amber-400 text-slate-900' : rk.rank === 2 ? 'bg-slate-300 text-slate-900' : 'bg-amber-600 text-white'
                    }`}>
                      #{rk.rank}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {rk.name}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-brand-600 dark:text-cyan-400">
                    {rk.overallScore} ball
                  </span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};
