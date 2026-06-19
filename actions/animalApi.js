"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

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


export async function deleteAnimalApi(id, token) {
  const response = await fetch(
    `http://localhost:4000/api/v1/animals/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Kunne ikke slette dyret");
  }
}

export async function updateAnimal(formData) {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const animalId = formData.get("animalId");

  const animalData = {
    name: formData.get("name"),
    description: formData.get("description"),
    age: Number(formData.get("age")),
    assetId: Number(formData.get("assetId")),
  };

  try {
    await updateAnimalApi(animalData, token, animalId);
    revalidatePath("/admin/dashboard");
  } catch (error) {
    console.error(error);
    return;
  }

  redirect("/admin/dashboard");
}

export async function updateAnimalApi(animalData, token, animalId) {
  const response = await fetch(
    `http://localhost:4000/api/v1/animals/${animalId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(animalData),
    }
  );

  if (!response.ok) {
    throw new Error("Kunne ikke opdatere dyret");
  }

  return await response.json();
}