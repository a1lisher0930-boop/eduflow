'use client';

import React, { useState } from 'react';
import { Settings, Moon, Sun, Bell, Shield, UserCheck, CheckCircle2, Save, LogOut } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface SettingsPageProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onLogout?: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({ darkMode, setDarkMode, onLogout }) => {
  const [savedSuccess, setSavedSuccess] = useState(false);

  const [notifGrade, setNotifGrade] = useState(true);
  const [notifExam, setNotifExam] = useState(true);
  const [notifTelegram, setNotifTelegram] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold mb-2">
            <Settings className="w-3.5 h-3.5" />
            <span>Platforma Sozlamalari</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sozlamalar va Xavfsizlik
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Rejimlar, bildirishnomalar hamda shaxsiy ma’lumotlarni boshqarish
          </p>
        </div>

        {savedSuccess && (
          <Badge variant="success" size="lg" className="animate-bounce">
            <CheckCircle2 className="w-4 h-4 mr-1" />
            Sozlamalar saqlandi!
          </Badge>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Theme Settings Card */}
        <Card className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            {darkMode ? <Moon className="w-5 h-5 text-cyan-400" /> : <Sun className="w-5 h-5 text-amber-500" />}
            Mavzu va Tashqi Ko‘rinish (Dark / Light Mode)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              onClick={() => setDarkMode(false)}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                !darkMode ? 'border-brand-500 bg-brand-50/50 dark:bg-slate-800' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Sun className="w-6 h-6 text-amber-500" />
                <div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white block">Yoritilgan Rejim (Light Mode)</span>
                  <span className="text-xs text-slate-500">Tiniq va oq rangli interfeys</span>
                </div>
              </div>
              {!darkMode && <CheckCircle2 className="w-5 h-5 text-brand-600" />}
            </div>

            <div
              onClick={() => setDarkMode(true)}
              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                darkMode ? 'border-cyan-400 bg-slate-800' : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Moon className="w-6 h-6 text-cyan-400" />
                <div>
                  <span className="font-bold text-sm text-slate-900 dark:text-white block">Tungi Rejim (Dark Mode)</span>
                  <span className="text-xs text-slate-500">Zamonaviy va ko‘zga qulay qorong‘u fon</span>
                </div>
              </div>
              {darkMode && <CheckCircle2 className="w-5 h-5 text-cyan-400" />}
            </div>
          </div>
        </Card>

        {/* Notifications Preference Card */}
        <Card className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-brand-500" />
            Bildirishnomalar Sozlamalari
          </h3>

          <div className="space-y-3">
            {[
              { id: 'g', title: 'Yangi baho qo‘yilganda darhol bildirishnoma yuborish', state: notifGrade, setState: setNotifGrade },
              { id: 'e', title: 'Nazorat ishlari va imtihonlar haqida 1 kun oldin eslatish', state: notifExam, setState: setNotifExam },
              { id: 't', title: 'Telegram Bot orqali kundalik hisobot va habarlar sinxronizatsiyasi', state: notifTelegram, setState: setNotifTelegram },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {item.title}
                </span>
                <button
                  type="button"
                  onClick={() => item.setState(!item.state)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    item.state ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    item.state ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Account Security & Logout */}
        {onLogout && (
          <Card className="space-y-4 border-rose-200/60 dark:border-rose-900/40 bg-rose-50/30 dark:bg-rose-950/10">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-rose-500" />
              Hisob Havfsizligi va Chiqish
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Platformadagi joriy seansni tugatish va qayta kirish oynasiga o‘tish
            </p>
            <button
              type="button"
              onClick={onLogout}
              className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Hisobdan Chiqish</span>
            </button>
          </Card>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-500/25 hover:opacity-95 transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>Sozlamalarni Saqlash</span>
          </button>
        </div>

      </form>

    </div>
  );
};
