import "./Modal.css";
import { createPortal } from "react-dom";

export default function Modal(props) {
  return createPortal(
    <>
      <div className="custom-modal-backdrop"></div>
      <div className="custom-modal">
        <button type="button" onClick={props.onClose}>
          X{" "}
        </button>
        <img
          src={props.artwork.image}
          alt={props.artwork.alt_text}
          style={{ height: "500px" }}
        />
      </div>
    </>,
    document.getElementById("modal-container")
  );
}
