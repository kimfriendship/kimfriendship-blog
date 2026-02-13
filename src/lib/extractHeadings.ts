import { TocItem } from "@/types/post";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w가-힣\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(container: HTMLElement): TocItem[] {
  const headings = Array.from(
    container.querySelectorAll("h2, h3"),
  ) as HTMLHeadingElement[];

  return headings.map((el) => {
    const text = el.textContent || "";
    const id = slugify(text);

    el.id = id; // DOM에 ID 부여

    return {
      id,
      text,
      level: el.tagName === "H2" ? 2 : 3,
    };
  });
}
