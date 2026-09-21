/**
 * Grade Color Utility (1 - 10 Scale Heatmap)
 * Maps scores from 10 (Green) down to 1 (Red).
 * Lower scores below 10 become progressively redder.
 */

export interface GradeColorInfo {
  bg: string;          // Solid background color
  bgSoft: string;      // Soft semi-transparent background
  text: string;        // High contrast text color
  border: string;      // Border color
  label: string;       // Grade qualitative level (Uzbek)
}

export const GRADE_PRESETS: Record<number, GradeColorInfo> = {
  10: { bg: '#16a34a', bgSoft: 'rgba(22, 163, 74, 0.15)', text: '#ffffff', border: '#15803d', label: 'A’lo (10)' },
  9:  { bg: '#22c55e', bgSoft: 'rgba(34, 197, 94, 0.15)', text: '#ffffff', border: '#16a34a', label: 'A’lo (9)' },
  8:  { bg: '#4ade80', bgSoft: 'rgba(74, 222, 128, 0.20)', text: '#0f172a', border: '#22c55e', label: 'Yaxshi (8)' },
  7:  { bg: '#84cc16', bgSoft: 'rgba(132, 204, 22, 0.20)', text: '#0f172a', border: '#65a30d', label: 'Yaxshi (7)' },
  6:  { bg: '#a3e635', bgSoft: 'rgba(163, 230, 53, 0.20)', text: '#0f172a', border: '#84cc16', label: 'O‘rta (6)' },
  5:  { bg: '#facc15', bgSoft: 'rgba(250, 204, 21, 0.20)', text: '#0f172a', border: '#eab308', label: 'Qanoatli (5)' },
  4:  { bg: '#fb923c', bgSoft: 'rgba(251, 146, 60, 0.20)', text: '#ffffff', border: '#f97316', label: 'Sust (4)' },
  3:  { bg: '#f87171', bgSoft: 'rgba(248, 113, 113, 0.20)', text: '#ffffff', border: '#ef4444', label: 'Qanoatsiz (3)' },
  2:  { bg: '#ef4444', bgSoft: 'rgba(239, 68, 68, 0.20)', text: '#ffffff', border: '#dc2626', label: 'Past (2)' },
  1:  { bg: '#b91c1c', bgSoft: 'rgba(185, 28, 28, 0.25)', text: '#ffffff', border: '#991b1b', label: 'Juda past (1)' },
};

/**
 * Returns color information for any numeric score (integer or float 1..10)
 */
export function getGradeColorInfo(score: number): GradeColorInfo {
  const rounded = Math.round(score);
  if (GRADE_PRESETS[rounded]) {
    return GRADE_PRESETS[rounded];
  }

  const clamped = Math.max(1, Math.min(10, score));
  const ratio = (clamped - 1) / 9; // 0 to 1
  const hue = Math.round(ratio * 135); // 0 (Red) to 135 (Green)
  
  const bg = `hsl(${hue}, 80%, 46%)`;
  const bgSoft = `hsla(${hue}, 80%, 46%, 0.18)`;
  const text = (hue >= 40 && hue <= 95) ? '#0f172a' : '#ffffff';
  const border = `hsl(${hue}, 80%, 36%)`;
  const label = score >= 9 ? 'A’lo' : score >= 7 ? 'Yaxshi' : score >= 5 ? 'Qanoatli' : 'Past';

  return { bg, bgSoft, text, border, label };
}
