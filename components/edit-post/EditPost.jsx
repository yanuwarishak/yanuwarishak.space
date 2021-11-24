export default function EditPost({ url }) {
  return (
    <a
      className="text-gray-300 hover:text-gray-200 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <p className="px-2 py-1 bg-[#202020] rounded-md">Edit on Github</p>
    </a>
  );
}
