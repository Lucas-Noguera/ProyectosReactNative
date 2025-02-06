import { API_KEY } from '../config'

function cleanHTML(html) {
  const cleanText = html.replace(/<\/?[^>]+(>|$)/g, '')
  return cleanText
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, '\'')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
}

export async function getLatestGames() {
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-metacritic&page_size=24`

  try {
    const response = await fetch(LATEST_GAMES)
    const json = await response.json()

    const games = await Promise.all(
      json.results.map(async (game) => {
        const gameDetails = await getGameDetails(game.id) 
        return {
          id: game.id,
          title: game.name,
          releaseDate: game.released,
          score: game.metacritic,
          image: game.background_image,
          description: cleanHTML(gameDetails.description), 
        }
      })
    )

    return games
  } catch (error) {
    console.error('Error al obtener la lista de juegos:', error)
    return []
  }
}

export async function getGameDetails(gameId) {
  const BASE_URL = `https://api.rawg.io/api/games/${gameId}`
  const PARAMS = `?key=${API_KEY}`
  
  try {
    const [detailsResponse, reviewsResponse] = await Promise.all([
      fetch(`${BASE_URL}${PARAMS}`),
      fetch(`${BASE_URL}/reviews${PARAMS}`)
    ])

    const detailsJson = await detailsResponse.json()
    const reviewsJson = await reviewsResponse.json()

    return {
      id: detailsJson.id,
      title: detailsJson.name,
      releaseDate: detailsJson.released,
      score: detailsJson.metacritic,
      image: detailsJson.background_image,
      description: cleanHTML(detailsJson.description),
      reviews: reviewsJson.results.slice(0, 3).map(review => ({
        id: review.id,
        username: review.user.username || 'Anonimo',
        text: review.text || 'Sin comentario',
        rating: review.rating
      }))
    }
  } catch (error) {
    console.error(`Error al obtener los detalles del juego ${gameId}:`, error)
    return {
      description: 'Descripción no disponible',
      reviews: []
    }
  }
}
