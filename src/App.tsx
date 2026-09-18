import React, { useState, useEffect } from 'react';
import { Sidebar, sidebarItems } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { DashboardOverview } from './components/dashboard/DashboardOverview';
import { TimetablePage } from './components/timetable/TimetablePage';
import { GradesPage } from './components/grades/GradesPage';
import { AttendancePage } from './components/attendance/AttendancePage';
import { HomeworkPage } from './components/homework/HomeworkPage';
import { ExamsPage } from './components/exams/ExamsPage';
import { RankingPage } from './components/ranking/RankingPage';
import { AchievementsPage } from './components/achievements/AchievementsPage';
import { GoalsPage } from './components/goals/GoalsPage';
import { AnalyticsPage } from './components/analytics/AnalyticsPage';
import { AnnouncementsPage } from './components/announcements/AnnouncementsPage';
import { CalendarPage } from './components/calendar/CalendarPage';
import { ProfilePage } from './components/profile/ProfilePage';
import { SettingsPage } from './components/settings/SettingsPage';
import { PageId } from './types';
import {
  initialStudentProfile,
  mockLessons,
  mockSubjectGradeSummaries,
  mockRecentGrades,
  mockAttendanceDays,
  mockHomeworkItems,
  mockExams,
  mockRankingStudents,
  mockAchievements,
  mockGoals,
  mockNotifications,
  mockAnnouncements,
  mockCalendarEvents
} from './mock/data';

export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('dashboard');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // State objects
  const [student, setStudent] = useState(initialStudentProfile);
  const [lessons] = useState(mockLessons);
  const [subjectSummaries] = useState(mockSubjectGradeSummaries);
  const [recentGrades] = useState(mockRecentGrades);
  const [attendanceDays] = useState(mockAttendanceDays);
  const [homeworkList, setHomeworkList] = useState(mockHomeworkItems);
  const [exams] = useState(mockExams);
  const [rankingList] = useState(mockRankingStudents);
  const [achievements] = useState(mockAchievements);
  const [goals, setGoals] = useState(mockGoals);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [announcements] = useState(mockAnnouncements);
  const [calendarEvents] = useState(mockCalendarEvents);

  // Sync dark mode class on html root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle homework completion state & update metrics
  const handleToggleHomework = (id: string) => {
    setHomeworkList(prev => {
      const updated = prev.map(hw => hw.id === id ? { ...hw, completed: !hw.completed } : hw);
      
      // Recalculate completed HW percentage
      const completedCount = updated.filter(h => h.completed).length;
      const newPercent = Math.round((completedCount / updated.length) * 100);
      setStudent(s => ({ ...s, completedHomeworkPercent: newPercent }));

      return updated;
    });
  };

  // Render current view component
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <DashboardOverview
            student={student}
            todayLessons={lessons.filter(l => l.dayIndex === 0)}
            recentGrades={recentGrades}
            homeworkItems={homeworkList}
            upcomingExams={exams}
            rankingList={rankingList}
            setActivePage={setActivePage}
            onToggleHomework={handleToggleHomework}
          />
        );
      case 'timetable':
        return <TimetablePage lessons={lessons} />;
      case 'grades':
        return <GradesPage subjectSummaries={subjectSummaries} recentGrades={recentGrades} />;
      case 'attendance':
        return <AttendancePage attendanceDays={attendanceDays} />;
      case 'homework':
        return <HomeworkPage homeworkList={homeworkList} onToggleHomework={handleToggleHomework} />;
      case 'exams':
        return <ExamsPage exams={exams} />;
      case 'ranking':
        return <RankingPage rankingList={rankingList} />;
      case 'achievements':
        return <AchievementsPage achievements={achievements} />;
      case 'goals':
        return <GoalsPage goals={goals} setGoals={setGoals} />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'announcements':
        return <AnnouncementsPage announcements={announcements} />;
      case 'calendar':
        return <CalendarPage events={calendarEvents} />;
      case 'profile':
        return <ProfilePage student={student} />;
      case 'settings':
        return <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Sidebar Navigation */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          student={student}
          notifications={notifications}
          setNotifications={setNotifications}
          mobileOpen={mobileMenuOpen}
          setMobileOpen={setMobileMenuOpen}
          collapsed={sidebarCollapsed}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActivePage={setActivePage}
        />

        <main className={`flex-1 px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300 ${
          sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-64'
        }`}>
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-[#0f172a]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 px-3 py-2 flex items-center justify-around">
        {[
          sidebarItems.find(i => i.id === 'dashboard')!,
          sidebarItems.find(i => i.id === 'timetable')!,
          sidebarItems.find(i => i.id === 'grades')!,
          sidebarItems.find(i => i.id === 'homework')!,
          sidebarItems.find(i => i.id === 'ranking')!,
        ].map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center gap-1 text-[10px] font-bold p-1.5 rounded-xl transition-all ${
                isActive 
                  ? 'text-brand-600 dark:text-cyan-400 font-extrabold' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );
};

export default App;
