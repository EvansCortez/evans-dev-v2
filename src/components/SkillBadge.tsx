export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md text-xs font-mono text-zinc-600 dark:text-zinc-400">
      {name}
    </span>
  );
}
