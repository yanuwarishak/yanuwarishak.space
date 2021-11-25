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

export default function NowPlaying() {
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
  };

  if (data) {
    song = {
      isPlaying: data.is_playing,
      title: data?.item?.name,
      artist: data?.item?.artists?.map((_artist) => _artist.name).join(", "),
      link: data?.item?.external_urls?.spotify,
    };
  }

  return (
    <div className="p-4 w-full bg-[#1DB954] text-black">
      {song.isPlaying ? (
        <div className="flex flex-row items-center">
          <div className="w-5 xs:w-10 mr-4">
            <SpotifyIcon />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm text-normal">
              Now Playing:
            </h1>
            {song.link && (
              <a href={song.link} target="_blank" rel="noopener noreferrer">
                <h2 className="font-semibold text-normal md:text-lg hover:underline cursor-pointer">
                  {song.title}
                </h2>
              </a>
            )}
            {!song.link && (
              <h2 className="font-semibold text-normal md:text-lg hover:underline cursor-pointer">
                {song.title}
              </h2>
            )}
            <h2 className="text-sm align-text-bottom">
              by {song.artist ? song.artist : "Local File"}
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <a
            className="mx-auto cursor-pointer w-10 hover:opacity-80"
            href="https://open.spotify.com/user/212rshe3omsf3edodvt4rqb7q?si=5b3281c13e964fe4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpotifyIcon />
          </a>
          <h1 className="mx-auto text-sm">
            Currently not playing music on Spotify
          </h1>
        </div>
      )}
    </div>
  );
}
