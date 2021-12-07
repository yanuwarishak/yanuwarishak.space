import Image from "next/image";

export default function SongList({ tracks }) {
  return (
    <div className="flex flex-col">
      {tracks.map((track, idx) => (
        <a
          className="cursor-pointer grid grid-cols-tracklist mb-1 py-2 hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
          href={track.source}
          key={track.title}
          aria-label={track.title}
        >
          <p className="mx-2 text-gray-400 text-center w-5">{idx + 1}</p>
          <div className="relative mx-1 min-w-max">
            <Image
              width="40"
              height="40px"
              src={track.image}
              alt="Album Art"
            />
          </div>
          <div className="flex flex-col ml-2">
            <p className="font-semibold text-gray-200 leading-tight first-line:leading-none">{track.title}</p>
            <p className=" font-normal text-gray-400">{track.artists}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
