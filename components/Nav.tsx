'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import LogoMark from '@/components/LogoMark';

const navLinks = [
  { label: 'about', href: '#hero' },
  { label: 'projects', href: '#projects' },
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
    return () => window.removeEventListener('scroll', onScroll);
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
        <div className="section-max py-4">
          <nav
            className="flex items-center gap-4 rounded-full border px-4 py-3 transition-all duration-300"
            style={{
              minHeight: 'var(--nav-h)',
              borderColor: scrolled ? 'var(--line-strong)' : 'var(--line)',
              background: scrolled ? 'var(--surface-panel-strong)' : 'var(--surface-ghost)',
              boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
              backdropFilter: 'blur(18px)',
            }}
          >
            <a href="#hero" className="flex items-center gap-3 mr-auto">
              <LogoMark />
              <div className="hidden sm:flex flex-col">
                <span className="text-[0.92rem] font-semibold tracking-[-0.03em]" style={{ color: 'var(--text)' }}>
                  Gayatri Ambatkar
                </span>
                <span className="font-mono-base text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-dim)' }}>
                  Full-stack engineer
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="font-mono-base text-[0.72rem] uppercase tracking-[0.08em] transition-colors duration-200"
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
                open resume
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMenu}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border"
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
            className="fixed left-5 right-5 top-[108px] z-40 rounded-[24px] border p-4 md:hidden"
            style={{
              borderColor: 'var(--line-strong)',
              background: 'var(--surface-panel-strong)',
              boxShadow: 'var(--shadow)',
            }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-[14px] border px-4 py-3 font-mono-base text-[0.78rem] uppercase tracking-[0.08em]"
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
                open resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
