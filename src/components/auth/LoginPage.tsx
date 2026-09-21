'use client';

import React, { useState } from 'react';
import { EduFlowLogo } from '../common/EduFlowLogo';
import { ThreeDBackground } from './ThreeDBackground';
import { Eye, EyeOff, HelpCircle, CheckCircle2, AlertCircle, ChevronDown, Lock, User, Sparkles } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (credentials: { username: string }) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [login, setLogin] = useState('alisher.umarov030820');
  const [password, setPassword] = useState('alisher2023@');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      // Validate credentials against user specified details
      if (login.trim() === 'alisher.umarov030820' && password === 'alisher2023@') {
        setIsLoading(false);
        onLoginSuccess({ username: login });
      } else {
        setIsLoading(false);
        setErrorMessage('Login yoki parol xato! To‘g‘ri login va parolni kiriting.');
      }
    }, 600);
  };

  const handlePresetFill = () => {
    setLogin('alisher.umarov030820');
    setPassword('alisher2023@');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 relative font-sans select-none overflow-x-hidden">
      
      {/* Dynamic 3D Model Interactive Canvas Background */}
      <ThreeDBackground />

      {/* Header Bar matching eMaktab layout structure with EduFlow branding */}
      <header className="relative z-20 bg-white/95 dark:bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-6">
            <EduFlowLogo size="md" />
            
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <span className="hover:text-brand-600 dark:hover:text-cyan-400 cursor-pointer transition-colors">Tashkilot</span>
              <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
              <span className="hover:text-brand-600 dark:hover:text-cyan-400 cursor-pointer transition-colors">Imkoniyatlar</span>
              <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
              <span className="hover:text-brand-600 dark:hover:text-cyan-400 cursor-pointer transition-colors">Hamkorlarga</span>
              <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
              <span className="hover:text-brand-600 dark:hover:text-cyan-400 cursor-pointer transition-colors">Yordam</span>
            </nav>
          </div>

          {/* Right Controls: Language Selector & Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-cyan-400 px-2 py-1 rounded-lg">
              <span>O'zb</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <button 
              onClick={handlePresetFill}
              className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-all shadow-xs"
            >
              Kirish
            </button>

            <button className="hidden sm:inline-flex px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border border-[#7cb342] text-[#7cb342] hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all shadow-xs">
              Tashkilotni ulash
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 my-8">
        
        {/* Floating 3D Badge Indicator */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interaktiv 3D EduFlow Platformasi</span>
        </div>

        {/* Central Login Card Container */}
        <div className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-700/60 bg-white dark:bg-[#0f172a] backdrop-blur-xl transition-all duration-300">
          
          {/* Deep Blue Header Banner matching screenshot styling */}
          <div className="bg-gradient-to-r from-[#17326b] via-[#1d3d82] to-[#24499b] px-6 sm:px-8 py-5 flex items-center justify-between text-white">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              Kirish EduFlow
            </h1>
            <a 
              href="#register" 
              onClick={(e) => e.preventDefault()}
              className="text-xs sm:text-sm text-cyan-200 hover:text-white underline font-medium transition-colors"
            >
              Tizimda ro'yxatdan o'tmaganmisiz?
            </a>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Autofill Notification pill */}
            <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 flex items-center justify-between text-xs text-indigo-900 dark:text-indigo-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Login: <strong>alisher.umarov030820</strong> | Parol: <strong>alisher2023@</strong></span>
              </div>
              <button 
                onClick={handlePresetFill}
                type="button"
                className="text-[11px] font-bold text-brand-600 dark:text-cyan-400 underline hover:opacity-80"
              >
                Avto-to'ldirish
              </button>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs sm:text-sm flex items-center gap-2 font-semibold animate-in fade-in">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Login Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Login
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                    placeholder="alisher.umarov030820"
                    className="w-full pl-4 pr-10 py-3 rounded-lg bg-[#e8f0fe] dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
                  />
                  <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Parol
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••••••"
                    className="w-full pl-4 pr-12 py-3 rounded-lg bg-[#e8f0fe] dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-200 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Signature Green Login Button matching eMaktab screenshot */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#7cb342] hover:bg-[#6b9d36] active:bg-[#58892c] text-white font-semibold px-8 py-3 rounded-lg text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Tizimga kiring</span>
                  )}
                </button>
              </div>

            </form>

          </div>

          {/* Footer of Card */}
          <div className="bg-slate-50 dark:bg-slate-900/80 px-6 sm:px-8 py-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <HelpCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <span>
              Login yoki parolni unutdingizmi?{' '}
              <a 
                href="#recover" 
                onClick={(e) => e.preventDefault()}
                className="text-slate-800 dark:text-slate-200 font-semibold underline hover:text-brand-500 transition-colors"
              >
                Loginni tiklash.
              </a>
            </span>
          </div>

        </div>
      </main>

      {/* Footer bar */}
      <footer className="relative z-20 py-4 text-center text-xs text-slate-400 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <p>© 2026 EduFlow Platformasi. Barcha huquqlar himoyalangan.</p>
      </footer>

    </div>
  );
};
