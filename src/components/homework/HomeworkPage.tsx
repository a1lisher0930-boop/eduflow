import React, { useState } from 'react';
import { 
  BookOpenCheck, 
  CheckCircle2, 
  Clock, 
  Filter, 
  FileText, 
  Upload, 
  Send,
  Calendar as CalendarIcon,
  Search,
  Sparkles,
  SendHorizontal
} from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { HomeworkItem } from '../../types';

interface HomeworkPageProps {
  homeworkList: HomeworkItem[];
  onToggleHomework: (id: string) => void;
}

export const HomeworkPage: React.FC<HomeworkPageProps> = ({ homeworkList, onToggleHomework }) => {
  // Main Tab Filter: 'all' | 'uncompleted' | 'completed'
  const [filterTab, setFilterTab] = useState<'all' | 'uncompleted' | 'completed'>('all');
  
  // Filter bar states
  const [selectedYear, setSelectedYear] = useState('2026/2027');
  const [selectedSubject, setSelectedSubject] = useState('Barchasi');
  const [startDate, setStartDate] = useState('2026-09-14');
  const [endDate, setEndDate] = useState('2026-09-20');

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  // Task Submission Modal state
  const [selectedHomeworkDetail, setSelectedHomeworkDetail] = useState<HomeworkItem | null>(null);
  const [submissionText, setSubmissionText] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Subject list for dropdown
  const subjectsList = ['Barchasi', ...Array.from(new Set(homeworkList.map(h => h.subject)))];

  // Filtering items
  const filteredItems = homeworkList.filter(hw => {
    // Status tab filter
    if (filterTab === 'uncompleted' && hw.completed) return false;
    if (filterTab === 'completed' && !hw.completed) return false;

    // Subject dropdown filter
    if (selectedSubject !== 'Barchasi' && hw.subject !== selectedSubject) return false;

    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentDisplayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handleSubmitSolution = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedHomeworkDetail) {
      onToggleHomework(selectedHomeworkDetail.id);
      setSubmittedSuccess(true);
      setTimeout(() => {
        setSubmittedSuccess(false);
        setSelectedHomeworkDetail(null);
        setSubmissionText('');
      }, 1200);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Header & Main Filter Tabs */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Uy vazifasi
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Barcha fanlar bo‘yicha topshiriqlar jurnali va ijro holati
            </p>
          </div>

          {/* Action Link: Write to teacher */}
          <button
            onClick={() => alert("O‘qituvchi bilan bog‘lanish oynasi ochilmoqda...")}
            className="px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-brand-600 dark:text-cyan-400 font-bold text-xs border border-indigo-200/60 dark:border-indigo-800/60 hover:bg-brand-600 hover:text-white transition-all flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Fan bo‘yicha o‘qituvchiga yozing</span>
            <SendHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Filter Tabs: Barchasi | Bajarilmaganlar | Bajarilganlar */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
          {[
            { id: 'all', label: 'Barchasi' },
            { id: 'uncompleted', label: 'Bajarilmaganlar' },
            { id: 'completed', label: 'Bajarilganlar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilterTab(tab.id as any);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterTab === tab.id
                  ? 'bg-amber-400 text-slate-900 shadow-md font-extrabold'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Detailed Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end text-xs">
          
          {/* Year selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 block">O‘quv yili</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-100 outline-none"
            >
              <option value="2026/2027">2026/2027</option>
              <option value="2025/2026">2025/2026</option>
            </select>
          </div>

          {/* Subject selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 block">Fan</label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-100 outline-none"
            >
              {subjectsList.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          {/* Date range picker */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500 block">Bajarish muddati</label>
            <div className="flex items-center gap-1.5">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-100 outline-none"
              />
              <span className="text-slate-400">—</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-100 outline-none"
              />
            </div>
          </div>

          {/* Show button */}
          <div>
            <button
              onClick={() => setCurrentPage(1)}
              className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors shadow-sm"
            >
              Ko‘rsatish
            </button>
          </div>

        </div>

      </div>

      {/* Main Homework Table Card */}
      <Card className="space-y-4">
        
        {/* Homework Total Count Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-bold text-slate-600 dark:text-slate-300">
            Uy vazifalarining umumiy soni: <span className="text-brand-600 dark:text-cyan-400 font-extrabold">{filteredItems.length}</span>
          </span>
          <span className="text-slate-400 font-medium">
            Sahifa {currentPage} / {totalPages}
          </span>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 font-bold">
                <th className="py-3 px-3">Vazifa topshirig‘i</th>
                <th className="py-3 px-3 w-24">Maktab</th>
                <th className="py-3 px-3 w-32">Fan</th>
                <th className="py-3 px-3 w-36">Dars</th>
                <th className="py-3 px-3 w-32">Yangilandi</th>
                <th className="py-3 px-3 w-28 text-center">Maqom</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {currentDisplayedItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400 italic">
                    Topshiriqlar topilmadi
                  </td>
                </tr>
              ) : (
                currentDisplayedItems.map((hw) => (
                  <tr
                    key={hw.id}
                    className="hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-colors group"
                  >
                    {/* Task Title (Clickable) */}
                    <td className="py-3 px-3 font-semibold text-brand-600 dark:text-cyan-400 hover:underline cursor-pointer">
                      <div onClick={() => setSelectedHomeworkDetail(hw)} className="space-y-0.5">
                        <span className="block leading-relaxed">{hw.title}</span>
                        {hw.description && (
                          <span className="text-[10px] text-slate-400 line-clamp-1 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                            {hw.description}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* School Name */}
                    <td className="py-3 px-3 text-slate-500 dark:text-slate-400 font-medium">
                      {hw.schoolName || '21-IDUM'}
                    </td>

                    {/* Subject */}
                    <td className="py-3 px-3 font-bold text-slate-800 dark:text-slate-200">
                      {hw.subject}
                    </td>

                    {/* Lesson Info & Date */}
                    <td className="py-3 px-3 text-slate-600 dark:text-slate-300 font-medium">
                      {hw.lessonInfo || hw.deadlineRelative}
                    </td>

                    {/* Last Updated Timestamp */}
                    <td className="py-3 px-3 text-slate-400 text-[11px]">
                      {hw.updatedAt || '—'}
                    </td>

                    {/* Interactive Maqom Status Badge (Bajarildi vs berilgan) */}
                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => onToggleHomework(hw.id)}
                        className={`w-full py-1.5 px-3 rounded-lg text-[11px] font-extrabold transition-all shadow-xs ${
                          hw.completed
                            ? 'bg-lime-500 hover:bg-lime-600 text-white shadow-lime-500/20'
                            : 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-500/20'
                        }`}
                        title="Maqomni o‘zgartirish uchun bosing"
                      >
                        {hw.completed ? 'Bajarildi' : 'berilgan'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section (Sahifalar: 1 2 3 4) */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-500">Sahifalar:</span>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-7 h-7 rounded-lg text-xs font-black transition-all ${
                    currentPage === pageNum
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>
          </div>

          <span className="text-[11px] text-slate-400">
            Jami {filteredItems.length} ta topshiriqdan {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredItems.length)} ko‘rsatilmoqda
          </span>
        </div>

      </Card>

      {/* Homework Submission Modal */}
      <Modal
        isOpen={!!selectedHomeworkDetail}
        onClose={() => setSelectedHomeworkDetail(null)}
        title={selectedHomeworkDetail ? `${selectedHomeworkDetail.subject} — Topshiriq Yuborish` : ''}
      >
        {selectedHomeworkDetail && (
          <form onSubmit={handleSubmitSolution} className="space-y-4">
            <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {selectedHomeworkDetail.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                {selectedHomeworkDetail.description}
              </p>
              <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-500 font-semibold">
                <span>Dars: {selectedHomeworkDetail.lessonInfo}</span>
                <span>O‘qituvchi: {selectedHomeworkDetail.teacher}</span>
              </div>
            </div>

            {submittedSuccess ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Topshiriq bajarildi va o‘qituvchiga yuborildi!
                </h4>
                <p className="text-xs text-slate-500">Maqom: Bajarildi</p>
              </div>
            ) : (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                    Javob matni yoki izohingiz:
                  </label>
                  <textarea
                    rows={4}
                    value={submissionText}
                    onChange={(e) => setSubmissionText(e.target.value)}
                    placeholder="Masala yechimlari yoki havola manbasini bu yerga yozing..."
                    className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-brand-500 outline-none"
                    required
                  />
                </div>

                <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-center hover:border-brand-500 transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                    Fayl biriktirish (PDF, Python, Docx)
                  </span>
                  <span className="text-[10px] text-slate-400">Maksimal hajm: 25 MB</span>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedHomeworkDetail(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-600 text-white shadow-md hover:bg-brand-700 flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Topshirish va Bajarildi qilish</span>
                  </button>
                </div>
              </>
            )}
          </form>
        )}
      </Modal>

    </div>
  );
};
