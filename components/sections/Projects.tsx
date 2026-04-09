'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, ProjectCase, CaseContent } from '@/lib/data';
import PanelTopbar from '@/components/PanelTopbar';
import SectionReveal from '@/components/SectionReveal';

function renderContent(content: CaseContent) {
  if (content.type === 'list') {
    return (
      <ul className="flex flex-col gap-2 pl-4">
        {content.items.map((item, i) => (
          <li key={i} className="text-[0.84rem] leading-relaxed list-disc" style={{ color: 'var(--text-soft)' }}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  if ((content.type === 'paragraph' || content.type === 'full') && content.links && content.links.length > 0) {
    const parts = content.text.split(/\{([^}]+)\}/g);
    return (
      <p className="text-[0.84rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
        {parts.map((part, i) => {
          const link = content.links!.find((l) => l.label === part);
          return link ? (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
              className="hover:underline"
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
    <p className="text-[0.84rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
      {content.text}
    </p>
  );
}

const coreLabels = ['problem', 'approach', 'outcome'];

function CaseCard({ caseItem }: { caseItem: ProjectCase }) {
  const [expanded, setExpanded] = useState(false);
  const isCore = coreLabels.includes(caseItem.label);
  const isFull = caseItem.content.type === 'full';

  return (
    <div
      className="rounded-[10px] border border-[var(--line)] overflow-hidden"
      style={{ background: 'var(--surface-muted)', gridColumn: isFull ? '1 / -1' : undefined }}
    >
      <button
        type="button"
        onClick={() => !isCore && setExpanded((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left md:cursor-default"
        style={{ cursor: isCore ? 'default' : 'pointer' }}
      >
        <span className="font-mono-base text-[0.68rem] tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
          {caseItem.label}
        </span>
        {!isCore && (
          <span className="font-mono-base text-[0.8rem] shrink-0 md:hidden" style={{ color: 'var(--text-dim)' }}>
            {expanded ? '−' : '+'}
          </span>
        )}
      </button>
      <div className={`px-4 pb-4 ${!isCore && !expanded ? 'hidden md:block' : ''}`}>
        {renderContent(caseItem.content)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section id="projects" className="section-max section-pad">
      <div className="font-mono-base text-[0.78rem] tracking-[0.1em] mb-6" style={{ color: 'var(--accent)' }}>
        // Projects
      </div>

      <SectionReveal>
        <div
          className="panel-surface rounded-[var(--radius)] overflow-hidden grid md:grid-cols-[260px_1fr]"
          style={{ minHeight: 520 }}
        >
          {/* Sidebar */}
          <div
            className="border-b md:border-b-0 md:border-r border-[var(--line)] p-4 flex flex-col gap-1"
            style={{ background: 'var(--surface-ghost)' }}
          >
            <div className="font-mono-base text-[0.68rem] tracking-[0.1em] px-2 py-2 mb-2" style={{ color: 'var(--text-dim)' }}>
              repo explorer
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="flex md:hidden overflow-x-auto gap-2 pb-2">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className="flex-shrink-0 font-mono-base text-[0.72rem] px-3 py-2 rounded-[8px] border transition-all duration-200"
                  style={{
                    borderColor: activeId === p.id ? 'var(--accent)' : 'var(--line)',
                    color: activeId === p.id ? 'var(--accent)' : 'var(--text-soft)',
                    background: activeId === p.id ? 'var(--bg-accent)' : 'transparent',
                  }}
                >
                  {p.index} {p.title}
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden md:flex flex-col gap-1">
              {projects.map((p) => (
                <div key={p.id} className="flex flex-col gap-1">
                  <button
                    onClick={() => setActiveId(p.id)}
                    role="tab"
                    aria-selected={activeId === p.id}
                    className="w-full flex gap-3 items-start px-3 py-3 rounded-[8px] border text-left transition-all duration-200"
                    style={{
                      borderColor: activeId === p.id ? 'var(--accent)' : 'transparent',
                      background: activeId === p.id ? 'var(--bg-accent)' : 'transparent',
                    }}
                    onMouseEnter={(e) => { if (activeId !== p.id) e.currentTarget.style.background = 'var(--surface-muted)'; }}
                    onMouseLeave={(e) => { if (activeId !== p.id) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span className="font-mono-base text-[0.65rem] mt-[2px] shrink-0" style={{ color: activeId === p.id ? 'var(--accent)' : 'var(--text-dim)' }}>
                      {p.index}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono-base text-[0.75rem]" style={{ color: activeId === p.id ? 'var(--text)' : 'var(--text-soft)' }}>
                        {p.title}
                      </span>
                      <span className="font-mono-base text-[0.65rem]" style={{ color: 'var(--text-dim)' }}>
                        {p.tabMeta}
                      </span>
                    </div>
                  </button>
                  {p.tabLinks && (
                    <div className="ml-8 flex flex-col gap-0.5">
                      {p.tabLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono-base text-[0.65rem] hover:underline"
                          style={{ color: 'var(--accent-blue)' }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {p.internalNote && (
                    <div className="ml-8">
                      <span className="font-mono-base text-[0.65rem]" style={{ color: 'var(--text-dim)' }}>
                        {p.internalNote}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
              role="tabpanel"
            >
              <PanelTopbar title={active.filename} />
              <div className="p-5 md:p-7 flex flex-col gap-5">
                <header className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono-base text-[0.68rem] tracking-[0.1em] mb-1" style={{ color: 'var(--text-dim)' }}>
                      {active.kicker}
                    </div>
                    <h2 className="text-[1.5rem] font-semibold leading-tight" style={{ color: 'var(--text)' }}>
                      {active.title}
                    </h2>
                  </div>
                  <span
                    className="shrink-0 font-mono-base text-[0.65rem] px-2 py-1 rounded-[6px] border border-[var(--line)]"
                    style={{ color: 'var(--text-dim)', background: 'var(--surface-chip)' }}
                  >
                    status: {active.status}
                  </span>
                </header>

                <p className="text-[0.88rem] leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {active.summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {active.cases.map((c, i) => (
                    <CaseCard key={i} caseItem={c} />
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
