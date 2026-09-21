import { 
  StudentProfile, 
  Lesson, 
  SubjectGradeSummary, 
  GradeItem, 
  AttendanceDay, 
  HomeworkItem, 
  ExamItem, 
  RankingStudent, 
  AchievementItem, 
  GoalItem, 
  NotificationItem, 
  AnnouncementItem, 
  AcademicCalendarEvent 
} from '../types';

export const initialStudentProfile: StudentProfile = {
  id: 'ST-9482',
  name: 'Umarov Alisher',
  avatar: 'https://au1.emaktab.uz/get.aspx/46/eeb9598c851944069621dc4ff73f336e.l.jpg?d=20220127102900',
  class: '8-“B” sinf',
  school: '6-maktab',
  city: 'Toshkent shahri',
  academicYear: '2026–2027 o‘quv yili',
  overallScore: 9,
  attendancePercent: 96,
  classRank: 4,
  totalClassStudents: 28,
  completedHomeworkPercent: 87,
  weeklyRankChange: 2,
};

export const daysOfWeek = [
  'Dushanba',
  'Seshanba',
  'Chorshanba',
  'Payshanba',
  'Juma',
  'Shanba'
];

export const mockLessons: Lesson[] = [
  // Dushanba (day 0)
  { id: 'L1', subject: 'Kelajak soatlari', teacher: 'Israilova Z.U.', classroom: '304-xona', time: '08:00 - 08:45', status: 'passed', hasHomework: true, homeworkTitle: 'Loyiha rejasi', topic: 'Kelajak kasblari va maqsadlar', dayIndex: 0, lessonNumber: 1 },
  { id: 'L2', subject: 'Algebra', teacher: 'YEROVA R.S.', classroom: '304-xona', time: '08:50 - 09:35', status: 'passed', hasHomework: true, homeworkTitle: '№142-150 masalalar', topic: 'Trigonometrik tenglamalar', dayIndex: 0, lessonNumber: 2 },
  { id: 'L3', subject: 'Ona tili', teacher: 'Israilova Z.U.', classroom: '201-xona', time: '09:40 - 10:25', status: 'ongoing', hasHomework: false, topic: 'Qo‘shma gaplar sintaksisi', dayIndex: 0, lessonNumber: 3 },
  { id: 'L4', subject: 'Kimyo', teacher: 'Dushabayeva M.M.', classroom: '312-xona', time: '10:45 - 11:30', status: 'upcoming', hasHomework: true, homeworkTitle: 'Reaksiya tenglamalari', topic: 'Organik birikmalar', dayIndex: 0, lessonNumber: 4 },
  { id: 'L5', subject: 'Biologiya', teacher: 'Toshboyeva S.J.', classroom: '308-xona', time: '11:35 - 12:20', status: 'upcoming', hasHomework: false, topic: 'Hujayra biologiyasi', dayIndex: 0, lessonNumber: 5 },
  { 
    id: 'L6', 
    subject: 'Rus tili (n)', 
    teacher: 'Xabilova N.A. (1-guruh)', 
    classroom: '105-xona', 
    time: '12:25 - 13:10', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 0, 
    lessonNumber: 6,
    secondaryLesson: { subject: 'Rus tili (n)', teacher: 'Sultanova M.R. (2-guruh)', classroom: '107-xona' }
  },

  // Seshanba (day 1)
  { id: 'L7', subject: 'Algebra', teacher: 'YEROVA R.S.', classroom: '304-xona', time: '08:00 - 08:45', status: 'upcoming', hasHomework: false, topic: 'Hosilalar va ularning tatbiqi', dayIndex: 1, lessonNumber: 1 },
  { id: 'L8', subject: 'Biologiya', teacher: 'Toshboyeva S.J.', classroom: '308-xona', time: '08:50 - 09:35', status: 'upcoming', hasHomework: true, homeworkTitle: 'DNK replikatsiyasi sxemasi', dayIndex: 1, lessonNumber: 2 },
  { id: 'L9', subject: 'Tarbiya', teacher: 'Mixtibayeva G.S.', classroom: '114-xona', time: '09:40 - 10:25', status: 'upcoming', hasHomework: false, dayIndex: 1, lessonNumber: 3 },
  { id: 'L10', subject: 'O‘zbekiston tarixi', teacher: 'Muminova L.O.', classroom: '114-xona', time: '10:45 - 11:30', status: 'upcoming', hasHomework: true, homeworkTitle: 'Temuriylar davri madaniyati', dayIndex: 1, lessonNumber: 4 },
  { id: 'L11', subject: 'Geografiya', teacher: 'Pirnazarov B.E.', classroom: '205-xona', time: '11:35 - 12:20', status: 'upcoming', hasHomework: false, dayIndex: 1, lessonNumber: 5 },

  // Chorshanba (day 2)
  { id: 'L12', subject: 'Algebra', teacher: 'YEROVA R.S.', classroom: '304-xona', time: '08:00 - 08:45', status: 'upcoming', hasHomework: true, homeworkTitle: 'Tengsizliklar yechimi', dayIndex: 2, lessonNumber: 1 },
  { id: 'L13', subject: 'Ona tili', teacher: 'Israilova Z.U.', classroom: '201-xona', time: '08:50 - 09:35', status: 'upcoming', hasHomework: false, dayIndex: 2, lessonNumber: 2 },
  { 
    id: 'L14', 
    subject: 'Texnologiya', 
    teacher: 'Ismoilov A.Z. (1-guruh)', 
    classroom: '210-xona', 
    time: '09:40 - 10:25', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 2, 
    lessonNumber: 3,
    secondaryLesson: { subject: 'Texnologiya', teacher: 'Xudaybakova S.Q. (2-guruh)', classroom: '212-xona' }
  },
  { id: 'L15', subject: 'Fizika', teacher: 'Asrayeva D.A.', classroom: '402-xona', time: '10:45 - 11:30', status: 'upcoming', hasHomework: true, homeworkTitle: 'Nyuton qonunlari masalalari', dayIndex: 2, lessonNumber: 4 },
  { id: 'L16', subject: 'Davlat va huquq', teacher: 'Yuldashev A.A.', classroom: '114-xona', time: '11:35 - 12:20', status: 'upcoming', hasHomework: false, dayIndex: 2, lessonNumber: 5 },
  { 
    id: 'L17', 
    subject: 'Ingliz tili', 
    teacher: 'Tursunova N.T. (1-guruh)', 
    classroom: '105-xona', 
    time: '12:25 - 13:10', 
    status: 'upcoming', 
    hasHomework: true, 
    homeworkTitle: 'IELTS Essay Unit 3',
    dayIndex: 2, 
    lessonNumber: 6,
    secondaryLesson: { subject: 'Ingliz tili', teacher: 'Muxamadqulova C. (2-guruh)', classroom: '106-xona' }
  },

  // Payshanba (day 3)
  { id: 'L18', subject: 'Umumjahon tarixi', teacher: 'Muminova L.O.', classroom: '114-xona', time: '08:00 - 08:45', status: 'upcoming', hasHomework: false, dayIndex: 3, lessonNumber: 1 },
  { id: 'L19', subject: 'O‘zbekiston tarixi', teacher: 'Muminova L.O.', classroom: '114-xona', time: '08:50 - 09:35', status: 'upcoming', hasHomework: false, dayIndex: 3, lessonNumber: 2 },
  { 
    id: 'L20', 
    subject: 'Jismoniy madaniyat', 
    teacher: 'YUNUSOVA X.T. (1-guruh)', 
    classroom: 'Sport zal', 
    time: '09:40 - 10:25', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 3, 
    lessonNumber: 3,
    secondaryLesson: { subject: 'Jismoniy madaniyat', teacher: 'Mamatqulov N.N. (2-guruh)', classroom: 'Sport zal' }
  },
  { id: 'L21', subject: 'Kimyo', teacher: 'Dushabayeva M.M.', classroom: '312-xona', time: '10:45 - 11:30', status: 'upcoming', hasHomework: false, dayIndex: 3, lessonNumber: 4 },
  { 
    id: 'L22', 
    subject: 'Ingliz tili', 
    teacher: 'Muxamadqulova C. (1-guruh)', 
    classroom: '105-xona', 
    time: '11:35 - 12:20', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 3, 
    lessonNumber: 5,
    secondaryLesson: { subject: 'Ingliz tili', teacher: 'Tursunova N.T. (2-guruh)', classroom: '106-xona' }
  },
  { id: 'L23', subject: 'Chizmachilik', teacher: 'Raimqulova G.U.', classroom: '210-xona', time: '12:25 - 13:10', status: 'upcoming', hasHomework: false, dayIndex: 3, lessonNumber: 6 },

  // Juma (day 4)
  { id: 'L24', subject: 'Geometriya', teacher: 'YEROVA R.S.', classroom: '304-xona', time: '08:00 - 08:45', status: 'upcoming', hasHomework: true, homeworkTitle: 'Fazoviy shakllar yuzasi', dayIndex: 4, lessonNumber: 1 },
  { id: 'L25', subject: 'Ona tili', teacher: 'Israilova Z.U.', classroom: '201-xona', time: '08:50 - 09:35', status: 'upcoming', hasHomework: false, dayIndex: 4, lessonNumber: 2 },
  { 
    id: 'L26', 
    subject: 'Rus tili (n)', 
    teacher: 'Xabilova N.A. (1-guruh)', 
    classroom: '105-xona', 
    time: '09:40 - 10:25', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 4, 
    lessonNumber: 3,
    secondaryLesson: { subject: 'Rus tili (n)', teacher: 'Sultanova M.R. (2-guruh)', classroom: '107-xona' }
  },
  { id: 'L27', subject: 'Adabiyot', teacher: 'Israilova Z.U.', classroom: '201-xona', time: '10:45 - 11:30', status: 'upcoming', hasHomework: false, dayIndex: 4, lessonNumber: 4 },
  { 
    id: 'L28', 
    subject: 'Jismoniy madaniyat', 
    teacher: 'YUNUSOVA X.T. (1-guruh)', 
    classroom: 'Sport zal', 
    time: '11:35 - 12:20', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 4, 
    lessonNumber: 5,
    secondaryLesson: { subject: 'Jismoniy madaniyat', teacher: 'Mamatqulov N.N. (2-guruh)', classroom: 'Sport zal' }
  },

  // Shanba (day 5)
  { id: 'L29', subject: 'Geometriya', teacher: 'YEROVA R.S.', classroom: '304-xona', time: '08:00 - 08:45', status: 'upcoming', hasHomework: false, dayIndex: 5, lessonNumber: 1 },
  { id: 'L30', subject: 'Adabiyot', teacher: 'Israilova Z.U.', classroom: '201-xona', time: '08:50 - 09:35', status: 'upcoming', hasHomework: false, dayIndex: 5, lessonNumber: 2 },
  { id: 'L31', subject: 'Fizika', teacher: 'Asrayeva D.A.', classroom: '402-xona', time: '09:40 - 10:25', status: 'upcoming', hasHomework: false, dayIndex: 5, lessonNumber: 3 },
  { 
    id: 'L32', 
    subject: 'Ingliz tili', 
    teacher: 'Tursunova N.T. (1-guruh)', 
    classroom: '105-xona', 
    time: '10:45 - 11:30', 
    status: 'upcoming', 
    hasHomework: false, 
    dayIndex: 5, 
    lessonNumber: 4,
    secondaryLesson: { subject: 'Ingliz tili', teacher: 'Muxamadqulova C. (2-guruh)', classroom: '106-xona' }
  },
  { 
    id: 'L33', 
    subject: 'Informatika', 
    teacher: 'Kadirov A.K. (1-guruh)', 
    classroom: '210-xona', 
    time: '11:35 - 12:20', 
    status: 'upcoming', 
    hasHomework: true, 
    homeworkTitle: 'Python algoritmlar loyihasi',
    dayIndex: 5, 
    lessonNumber: 5,
    secondaryLesson: { subject: 'Informatika', teacher: 'Dadabayeva F.B. (2-guruh)', classroom: '212-xona' }
  },
  { id: 'L34', subject: 'Iqtisodiyot', teacher: 'Raximova M.M.', classroom: '114-xona', time: '12:25 - 13:10', status: 'upcoming', hasHomework: false, dayIndex: 5, lessonNumber: 6 }
];

