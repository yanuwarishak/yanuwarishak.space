import Link from "next/link";
import { useRouter } from "next/router";

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
    <nav className="hidden xs:flex md:hidden items-center justify-end w-full relative border-gray-700 bg-opacity-60 text-gray-400">
      <ul className="flex text-center w-min gap-2" id="menu">
        <NavItem href="/" text="Home" />
        <NavItem href="/project" text="Project" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/tech" text="Tech" />
        <NavItem href="/about" text="About" />
      </ul>
    </nav>
  );
}
