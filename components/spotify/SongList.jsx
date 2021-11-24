export default function SongList({ tracks }) {
  return (
    <div className="flex flex-col">
      {tracks.map((track, idx) => (
        <a
          className="cursor-pointer flex flex-row mb-1 py-2 hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
          href={track.source}
          key={track.title}
        >
          <p className=" self-center mx-2 text-gray-400 text-center w-5">
            {idx + 1}
          </p>
          <img
            className="self-center mx-2 w-[40px] h-[40px]"
            width="40"
            height="40px"
            src={track.image}
            alt="Album Art"
          />
          <div className="flex flex-col ml-2">
            <h4 className="font-semibold text-gray-200">{track.title}</h4>
            <p className=" font-normal text-gray-400">{track.artists}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
