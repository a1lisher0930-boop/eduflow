import React from 'react';
import { getGradeColorInfo } from '../../utils/gradeColors';

interface GradeBadgeProps {
  score: number;
  variant?: 'solid' | 'soft' | 'outline' | 'pill';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showLabel?: boolean;
  className?: string;
}

export const GradeBadge: React.FC<GradeBadgeProps> = ({
  score,
  variant = 'solid',
  size = 'md',
  showLabel = false,
  className = '',
}) => {
  const colorInfo = getGradeColorInfo(score);

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs font-bold rounded-lg min-w-[28px]',
    md: 'px-2.5 py-1 text-xs sm:text-sm font-extrabold rounded-xl min-w-[34px]',
    lg: 'px-3.5 py-1.5 text-sm sm:text-base font-extrabold rounded-2xl min-w-[42px]',
    xl: 'px-4 py-2 text-lg sm:text-xl font-extrabold rounded-2xl min-w-[50px]',
  };

  const getStyleObj = () => {
    switch (variant) {
      case 'solid':
        return {
          backgroundColor: colorInfo.bg,
          color: colorInfo.text,
          boxShadow: `0 2px 8px ${colorInfo.bg}40`,
        };
      case 'soft':
        return {
          backgroundColor: colorInfo.bgSoft,
          color: colorInfo.text === '#ffffff' ? colorInfo.bg : '#1e293b',
          border: `1px solid ${colorInfo.border}40`,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colorInfo.bg,
          border: `2px solid ${colorInfo.bg}`,
        };
      case 'pill':
        return {
          backgroundColor: colorInfo.bg,
          color: colorInfo.text,
          borderRadius: '9999px',
        };
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center text-center transition-all duration-300 ${sizeStyles[size]} ${className}`}
      style={getStyleObj()}
    >
      <span>{score}</span>
      {showLabel && <span className="ml-1 text-[10px] opacity-90">({colorInfo.label})</span>}
    </span>
  );
};
