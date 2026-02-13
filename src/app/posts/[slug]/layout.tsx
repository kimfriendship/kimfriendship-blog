import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { TocSidebar } from "@/components/TocSideBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl px-4">
      <ReadingProgressBar />

      <div className="sticky top-30 h-fit">
        <TocSidebar />
      </div>

      {children}
    </div>
  );
}
