import { GetAnimal } from "../fetch";


export default async function Profile({ params }) {
  const { id } = await params;

  try {
    const animal = await GetAnimal(id);
    console.log("Animal:", animal);



    return (
      <>
        <h1>{animal.name}</h1>
        <img src={animal.asset.url} alt="" />
        <p>{animal.description}</p>
      </>
    );
  } catch (error) {
    console.error("Error fetching animal:", error);
    return <div>Error loading animal: {error.message}</div>;
  }
}