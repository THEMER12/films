const baseUrl = "http://localhost:8000";

export async function search(query: string) {
  const response = await fetch(`${baseUrl}/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }
  return response.json();
}

export async function trending() {
  const response = await fetch(`${baseUrl}/trending`);
  if (!response.ok) {
    throw new Error("Failed to fetch trending results");
  }
  return response.json();
}

export async function popularMovies() {
  const response = await fetch(`${baseUrl}/popularMovies`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  return response.json();
}