export default function LogoMark() {
  return (
    <div
      aria-hidden="true"
      className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[var(--line)]"
      style={{
        background:
          'linear-gradient(145deg, rgba(94, 160, 255, 0.16), rgba(124, 224, 195, 0.08))',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <span
        className="text-[0.95rem] font-semibold tracking-[-0.04em]"
        style={{ color: 'var(--text)' }}
      >
        GA
      </span>
    </div>
  );
}
