import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import GetAnimals from "../../adopter/fetch";
import "./dashboard.css";
import AnimalCreateButton from "../../../components/animalsfunctions/AnimalCreateButton"
import DeleteAnimalButton from "../../../components/animalsfunctions/animalDeleteButton"
import AnimalEditButton from "../../../components/animalsfunctions/animalEditButton";

export default async function DashboardPage() {
    const cookieStore = await cookies();

    if (!cookieStore.has("token")) {
        redirect("/admin");
    }

    const token = cookieStore.get("token")?.value;
    const animals = await GetAnimals();
    // fetch all available images/assets so the edit form can list them
    const assetsRes = await fetch("http://localhost:4000/api/v1/assets", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });
    const allImages = assetsRes.ok ? await assetsRes.json() : [];

    return (
        <section className="dashboard">
            <h2 className="dashboard-title">Admin</h2>

         <div className="animals-list">
    {animals?.map((animal) => (
        <article key={animal.id} className="animal-card">
            <img
                src={animal.asset.url}
                alt={animal.name}
                className="animal-image"
            />

            <div className="animal-info">
                <h3 className="animal-name">{animal.name}</h3>

                <div className="animal-actions">
                    <AnimalEditButton animal={animal} allImages={allImages} token={token} />

                    <DeleteAnimalButton animalId={animal.id} token={token} />
                </div>
            </div>
        </article>
    ))}
</div>
<AnimalCreateButton />

        </section>
    );
}