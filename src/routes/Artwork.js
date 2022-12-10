import { Outlet, useLoaderData } from "react-router-dom";
import { useState } from "react";
import Modal from "../Modal";

export default function Artwork() {
  const artwork = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="post-page">
      <h1>{artwork.title}</h1>
      <h4>{artwork.artist}</h4>
      <p>{artwork.year}</p>
      <img
        src={artwork.image}
        alt={artwork.alt_text}
        style={{ height: "500px" }}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      />
      {isModalOpen && (
        <Modal
          artwork={artwork}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <p>Modal body goes here.</p>
        </Modal>
      )}

      <Outlet />
    </div>
  );
}
