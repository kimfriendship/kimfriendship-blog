import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 마크다운 및 MDX 파일을 포함하도록 `pageExtensions`를 구성합니다
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // 선택적으로 다른 Next.js 구성 추가 가능
};

const withMDX = createMDX({
  // 원한다면 여기에서 마크다운 플러그인을 추가하세요
});

// MDX 구성과 Next.js 구성을 병합합니다
export default withMDX(nextConfig);
