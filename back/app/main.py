from fastapi import FastAPI
from app.services import tmdb

app = FastAPI()

@app.get("/search")
async def search_endpoint(q: str):
    results = await tmdb.search(q)
    return results