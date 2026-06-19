"use client";

import  AnimalEditForm  from "../animalsfunctions/updateform";
import { useState } from "react";

export default function AnimalEditButton({ animal, allImages, token }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="animal-edit-button-wrapper">
      <button
        type="button"
        className="edit-btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        Rediger
      </button>
      {open && (
        <AnimalEditForm animal={animal} allImages={allImages} token={token} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}