import Link from "next/link";
import { useRouter } from "next/router";

function NavItem({ href, text }) {
  const router = useRouter();

  return (
    <li className="font-normal w-full cursor-pointer hover:bg-gray-900 rounded-lg">
      <Link href={href}>
        <a>
          <p
            className={`text-normal p-2 transition-all ${
              router.pathname == href
                ? "text-purple-400 border-r-4 border-purple-400 border-opacity-50"
                : "text-gray-300"
            }`}
          >
            {text}
          </p>
        </a>
      </Link>
    </li>
  );
}

export default function AsideNavbar() {
  return (
    <nav className="px-2 w-full flex flex-col items-end" id="menu">
      <ul className="flex w-full flex-col items-start">
        <NavItem href="/" text="🏠 Home" />
        <NavItem href="/project" text="🛠 Project" />
        <NavItem href="/blog" text="🧾 Blog" />
        <NavItem href="/tech" text="⚙ Tech" />
        <NavItem href="/about" text="🧑 About" />
        <NavItem href="/experimental" text="⚡ Exp" />
      </ul>
    </nav>
  );
}
