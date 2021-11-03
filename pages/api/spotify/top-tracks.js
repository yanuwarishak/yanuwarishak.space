import { getTopTracks } from "@/lib/spotify";

export default async function handler(req, res) {
  const response = await getTopTracks();
  const { items } = await response.json();
  const tracks = items.map((track) => ({
    image: track.album.images[1].url,
    source: track.external_urls.spotify,
    artists: track.artists.map((artist) => artist.name).join(", "),
    title: track.name,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400"
  );

  return res.status(200).json({ tracks });
}
