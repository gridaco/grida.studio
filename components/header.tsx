import Link from "next/link";
import Image from "next/image";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-screen flex flex-row items-center justify-center z-40">
      <div className="max-w-screen-2xl w-full flex justify-between md:p-12 p-4">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-2">
            <Logo />
            <span className="font-bold">Grida Studios</span>
          </div>
        </Link>
        <div className="flex-1" />
        <div className="flex flex-row gap-5 md:gap-8">
          <Link className="hover:underline" href="/">
            <span>Works</span>
          </Link>
          <Link className="hover:underline" href="/about">
            <span>About</span>
          </Link>
          <Link
            // this is hidden on mobile
            className="hover:underline hidden md:block"
            href="https://grida.co/bundle"
          >
            <span>The Bundle</span>
          </Link>
          <Link className="hover:underline" href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
