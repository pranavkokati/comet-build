import { trust } from "@/content";

export function TrustStrip() {
  return (
    <div className="border-y border-neutral-200 py-9 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
        {trust.map((name) => (
          <span
            key={name}
            className="text-base font-extrabold tracking-tight text-neutral-400 opacity-75 dark:text-neutral-500"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
