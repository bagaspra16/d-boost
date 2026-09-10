'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Lang, translations, Translations } from '@/i18n/translations';

// ─── Types ─────────────────────────────────────────────────────────────────

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  isPending: boolean;
}

// ─── Context ───────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// ─── Provider ──────────────────────────────────────────────────────────────

function detectDeviceLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const nav = navigator as Navigator & { userLanguage?: string };
  const browserLang = nav.language || nav.userLanguage || '';
  return browserLang.toLowerCase().startsWith('id') ? 'id' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en'); // SSR default
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    // On client: check localStorage first, then fall back to device detection
    const stored = localStorage.getItem('d-boost-lang') as Lang | null;
    if (stored && (stored === 'en' || stored === 'id')) {
      setLangState(stored);
    } else {
      setLangState(detectDeviceLang());
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState((current) => {
      if (current === next) return current;
      setIsPending(true);
      setTimeout(() => {
        setLangState(next);
        localStorage.setItem('d-boost-lang', next);
        document.documentElement.lang = next === 'id' ? 'id' : 'en';
        setTimeout(() => setIsPending(false), 120);
      }, 100);
      return current;
    });
  }, []);

  const t = translations[lang] as Translations;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isPending }}>
      <div className={`transition-all duration-300 ease-in-out ${isPending ? 'opacity-45 scale-[0.998]' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
