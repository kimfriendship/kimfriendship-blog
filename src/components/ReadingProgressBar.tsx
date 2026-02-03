"use client";

import { useReadingProgress } from "@/hooks/useReadingProgress";

export function ReadingProgressBar() {
  const progress = useReadingProgress();

  return (
    <div className="bg-secondary fixed top-0 left-0 z-10 h-1 w-full">
      <div
        className="bg-primary h-1 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
