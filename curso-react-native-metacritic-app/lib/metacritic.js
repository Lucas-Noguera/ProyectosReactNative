const API_KEY = '128ec69e718149348fbc7518eaeeb227' // Sustituye esto con tu clave de API de RAWG

export async function getLatestGames() {
  const LATEST_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-metacritic&page_size=24`

  const rawData = await fetch(LATEST_GAMES)
  const json = await rawData.json()

  return json.results.map((item) => {
    const { name, slug, released, background_image, metacritic, description_raw } = item

    return {
      title: name,
      slug,
      releaseDate: released,
      image: background_image,
      score: metacritic,
      description: description_raw || 'No description available.',
    }
  })
}

export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://api.rawg.io/api/games/${slug}?key=${API_KEY}`

  const rawData = await fetch(GAME_DETAILS)
  const json = await rawData.json()

  const { name, description_raw, metacritic, background_image, released, ratings, developers } = json

  // Obtén las reseñas (RAWG no tiene reseñas detalladas, pero puedes usar ratings)
  const reviews = ratings.map((rating) => ({
    title: rating.title,
    count: rating.count,
    percent: rating.percent,
  }))

  return {
    title: name,
    description: description_raw || 'No description available.',
    score: metacritic,
    releaseDate: released,
    image: background_image,
    developers: developers.map((dev) => dev.name).join(', '),
    reviews,
  }
}
