import { useState } from "react";
import useHeadingsData from "hooks/useHeadingsData";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Link from "next/link";

const Headings = ({ headings, activeId, slug }) => {
  return (
    <ul className="flex flex-col gap-1">
      {headings.map((heading) => (
        <li key={heading.id} className="flex flex-col gap-1">
          <Link
            href={`${slug}/#${heading.id}`}
            className={`px-2 ${
              heading.id == activeId
                ? "text-purple-400 border-l-2 border-purple-400 font-semibold"
                : "text-gray-300"
            }`}
          >
            {heading.title}
          </Link>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.id}>
                  <Link
                    href={`${slug}/#${child.id}`}
                    className={`px-2 ml-4 ${
                      child.id == activeId
                        ? "text-purple-400 border-l-2 border-purple-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default function ContentNav({ slug }) {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <div className="bg-gray-800 p-2 w-full flex flex-col rounded-md gap-2">
      <p className="text-center font-medium text-gray-200 mb-2">
        Table of Contents
      </p>
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} activeId={activeId} slug={slug} />
      </nav>
    </div>
  );
}
