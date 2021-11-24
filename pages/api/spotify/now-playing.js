import { getNowPlaying } from "@/lib/spotify";

export default async function handler(req, res) {
  const response = await getNowPlaying();
  if (response.status !== 200) {
    return res.status(200).json({ isPlaying: false });
  }
  const song = await response.json();

  return res.status(200).json(song);
}
