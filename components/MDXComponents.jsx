import Image from 'next/image'
import Link from 'next/link'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const OpenSource = ({ link }) => {
  return (
    <div className="text-center bg-[#072507] text-gray-200 rounded-md">
      <p className="p-2">
        This project is an{' '}
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer" href={link}>
          open source project
        </a>
        .
      </p>
    </div>
  )
}

const CourseProject = ({ link, text }) => {
  return (
    <div className="text-center bg-gray-900 text-gray-200 rounded-md">
      <p className="p-2">
        This learning project is from an online course I took on{' '}
        <a target="_blank" rel="noopener noreferrer" className="cursor-pointer" href={link}>
          {text}
        </a>
        .
      </p>
    </div>
  )
}

const MDXComponents = {
  a: CustomLink,
  Image,
  OpenSource,
  CourseProject,
}

export default MDXComponents
