import useSWR from "swr";
import SongList from "./SongList";

export default function TopTracks() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/spotify/top-tracks", fetcher);
  const skeleton = [...Array(8).keys()];
  return (
    <div>
      {!data &&
        skeleton.map((item) => (
          <div
            key={item}
            className="my-2 w-full h-12 bg-gray-800 animate-pulse"
          ></div>
        ))}
      {data && <SongList tracks={data.tracks} />}
    </div>
  );
}
