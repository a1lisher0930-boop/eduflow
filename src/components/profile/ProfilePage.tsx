import React, { useState } from 'react';
import { User, GraduationCap, Award, Trophy, FolderGit2, FileCheck, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { StudentProfile } from '../../types';

interface ProfilePageProps {
  student: StudentProfile;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ student }) => {
  const [activeTab, setActiveTab] = useState<'certificates' | 'projects' | 'competitions'>('certificates');

  const certificates = [
    { title: 'Respublika IT va Dasturlash Olimpiadasi 1-o‘rin', date: 'May 2026', issuer: 'Xalq Ta’limi Vazirligi' },
    { title: 'IELTS Academic Band 7.5 Certificate', date: 'Aprel 2026', issuer: 'British Council Uzbekistan' },
    { title: 'STEM & Robotics Regional Competition Winner', date: 'Fevral 2026', issuer: 'Toshkent shahar Hokimligi' },
  ];

  const projects = [
    { title: 'EduFlow — NextGen Maktab Platformasi UI', tech: 'React, TypeScript, Tailwind', status: 'Bajarildi' },
    { title: 'Python AI O‘quv Assistent Boti', tech: 'Python, OpenAI API', status: 'Faol' },
    { title: 'Aqlli Sinf Smart IoT Sensori', tech: 'Arduino, C++', status: 'Laboratoriya' },
  ];

  const competitions = [
    { title: 'Toshkent Shahar Matematika Olimpiadasi', result: '3-O‘rin (Bronza)', year: '2026' },
    { title: 'Maktablararo Hackathon 2026', result: 'Gran-Pri G‘olibi', year: '2026' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Student ID Card Hero Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 glass-panel shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          
          {/* Avatar with Glow Ring */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden ring-4 ring-brand-500/40 shadow-glow flex-shrink-0">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Student Info Details */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="primary" size="md">
                ID: {student.id}
              </Badge>
              <Badge variant="success" size="md">
                A’lochi O‘quvchi
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {student.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-semibold flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-brand-500" />
                {student.class}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-cyan-500" />
                {student.school}, {student.city}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-purple-500" />
                {student.academicYear}
              </span>
            </p>

            {/* Quick Stats Pills */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold">
              <div className="px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/50">
                O‘rtacha: <span className="text-brand-600 dark:text-cyan-400 font-extrabold text-sm">{student.overallScore}%</span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-800/50">
                Davomat: <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">{student.attendancePercent}%</span>
              </div>
              <div className="px-4 py-2 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/50">
                Sinf Reytingi: <span className="text-purple-600 dark:text-purple-400 font-extrabold text-sm">#{student.classRank}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Portfolio Tabs */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          {[
            { id: 'certificates', label: 'Sertifikatlar', icon: FileCheck },
            { id: 'projects', label: 'Loyiha Ishlari', icon: FolderGit2 },
            { id: 'competitions', label: 'Tanlov & Olimpiadalar', icon: Trophy },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === 'certificates' && certificates.map((cert, idx) => (
            <Card key={idx} className="space-y-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 w-fit">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Beruvchi: {cert.issuer} • {cert.date}
              </p>
            </Card>
          ))}

          {activeTab === 'projects' && projects.map((proj, idx) => (
            <Card key={idx} className="space-y-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 w-fit">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Texnologiyalar: {proj.tech}
              </p>
              <Badge variant="success" size="sm">{proj.status}</Badge>
            </Card>
          ))}

          {activeTab === 'competitions' && competitions.map((comp, idx) => (
            <Card key={idx} className="space-y-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {comp.title}
              </h3>
              <Badge variant="purple" size="sm">{comp.result}</Badge>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
};
