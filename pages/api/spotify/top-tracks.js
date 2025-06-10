import { getAccessToken, TOP_TRACKS_ENDPOINT } from '@/lib/spotify'

export default async function handler(req, res) {
  try {
    const { access_token } = await getAccessToken()

    const response = await fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })

    if (!response.ok) {
      console.error('Failed to fetch top tracks:', response.statusText)
      res.status(500).json({ error: 'Failed to fetch top tracks' })
      return
    }

    const { items } = await response.json()

    const tracks = items.map((track) => ({
      image: track.album.images[1]?.url, // optional chaining in case images are missing
      source: track.external_urls.spotify,
      artists: track.artists.map((artist) => artist.name).join(', '),
      title: track.name,
    }))

    res.setHeader('Cache-Control', 'public, s-maxage=604800, stale-while-revalidate=86400')

    res.status(200).json({ tracks })
  } catch (error) {
    console.error('Top tracks handler error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
