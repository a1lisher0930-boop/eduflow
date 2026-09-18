import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glass = true,
  onClick,
}) => {
  const baseCard = glass
    ? 'glass-card rounded-2xl p-5 md:p-6'
    : 'bg-white dark:bg-[#131b2e] border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm';

  const hover = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-lg transition-all duration-300'
    : '';

  const clickable = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseCard} ${hover} ${clickable} ${className}`}
    >
      {children}
    </div>
  );
};
