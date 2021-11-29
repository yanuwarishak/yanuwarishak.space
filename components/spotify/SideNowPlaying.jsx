import { useState } from "react";
import { SpotifyIcon, ExpandIcon } from "../icons";
import useSWR from "swr";

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
