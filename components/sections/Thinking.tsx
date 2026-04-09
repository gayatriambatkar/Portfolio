'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { principles } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Thinking() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="thinking" className="section-max section-pad">
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // How I Think
      </div>

      <SectionReveal>
        <div
          className="panel-surface rounded-[var(--radius)] overflow-hidden"
          style={{ padding: '8px' }}
        >
          <p className="px-4 py-3 font-mono-base text-[0.84rem] tracking-[0.03em]" style={{ color: 'var(--text-dim)' }}>
            Click any principle to expand the practical example behind it.
          </p>

          <div className="flex flex-col gap-1">
            {principles.map((p, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={p.tag}
                  className="rounded-[10px] overflow-hidden border transition-all duration-200"
                  style={{
                    borderColor: isOpen ? 'var(--line-strong)' : 'var(--line)',
                    background: isOpen ? 'var(--bg-accent)' : 'transparent',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="relative flex min-h-[44px] w-full flex-col items-start gap-3 px-4 py-4 text-left sm:flex-row sm:gap-4 sm:px-5"
                  >
                    <span
                      className="shrink-0 font-mono-base text-[0.78rem] tracking-[0.04em] sm:mt-[2px] sm:text-[0.82rem]"
                      style={{ color: 'var(--accent)' }}
                    >
                      {p.tag}
                    </span>
                    <span className="flex-1 pr-8 text-[0.94rem] leading-relaxed sm:pr-0" style={{ color: 'var(--text)' }}>
                      {p.text}
                    </span>
                    <span
                      className="absolute right-4 top-4 shrink-0 font-mono-base text-[0.95rem] transition-transform duration-200 sm:static sm:mt-[2px] sm:text-[0.88rem]"
                      style={{
                        color: 'var(--text-dim)',
                        transform: isOpen ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="border-t border-[var(--line)] px-4 pb-5 pt-1 sm:px-5">
                          <p className="text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                            {p.expand}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
