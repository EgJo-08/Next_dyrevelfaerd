"use client";

import { useState } from "react";
import AnimalCreate from "./animalform";

export default function AnimalCreateButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOpen((prev) => !prev)}>
        tilføj dyr
      </button>
      {open && <AnimalCreate />}
    </div>
  );
}
