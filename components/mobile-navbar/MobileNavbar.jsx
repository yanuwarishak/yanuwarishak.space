import Link from "next/link";
import { useState, useEffect } from "react";

function LinkList({ href, text }) {
  return (
    <li className="flex flex-col justify-center text-sm font-semibold first:border-t first:border-gray-600">
      <Link href={href}>
        <a className="border-b border-gray-600 text-gray-100 w-auto py-4">
          {text}
        </a>
      </Link>
    </li>
  );
}

function BurgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function MenuModal() {
  return (
    <div className="flex flex-col h-screen bg-[#121212] mx-auto p-6 fixed top-0 left-0 right-0 bottom-0 z-50 animate-slideDown">
      <div className="flex justify-end">
        <svg
          className="h-6 w-6 text-gray-100"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          shapeRendering="geometricPrecision"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </div>

      <ul className="flex flex-col my-auto">
        <LinkList href="/" text="Home" />
        <LinkList href="/project" text="Project" />
        <LinkList href="/blog" text="Blog" />
        <LinkList href="/tech" text="Tech" />
        <LinkList href="/about" text="About" />
      </ul>
    </div>
  );
}

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    if (isOpen) {
      setIsOpen(!isOpen);
      document.body.style.overflow = "";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="flex flex-row justify-end w-full md:hidden">
      <button
        className="cursor-pointer"
        aria-label="Toggle Menu"
        type="button"
        onClick={toggleMenu}
      >
        <BurgerIcon />
        {isOpen && <MenuModal />}
      </button>
    </div>
  );
}
