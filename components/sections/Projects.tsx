'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, ProjectCase, CaseContent } from '@/lib/data';
import PanelTopbar from '@/components/PanelTopbar';
import SectionReveal from '@/components/SectionReveal';

function renderContent(content: CaseContent) {
  if (content.type === 'list') {
    return (
      <ul className="flex flex-col gap-2 pl-4">
        {content.items.map((item, i) => (
          <li key={i} className="text-[0.88rem] leading-7 list-disc" style={{ color: 'var(--text-soft)' }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if (content.type === 'paragraph' && content.links && content.links.length > 0) {
    const links = content.links;
    const parts = content.text.split(/\{([^}]+)\}/g);
    return (
      <p className="text-[0.88rem] leading-7" style={{ color: 'var(--text-soft)' }}>
        {parts.map((part, i) => {
          const link = links.find((item) => item.label === part);
          return link ? (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-transparent transition-colors duration-200 hover:decoration-current"
              style={{ color: 'var(--accent)' }}
            >
              {link.label}
            </a>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </p>
    );
  }

  return (
    <p className="text-[0.88rem] leading-7" style={{ color: 'var(--text-soft)' }}>
      {content.text}
    </p>
  );
}

const coreLabels = ['problem', 'approach', 'outcome'];

function CaseCard({ caseItem }: { caseItem: ProjectCase }) {
  const [expanded, setExpanded] = useState(false);
  const isCore = coreLabels.includes(caseItem.label);
  const isFull = caseItem.content.type === 'full';
  const shouldShowContent = isCore || expanded;

  return (
    <div
      className="rounded-[16px] border overflow-hidden"
      style={{ borderColor: 'var(--line)', background: 'var(--surface-muted)', gridColumn: isFull ? '1 / -1' : undefined }}
    >
      <button
        type="button"
        onClick={() => !isCore && setExpanded((value) => !value)}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
        style={{ cursor: isCore ? 'default' : 'pointer' }}
      >
        <span className="font-mono-base text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
          {caseItem.label}
        </span>
        {!isCore && (
          <span className="font-mono-base text-[0.82rem] shrink-0" style={{ color: 'var(--text-dim)' }}>
            {expanded ? '-' : '+'}
          </span>
        )}
      </button>

      <div className={`${shouldShowContent ? 'block' : 'hidden'} px-4 pb-4`}>
        {renderContent(caseItem.content)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <section id="projects" className="section-max section-pad">
      <div className="font-mono-base mb-6 text-[0.78rem] tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
        // Projects
      </div>

      <SectionReveal>
        <div className="panel-surface grid min-w-0 overflow-hidden rounded-[var(--radius)] md:grid-cols-[280px_minmax(0,1fr)]" style={{ minHeight: 520 }}>
          <div
            className="flex flex-col gap-3 border-b p-4 md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}
          >
            <div className="px-2 py-2">
              <div className="font-mono-base text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-dim)' }}>
                project explorer
              </div>
              <p className="mt-2 text-[0.84rem] leading-6" style={{ color: 'var(--text-soft)' }}>
                Mobile view now keeps project context visible while you switch between case studies.
              </p>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 md:hidden snap-x snap-mandatory">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className="min-w-[228px] flex-shrink-0 snap-start rounded-[16px] border px-4 py-4 text-left transition-all duration-200"
                  style={{
                    borderColor: activeId === project.id ? 'var(--accent)' : 'var(--line)',
                    background: activeId === project.id ? 'var(--bg-accent)' : 'var(--surface-chip)',
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono-base text-[0.68rem] uppercase tracking-[0.08em]" style={{ color: activeId === project.id ? 'var(--accent)' : 'var(--text-dim)' }}>
                      {project.index}
                    </span>
                    <span className="text-[0.98rem] font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                      {project.title}
                    </span>
                    <span className="font-mono-base text-[0.64rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-dim)' }}>
                      {project.kicker}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden md:flex md:flex-col md:gap-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className="rounded-[16px] border px-4 py-4 text-left transition-all duration-200"
                  style={{
                    borderColor: activeId === project.id ? 'var(--accent)' : 'transparent',
                    background: activeId === project.id ? 'var(--bg-accent)' : 'transparent',
                  }}
                >
                  <div className="flex gap-3">
                    <span className="font-mono-base text-[0.65rem] uppercase tracking-[0.08em]" style={{ color: activeId === project.id ? 'var(--accent)' : 'var(--text-dim)' }}>
                      {project.index}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="text-[0.94rem] font-semibold" style={{ color: 'var(--text)' }}>
                        {project.title}
                      </span>
                      <span className="font-mono-base text-[0.64rem] uppercase tracking-[0.06em]" style={{ color: 'var(--text-dim)' }}>
                        {project.tabMeta}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-w-0 flex-col"
              role="tabpanel"
            >
              <PanelTopbar title={active.filename} />

              <div className="flex flex-col gap-5 p-4 md:gap-6 md:p-7">
                <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="font-mono-base mb-2 text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: 'var(--text-dim)' }}>
                      {active.kicker}
                    </div>
                    <h2 className="text-[1.6rem] font-semibold leading-tight tracking-[-0.03em] md:text-[1.85rem]" style={{ color: 'var(--text)' }}>
                      {active.title}
                    </h2>
                    <p className="mt-2 font-mono-base text-[0.68rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-dim)' }}>
                      {active.tabMeta}
                    </p>
                  </div>

                  <span
                    className="font-mono-base shrink-0 rounded-full border px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.08em]"
                    style={{ borderColor: 'var(--line)', color: 'var(--text-dim)', background: 'var(--surface-chip)' }}
                  >
                    status: {active.status}
                  </span>
                </header>

                <div className="rounded-[18px] border p-4 md:p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface-ghost)' }}>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono-base text-[0.68rem] uppercase tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
                        project visual
                      </span>
                      <span className="font-mono-base text-[0.64rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-dim)' }}>
                        assets-ready
                      </span>
                    </div>

                    <div
                      className="flex min-h-[180px] items-end rounded-[14px] border p-4 md:min-h-[220px]"
                      style={{
                        borderColor: 'var(--line)',
                        background: 'linear-gradient(145deg, rgba(94, 160, 255, 0.14), rgba(124, 224, 195, 0.08))',
                      }}
                    >
                      <div className="max-w-[28ch]">
                        <span className="font-mono-base text-[0.68rem] uppercase tracking-[0.08em]" style={{ color: 'var(--text-dim)' }}>
                          future image slot
                        </span>
                        <p className="mt-2 text-[0.9rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                          When you add project screenshots or mockups inside `assets`, this area can become the main visual preview for each case study.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="min-w-0 text-[0.92rem] leading-7" style={{ color: 'var(--text-soft)' }}>
                  {active.summary}
                </p>

                {active.tabLinks && active.tabLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {active.tabLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="grid gap-3 sm:grid-cols-2">
                  {active.cases.map((caseItem, index) => (
                    <CaseCard key={index} caseItem={caseItem} />
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </SectionReveal>
    </section>
  );
}
