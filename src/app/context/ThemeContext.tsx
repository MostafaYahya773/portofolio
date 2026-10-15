'use client';
import { createContext, useContext, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined);
const eventName = 'portfolio-theme-change';

function applyPreference() {
  let saved: string | null = null;
  try { saved = localStorage.getItem('theme'); } catch { /* Storage can be denied. */ }
  const dark = saved === 'dark' || (saved !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}
function subscribe(onChange: () => void) {
  const syncPreference = () => { applyPreference(); onChange(); };
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  syncPreference();
  window.addEventListener('storage', syncPreference);
  window.addEventListener(eventName, onChange);
  media.addEventListener('change', syncPreference);
  return () => {
    window.removeEventListener('storage', syncPreference);
    window.removeEventListener(eventName, onChange);
    media.removeEventListener('change', syncPreference);
  };
}
function getSnapshot(): Theme { return document.documentElement.classList.contains('dark') ? 'dark' : 'light'; }
function getServerSnapshot(): Theme { return 'light'; }

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggleTheme = () => {
    const next = getSnapshot() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try { localStorage.setItem('theme', next); } catch { /* Current tab still changes. */ }
    window.dispatchEvent(new Event(eventName));
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
