"use server";

export async function createAnimalApi(animalData, token) {
  const response = await fetch("http://localhost:4000/api/v1/animals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(animalData),
  });

  if (!response.ok) {
    throw new Error("Kunne ikke opprette dyret");
  }

  return await response.json();
}