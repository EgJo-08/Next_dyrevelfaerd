export async function GetAnimal(id) {
  const res = await fetch(
    `http://localhost:4000/api/v1/animals/${id}`,
  );

  return res.json();
}

export default async function GetAnimals() {
  const res = await fetch(
    "http://localhost:4000/api/v1/animals",
  );

  return res.json();
}