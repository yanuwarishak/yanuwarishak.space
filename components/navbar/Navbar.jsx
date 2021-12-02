import Link from "next/link";
import { useRouter } from "next/router";
import MobileNavbar from "../mobile-navbar/MobileNavbar";

function NavItem({ href, text }) {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a className="font-normal">
          <p
            className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
              router.pathname == href ? "bg-gray-800" : "hover:bg-gray-900"
            }`}
          >
            {text}
          </p>
        </a>
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center">
      <div className="flex items-center justify-end w-full relative border-gray-700 bg-opacity-60 text-gray-400">
        <MobileNavbar />
        <ul className="hidden sm:flex text-center w-min gap-2" id="menu">
          <NavItem href="/" text="Home" />
          <NavItem href="/project" text="Project" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/tech" text="Tech" />
          <NavItem href="/about" text="About" />
          <NavItem href="/experimental" text="Exp" />
        </ul>
      </div>
    </nav>
  );
}
