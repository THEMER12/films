import os
import httpx
import asyncio

TMDB_TOKEN = os.getenv("TMDB_TOKEN")
HEADER = {"Authorization": f"Bearer {TMDB_TOKEN}", "accept": "application/json"}

async def get_imdb_id(client, item):
    """Función interna para rescatar el tt_id sin frenar el flujo principal"""
    media_type = item.get("media_type")
    if media_type not in ["movie", "tv"]:
        return None
    
    ext_url = f"https://api.themoviedb.org/3/{media_type}/{item['id']}/external_ids"
    try:
        res = await client.get(ext_url, headers=HEADER)
        return res.json().get("imdb_id")
    except:
        return None

async def search(query: str):
    url = f"https://api.themoviedb.org/3/search/multi?query={query}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=HEADER)
        response.raise_for_status()
        data = response.json()

        results = data.get("results", [])
        
        tasks = [get_imdb_id(client, item) for item in results]
        
        imdb_ids = await asyncio.gather(*tasks)

        for item, imdb_id in zip(results, imdb_ids):
            item["imdb_id"] = imdb_id
            
        return results