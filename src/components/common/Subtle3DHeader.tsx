import React from 'react';

export const Subtle3DHeader: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-3xl">
      {/* Soft Ambient Light Glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-4 w-72 h-72 bg-cyan-400/15 dark:bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 left-1/3 w-56 h-56 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-2xl" />

      {/* Decorative 3D Floating Book Element */}
      <div className="absolute top-4 right-12 floating-3d-book opacity-80 dark:opacity-90 hidden md:block">
        <div className="relative w-16 h-20 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/30 transform rotate-12">
          <div className="w-full h-full bg-slate-900/60 backdrop-blur-md rounded-xl p-2 flex flex-col justify-between border border-white/20">
            <div className="w-6 h-1.5 bg-cyan-400/80 rounded-full" />
            <div className="space-y-1">
              <div className="w-full h-1 bg-white/40 rounded" />
              <div className="w-3/4 h-1 bg-white/30 rounded" />
            </div>
            <div className="w-4 h-4 rounded-full bg-indigo-400/50 self-end flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative 3D Graduation Cap Element */}
      <div className="absolute top-16 right-44 floating-3d-cap opacity-75 dark:opacity-85 hidden lg:block">
        <div className="relative w-12 h-12 flex items-center justify-center transform -rotate-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-md shadow-purple-500/20 flex items-center justify-center border border-white/20">
            <svg className="w-6 h-6 text-cyan-300 drop-shadow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Geometric Orbs / Polyhedrons */}
      <div className="absolute bottom-6 left-10 floating-3d-sphere opacity-70 hidden sm:block">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 transform rotate-45 border border-white/30 shadow-sm shadow-cyan-500/40" />
      </div>

      <div className="absolute top-8 left-1/2 floating-3d-sphere opacity-60 hidden xl:block">
        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 shadow-sm shadow-indigo-400/40" />
      </div>

      {/* Futuristic Subtle Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
