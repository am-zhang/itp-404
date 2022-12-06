function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchPosts() {
  return _fetch("https://jsonplaceholder.typicode.com/posts?_expand=user");
}

export function fetchPost(postId) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`
  );
}

export function fetchCommentsForPost(postId) {
  return _fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
}

export function fetchArtworks() {
  return _fetch(`http://localhost:3001/artworks`);
}

export function fetchArtwork(id) {
  return _fetch(`http://localhost:3001/artworks/${id}`);
}

export function fetchFavorites() {
  return _fetch(`http://localhost:3001/favorites`);
}

export function addFavorite(artwork) {
  return fetch("http://localhost:3001/favorites", {
    method: "POST",
    body: JSON.stringify(artwork),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function deleteFavorite(id) {
  return fetch(`http://localhost:3001/favorites/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}
