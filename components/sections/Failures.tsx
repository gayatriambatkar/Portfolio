import { failures } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function Failures() {
  return (
    <section id="failures" className="section-max" style={{ paddingTop: 'clamp(24px,3vw,40px)', paddingBottom: 'clamp(40px,5vw,64px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Failures &amp; Lessons
      </div>

      <SectionReveal>
        <div className="flex flex-col gap-3">
          {failures.map((item) => (
            <article
              key={item.marker}
              className="panel-surface flex flex-col gap-2 rounded-[var(--radius)] p-5 sm:flex-row sm:items-start sm:gap-5 md:p-6"
            >
              <span
                className="font-mono-base text-[0.78rem] tracking-[0.04em] sm:mt-1 sm:shrink-0"
                style={{ color: 'var(--danger)' }}
              >
                {item.marker}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[1rem] font-medium leading-snug" style={{ color: 'var(--text)' }}>
                  {item.title}
                </h2>
                <p className="text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
