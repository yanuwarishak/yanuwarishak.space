import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavbar from "../mobile-navbar/MobileNavbar";

function NavItem({ href, text }) {
  const router = useRouter();

  return (
    <li
      className={`hidden mx-1 md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:text-indigo-200 hover:bg-gray-700 transition-all ${
        router.asPath == href ? "bg-gray-700" : ""
      }`}
    >
      <Link href={href}>
        <a
          className={
            router.asPath == href
              ? "font-semibold text-indigo-200"
              : "font-normal"
          }
        >
          {text}
        </a>
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center">
      <nav className="flex items-center justify-end w-full relative border-gray-700 bg-opacity-60 text-gray-400 pb-4 md:pb-8">
        <MobileNavbar />
        <ul className="hidden md:flex text-center w-min" id="menu">
          <NavItem href="/" text="Home" />
          <NavItem href="/project" text="Project" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/tech" text="Tech" />
          <NavItem href="/about" text="About" />
        </ul>
      </nav>
    </div>
  );
}
