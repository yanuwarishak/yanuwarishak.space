import Link from "next/link";
import Container from "@/components/container/Container";

export default function ServerError() {
  return (
    <Container>
      <div className="min-h-[80vh] flex flex-col gap-12 justify-center">
        <h1 className="text-9xl tracking-widest">500</h1>
        <h2 className="text-2xl italic">
          /uh oh something went wrong/
        </h2>
        <Link href="/">
          <a className="px-4 p-2 border-gray-200 border rounded-sm hover:bg-gray-200 hover:text-black ease-in-out duration-300">
            Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
