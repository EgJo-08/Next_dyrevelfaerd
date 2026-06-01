"use client";
import { useEffect, useState } from "react";
import GetAnimals from "./fetch";
import "./adopter.css";
import Link from "next/link";

export default function Adopter() {
  const [animals, setAnimals] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await GetAnimals();
      setAnimals(data);
    }

    fetchData();
  }, []);

  const visibleAnimals = showAll ? animals : animals.slice(0, 6);

  return (
    <section className="adopter-section">
  <h2>
    Dyr hos os <span>i øjeblikket 15 dyr</span>
  </h2>

  <article className="Animal-container">
{visibleAnimals.map((animal) => (
  <Link key={animal.id} href={`/adopter/${animal.id}`}>
    <article className="animal">
      <img src={animal.asset.url} alt={animal.name} />

      <div className="animal-content">
        <h3>{animal.name}</h3>

        <p>{animal.description}</p>

        <small>Været på internat i 12 dage.</small>
      </div>
    </article>
  </Link>
))}
  </article>

  <button onClick={() => setShowAll(!showAll)}>
    {showAll ? "Vis færre dyr" : "Vis flere dyr"}
  </button>
</section>
  );
}