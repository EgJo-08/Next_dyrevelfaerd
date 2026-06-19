"use client";

import { deleteAnimalApi } from "../../actions/animalApi";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteAnimalButton({ animalId, token }) {
  const [loading, setLoading] = useState(false);
    const Router = useRouter()
  async function handleDelete() {
    try {
      setLoading(true);

      await deleteAnimalApi(animalId, token);


        Router.refresh();
   
    } finally {
      setLoading(false);
    }
  }
  

  return (
    <button className="delete-btn" onClick={handleDelete} disabled={loading}>
      {loading ? "Sletter..." : "Slet"}
    </button>
  );
}