export const mockSubjectGradeSummaries: SubjectGradeSummary[] = [
  {
    subject: 'Algebra',
    currentAverage: 9,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 18,
    iconName: 'Calculator',
    color: '#6366f1',
    teacher: 'YEROVA R.S.'
  },
  {
    subject: 'Geometriya',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 14,
    iconName: 'Compass',
    color: '#4f46e5',
    teacher: 'YEROVA R.S.'
  },
  {
    subject: 'Informatika',
    currentAverage: 10,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 9,
    totalGrades: 22,
    iconName: 'Code',
    color: '#06b6d4',
    teacher: 'Kadirov A.K.'
  },
  {
    subject: 'Ingliz tili',
    currentAverage: 9,
    previousAverage: 8,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 16,
    iconName: 'Globe',
    color: '#3b82f6',
    teacher: 'Tursunova N.T.'
  },
  {
    subject: 'Fizika',
    currentAverage: 8,
    previousAverage: 7,
    highestGrade: 9,
    lowestGrade: 6,
    totalGrades: 15,
    iconName: 'Atom',
    color: '#a855f7',
    teacher: 'Asrayeva D.A.'
  },
  {
    subject: 'Biologiya',
    currentAverage: 9,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 12,
    iconName: 'Dna',
    color: '#10b981',
    teacher: 'Toshboyeva S.J.'
  },
  {
    subject: 'Kimyo',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 11,
    iconName: 'FlaskConical',
    color: '#f59e0b',
    teacher: 'Dushabayeva M.M.'
  },
  {
    subject: 'Ona tili',
    currentAverage: 9,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 15,
    iconName: 'BookOpen',
    color: '#ec4899',
    teacher: 'Israilova Z.U.'
  },
  {
    subject: 'Adabiyot',
    currentAverage: 9,
    previousAverage: 8,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 13,
    iconName: 'BookMarked',
    color: '#d946ef',
    teacher: 'Israilova Z.U.'
  },
  {
    subject: 'O‘zbekiston tarixi',
    currentAverage: 9,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 10,
    iconName: 'Landmark',
    color: '#8b5cf6',
    teacher: 'Muminova L.O.'
  },
  {
    subject: 'Umumjahon tarixi',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 9,
    iconName: 'History',
    color: '#7c3aed',
    teacher: 'Muminova L.O.'
  },
  {
    subject: 'Geografiya',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 11,
    iconName: 'Map',
    color: '#14b8a6',
    teacher: 'Pirnazarov B.E.'
  },
  {
    subject: 'Texnologiya',
    currentAverage: 10,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 9,
    totalGrades: 8,
    iconName: 'Wrench',
    color: '#f97316',
    teacher: 'Ismoilov A.Z.'
  },
  {
    subject: 'Davlat va huquq',
    currentAverage: 9,
    previousAverage: 8,
    highestGrade: 10,
    lowestGrade: 8,
    totalGrades: 8,
    iconName: 'Scale',
    color: '#0284c7',
    teacher: 'Yuldashev A.A.'
  },
  {
    subject: 'Rus tili (n)',
    currentAverage: 8,
    previousAverage: 7,
    highestGrade: 9,
    lowestGrade: 6,
    totalGrades: 12,
    iconName: 'Languages',
    color: '#ef4444',
    teacher: 'Xabilova N.A.'
  },
  {
    subject: 'Jismoniy madaniyat',
    currentAverage: 10,
    previousAverage: 10,
    highestGrade: 10,
    lowestGrade: 9,
    totalGrades: 16,
    iconName: 'Activity',
    color: '#22c55e',
    teacher: 'YUNUSOVA X.T.'
  },
  {
    subject: 'Chizmachilik',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 7,
    iconName: 'PenTool',
    color: '#64748b',
    teacher: 'Raimqulova G.U.'
  },
  {
    subject: 'Tarbiya',
    currentAverage: 10,
    previousAverage: 9,
    highestGrade: 10,
    lowestGrade: 9,
    totalGrades: 8,
    iconName: 'HeartHandshake',
    color: '#eab308',
    teacher: 'Mixtibayeva G.S.'
  },
  {
    subject: 'Kelajak soatlari',
    currentAverage: 10,
    previousAverage: 10,
    highestGrade: 10,
    lowestGrade: 10,
    totalGrades: 6,
    iconName: 'Sparkles',
    color: '#a855f7',
    teacher: 'Israilova Z.U.'
  },
  {
    subject: 'Iqtisodiyot',
    currentAverage: 8,
    previousAverage: 8,
    highestGrade: 9,
    lowestGrade: 7,
    totalGrades: 7,
    iconName: 'Coins',
    color: '#059669',
    teacher: 'Raximova M.M.'
  }
];

