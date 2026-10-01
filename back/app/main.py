from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.services import tmdb

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
async def search_endpoint(q: str):
    results = await tmdb.search(q)
    return results

@app.get("/trending")
async def trending_endpoint():
    results = await tmdb.trending()
    return results

@app.get("/popularMovies")
async def popular_movies_endpoint():
    results = await tmdb.popularMovies()
    return results