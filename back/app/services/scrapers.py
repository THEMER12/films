import httpx

HEADER = {"Authorization": f"Bearer {TMDB_TOKEN}", "accept": "application/json"}

async def get streams(imdb_id):

scrapers = {
    "torrentio": "https://torrentio.strem.fun/stream/",
    "torrentio_lite":"https://torrentio-lite.strem.fun/lite/stream/",
    "piratebay": "https://thepiratebay-plus.strem.fun/stream/",
    "yts":"http://stremio-yts.herokuapp.com/stream/"
}