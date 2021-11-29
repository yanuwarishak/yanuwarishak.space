import useSWR from "swr";
import { SpotifyIcon } from "@/components/icons";

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
            <h1 className="text-sm text-normal">Now Playing:</h1>
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
