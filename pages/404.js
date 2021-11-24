import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center text-gray-400 gap-6 relative overflow-hidden z-10 bg-gray-900">
      <h1 className="text-9xl tracking-widest">404</h1>
      <h2 className="text-2xl italic">
        /unfortunately the page you're looking for doesn't exist yet/
      </h2>
      <Link href="/">
        <a className="px-4 p-2 border-gray-200 border rounded-sm hover:bg-gray-200 hover:text-black ease-in-out duration-300">
          Home
        </a>
      </Link>
      <p className="items-end absolute bottom-5">
        This beautiful image is provided by{" "}
        <a
          href="https://unsplash.com/photos/iSYYLt2rKac?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          className="underline hover:text-gray-200"
        >
          Thom Schneider
        </a>{" "}
        on Unsplash.
      </p>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] object-cover w-screen filter opacity-50">
        <img src="/assets/images/space-image.jpg" alt="Space and Galaxy" />
      </div>
    </div>
  );
}
