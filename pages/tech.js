import Image from "next/image";
import Container from "@/components/container/Container";

export default function Tech() {
  return (
    <Container title="Tech – Yanuwar Ishak">
      <div className="absolute top-0 left-0 ">
        <h1 className="p-6 font-semibold text-lg md:hidden">Tech</h1>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <h1 className="text-5xl font-bold mb-2">Tech Stack</h1>
            <p className=" pt-4 text-gray-300">
              Writing has always been a hard thing for me, therefore I've
              decided to force myself to write things that I've learned. Some
              words may feel out of place so I guess I'm sorry in advance.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
