import { useLoaderData } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../api";
import Card from "../Card";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Bookmarks() {
  const bookmarks = useLoaderData();
  const [artworks, setArtworks] = useState(bookmarks);
  const notify = (text) => toast(text);
  function onAdd(props) {
    notify('Added "' + props.artwork.title + '" to bookmarks!');
    addFavorite(props.artwork);
  }
  function onDelete(props) {
    notify('Deleted "' + props.artwork.title + '" from bookmarks!');
    deleteFavorite(props.artwork);
    const newList = artworks.filter((item) => item.id !== props.artwork.id);
    setArtworks(newList);
  }
  return (
    <div className="contact-page">
      <h1>Bookmarks</h1>
      <div>
        {artworks.map((artwork) => {
          return (
            <div key={artwork.id}>
              <Card artwork={artwork} onAdd={onAdd} onDelete={onDelete} />
              <p>Added: {new Date(artwork.timestamp).toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
