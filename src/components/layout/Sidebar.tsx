'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  GraduationCap, 
  BookOpenCheck, 
  UserCheck, 
  FileText, 
  Trophy, 
  Award, 
  Target, 
  BarChart3, 
  Megaphone, 
  Calendar, 
  User, 
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { PageId } from '../../types';
import { EduFlowLogo } from '../common/EduFlowLogo';

interface SidebarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  onLogout: () => void;
}

export const sidebarItems: { id: PageId; label: string; icon: React.ElementType; badge?: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'timetable', label: 'Dars jadvali', icon: CalendarDays },
  { id: 'grades', label: 'Baholar', icon: GraduationCap },
  { id: 'homework', label: 'Uy vazifalari', icon: BookOpenCheck, badge: '4' },
  { id: 'attendance', label: 'Davomat', icon: UserCheck },
  { id: 'exams', label: 'Imtihonlar', icon: FileText, badge: 'Yangi' },
  { id: 'ranking', label: 'Reyting', icon: Trophy },
  { id: 'achievements', label: 'Yutuqlar', icon: Award },
  { id: 'goals', label: 'Maqsadlar', icon: Target },
  { id: 'analytics', label: 'Statistika', icon: BarChart3 },
  { id: 'announcements', label: 'E\'lonlar', icon: Megaphone },
  { id: 'calendar', label: 'Kalendari', icon: Calendar },
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'settings', label: 'Sozlamalar', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  setActivePage,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogout
}) => {
  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-xl border-r border-slate-200/80 dark:border-slate-800 transition-all duration-300 flex flex-col ${
          collapsed ? 'w-20' : 'w-64'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="h-20 px-5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80">
          <EduFlowLogo collapsed={collapsed} />

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={collapsed ? "Kengaytirish" : "Yig'ish"}
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 relative group ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-md shadow-brand-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                }`}
                title={collapsed ? item.label : undefined}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-white' : 'text-slate-400 dark:text-slate-400 group-hover:text-brand-500'
                }`} />

                {!collapsed && (
                  <span className="truncate">{item.label}</span>
                )}

                {!collapsed && item.badge && (
                  <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50'
                  }`}>
                    {item.badge}
                  </span>
                )}

                {/* Active Pill Indicator for Collapsed Mode */}
                {collapsed && isActive && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-cyan-400 rounded-l-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Class Info Card & Logout */}
        <div className="p-3 space-y-2 border-t border-slate-100 dark:border-slate-800/80">
          {!collapsed && (
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold text-xs">
                  8B
                </div>
                <div className="flex flex-col text-left overflow-hidden">
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    EduFlow Toshkent
                  </span>
                  <span className="text-[11px] text-slate-400 truncate">
                    3-Hafta • 1-Chorak
                  </span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-transparent hover:border-rose-200/60 dark:hover:border-rose-900/60 ${
              collapsed ? 'justify-center' : ''
            }`}
            title="Hisobdan chiqish"
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>Chiqish</span>}
          </button>
        </div>
      </aside>
    </>
  );
};
