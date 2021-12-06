import useSWR from "swr";
import Image from "next/image";
import { useSpotifyContext } from "hooks/context/state";
import { SpotifyIcon, ExpandIcon } from "../icons";

export default function SideNowPlaying() {
  const { isOpen, setOpen } = useSpotifyContext();

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
    <div className="bg-[#1DB954] w-full flex flex-col justify-center items-center text-black text-center rounded-md relative">
      {isOpen ? (
        <>
          {song.isPlaying ? (
            <div className="cursor-default justify-center items-center flex flex-col p-2">
              <div className="absolute top-2 left-2">
                <SpotifyIcon size="20px" />
              </div>
              <p className="font-semibold text-sm md:text-normal mb-2">
                Now Playing:
              </p>
              <div className="relative mb-2">
                {song.image ? (
                  <Image
                    className="rounded-md"
                    height={96}
                    width={96}
                    src={song.image}
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
              <div className="mx-auto mb-2">
                <SpotifyIcon size="40px" />
              </div>
              <p className="mx-auto text-sm">
                Currently not playing music on Spotify
              </p>
            </div>
          )}
          <div className="w-full flex flex-col items-center">
            <hr className="border-1 border-[#19a149] w-full hidden md:block" />
            <div
              className="cursor-pointer my-2"
              onClick={() => setOpen(!isOpen)}
            >
              <ExpandIcon />
            </div>
          </div>
        </>
      ) : (
        <div
          className="flex flex-row justify-center items-center gap-1 py-2"
          onClick={() => setOpen(!isOpen)}
        >
          <div className="rotate-180 cursor-pointer">
            <ExpandIcon />
          </div>
          <p className="text-black cursor-pointer font-semibold">Spotify</p>
        </div>
      )}
    </div>
  );
}
