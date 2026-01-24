import Link from "next/link";

const navList = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="bg-background/80 fixed top-0 left-0 w-full shadow-xs backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-4xl justify-between p-4">
        <Link href="/" className="font-bold">
          kimfriendship
        </Link>

        <ul className="flex items-center gap-4">
          {navList.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="underline-offset-4 hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
