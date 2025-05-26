import Link from "next/link";
import MainLayout from "layout/MainLayout";

export default function NotFound() {
  return (
    <MainLayout
      title="404 - Not Found"
      LeftContent={() => null}
      RightContent={() => null}
    >
      <div className="min-h-[80vh] flex flex-col gap-12 justify-center">
        <h1 className="text-9xl tracking-widest">404</h1>
        <h2 className="text-2xl italic">
          /unfortunately the page you're looking for doesn't exist yet/
        </h2>
        <Link
          href="/"
          className="px-4 p-2 border-gray-200 border rounded-sm hover:bg-gray-200 hover:text-black ease-in-out duration-300"
        >
          Home
        </Link>
      </div>
    </MainLayout>
  );
}
