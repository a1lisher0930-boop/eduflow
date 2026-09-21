'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Menu, 
  CheckCheck,
  Calendar,
  Sparkles,
  Award,
  BookOpen,
  FileText,
  Trophy,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { NotificationItem, StudentProfile, PageId } from '../../types';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  student: StudentProfile;
  notifications: NotificationItem[];
  setNotifications: React.Dispatch<React.SetStateAction<NotificationItem[]>>;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  collapsed: boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setActivePage: (page: PageId) => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  student,
  notifications,
  setNotifications,
  mobileOpen,
  setMobileOpen,
  collapsed,
  searchQuery,
  setSearchQuery,
  setActivePage,
  onLogout
}) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getNotifIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'grade': return <BookOpen className="w-4 h-4 text-emerald-500" />;
      case 'exam': return <FileText className="w-4 h-4 text-rose-500" />;
      case 'homework': return <Calendar className="w-4 h-4 text-amber-500" />;
      case 'ranking': return <Trophy className="w-4 h-4 text-purple-500" />;
      default: return <Sparkles className="w-4 h-4 text-brand-500" />;
    }
  };

  return (
    <header className={`sticky top-0 z-30 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300 ${
      collapsed ? 'lg:pl-20' : 'lg:pl-64'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Left Side: Mobile Menu Button & Search */}
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Search Input Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Fanlar, baholar, uy vazifasi va imtihonlarni qidirish..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
            />
          </div>
        </div>

        {/* Right Side: Date Info, Theme Toggle, Notifications, Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Current Date & Academic Week Badge (Desktop) */}
          <div className="hidden md:flex flex-col text-right">
            <div className="flex items-center gap-1.5 justify-end text-xs font-semibold text-slate-700 dark:text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-brand-500" />
              <span>14 Sentyabr, 2026</span>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              3-Akademik Hafta • Dushanba
            </span>
          </div>

          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 hidden md:block" />

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-cyan-400 hover:bg-slate-200/80 dark:hover:bg-slate-700 transition-all shadow-sm"
            title={darkMode ? "Yoritilgan rejim" : "Tungi rejim"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-cyan-400 hover:bg-slate-200/80 dark:hover:bg-slate-700 transition-all shadow-sm"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold flex items-center justify-center animate-pulse shadow-sm shadow-rose-500/50">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notifications Modal Panel */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-white dark:bg-[#0d1322] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      Bildirishnomalar
                    </h4>
                    {unreadCount > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-500 text-white">
                        {unreadCount} yangi
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs text-brand-600 dark:text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      Hammasini o‘qilgan qilish
                    </button>
                  )}
                </div>

                <div className="py-2 max-h-80 overflow-y-auto space-y-2">
                  {notifications.length === 0 ? (
                    <p className="text-xs text-slate-400 text-center py-6">
                      Bildirishnomalar yo‘q
                    </p>
                  ) : (
                    notifications.map((notif) => (
                      <div
                        key={notif.id}
                        onClick={() => {
                          if (notif.linkPage) setActivePage(notif.linkPage);
                          setNotificationsOpen(false);
                        }}
                        className={`p-3 rounded-2xl flex items-start gap-3 transition-colors cursor-pointer ${
                          notif.read 
                            ? 'bg-slate-100 dark:bg-slate-800/90 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700' 
                            : 'bg-indigo-50 dark:bg-indigo-950/90 border border-indigo-200 dark:border-indigo-800 text-slate-800 dark:text-slate-100 hover:bg-indigo-100 dark:hover:bg-indigo-900'
                        }`}
                      >
                        <div className="p-2 rounded-xl bg-white dark:bg-slate-800 shadow-xs mt-0.5">
                          {getNotifIcon(notif.type)}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-xs font-semibold leading-relaxed line-clamp-2">
                            {notif.title}
                          </p>
                          <span className="text-[10px] text-slate-400 font-medium block mt-1">
                            {notif.time}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Student Profile Quick Menu */}
          <button
            onClick={() => setActivePage('profile')}
            className="flex items-center gap-2.5 p-1.5 pr-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
          >
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-2 ring-brand-500/40">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 leading-tight">
                {student.name}
              </span>
              <span className="text-[10px] font-semibold text-brand-600 dark:text-cyan-400">
                {student.class}
              </span>
            </div>
          </button>

          {/* Log Out Button */}
          <button
            onClick={onLogout}
            className="p-2.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-600 transition-all shadow-sm flex items-center gap-1.5 text-xs font-bold"
            title="Hisobdan chiqish"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden xl:inline">Chiqish</span>
          </button>

        </div>
      </div>
    </header>
  );
};
