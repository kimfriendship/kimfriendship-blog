import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";

const navList = [
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="bg-background/80 fixed top-0 left-0 w-full shadow-xs backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex w-full max-w-4xl items-center p-4"
      >
        <Link href="/" className="text-xl font-bold">
          kimfriendship
        </Link>

        <ul className="ml-auto flex items-center gap-4">
          {navList.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="underline-offset-4 hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggleButton />
      </nav>
    </header>
  );
}