export const mockRecentGrades: GradeItem[] = [
  { id: 'g1', subject: 'Informatika', score: 10, date: '14 Sentyabr', quarter: 1, type: 'Nazorat', teacherNote: 'Algoritmik topshiriq mukammal bajarilgan!' },
  { id: 'g2', subject: 'Algebra', score: 9, date: '14 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Trigonometriya tenglamalar to‘g‘ri yechildi.' },
  { id: 'g3', subject: 'Kelajak soatlari', score: 10, date: '14 Sentyabr', quarter: 1, type: 'Amaliy', teacherNote: 'Loyiha rejasi yuksak baholandi.' },
  { id: 'g4', subject: 'Biologiya', score: 9, date: '14 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Hujayra strukturasi savollariga to‘g‘ri javob berildi.' },
  { id: 'g5', subject: 'Kimyo', score: 8, date: '14 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Reaksiya tenglamasida kichik aniqlik kiritilsin.' },
  { id: 'g6', subject: 'Rus tili (n)', score: 7, date: '14 Sentyabr', quarter: 1, type: 'Mustaqil ish', teacherNote: 'Lug‘at ustida yana ozgina ishlash kerak.' },
  { id: 'g7', subject: 'Tarbiya', score: 10, date: '13 Sentyabr', quarter: 1, type: 'Amaliy', teacherNote: 'Prezentatsiya va jamoaviy ishi a’lo!' },
  { id: 'g8', subject: 'O‘zbekiston tarixi', score: 9, date: '13 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Temuriylar davri manbalari to‘g‘ri tahlil qilingan.' },
  { id: 'g9', subject: 'Geografiya', score: 8, date: '13 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Xaritadan joylarni ko‘rsatish amaliyoti yaxshi.' },
  { id: 'g10', subject: 'Ona tili', score: 9, date: '12 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Qo‘shma gaplar mashqi xatosiz bajarildi.' },
  { id: 'g11', subject: 'Texnologiya', score: 10, date: '12 Sentyabr', quarter: 1, type: 'Amaliy', teacherNote: 'Hunarmandchilik albomi a’lo tayyorlangan.' },
  { id: 'g12', subject: 'Fizika', score: 7, date: '12 Sentyabr', quarter: 1, type: 'Nazorat', teacherNote: 'Nyuton qonunlari masalalarini qayta takrorlang.' },
  { id: 'g13', subject: 'Davlat va huquq', score: 9, date: '12 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Konstitutsiya moddalari bilimingiz yuqori.' },
  { id: 'g14', subject: 'Ingliz tili', score: 9, date: '12 Sentyabr', quarter: 1, type: 'Mustaqil ish', teacherNote: 'IELTS Essay writing task completed with High Band.' },
  { id: 'g15', subject: 'Umumjahon tarixi', score: 8, date: '11 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Uyg‘onish davri madaniyati mavzusi o‘zlashtirildi.' },
  { id: 'g16', subject: 'Jismoniy madaniyat', score: 10, date: '11 Sentyabr', quarter: 1, type: 'Amaliy', teacherNote: 'Sakrash normativlari a’lo topshirildi.' },
  { id: 'g17', subject: 'Chizmachilik', score: 8, date: '11 Sentyabr', quarter: 1, type: 'Amaliy', teacherNote: 'A3 chizma proyeksiya chiziqlari to‘g‘ri.' },
  { id: 'g18', subject: 'Geometriya', score: 8, date: '10 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Fazoviy shakllar yuzi to‘g‘ri hisoblandi.' },
  { id: 'g19', subject: 'Adabiyot', score: 9, date: '10 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'G‘azallarni yoddan aytish mahorati yuqori.' },
  { id: 'g20', subject: 'Iqtisodiyot', score: 8, date: '10 Sentyabr', quarter: 1, type: 'Joriy', teacherNote: 'Bozor iqtisodiyoti qonunlari tahlili yaxshi.' }
];

export const mockAttendanceDays: AttendanceDay[] = [
  { date: '2026-09-01', dayNumber: 1, status: 'present', note: 'O‘quv yili boshlanishi' },
  { date: '2026-09-02', dayNumber: 2, status: 'present' },
  { date: '2026-09-03', dayNumber: 3, status: 'present' },
  { date: '2026-09-04', dayNumber: 4, status: 'present' },
  { date: '2026-09-05', dayNumber: 5, status: 'present' },
  { date: '2026-09-07', dayNumber: 7, status: 'present' },
  { date: '2026-09-08', dayNumber: 8, status: 'late', note: 'Avtobus ushlanishi sabab 10 daqiqa kechikdi' },
  { date: '2026-09-09', dayNumber: 9, status: 'present' },
  { date: '2026-09-10', dayNumber: 10, status: 'present' },
  { date: '2026-09-11', dayNumber: 11, status: 'present' },
  { date: '2026-09-12', dayNumber: 12, status: 'present' },
  { date: '2026-09-14', dayNumber: 14, status: 'present', note: 'Bugungi darslarda faol' },
  { date: '2026-09-15', dayNumber: 15, status: 'present' },
  { date: '2026-09-16', dayNumber: 16, status: 'excused', note: 'Shifokor ko‘rigi (Sababli)' },
  { date: '2026-09-17', dayNumber: 17, status: 'present' },
  { date: '2026-09-18', dayNumber: 18, status: 'present' },
  { date: '2026-09-19', dayNumber: 19, status: 'present' },
  { date: '2026-09-21', dayNumber: 21, status: 'present' },
  { date: '2026-09-22', dayNumber: 22, status: 'present' },
  { date: '2026-09-23', dayNumber: 23, status: 'present' },
  { date: '2026-09-24', dayNumber: 24, status: 'present' },
  { date: '2026-09-25', dayNumber: 25, status: 'present' },
  { date: '2026-09-26', dayNumber: 26, status: 'present' },
  { date: '2026-09-28', dayNumber: 28, status: 'absent', note: 'Kasallik varaqasi topshirildi' },
  { date: '2026-09-29', dayNumber: 29, status: 'present' },
  { date: '2026-09-30', dayNumber: 30, status: 'present' }
];

export const mockHomeworkItems: HomeworkItem[] = [
  // Page 1 (Items 1 - 10)
  {
    id: 'hw1',
    subject: 'Kelajak soati',
    title: 'Mustaqillik va Vatan haqida fikr yozish.',
    description: 'Mustaqillik bayrami va Vatan haqida 1 sahifalik insho tayyorlash.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 1 dars',
    updatedAt: 'Bugun da 06:24',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 1-dars',
    priority: 'O‘rta',
    completed: true,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw2',
    subject: 'Algebra',
    title: '11-masala',
    description: 'Darslikdagi 11-masalani yechish va trigonometrik tenglamani soddalashtirish.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 2 dars',
    updatedAt: 'Bugun da 08:12',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 2-dars',
    priority: 'Yuqori',
    completed: true,
    teacher: 'YEROVA R.S.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw3',
    subject: 'Ona tili',
    title: '1.29-topshiriq',
    description: 'Qo‘shma gaplarda tinish belgilarining ishlatilishi mashqini bajarish.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 3 dars',
    updatedAt: 'Bugun da 06:25',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 3-dars',
    priority: 'O‘rta',
    completed: true,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw4',
    subject: 'Kimyo',
    title: '2-mavzuni o‘rganish',
    description: 'Organik kimyo kirish qismini o‘qish va konspekt qilish.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 4 dars',
    updatedAt: 'Bugun da 07:30',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 4-dars',
    priority: 'Yuqori',
    completed: true,
    teacher: 'Dushabayeva M.M.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw5',
    subject: 'Biologiya',
    title: '9-11-betlarni o‘qish, savollarga javob yozish',
    description: 'Hujayra biologiyasi va DNK replikatsiyasi bo‘yicha topshiriqlar.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 5 dars',
    updatedAt: 'Bugun da 10:29',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 5-dars',
    priority: 'O‘rta',
    completed: true,
    teacher: 'Toshboyeva S.J.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw6',
    subject: 'Rus tili (n)',
    title: 'Повторение',
    description: 'Повторение пройденного материала и упражнения №14-18.',
    schoolName: '6-maktab',
    lessonInfo: 'Bugun 6 dars',
    deadline: '2026-09-14',
    deadlineRelative: 'Bugun 6-dars',
    priority: 'Past',
    completed: false,
    teacher: 'Xabilova N.A.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw7',
    subject: 'Algebra',
    title: '19-masala',
    description: 'Hosilalar nazariyasi bo‘yicha masalalarni yechish.',
    schoolName: '6-maktab',
    lessonInfo: '15 sentabr 2026 1 dars',
    deadline: '2026-09-15',
    deadlineRelative: '15 sentabr 1-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'YEROVA R.S.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw8',
    subject: 'Biologiya',
    title: '12-14-betlarni o‘qish, savollarga javob yozish',
    description: 'Fermentlar va metabolizm jarayonlari bo‘yicha konspekt.',
    schoolName: '6-maktab',
    lessonInfo: '15 sentabr 2026 2 dars',
    deadline: '2026-09-15',
    deadlineRelative: '15 sentabr 2-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Toshboyeva S.J.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw9',
    subject: 'Tarbiya',
    title: 'O‘zbekiston haqida ma’lumot tayyorlash.',
    description: 'Milliy qadriyatlar va ma’naviyat mavzusida prezentatsiya tayyorlash.',
    schoolName: '6-maktab',
    lessonInfo: '15 sentabr 2026 3 dars',
    updatedAt: 'Bugun da 11:59',
    deadline: '2026-09-15',
    deadlineRelative: '15 sentabr 3-dars',
    priority: 'Past',
    completed: true,
    teacher: 'Mixtibayeva G.S.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw10',
    subject: 'O‘zbekiston tarixi',
    title: 'takrorlash',
    description: 'Temuriylar saltanati madaniy hayotini takrorlash.',
    schoolName: '6-maktab',
    lessonInfo: '15 sentabr 2026 4 dars',
    deadline: '2026-09-15',
    deadlineRelative: '15 sentabr 4-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'Muminova L.O.',
    assignedDate: '2026-09-14'
  },

  // Page 2 (Items 11 - 20)
  {
    id: 'hw11',
    subject: 'Geografiya',
    title: '8-12-betlarni o‘qish, topshiriqlarni bajarish',
    description: 'Jahon iqtisodiy geografiyasi xaritasini to‘ldirish.',
    schoolName: '6-maktab',
    lessonInfo: '15 sentabr 2026 5 dars',
    deadline: '2026-09-15',
    deadlineRelative: '15 sentabr 5-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Pirnazarov B.E.',
    assignedDate: '2026-09-14'
  },
  {
    id: 'hw12',
    subject: 'Algebra',
    title: '29-masala',
    description: 'Trigonometrik tengsizliklarni grafik usulda yechish.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 1 dars',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 1-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'YEROVA R.S.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw13',
    subject: 'Ona tili',
    title: '1.35-topshiriq',
    description: 'Imlo va punktuatsiya qoidalarini mashq qilish.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 2 dars',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 2-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw14',
    subject: 'Texnologiya',
    title: 'Xalq hunarmandchiligi bo‘yicha ko‘rgazma va tanlovlarni tashkil qilish',
    description: 'Hunarmandchilik loyihasi albomini to‘ldirish.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 3 dars',
    updatedAt: 'Bugun da 09:27',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 3-dars',
    priority: 'Past',
    completed: true,
    teacher: 'Ismoilov A.Z.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw15',
    subject: 'Fizika',
    title: '3-4 masala',
    description: 'Nyuton ikkinchi qonuni va dinamika masalalari.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 4 dars',
    updatedAt: 'Bugun da 13:59',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 4-dars',
    priority: 'Yuqori',
    completed: true,
    teacher: 'Asrayeva D.A.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw16',
    subject: 'Davlat va huquq asos',
    title: '2-mavzu, 7-11- betlar.',
    description: 'Konstitutsiya va fuqarolik huquqlari asoslari.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 5 dars',
    updatedAt: 'Kecha da 21:17',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 5-dars',
    priority: 'O‘rta',
    completed: true,
    teacher: 'Yuldashev A.A.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw17',
    subject: 'Ingliz tili',
    title: 'speaking practice',
    description: 'Prepare a 2-minute speech about technology in education.',
    schoolName: '6-maktab',
    lessonInfo: '16 sentabr 2026 6 dars',
    deadline: '2026-09-16',
    deadlineRelative: '16 sentabr 6-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'Tursunova N.T.',
    assignedDate: '2026-09-15'
  },
  {
    id: 'hw18',
    subject: 'Umumjahon tarixi',
    title: '14-20-betlarni o‘qish, savollarga javob yozish',
    description: 'Uyg‘onish davri va madaniy inqilob tarixi.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 1 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 1-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Muminova L.O.',
    assignedDate: '2026-09-16'
  },
  {
    id: 'hw19',
    subject: 'O‘zbekiston tarixi',
    title: '12-19-betlarni o‘qish, savollarga javob yozish',
    description: 'Manbalar va tarixiy xaritalar bo‘yicha tahlil.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 2 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 2-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Muminova L.O.',
    assignedDate: '2026-09-16'
  },
  {
    id: 'hw20',
    subject: 'Jismoniy madaniyat',
    title: 'Uzunlikka sakrash texnikasini takrorlash.',
    description: 'Nazariy qoidalarni takrorlash va amaliyotga tayyorlanish.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 3 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 3-dars',
    priority: 'Past',
    completed: false,
    teacher: 'YUNUSOVA X.T.',
    assignedDate: '2026-09-16'
  },

  // Page 3 (Items 21 - 30)
  {
    id: 'hw21',
    subject: 'Kimyo',
    title: 'Misollar yechish',
    description: 'Molyar massa va reaksiya unumi masalalarini yechish.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 4 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 4-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'Dushabayeva M.M.',
    assignedDate: '2026-09-16'
  },
  {
    id: 'hw22',
    subject: 'Ingliz tili',
    title: 'revision',
    description: 'Complete grammar exercises Unit 4 on workbook.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 5 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 5-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Muxamadqulova C.',
    assignedDate: '2026-09-16'
  },
  {
    id: 'hw23',
    subject: 'Chizmachilik',
    title: '11-15 bet. 2.3 chizma va 2.5 chizmalarni chizish kelish',
    description: 'A3 formatdagi qog‘ozda proyeksiya chizmasini bajarish.',
    schoolName: '6-maktab',
    lessonInfo: '17 sentabr 2026 6 dars',
    deadline: '2026-09-17',
    deadlineRelative: '17 sentabr 6-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Raimqulova G.U.',
    assignedDate: '2026-09-16'
  },
  {
    id: 'hw24',
    subject: 'Geometriya',
    title: '6-masala',
    description: 'Fazoda to‘g‘ri chiziqlar va tekisliklar o‘zaro joylashuvi.',
    schoolName: '6-maktab',
    lessonInfo: '18 sentabr 2026 1 dars',
    updatedAt: 'Bugun da 08:26',
    deadline: '2026-09-18',
    deadlineRelative: '18 sentabr 1-dars',
    priority: 'Yuqori',
    completed: true,
    teacher: 'YEROVA R.S.',
    assignedDate: '2026-09-17'
  },
  {
    id: 'hw25',
    subject: 'Ona tili',
    title: '1.42-topshiriq',
    description: 'Matn ustida ishlash va tinish belgilari tahlili.',
    schoolName: '6-maktab',
    lessonInfo: '18 sentabr 2026 2 dars',
    deadline: '2026-09-18',
    deadlineRelative: '18 sentabr 2-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-17'
  },
  {
    id: 'hw26',
    subject: 'Rus tili (n)',
    title: '25-задание.',
    description: 'Чтение текста и ответы на вопросы №1-5.',
    schoolName: '6-maktab',
    lessonInfo: '18 sentabr 2026 3 dars',
    updatedAt: 'Bugun da 12:16',
    deadline: '2026-09-18',
    deadlineRelative: '18 sentabr 3-dars',
    priority: 'Past',
    completed: true,
    teacher: 'Sultanova M.R.',
    assignedDate: '2026-09-17'
  },
  {
    id: 'hw27',
    subject: 'Adabiyot',
    title: '11-16-betlarni o‘qish',
    description: 'Alisher Navoiy g‘azallari va baytlar tahlili.',
    schoolName: '6-maktab',
    lessonInfo: '18 sentabr 2026 4 dars',
    deadline: '2026-09-18',
    deadlineRelative: '18 sentabr 4-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-17'
  },
  {
    id: 'hw28',
    subject: 'Jismoniy madaniyat',
    title: 'Balandlikka sakrash mashqlarini bajarish.',
    description: 'Saf mashqlari va jismoniy tayyorgarlik elementlari.',
    schoolName: '6-maktab',
    lessonInfo: '18 sentabr 2026 5 dars',
    deadline: '2026-09-18',
    deadlineRelative: '18 sentabr 5-dars',
    priority: 'Past',
    completed: false,
    teacher: 'Mamatqulov N.N.',
    assignedDate: '2026-09-17'
  },
  {
    id: 'hw29',
    subject: 'Geometriya',
    title: '7-masala',
    description: 'Piramida va prizma hajmini hisoblash masalalari.',
    schoolName: '6-maktab',
    lessonInfo: '19 sentabr 2026 1 dars',
    deadline: '2026-09-19',
    deadlineRelative: '19 sentabr 1-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'YEROVA R.S.',
    assignedDate: '2026-09-18'
  },
  {
    id: 'hw30',
    subject: 'Adabiyot',
    title: '18-30-betlarni o‘qish',
    description: 'Zahiriddin Muhammad Bobur g‘azaliyoti tahlili.',
    schoolName: '6-maktab',
    lessonInfo: '19 sentabr 2026 2 dars',
    deadline: '2026-09-19',
    deadlineRelative: '19 sentabr 2-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Israilova Z.U.',
    assignedDate: '2026-09-18'
  },

  // Page 4 (Items 31 - 32)
  {
    id: 'hw31',
    subject: 'Ingliz tili',
    title: 'listening practice',
    description: 'Listen to IELTS audio track 4 and answer questions 1-10.',
    schoolName: '21-IDUM',
    lessonInfo: '19 sentabr 2026 4 dars',
    deadline: '2026-09-19',
    deadlineRelative: '19 sentabr 4-dars',
    priority: 'Yuqori',
    completed: false,
    teacher: 'Tursunova N.T.',
    assignedDate: '2026-09-18'
  },
  {
    id: 'hw32',
    subject: 'Iqtisodiyot',
    title: '8-15-betlarni o‘qish, savollarga javob yozish',
    description: 'Bozor iqtisodiyoti va talab hamda taklif qonunlari.',
    schoolName: '21-IDUM',
    lessonInfo: '19 sentabr 2026 6 dars',
    deadline: '2026-09-19',
    deadlineRelative: '19 sentabr 6-dars',
    priority: 'O‘rta',
    completed: false,
    teacher: 'Raximova M.M.',
    assignedDate: '2026-09-18'
  }
];

export const mockExams: ExamItem[] = [
  {
    id: 'ex1',
    subject: 'Matematika',
    title: '1-Choraklik algebra va geometriya imtihoni',
    date: '18 Sentyabr, 2026',
    time: '09:00 — 10:30',
    classroom: '304-xona',
    teacher: 'Shoxrux Qodirov',
    prepProgress: 85,
    topics: ['Trigonometrik ayirmalar', 'Hosilalar', 'Vektorlar skalyar ko‘paytmasi'],
    weight: '30% yakuniy bahoga'
  },
  {
    id: 'ex2',
    subject: 'Informatika',
    title: 'Dasturlash va Algoritmlar Amaliy Imtihoni',
    date: '21 Sentyabr, 2026',
    time: '10:00 — 11:30',
    classroom: '210-IT laboratoriya',
    teacher: 'Nilufar Karimova',
    prepProgress: 92,
    topics: ['Python murakkab sikllar', 'Rekursiv funksiyalar', 'Algoritmik vaqt murakkabligi'],
    weight: '35% yakuniy bahoga'
  },
  {
    id: 'ex3',
    subject: 'Ingliz tili',
    title: 'Academic English & Listening Comprehensive',
    date: '24 Sentyabr, 2026',
    time: '09:00 — 10:15',
    classroom: '105-xona',
    teacher: 'Dilnoza Axmedova',
    prepProgress: 78,
    topics: ['IELTS Reading Passages', 'Formal Speech Presentation', 'Advanced Collocations'],
    weight: '25% yakuniy bahoga'
  },
  {
    id: 'ex4',
    subject: 'Fizika',
    title: 'Mexanika va Dinamika Nazorat Ishi',
    date: '28 Sentyabr, 2026',
    time: '11:00 — 12:15',
    classroom: '402-xona',
    teacher: 'Jasur Usmonov',
    prepProgress: 65,
    topics: ['Impuls saqlanishi', 'Kinetik va potensial energiya', 'Ish va quvvat'],
    weight: '20% yakuniy bahoga'
  }
];

export const mockRankingStudents: RankingStudent[] = [
  {
    rank: 1,
    previousRank: 1,
    name: 'Aziza Raximova',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    overallScore: 10,
    attendancePercent: 100,
    completedHomeworkPercent: 100,
    badgesCount: 14,
    isCurrentStudent: false
  },
  {
    rank: 2,
    previousRank: 2,
    name: 'Bekzod Alimov',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    overallScore: 9,
    attendancePercent: 98,
    completedHomeworkPercent: 96,
    badgesCount: 12,
    isCurrentStudent: false
  },
  {
    rank: 3,
    previousRank: 4,
    name: 'Madina Karimova',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    overallScore: 9,
    attendancePercent: 97,
    completedHomeworkPercent: 94,
    badgesCount: 11,
    isCurrentStudent: false
  },
  {
    rank: 4,
    previousRank: 6,
    name: 'Umarov Alisher (Siz)',
    avatar: 'https://au1.emaktab.uz/get.aspx/46/eeb9598c851944069621dc4ff73f336e.l.jpg?d=20220127102900',
    overallScore: 9,
    attendancePercent: 96,
    completedHomeworkPercent: 87,
    badgesCount: 10,
    isCurrentStudent: true
  },
  {
    rank: 5,
    previousRank: 3,
    name: 'Sardor Yoqubov',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    overallScore: 9,
    attendancePercent: 95,
    completedHomeworkPercent: 89,
    badgesCount: 8,
    isCurrentStudent: false
  },
  {
    rank: 6,
    previousRank: 5,
    name: 'Jasur Ergashboev',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    overallScore: 9,
    attendancePercent: 93,
    completedHomeworkPercent: 85,
    badgesCount: 7,
    isCurrentStudent: false
  },
  {
    rank: 7,
    previousRank: 8,
    name: 'Nigora Tursunova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    overallScore: 8,
    attendancePercent: 94,
    completedHomeworkPercent: 88,
    badgesCount: 6,
    isCurrentStudent: false
  },
  {
    rank: 8,
    previousRank: 7,
    name: 'Bobur Sharipov',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    overallScore: 8,
    attendancePercent: 91,
    completedHomeworkPercent: 82,
    badgesCount: 5,
    isCurrentStudent: false
  }
];

export const mockAchievements: AchievementItem[] = [
  {
    id: 'ach1',
    title: 'A’lochi O‘quvchi',
    description: 'Barcha fanlardan ketma-ket 5 ta a’lo baho olish',
    badgeName: 'A’lochi Gold',
    icon: 'Award',
    isUnlocked: true,
    unlockedDate: '10 Sentyabr, 2026',
    progress: 5,
    maxProgress: 5,
    category: 'A\'lochi'
  },
  {
    id: 'ach2',
    title: '100% Davomat',
    description: 'Bir oy davomida birorta darsni qoldirmaslik',
    badgeName: 'Intizom Qiroli',
    icon: 'CalendarCheck',
    isUnlocked: true,
    unlockedDate: '01 Sentyabr, 2026',
    progress: 30,
    maxProgress: 30,
    category: 'Davomat'
  },
  {
    id: 'ach3',
    title: 'Uy Vazifasi Ustasi',
    description: '20 ta uy vazifasini o‘z vaqtida va a’lo bajarish',
    badgeName: 'Homework Master',
    icon: 'BookCheck',
    isUnlocked: false,
    progress: 17,
    maxProgress: 20,
    category: 'Vazifalar'
  },
  {
    id: 'ach4',
    title: 'Matematika Chempioni',
    description: 'Matematika fanidan o‘rtacha ballni 9 va undan yuqori yetkazish',
    badgeName: 'Math Genius',
    icon: 'Calculator',
    isUnlocked: true,
    unlockedDate: '12 Sentyabr, 2026',
    progress: 9,
    maxProgress: 9,
    category: 'Fanlar'
  },
  {
    id: 'ach5',
    title: 'Dasturlash Yulduzi',
    description: 'Informatika amaliy loyihasida 10 ball olish',
    badgeName: 'Code Master',
    icon: 'Code2',
    isUnlocked: true,
    unlockedDate: '14 Sentyabr, 2026',
    progress: 10,
    maxProgress: 10,
    category: 'Fanlar'
  },
  {
    id: 'ach6',
    title: 'Ingliz Tili Bilimdoni',
    description: 'Ingliz tili insho va grammatika bo‘yicha top 3 talikka kirish',
    badgeName: 'Polyglot',
    icon: 'Languages',
    isUnlocked: true,
    unlockedDate: '05 Sentyabr, 2026',
    progress: 9,
    maxProgress: 9,
    category: 'Fanlar'
  },
  {
    id: 'ach7',
    title: 'Maktab Olimpiadasi',
    description: 'Toshkent shahar maktab olimpiadasida o‘rin olish',
    badgeName: 'Olimpiada Star',
    icon: 'Trophy',
    isUnlocked: false,
    progress: 8,
    maxProgress: 10,
    category: 'Olimpiada'
  },
  {
    id: 'ach8',
    title: 'Fanlararo Izlanuvchi',
    description: 'Kamida 5 xil fanlararo STEM loyihalarda qatnashish',
    badgeName: 'Innovator',
    icon: 'Sparkles',
    isUnlocked: true,
    unlockedDate: '02 Sentyabr, 2026',
    progress: 5,
    maxProgress: 5,
    category: 'Fanlar'
  }
];

export const mockGoals: GoalItem[] = [
  {
    id: 'g1',
    title: 'Matematikadan 10 ball olish',
    subject: 'Matematika',
    currentPercent: 9,
    targetPercent: 10,
    deadline: '1-Chorak yakuni',
    category: 'Akademik'
  },
  {
    id: 'g2',
    title: 'Informatikadan 10 ball olish',
    subject: 'Informatika',
    currentPercent: 9,
    targetPercent: 10,
    deadline: '20-Sentyabr',
    category: 'Amaliy loyiha'
  },
  {
    id: 'g3',
    title: '100% Davomat ko‘rsatgichi',
    subject: 'Umumiy',
    currentPercent: 96,
    targetPercent: 100,
    deadline: 'Chorak oxirigacha',
    category: 'Intizom'
  },
  {
    id: 'g4',
    title: 'Fizikani 9 ballga ko‘tarish',
    subject: 'Fizika',
    currentPercent: 8,
    targetPercent: 9,
    deadline: 'Imtihon kunigacha',
    category: 'Rivojlanish'
  }
];

export const mockNotifications: NotificationItem[] = [
  {
    id: 'n1',
    title: 'Matematika fanidan yangi baho qo‘yildi: 9 ball (A’lo)',
    time: '10 daqiqa oldin',
    type: 'grade',
    read: false,
    linkPage: 'grades'
  },
  {
    id: 'n2',
    title: 'Ertaga Informatikadan nazorat ishi bor (210-xona)',
    time: '1 soat oldin',
    type: 'exam',
    read: false,
    linkPage: 'exams'
  },
  {
    id: 'n3',
    title: 'Fizika uy vazifasining muddati ertaga 18:00 da tugaydi.',
    time: '3 soat oldin',
    type: 'homework',
    read: false,
    linkPage: 'homework'
  },
  {
    id: 'n4',
    title: 'Tabriklaymiz! Reytingda 2 pog‘onaga ko‘tarilib, 4-o‘ringa chiqdingiz.',
    time: 'Kechasi 20:30',
    type: 'ranking',
    read: true,
    linkPage: 'ranking'
  }
];

export const mockAnnouncements: AnnouncementItem[] = [
  {
    id: 'ann1',
    title: 'Maktab Respublika Fan Olimpiadasi Saralash Bosqichi',
    content: 'Aziz o‘quvchilar! Matematika, Informatika va Fizika fanlari bo‘yicha maktab ichki olimpiadasi 25-sentyabr kuni soat 10:00 da bo‘lib o‘tadi. G‘oliblar shahar bosqichiga yo‘llanma oladi va maxsus sertifikatlar bilan mukofotlanadi.',
    date: '14 Sentyabr, 2026',
    category: 'Olimpiada',
    author: 'Maktab Ma’muriyati',
    isPinned: true
  },
  {
    id: 'ann2',
    title: '1-Chorak Ota-onalar Majlisi va Yakuniy Sarhisob',
    content: 'Hurmatli ota-onalar va o‘quvchilar, 1-chorak akademik natijalari hamda davomat bo‘yicha onlayn sarhisob yig‘ilishi 30-sentyabr kuni EduFlow platformasi va majlislar zalida bo‘lib o‘tadi.',
    date: '12 Sentyabr, 2026',
    category: 'Muhim',
    author: 'Sinf Rahbari: Feruza Umarova',
    isPinned: false
  },
  {
    id: 'ann3',
    title: 'Zamonaviy Texnologiyalar va STEM Robototexnika Ko‘rgazmasi',
    content: 'Maktabimiz IT-laboratoriyasida o‘quvchilar tomonidan yaratilgan sun’iy intellekt va robototexnika loyihalari ko‘rgazmasi tashkil etiladi. Barcha xohlovchilar taklif etiladi.',
    date: '10 Sentyabr, 2026',
    category: 'Tadbirlar',
    author: 'IT Kafedrasi',
    isPinned: false
  }
];

export const mockCalendarEvents: AcademicCalendarEvent[] = [
  { id: 'c1', title: 'Matematika Nazorat Ishi', date: '2026-09-18', time: '09:00', type: 'exam', subject: 'Matematika', classroom: '304' },
  { id: 'c2', title: 'Informatika Amaliy Test', date: '2026-09-21', time: '10:00', type: 'exam', subject: 'Informatika', classroom: '210' },
  { id: 'c3', title: 'Ingliz tili Essay Muddati', date: '2026-09-17', time: '18:00', type: 'homework', subject: 'Ingliz tili' },
  { id: 'c4', title: 'STEM Texnologiyalar Ko‘rgazmasi', date: '2026-09-20', time: '11:00', type: 'event' },
  { id: 'c5', title: 'Respublika Olimpiada Saralash', date: '2026-09-25', time: '10:00', type: 'event' },
  { id: 'c6', title: 'O‘qituvchilar Kuni (Bayram)', date: '2026-10-01', type: 'holiday' }
];
