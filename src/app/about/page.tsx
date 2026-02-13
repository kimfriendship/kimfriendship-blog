export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="flex items-end gap-4 py-10">
        <h1 className="text-4xl font-bold">김우정</h1>
        <span className="font-bold">프론트엔드 개발자</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <a
          href="mailto:wj.kim103@gmail.com"
          className="underline-offset-4 hover:underline"
        >
          Email
        </a>
        <span>・</span>
        <a
          href="https://github.com/kimfriendship"
          className="underline-offset-4 hover:underline"
        >
          Github
        </a>
        <span>・</span>
        <a
          href="https://www.linkedin.com/in/woojung-kim-5a704a395/?trk=flagship3_open_to_hiring_creation_upsell"
          className="underline-offset-4 hover:underline"
        >
          Linkedin
        </a>
      </div>

      <p className="mt-4">
        빠르게 기능을 만드는 것보다, 서비스가 오래 안정적으로 운영될 수 있는
        기반을 만드는 일에 관심이 많습니다. 복잡해진 구조를 정리하고, 개발
        환경을 개선하며, 팀이 더 효율적으로 협업할 수 있는 흐름을 만드는
        과정에서 큰 보람을 느낍니다. 이 블로그는 문제를 해결하는 과정에서 얻은
        경험과 고민을 기록하는 공간입니다. 기술적인 지식뿐 아니라, 더 나은
        개발자가 되기 위한 생각과 배움을 함께 남기고 있습니다.
      </p>
    </div>
  );
}
