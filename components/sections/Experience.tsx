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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="font-mono-base text-[0.72rem] tracking-[0.08em] mb-1" style={{ color: 'var(--accent)' }}>
                    {item.company}
                  </div>
                  <h2 className="text-[1.1rem] font-semibold" style={{ color: 'var(--text)' }}>
                    {item.role}
                  </h2>
                </div>
                <span className="font-mono-base text-[0.68rem] tracking-[0.06em] shrink-0" style={{ color: 'var(--text-dim)' }}>
                  {item.period}
                </span>
              </div>

              <p className="text-[0.86rem] leading-relaxed mb-4" style={{ color: 'var(--text-soft)' }}>
                {item.summary}
              </p>

              <ul className="flex flex-col gap-2 mb-4 pl-4">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="text-[0.84rem] leading-relaxed list-disc" style={{ color: 'var(--text-soft)' }}>
                    {bullet}
                  </li>
                ))}
              </ul>

              <p
                className="text-[0.8rem] leading-relaxed px-4 py-3 rounded-[8px] border border-[var(--line)] font-mono-base"
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
