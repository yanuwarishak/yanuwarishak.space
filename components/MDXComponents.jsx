import Image from "next/image";
import Link from "next/link";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const OpenSource = ({ link }) => {
  return (
    <div className="flex flex-col mb-2 px-2 text-center bg-[#072507] justify-center items-center text-gray-200 leading-6 rounded-md">
      <p>
        This project is an{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          href={link}
        >
          open source project
        </a>
        .
      </p>
    </div>
  );
};

const CourseProject = ({ link, text }) => {
  return (
    <div className="flex flex-col mb-2 px-2 text-center bg-gray-900 justify-center items-center text-gray-200 leading-6 rounded-md">
      <p>
        This learning project is from an online course I took on{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
          href={link}
        >
          {text}
        </a>
        .
      </p>
    </div>
  );
};

const MDXComponents = {
  a: CustomLink,
  Image,
  OpenSource,
  CourseProject,
};

export default MDXComponents;
