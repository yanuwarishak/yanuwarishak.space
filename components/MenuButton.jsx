import { HomeIcon, ProjectIcon, BlogIcon, AboutIcon } from './icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavItem({ href, Icon, text }) {
  const router = useRouter()

  return (
    <span className={`w-full ${router.pathname == href ? 'bg-[#131313]' : ''}`}>
      <Link href={href} className="flex items-center w-6 h-full m-auto" aria-label={text}>
        <Icon color={router.pathname == href ? '#a78bfa' : '#616161'} />
      </Link>
    </span>
  )
}

export default function MenuButton() {
  return (
    <div className="w-full h-14 fixed bottom-0 left-0 right-0 bg-[#191919] border-t border-gray-700 border-opacity-50 grid grid-cols-4 xs:hidden z-50">
      <NavItem href="/" text="Home Page" Icon={HomeIcon} />
      <NavItem href="/project" text="Project Page" Icon={ProjectIcon} />
      <NavItem href="/blog" text="Blog Page" Icon={BlogIcon} />
      <NavItem href="/about" text="About Page" Icon={AboutIcon} />
    </div>
  )
}
