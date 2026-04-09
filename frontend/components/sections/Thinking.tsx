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
          <p className="font-mono-base text-[0.72rem] px-4 py-3" style={{ color: 'var(--text-dim)' }}>
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
                    className="w-full flex items-start gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className="font-mono-base text-[0.65rem] tracking-[0.1em] shrink-0 mt-[2px]"
                      style={{ color: 'var(--accent)' }}
                    >
                      {p.tag}
                    </span>
                    <span className="flex-1 text-[0.88rem] leading-relaxed" style={{ color: 'var(--text)' }}>
                      {p.text}
                    </span>
                    <span
                      className="font-mono-base text-[0.7rem] shrink-0 mt-[2px] transition-transform duration-200"
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
                        <div className="px-5 pb-5 pt-1 border-t border-[var(--line)]">
                          <p className="text-[0.84rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
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
