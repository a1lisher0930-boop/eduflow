export type PageId = 
  | 'dashboard' 
  | 'timetable' 
  | 'grades' 
  | 'homework' 
  | 'attendance' 
  | 'exams' 
  | 'ranking' 
  | 'achievements' 
  | 'goals' 
  | 'analytics' 
  | 'announcements' 
  | 'calendar' 
  | 'profile' 
  | 'settings';

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string;
  class: string;
  school: string;
  city: string;
  academicYear: string;
  overallScore: number;
  attendancePercent: number;
  classRank: number;
  totalClassStudents: number;
  completedHomeworkPercent: number;
  weeklyRankChange: number; // e.g. +2
}

export interface Lesson {
  id: string;
  subject: string;
  teacher: string;
  classroom: string;
  time: string; // e.g. "08:00 - 08:45"
  status: 'passed' | 'ongoing' | 'upcoming';
  hasHomework: boolean;
  homeworkTitle?: string;
  topic?: string;
  dayIndex: number; // 0: Dushanba, 1: Seshanba...
  lessonNumber: number; // 1, 2, 3, 4, 5, 6, 7
  secondaryLesson?: {
    subject: string;
    teacher: string;
    classroom: string;
  };
}

export interface GradeItem {
  id: string;
  subject: string;
  score: number;
  date: string;
  quarter: number; // 1, 2, 3, 4
  teacherNote?: string;
  type: 'Joriy' | 'Nazorat' | 'Choraklik' | 'Mustaqil ish';
}

export interface SubjectGradeSummary {
  subject: string;
  currentAverage: number;
  previousAverage: number;
  highestGrade: number;
  lowestGrade: number;
  totalGrades: number;
  iconName: string;
  color: string;
  teacher: string;
}

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';

export interface AttendanceDay {
  date: string; // YYYY-MM-DD
  dayNumber: number;
  status: AttendanceStatus;
  note?: string;
}

export interface HomeworkItem {
  id: string;
  subject: string;
  title: string;
  description: string;
  schoolName?: string;
  lessonInfo?: string;
  updatedAt?: string;
  deadline: string;
  deadlineRelative: string;
  priority: 'Yuqori' | 'O‘rta' | 'Past';
  completed: boolean;
  teacher: string;
  assignedDate: string;
}

export interface ExamItem {
  id: string;
  subject: string;
  title: string;
  date: string;
  time: string;
  classroom: string;
  teacher: string;
  prepProgress: number; // 0 - 100
  topics: string[];
  weight: string;
}

export interface RankingStudent {
  rank: number;
  previousRank: number;
  name: string;
  avatar: string;
  overallScore: number;
  attendancePercent: number;
  completedHomeworkPercent: number;
  badgesCount: number;
  isCurrentStudent: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  badgeName: string;
  icon: string;
  isUnlocked: boolean;
  unlockedDate?: string;
  progress: number;
  maxProgress: number;
  category: 'A\'lochi' | 'Davomat' | 'Vazifalar' | 'Olimpiada' | 'Fanlar';
}

export interface GoalItem {
  id: string;
  title: string;
  subject: string;
  currentPercent: number;
  targetPercent: number;
  deadline: string;
  category: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  time: string;
  type: 'grade' | 'exam' | 'homework' | 'ranking' | 'announcement';
  read: boolean;
  linkPage?: PageId;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'Tadbirlar' | 'Imtihonlar' | 'Olimpiada' | 'Muhim';
  author: string;
  isPinned?: boolean;
}

export interface AcademicCalendarEvent {
  id: string;
  title: string;
  date: string;
  time?: string;
  type: 'lesson' | 'exam' | 'homework' | 'event' | 'holiday';
  subject?: string;
  classroom?: string;
}
