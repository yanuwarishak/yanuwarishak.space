import Image from "next/image";
import Container from "@/components/container/Container";

export default function Home() {
  return (
    <Container>
      <div className="absolute top-0 left-0 ">
        <h1 className="p-6 font-semibold text-lg md:hidden">Tech</h1>
      </div>
      <div className="pb-2 w-full">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="avatar w-20 mb-4 md:mb-0">
            <Image
              className="rounded-full"
              src="/assets/images/avatar.png"
              width="145px"
              height="145px"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Yanuwar Ishak</h1>
            <h2 className=" text-base mt-2 text-gray-100 font-semibold">
              Front-end Developer
            </h2>
            <p className=" w-10/12 pt-4 text-gray-400">
              JavaScript enthusiast who well versed in React ecosystem and ready
              to turn design into working product.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
