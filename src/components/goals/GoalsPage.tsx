'use client';

import React, { useState } from 'react';
import { Target, Plus, CheckCircle2, TrendingUp, Sparkles, Calendar } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { GoalItem } from '../../types';

interface GoalsPageProps {
  goals: GoalItem[];
  setGoals: React.Dispatch<React.SetStateAction<GoalItem[]>>;
}

export const GoalsPage: React.FC<GoalsPageProps> = ({ goals, setGoals }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSubject, setNewSubject] = useState('Matematika');
  const [newTarget, setNewTarget] = useState<number>(95);
  const [newDeadline, setNewDeadline] = useState('1-Chorak oxiri');
  const [newCategory, setNewCategory] = useState('Akademik');

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newGoalObj: GoalItem = {
      id: `g-${Date.now()}`,
      title: newTitle,
      subject: newSubject,
      currentPercent: Math.floor(Math.random() * 20) + 70,
      targetPercent: newTarget,
      deadline: newDeadline,
      category: newCategory
    };

    setGoals(prev => [newGoalObj, ...prev]);
    setIsAddModalOpen(false);
    setNewTitle('');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2 border border-cyan-200/60 dark:border-cyan-800/60">
            <Target className="w-3.5 h-3.5" />
            <span>Shaxsiy Maqsadlar va Rivojlanish Rejasi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Shaxsiy Akademik Maqsadlar
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Maqsadlar qo‘ying va har haftalik rivojlanishingizni kuzatib boring
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/25 hover:opacity-95 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Yangi Maqsad Qo‘shish</span>
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progressRatio = Math.min(100, Math.round((goal.currentPercent / goal.targetPercent) * 100));

          return (
            <Card key={goal.id} className="flex flex-col justify-between space-y-4">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="info" size="sm">
                    {goal.category}
                  </Badge>

                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {goal.deadline}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {goal.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fan / Soha: <span className="font-bold text-slate-700 dark:text-slate-200">{goal.subject}</span>
                </p>
              </div>

              {/* Progress Tracker */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-baseline text-xs font-extrabold">
                  <span className="text-slate-500">Bajarilish: {progressRatio}%</span>
                  <span className="text-brand-600 dark:text-cyan-400 text-sm">
                    {goal.category === 'Intizom' ? `${goal.currentPercent}% / ${goal.targetPercent}% target` : `${goal.currentPercent} / ${goal.targetPercent} ball`}
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-brand-600 rounded-full transition-all duration-500"
                    style={{ width: `${progressRatio}%` }}
                  />
                </div>
              </div>

            </Card>
          );
        })}
      </div>

      {/* Add Goal Modal Form */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Yangi Akademik Maqsad Belgilash"
      >
        <form onSubmit={handleCreateGoal} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              Maqsad nomi:
            </label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Masalan: Fizikadan 90+ olish"
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-brand-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Fan:
              </label>
              <select
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 outline-none"
              >
                <option value="Matematika">Matematika</option>
                <option value="Informatika">Informatika</option>
                <option value="Fizika">Fizika</option>
                <option value="Ingliz tili">Ingliz tili</option>
                <option value="Umumiy">Umumiy</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Maqsad % ball:
              </label>
              <input
                type="number"
                min="50"
                max="100"
                value={newTarget}
                onChange={(e) => setNewTarget(Number(e.target.value))}
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
              Muddati:
            </label>
            <input
              type="text"
              value={newDeadline}
              onChange={(e) => setNewDeadline(e.target.value)}
              placeholder="Masalan: Chorak yakunigacha"
              className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white shadow-md hover:bg-brand-700"
            >
              Qo‘shish va Saqlash
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};
