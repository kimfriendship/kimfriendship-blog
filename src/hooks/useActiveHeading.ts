import { TocItem } from "@/types/post";
import { useEffect, useState } from "react";

export function useActiveHeading(items: TocItem[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }));

        if (!visibleHeadings.length) return;

        // viewport top 기준으로 가장 가까운 heading 선택
        visibleHeadings.sort((a, b) => a.top - b.top);

        setActiveId(visibleHeadings[0].id);
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return activeId;
}
