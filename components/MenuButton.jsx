import { HomeIcon, ProjectIcon, BlogIcon, AboutIcon } from "./icons";
import Link from "next/link";
import { useRouter } from "next/router";

function NavItem({ href, Icon }) {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className="flex items-center w-6 h-full m-auto">
        <Icon color={router.pathname == href ? "#a78bfa" : "#616161"} />
      </a>
    </Link>
  );
}

export default function MenuButton() {
  return (
    <div className="w-full h-14 fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-gray-700 border-opacity-50 grid grid-cols-4 xs:hidden z-50">
      <NavItem href="/" Icon={HomeIcon} />
      <NavItem href="/project" Icon={ProjectIcon} />
      <NavItem href="/blog" Icon={BlogIcon} />
      <NavItem href="/about" Icon={AboutIcon} />
    </div>
  );
}
