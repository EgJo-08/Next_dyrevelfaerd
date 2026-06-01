export async function GetAnimal(id) {
  const res = await fetch(
    `http://localhost:4000/api/v1/animals/${id}`,
    {
      next: { revalidate: 60 }, 
    }
  );

  return res.json();
}

export default async function GetAnimals() {
  const res = await fetch(
    "http://localhost:4000/api/v1/animals",
    {
      next: { revalidate: 60 }, 
    }
  );

  return res.json();
}