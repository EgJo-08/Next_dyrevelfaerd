"use client";

import { useState } from "react";
import AnimalCreate from "./animalform";
import "./createanimals.css";

export default function AnimalCreateButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="animal-create-button-wrapper">
      <button type="button" className="animal-create-button" onClick={() => setOpen((prev) => !prev)}>
        tilføj dyr
      </button>
      {open && <AnimalCreate />}
    </div>
  );
}
