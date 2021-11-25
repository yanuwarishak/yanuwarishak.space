import { useState } from "react";
import useSWR from "swr";

function SpotifyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1333.33 1333.3"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z"
        fill="#181818"
        fillRule="nonzero"
      />
    </svg>
  );
}

function ExpandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      x="0px"
      y="0px"
    >
      <path
        d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
	C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
	c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
	C261.465,190.251,261.465,199.749,255.606,205.606z"
      />
    </svg>
  );
}

export default function SideNowPlaying() {
  const [isShown, setShown] = useState(true);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/spotify/now-playing", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 480000,
  });

  let song = {
    isPlaying: false,
    artist: "Local File",
    title: "",
    link: "",
    image: "",
  };

  if (data) {
    song = {
      isPlaying: data.is_playing,
      title: data?.item?.name,
      artist: data?.item?.artists?.map((_artist) => _artist.name).join(", "),
      link: data?.item?.external_urls?.spotify,
      image: data?.item?.album?.images[1]?.url,
    };
  }

  return (
    <aside className="bg-[#1DB954] w-48 flex flex-col justify-center items-center text-black text-center rounded-md relative">
      {isShown ? (
        <>
          {song.isPlaying ? (
            <div className="cursor-default justify-center items-center flex flex-col p-2">
              <div className="absolute w-5 h-5 top-2 left-2">
                <SpotifyIcon />
              </div>
              <p className="font-semibold text-sm md:text-normal mb-2">
                Now Playing:
              </p>
              <div className="mb-2">
                {song.image ? (
                  <img
                    src={song.image}
                    width="80"
                    height="80"
                    alt={song.title}
                  />
                ) : (
                  <p className="w-20 h-20 bg-gray-400 text-center p-4 text-gray-700 text-4xl">
                    X
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                {song.link && (
                  <a href={song.link} target="_blank" rel="noopener noreferrer">
                    <p className="font-semibold hover:underline cursor-pointer">
                      {song.title}
                    </p>
                  </a>
                )}
                {!song.link && <p className="font-semibold">{song.title}</p>}
                <p className="font-normal">
                  by {song.artist ? song.artist : "Local File"}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col p-4">
              <div className="mx-auto w-10 mb-2">
                <SpotifyIcon />
              </div>
              <p className="mx-auto text-sm">
                Currently not playing music on Spotify
              </p>
            </div>
          )}
          <div className="w-full flex flex-col items-center">
            <hr className="border-1 border-[#19a149] w-full hidden md:block" />
            <div
              className="w-4 h-4 cursor-pointer my-2"
              onClick={() => setShown(false)}
            >
              <ExpandIcon />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-row justify-center items-center gap-1 py-2">
          <div
            className="w-4 h-4 rotate-180 cursor-pointer"
            onClick={() => setShown(true)}
          >
            <ExpandIcon />
          </div>
          <p
            className="text-black cursor-pointer font-semibold"
            onClick={() => setShown(true)}
          >
            Spotify
          </p>
        </div>
      )}
    </aside>
  );
}
