'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import LogoMark from '@/components/LogoMark';

const navLinks = [
  { label: 'about', href: '#hero' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#depth' },
  { label: 'thinking', href: '#thinking' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.style.overflow = '';
    };
  }, []);

  function toggleMenu() {
    const nextOpen = !menuOpen;
    setMenuOpen(nextOpen);
    document.body.style.overflow = nextOpen ? 'hidden' : '';
  }

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="section-max py-3 sm:py-4">
          <nav
            className="flex items-center gap-3 rounded-full border px-3 py-2.5 transition-all duration-300 sm:gap-4 sm:px-4 sm:py-3"
            style={{
              minHeight: 'var(--nav-h)',
              borderColor: scrolled ? 'var(--line-strong)' : 'var(--line)',
              background: scrolled ? 'var(--surface-panel-strong)' : 'var(--surface-ghost)',
              boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
              backdropFilter: 'blur(18px)',
            }}
          >
            <a href="#hero" className="mr-auto flex min-w-0 items-center gap-3">
              <LogoMark />
              <div className="hidden min-w-0 sm:flex flex-col">
                <span className="text-[0.92rem] font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                  Gayatri Ambatkar
                </span>
                <span className="whitespace-nowrap font-mono-base text-[0.76rem] uppercase tracking-[0.05em] lg:text-[0.82rem]" style={{ color: 'var(--text-dim)' }}>
                  Full-stack engineer
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono-base text-[0.84rem] uppercase tracking-[0.05em] transition-colors duration-200"
                  style={{ color: 'var(--text-soft)' }}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="button-secondary"
                >
                  {theme === 'dark' ? 'light mode' : 'dark mode'}
                </button>
              )}
              <a
                href="https://drive.google.com/file/d/1nGL78QnLnvSBzmRJ2utNC_tAgc_xdMVa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                view resume
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-12 w-12 items-center justify-center rounded-full border md:hidden"
              style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)' }}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className="relative h-4 w-4">
                <span
                  className="absolute left-0 top-[3px] h-px w-4 transition-transform duration-200"
                  style={{
                    background: 'var(--text)',
                    transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="absolute left-0 top-[10px] h-px w-4 transition-transform duration-200"
                  style={{
                    background: 'var(--text)',
                    transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none',
                  }}
                />
              </span>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-4 top-[calc(var(--nav-h)+0.75rem)] z-40 overflow-y-auto overscroll-contain rounded-[24px] border p-4 md:hidden"
            style={{
              borderColor: 'var(--line-strong)',
              background: 'var(--surface-panel-strong)',
              boxShadow: 'var(--shadow)',
            }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="flex min-h-[48px] items-center rounded-[14px] border px-4 py-3.5 font-mono-base text-[0.84rem] uppercase tracking-[0.05em]"
                  style={{ borderColor: 'var(--line)', background: 'var(--surface-chip)', color: 'var(--text)' }}
                >
                  {label}
                </a>
              ))}
              {mounted && (
                <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="button-secondary">
                  {theme === 'dark' ? 'light mode' : 'dark mode'}
                </button>
              )}
              <a
                href="https://drive.google.com/file/d/1nGL78QnLnvSBzmRJ2utNC_tAgc_xdMVa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                view resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
