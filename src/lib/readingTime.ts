const WORDS_PER_MINUTE = 200;
const KOREAN_CHARS_PER_MINUTE = 400;

function cleanMDX(text: string) {
  return text
    .replace(/```[\s\S]*?```/g, "") // 코드블록 제거
    .replace(/`.*?`/g, "") // 인라인 코드 제거
    .replace(/<[^>]+>/g, "") // JSX/HTML 제거
    .replace(/[#>*_\-\[\]]/g, "") // 마크다운 기호 제거
    .replace(/\s+/g, " ")
    .trim();
}

export function calculateReadingTime(source: string) {
  const text = cleanMDX(source);

  const words = text.split(" ").filter(Boolean).length;
  const chars = text.length;

  const minutesByWords = words / WORDS_PER_MINUTE;
  const minutesByChars = chars / KOREAN_CHARS_PER_MINUTE;

  const minutes = Math.max(
    1,
    Math.ceil(Math.max(minutesByWords, minutesByChars)),
  );

  return {
    minutes,
    words,
    chars,
  };
}
