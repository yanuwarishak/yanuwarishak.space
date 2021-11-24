import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavbar from "../mobile-navbar/MobileNavbar";

function NavItem({ href, text }) {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a className="font-normal">
          <h2
            className={`mx-1 px-3 py-2 rounded-lg  transition-all cursor-pointer ${
              router.asPath == href ? "bg-gray-800" : "hover:bg-gray-900"
            }`}
          >
            {text}
          </h2>
        </a>
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center">
      <div className="flex items-center justify-end w-full relative border-gray-700 bg-opacity-60 text-gray-200">
        <MobileNavbar />
        <ul className="hidden md:flex text-center w-min" id="menu">
          <NavItem href="/" text="Home" />
          <NavItem href="/project" text="Project" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/tech" text="Tech" />
          <NavItem href="/about" text="About" />
        </ul>
      </div>
    </nav>
  );
}
