'use client';

import { motion } from 'framer-motion';

const impactCards = [
  {
    label: 'records / run',
    value: '200k+',
    description: 'Multi-tenant SaaS workload handled in live production at Sezone.',
  },
  {
    label: 'credentials managed',
    value: '1,400+',
    description: 'Operational scale supported through tenant-aware scheduling and recovery-focused workflows.',
  },
  {
    label: 'pipeline reliability',
    value: '99%',
    description: 'Reliability reached after shifting fragile execution into queue-based workers.',
  },
  {
    label: 'processing improvement',
    value: '6h -> 30m',
    description: 'Heavy batch workflows accelerated through desktop automation and execution visibility.',
  },
];

const stack = ['Node.js', 'React', 'TypeScript', 'Electron', 'Automation', 'MongoDB', 'AI Retrieval'];

export default function Hero() {
  return (
    <section id="hero" className="section-max section-pad" style={{ paddingTop: 'clamp(40px, 8vw, 92px)' }}>
      <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
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
              2 years | SaaS + automation + AI workflows
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <span className="section-eyebrow">Full-stack engineer with production ownership</span>
            <h1
              className="max-w-[12ch] text-[clamp(2.8rem,11vw,6.2rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              style={{ color: 'var(--text)' }}
            >
              I build software that teams can run, trust, and scale.
            </h1>
            <p className="max-w-[62ch] text-[clamp(1.02rem,1.5vw,1.14rem)] leading-[1.9]" style={{ color: 'var(--text-soft)' }}>
              Built and operate a multi-tenant SaaS handling 200k+ records per run and 1,400+ credentials, alongside automation tools and grounded AI workflows used in live business environments.
            </p>
          </div>

          <div className="soft-surface rounded-[20px] px-4 py-4 sm:px-5">
            <div className="flex flex-col gap-2">
              <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                Selected impact
              </span>
              <p className="text-[0.98rem] leading-[1.8]" style={{ color: 'var(--text-soft)' }}>
                I work best in high-ownership product teams where one engineer is trusted to shape architecture, delivery, deployment, and long-term support.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {impactCards.map((card) => (
              <article key={card.label} className="info-card interactive-card p-5">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-base text-[0.76rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                    {card.label}
                  </span>
                  <span className="text-[1.45rem] font-semibold tracking-[-0.04em]" style={{ color: 'var(--text)' }}>
                    {card.value}
                  </span>
                  <p className="text-[0.88rem] leading-[1.7]" style={{ color: 'var(--text-soft)' }}>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="button-primary w-full sm:w-auto">
              View featured work
            </a>
            <a
              href="https://drive.google.com/file/d/1nGL78QnLnvSBzmRJ2utNC_tAgc_xdMVa/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              View resume
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
            <div className="flex flex-col gap-3">
              <span className="section-eyebrow">Best evidence</span>
              <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] sm:text-[1.8rem]" style={{ color: 'var(--text)' }}>
                Production ownership across SaaS, automation, and reliability work
              </h2>
              <p className="text-[0.94rem] leading-[1.8]" style={{ color: 'var(--text-soft)' }}>
                The strongest signal in this portfolio is not breadth alone. It is repeated ownership of systems that had to keep working in production after launch.
              </p>
            </div>

            <div className="grid gap-4">
              <article className="info-card interactive-card">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                    Flagship product
                  </span>
                  <span className="text-[1.4rem] font-semibold tracking-[-0.04em]" style={{ color: 'var(--text)' }}>
                    Sezone
                  </span>
                  <p className="text-[0.92rem] leading-[1.75]" style={{ color: 'var(--text-soft)' }}>
                    End-to-end ownership across architecture, backend workers, frontend surfaces, deployment, optimization, and production support.
                  </p>
                </div>
              </article>

              <article className="info-card interactive-card">
                <div className="flex flex-col gap-2">
                  <span className="font-mono-base text-[0.82rem] uppercase tracking-[0.05em]" style={{ color: 'var(--accent)' }}>
                    Current fit
                  </span>
                  <span className="text-[1.4rem] font-semibold tracking-[-0.04em]" style={{ color: 'var(--text)' }}>
                    High-ownership engineering teams
                  </span>
                  <p className="text-[0.92rem] leading-[1.75]" style={{ color: 'var(--text-soft)' }}>
                    Especially teams that care about debugging quality, operational clarity, and engineers who can own complete systems instead of isolated tickets.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
