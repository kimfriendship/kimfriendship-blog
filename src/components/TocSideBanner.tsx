"use client";

import { useEffect, useRef, useState } from "react";
import { extractHeadings } from "../lib/extractHeadings";
import { useActiveHeading } from "../hooks/useActiveHeading";
import { TocItem } from "@/types/post";
import { cn } from "@/lib/utils";

export function TocSidebar() {
  const [tocList, setTocList] = useState<TocItem[]>([]);
  const articleRef = useRef<HTMLElement | null>(null);

  const activeId = useActiveHeading(tocList);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    articleRef.current = article;
    const toc = extractHeadings(article);

    // eslint-disable-next-line
    setTocList(toc);
  }, []);

  if (!tocList.length) return null;

  return (
    <aside className="absolute left-full ml-16 hidden h-fit w-64 shrink-0 2xl:block">
      <nav className="border-l border-gray-300 p-4">
        <span className="mb-2 inline-block font-medium text-gray-500">
          목차
        </span>

        <ul className="space-y-1">
          {tocList.map((item) => (
            <li key={item.id} className={cn({ "pl-4": item.level === 3 })}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block text-sm transition-colors",
                  activeId === item.id
                    ? "text-primary font-medium"
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
