import { engineeringNotes } from '@/lib/data';
import SectionReveal from '@/components/SectionReveal';

export default function EngineeringNotes() {
  return (
    <section id="lessons" className="section-max" style={{ paddingTop: 'clamp(40px,5vw,64px)', paddingBottom: 'clamp(24px,3vw,40px)' }}>
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Engineering Notes
      </div>

      <SectionReveal>
        <div className="flex flex-col gap-3">
          {engineeringNotes.map((note) => (
            <article
              key={note.marker}
              className="panel-surface rounded-[var(--radius)] p-5 md:p-6 flex gap-5 items-start"
            >
              <span
                className="font-mono-base text-[0.65rem] tracking-[0.1em] shrink-0 mt-1"
                style={{ color: 'var(--accent)' }}
              >
                {note.marker}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="text-[0.95rem] font-medium leading-snug" style={{ color: 'var(--text)' }}>
                  {note.title}
                </h2>
                <p className="text-[0.84rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {note.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
