import useSWR from "swr";
import SongList from "./SongList";

export default function TopTracks() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/spotify/top-tracks", fetcher, {
    revalidateOnFocus: false,
  });
  if (error) console.error(error);

  return (
    <div className="flex flex-col gap-1">
      {!data ||
        (error && (
          <div className="flex flex-col p-2 bg-gray-800">
            <h4 className="font-semibold text-gray-200">
              It's either loading data or Spotify is down
            </h4>
            <p className=" font-normal text-gray-400">
              try again in a few minutes
            </p>
          </div>
        ))}
      {data && <SongList tracks={data.tracks} />}
    </div>
  );
}
