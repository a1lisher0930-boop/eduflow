import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'purple' | 'slate';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glow?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  glow = false,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all duration-200';

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  const variantStyles = {
    primary: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30',
    success: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30',
    warning: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30',
    danger: 'bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30',
    info: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30',
    purple: 'bg-purple-50 text-purple-600 dark:bg-purple-500/15 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30',
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
  };

  const glowStyle = glow ? 'shadow-sm shadow-current' : '';

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${glowStyle} ${className}`}>
      {children}
    </span>
  );
};
