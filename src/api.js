function _fetch(url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

export function fetchArtists() {
  return _fetch("http://localhost:3001/artists");
}

export function fetchArtist(id) {
  return _fetch(`http://localhost:3001/artworks/id`);
}

export function fetchCommentsForArtist(id) {
  return _fetch(`http://localhost:3001/artworks/${id}/comments`);
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
  artwork["timestamp"] = Date.now();
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

export function deleteFavorite(artwork) {
  const id = artwork.id;
  return fetch(`http://localhost:3001/favorites/${id}`, {
    method: "DELETE",
  }).then((response) => {
    return response.json();
  });
}

export function fetchComments() {
  return _fetch("http://localhost:3001/comments");
}

export function fetchComment(id) {
  return _fetch(`http://localhost:3001/comments/${id}`);
}

export function saveComment(body, id) {
  return fetch("http://localhost:3001/comments", {
    method: "POST",
    body: JSON.stringify({
      body: body,
      id: id,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function deleteComment(commentId) {
  return fetch(`http://localhost:3001/comments/${commentId}`, {
    method: "DELETE",
  });
}

export function updateComment(commentId, updatedBody) {
  return fetch(`http://localhost:3001/comments/${commentId}`, {
    method: "PATCH",
    body: JSON.stringify({
      body: updatedBody,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    if (response.status >= 400) {
      return Promise.reject();
    }

    return response.json();
  });
}
