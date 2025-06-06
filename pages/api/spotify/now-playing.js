import { getAccessToken, NOW_PLAYING_ENDPOINT } from '@/lib/spotify'

export default async function handler(req, res) {
  const { access_token } = await getAccessToken()

  let response
  try {
    response = await fetch(NOW_PLAYING_ENDPOINT, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    const status = response.status
    const contentType = response.headers.get('content-type')

    if (!response.ok || status !== 200) {
      res.status(200).json({ isPlaying: false })
      return
    }

    if (contentType && contentType.includes('application/json')) {
      try {
        const nowPlaying = await response.json()
        res.status(200).json(nowPlaying)
        return
      } catch (jsonError) {
        console.error('Failed to parse JSON:', jsonError)
        res.status(200).json({ isPlaying: false })
        return
      }
    } else {
      const text = await response.text()
      console.warn('Unexpected non-JSON response body:', text)
      res.status(200).json({ isPlaying: false })
      return
    }
  } catch (error) {
    console.error('Fetch error:', error)
    res.status(200).json({ isPlaying: false })
    return
  }
}
