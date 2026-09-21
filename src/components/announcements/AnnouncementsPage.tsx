'use client';

import React, { useState } from 'react';
import { Megaphone, Calendar, Tag, Pin, ChevronRight, User } from 'lucide-react';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { AnnouncementItem } from '../../types';

interface AnnouncementsPageProps {
  announcements: AnnouncementItem[];
}

export const AnnouncementsPage: React.FC<AnnouncementsPageProps> = ({ announcements }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Barchasi');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<AnnouncementItem | null>(null);

  const categories = ['Barchasi', 'Olimpiada', 'Imtihonlar', 'Tadbirlar', 'Muhim'];

  const filteredList = announcements.filter(a => 
    selectedCategory === 'Barchasi' ? true : a.category === selectedCategory
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white dark:bg-[#131b2e] p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-cyan-400 text-xs font-bold mb-2 border border-brand-200/60 dark:border-brand-800/60">
            <Megaphone className="w-3.5 h-3.5" />
            <span>Maktab E'lonlar Lavhasi</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Maktab E’lonlari va Yangiliklar
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Rasmiy bildirishnomalar, olimpiadalar va o‘quv tadbirlari
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
              selectedCategory === cat
                ? 'bg-brand-600 text-white border-brand-500 shadow-md shadow-brand-500/25'
                : 'bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredList.map((ann) => (
          <Card
            key={ann.id}
            onClick={() => setSelectedAnnouncement(ann)}
            className={`flex flex-col justify-between space-y-4 cursor-pointer hover:border-brand-500/50 ${
              ann.isPinned ? 'border-brand-500/40 dark:border-cyan-400/40 bg-gradient-to-br from-brand-600/5 via-transparent to-cyan-500/5' : ''
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant={ann.category === 'Olimpiada' ? 'purple' : ann.category === 'Muhim' ? 'danger' : 'info'} size="sm">
                  {ann.category}
                </Badge>

                {ann.isPinned && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-brand-600 dark:text-cyan-400">
                    <Pin className="w-3.5 h-3.5 fill-current" />
                    Birlashtirilgan
                  </span>
                )}
              </div>

              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                {ann.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {ann.content}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-500" />
                {ann.date}
              </span>
              <span className="flex items-center gap-1 text-brand-600 dark:text-cyan-400 font-bold">
                Batafsil
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Announcement Detail Modal */}
      <Modal
        isOpen={!!selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
        title={selectedAnnouncement?.title || ''}
        maxWidth="lg"
      >
        {selectedAnnouncement && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                <User className="w-4 h-4 text-brand-500" />
                {selectedAnnouncement.author}
              </span>
              <span>{selectedAnnouncement.date}</span>
            </div>

            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
              {selectedAnnouncement.content}
            </p>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="px-5 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-md"
              >
                Yopish
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};
