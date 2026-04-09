'use client';

import { depthCards, skills } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Depth() {
  return (
    <section id="depth" className="section-max section-pad">
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Skills & Technical Depth
      </div>

      <SectionReveal>
        <div className="panel-surface rounded-[var(--radius)] p-4 md:p-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="section-eyebrow">Core Skills</span>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] md:text-[1.85rem]" style={{ color: 'var(--text)' }}>
                Production-focused stack across product, backend, automation, and deployment
              </h2>
            </div>
            <p className="max-w-[44ch] text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
              A visual summary of the tools and systems I use most often in real delivery work, ...
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="skill-card interactive-card">
                <div className="skill-icon-ring" style={{ borderColor: skill.accent }}>
                  <span className="skill-icon-core" style={{ color: skill.accent, boxShadow: `0 0 0 1px ${skill.accent}22 inset` }}>
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="skill-logo"
                      loading="lazy"
                      onError={(event) => {
                        const image = event.currentTarget;
                        image.style.display = 'none';
                        const fallback = image.nextElementSibling as HTMLSpanElement | null;
                        if (fallback) {
                          fallback.style.display = 'inline-flex';
                        }
                      }}
                    />
                    <span className="skill-logo-fallback">{skill.glyph}</span>
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[0.96rem] font-semibold tracking-[-0.02em]" style={{ color: 'var(--text)' }}>
                    {skill.name}
                  </h3>
                  <p className="font-mono-base text-[0.72rem] uppercase tracking-[0.05em]" style={{ color: 'var(--text-dim)' }}>
                    {skill.category}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {depthCards.map((card) => (
            <article
              key={card.label}
              className="panel-surface rounded-[var(--radius)] p-6 flex flex-col gap-3"
            >
              <div className="font-mono-base text-[0.72rem] tracking-[0.1em] uppercase" style={{ color: 'var(--accent)' }}>
                {card.label}
              </div>
              <p className="text-[0.9rem] leading-8" style={{ color: 'var(--text-soft)' }}>
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
