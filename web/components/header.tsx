import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-screen flex flex-row items-center justify-center">
      <div className="max-w-screen-2xl w-full flex justify-between md:p-12 p-4">
        <Link href="/">
          <div className="flex flex-row items-center justify-center gap-2">
            <svg
              className="fill-black	dark:fill-white"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.3207 6.6792L13.2827 13.6242L20 20.1896V13.3586L20 13.3586C20 13.3534 20 13.3481 20 13.3429V13.2447L19.999 13.2437C19.9377 9.60788 16.9712 6.67937 13.3208 6.67932L13.3207 6.6792Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5315 3.45733C9.19628 3.83061 6.60342 6.65995 6.60342 10.0949V13.2827L6.71727 20.2277L0 13.6622V6.67932V6.64137L0.00010496 6.64147C0.0204744 2.97 3.00306 0 6.67932 0C9.19987 0 11.3943 1.39617 12.5315 3.45733Z"
              />
            </svg>
            <span className="font-bold">Grida Studios</span>
          </div>
        </Link>
        <div className="flex-1" />
        <div className="flex flex-row gap-5">
          <Link href="/">
            <span>Works</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
