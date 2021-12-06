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
        <div className="flex flex-col relative">
          <div className="absolute -top-1 -right-1 w-5">
            <SpotifyIcon />
          </div>
          <p className="text-sm text-normal">Now Playing:</p>
          {song.link && (
            <a href={song.link} target="_blank" rel="noopener noreferrer">
              <p className="font-semibold text-normal md:text-lg hover:underline cursor-pointer">
                {song.title}
              </p>
            </a>
          )}
          {!song.link && (
            <p className="font-semibold text-normal md:text-lg hover:underline cursor-pointer">
              {song.title}
            </p>
          )}
          <p className="text-sm align-text-bottom">
            by {song.artist ? song.artist : "Local File"}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <a
            className="mx-auto cursor-pointer w-10 hover:opacity-80"
            href="https://open.spotify.com/user/212rshe3omsf3edodvt4rqb7q?si=5b3281c13e964fe4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Yanuwar Ishak's Spotify Account"
          >
            <SpotifyIcon />
          </a>
          <p className="mx-auto text-sm">
            Currently not playing music on Spotify
          </p>
        </div>
      )}
    </div>
  );
}
