import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import GetAnimals from "../../adopter/fetch";
import "./dashboard.css";

export default async function DashboardPage() {
    const cookieStore = await cookies();

    if (!cookieStore.has("token")) {
        redirect("/admin");
    }

    const animals = await GetAnimals();

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
                    <button className="edit-btn">
                        Rediger
                    </button>

                    <button className="delete-btn">
                        Slet
                    </button>
                </div>
            </div>
        </article>
    ))}
</div>
        </section>
    );
}