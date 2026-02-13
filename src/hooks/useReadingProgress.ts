import { useEffect, useState } from "react";

export const useReadingProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const scrolled = (current / total) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};
