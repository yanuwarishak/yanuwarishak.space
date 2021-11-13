export default function EditPost({ url }) {
  return (
    <div>
      <a
        className="text-gray-400 hover:text-gray-300 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={url}
      >
        <p className="px-2 py-1 bg-gray-700 rounded-md">
          &lt;/Edit on Github&gt;
        </p>
      </a>
    </div>
  );
}
