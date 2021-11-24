import Container from "@/components/container/Container";
import {
  mainStack,
  minorStack,
  currentlyLearning,
  thingsToTry,
} from "@/data/techstacks";

export default function Tech() {
  return (
    <Container title="Tech – Yanuwar Ishak">
      <div className="relative">
        <h1 className="text-5xl font-bold z-1">Tech</h1>
        <div className="text-7xl font-bold text-[#202020] absolute -top-8 -left-6 z-[-1] cursor-default ">
          テク
        </div>
      </div>
      <p className="text-gray-400 leading-relaxed">
        Here I listed all the technologies that I currently use and familiar
        with as well as some that I've planned to learn.
      </p>

      <div className="w-full bg-gray-800 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Main tech stacks</h2>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3 xs:grid-cols-4">
            {mainStack.map((stack, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-2 flex mx-auto justify-center items-center w-full rounded-md"
              >
                {stack}
              </div>
            ))}
          </div>
          <div className="flex flex-row flex-wrap gap-3">
            {minorStack.map((stack, idx) => (
              <div key={idx} className="bg-gray-900 p-2 rounded-md">
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#086d54] p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-1">Currently Learning</h2>
        <p className="mb-4 text-gray-300">Sorted by priority</p>
        <div className="flex flex-col gap-2">
          {currentlyLearning.map((subject, idx) => (
            <div key={idx} className="bg-green-900 p-2 flex w-full rounded-md">
              {subject}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#264863] p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-1">Planning to try</h2>
        <p className="mb-4 text-gray-300">Things that caught my attention</p>
        <div className="flex flex-col gap-2">
          {thingsToTry.map((subject, idx) => (
            <div key={idx} className="bg-[#163249] p-2 flex w-full rounded-md">
              {subject}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
