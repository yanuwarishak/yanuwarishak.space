import { useState } from "react";
import useHeadingsData from "hooks/useHeadingsData";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import Link from "next/link";

const Headings = ({ headings, activeId }) => {
  return (
    <ul>
      {headings.map((heading) => (
        <li
          key={heading.id}
          className={`font-thin ${
            heading.id == activeId ? "text-purple-400" : ""
          }`}
        >
          <Link href={`/experimental/#${heading.id}`}>
            <a># {heading.title}</a>
          </Link>
          {heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li
                  key={child.id}
                  className={`font-thin ${
                    child.id == activeId ? "text-purple-400" : ""
                  } ml-4`}
                >
                  <Link href={`/experimental/#${child.id}`}>
                    <a># {child.title}</a>
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

export default function ContentNav() {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <div className="bg-gray-800 p-2 w-full flex flex-col rounded-md gap-2">
      <p>Table of Contents</p>
      <nav aria-label="Table of contents">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </nav>
    </div>
  );
}
