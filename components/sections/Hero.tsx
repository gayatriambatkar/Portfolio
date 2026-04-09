'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const focusTerms = [
  'building systems teams can run and trust',
  'owning SaaS products end to end',
  'reducing person-dependent workflows',
  'shipping operational software with strong recovery paths',
];

const impactCards = [
  {
    label: 'flagship product',
    value: 'Sezone',
    description: 'Built and continue to manage the SaaS platform across architecture, frontend, backend, deployment, and optimization.',
  },
  {
    label: 'reliability',
    value: '99%',
    description: 'Pipeline reliability after moving fragile execution into queue-based workers with better failure isolation.',
  },
  {
    label: 'ops improvement',
    value: '6h to 30m',
    description: 'Reduced heavy processing time through automation, visible execution states, and recovery-oriented tooling.',
  },
];

const stack = ['Node.js', 'React', 'TypeScript', 'Electron', 'Automation', 'MongoDB', 'MySQL', 'Deployment'];

export default function Hero() {
  const [focusIndex, setFocusIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setFocusIndex((index) => (index + 1) % focusTerms.length);
        setVisible(true);
      }, 180);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="section-max section-pad" style={{ paddingTop: 'clamp(40px, 8vw, 92px)' }}>
      <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="pill font-mono-base text-[0.82rem] uppercase tracking-[0.05em]">
              Open to software engineering roles
            </span>
            <span className="pill font-mono-base text-[0.82rem] uppercase tracking-[0.05em]">
              Nagpur, India
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="section-eyebrow">Software engineer with production ownership</span>
            <h1
              className="max-w-[11ch] text-[clamp(2.6rem,11vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ color: 'var(--text)' }}
            >
              Full-stack engineer building reliable products for real-world use.
            </h1>
            <p className="max-w-[60ch] text-[clamp(1.02rem,1.5vw,1.14rem)] leading-[1.9]" style={{ color: 'var(--text-soft)' }}>
              I build SaaS products, automation tools, admin systems, and AI-assisted workflows with strong attention to system clarity, deployment quality, and real-world maintenance.
            </p>
          </div>

          <div className="soft-surface rounded-[20px] px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-2 font-mono-base text-[0.84rem] uppercase tracking-[0.05em]">
              <span style={{ color: 'var(--accent)' }}>Current focus</span>
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.span
                    key={focusIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: 'var(--text-soft)' }}
                  >
                    {focusTerms[focusIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="button-primary w-full sm:w-auto">
              View flagship work
            </a>
            <a href="#contact" className="button-secondary w-full sm:w-auto">
              Start a conversation
            </a>
          </div>

          <div className="stack-list">
            {stack.map((item) => (
              <span key={item} className="stack-chip">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="panel-surface rounded-[var(--radius)] p-6 md:p-7"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-2">
                <span className="section-eyebrow">Proof of work</span>
                <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] sm:text-[1.8rem]" style={{ color: 'var(--text)' }}>
                  Technical depth with product accountability
                </h2>
              </div>
              <div
                className="self-start rounded-[18px] px-4 py-3 font-mono-base text-[0.82rem] uppercase tracking-[0.05em]"
                style={{ background: 'var(--surface-accent)', color: 'var(--text)' }}
              >
                End-to-end owner
              </div>
            </div>

            <div className="grid gap-4">
              {impactCards.map((card) => (
                <article key={card.label} className="info-card interactive-card">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                      {card.label}
                    </span>
                    <span className="text-[1.55rem] font-semibold tracking-[-0.04em]" style={{ color: 'var(--text)' }}>
                      {card.value}
                    </span>
                    <p className="text-[0.92rem] leading-[1.75]" style={{ color: 'var(--text-soft)' }}>
                      {card.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="soft-surface rounded-[20px] p-5">
              <div className="flex flex-col gap-2">
                <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                  Best fit
                </span>
                <p className="text-[0.95rem] leading-[1.8]" style={{ color: 'var(--text-soft)' }}>
                  Teams that value dependable execution, strong debugging instincts, and developers who can shape systems from implementation to long-term support.
                </p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
