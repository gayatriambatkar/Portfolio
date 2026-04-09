interface PanelTopbarProps {
  title: string;
}

export default function PanelTopbar({ title }: PanelTopbarProps) {
  return (
    <div className="panel-topbar min-w-0">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--danger)' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent-amber)' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--accent-mint)' }} />
      <span
        className="ml-2 min-w-0 truncate font-mono-base text-[0.68rem] tracking-[0.08em] uppercase"
        style={{ color: 'var(--text-dim)' }}
        title={title}
      >
        {title}
      </span>
    </div>
  );
}
