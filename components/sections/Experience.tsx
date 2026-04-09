import { experience } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Experience() {
  return (
    <section id="experience" className="section-max section-pad">
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Experience
      </div>

      <SectionReveal>
        <div className="flex flex-col gap-4">
          {experience.map((item, i) => (
            <article key={i} className="panel-surface rounded-[var(--radius)] p-6 md:p-8">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-1 font-mono-base text-[0.82rem] tracking-[0.04em]" style={{ color: 'var(--accent)' }}>
                    {item.company}
                  </div>
                  <h2 className="text-[1.1rem] font-semibold" style={{ color: 'var(--text)' }}>
                    {item.role}
                  </h2>
                </div>
                <span className="self-start font-mono-base text-[0.82rem] tracking-[0.04em] sm:shrink-0" style={{ color: 'var(--text-dim)' }}>
                  {item.period}
                </span>
              </div>

              <p className="mb-4 text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                {item.summary}
              </p>

              <ul className="flex flex-col gap-2 mb-4 pl-4">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="text-[0.92rem] leading-7 list-disc" style={{ color: 'var(--text-soft)' }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p
                className="rounded-[8px] border border-[var(--line)] px-4 py-3 font-mono-base text-[0.84rem] leading-6 tracking-[0.03em]"
                style={{ color: 'var(--text-dim)', background: 'var(--surface-muted)' }}
              >
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
