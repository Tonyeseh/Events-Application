import clsx from "clsx";
import { link } from "fs";

export default function Tag({
  name,
  className,
  link,
}: {
  name: string;
  className?: string;
  link: string;
}) {
  return (
    <a
      className={clsx(
        className
          ? className
          : "rounded-full border-slate-400 border px-3 py-1 text-xs mr-3 text-slate-500 font-bold",
      )}
      href={link}
    >
      {name}
    </a>
  );
}
