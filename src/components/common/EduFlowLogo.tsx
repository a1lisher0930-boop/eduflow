import React from 'react';

interface EduFlowLogoProps {
  collapsed?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EduFlowLogo: React.FC<EduFlowLogoProps> = ({
  collapsed = false,
  size = 'md',
  className = ''
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* EduFlow Symbol SVG (No Dark Background Box) */}
      <div className={`${iconSizes[size]} flex-shrink-0 relative flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            {/* Sun & Ray Gradients */}
            <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            <linearGradient id="borderGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Outer Rounded Shield Frame (Transparent Fill, Gradient Border) */}
          <rect
            x="1.5"
            y="1.5"
            width="45"
            height="45"
            rx="14"
            stroke="url(#borderGlow)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Sunburst Rays Above Book */}
          <path d="M24 6V9" stroke="url(#sunGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 8L18.5 11" stroke="url(#sunGradient)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 8L29.5 11" stroke="url(#sunGradient)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Rising Sun Arc */}
          <path
            d="M16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18H16Z"
            fill="url(#sunGradient)"
          />

          {/* Open Book Outline */}
          <path
            d="M7 20C14 20 20 22 24 24C28 22 34 20 41 20V38C34 38 28 40 24 42C20 40 14 38 7 38V20Z"
            stroke="url(#bookGradient)"
            strokeWidth="3.2"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
          />

          {/* Center Book Spine Line */}
          <path d="M24 24V42" stroke="url(#bookGradient)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Slim, Ultra-Clean 'e' Letter in Center */}
          <text
            x="24"
            y="35"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="700"
            fontFamily="Plus Jakarta Sans, Inter, system-ui, sans-serif"
            fontStyle="italic"
          >
            e
          </text>
        </svg>
      </div>

      {/* Brand Text (When not collapsed) */}
      {!collapsed && (
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            EduFlow
          </span>
          <span className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
            NextGen Edu
          </span>
        </div>
      )}

    </div>
  );
};
