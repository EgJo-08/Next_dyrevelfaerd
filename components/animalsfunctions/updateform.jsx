"use client";

import "./update.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AnimalEditForm({ animal, allImages, token, onClose }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const form = new FormData(e.target);
            const animalId = form.get("animalId");
            const body = {
                name: form.get("name"),
                description: form.get("description"),
                age: Number(form.get("age")),
                assetId: Number(form.get("assetId")),
            };

            console.log("Updating animal", animalId, body);

            let res = await fetch(`http://localhost:4000/api/v1/animals/${animalId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                let text;
                try {
                    text = await res.text();
                } catch (e) {
                    text = res.statusText || String(res.status);
                }
                throw new Error(`Status ${res.status}: ${text}`);
            }

            router.refresh();
            onClose?.();
        } catch (err) {
            console.error(err);
            setError(err.message || String(err));
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="animal-edit-form">
    <input
        type="hidden"
        name="animalId"
        id="animalId"
        value={animal.id ?? animal._id}
    />

    <div className="form-group">
        <label htmlFor="name" className="form-label">
            navn
        </label>
        <input
            type="text"
            id="name"
            name="name"
            defaultValue={animal.name}
            required
            className="form-input"
        />
    </div>

    <div className="form-group">
        <label htmlFor="description" className="form-label">
            beskrivning
        </label>
        <textarea
            id="description"
            name="description"
            defaultValue={animal.description}
            required
            className="form-textarea"
        />
    </div>

    <div className="form-group">
        <label htmlFor="age" className="form-label">
            alder
        </label>
        <input
            type="number"
            id="age"
            name="age"
            defaultValue={animal.age}
            min="0"
            required
            className="form-input"
        />
    </div>

    <div className="form-group">
        <label htmlFor="assetId" className="form-label">
            Billed id
        </label>
        <select
            id="assetId"
            name="assetId"
            defaultValue={String(animal.asset?.id ?? "")}
            required
            className="form-select"
        >
            <option value="" disabled>
                vælg billed
            </option>

            {allImages?.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.id}
                </option>
            ))}
        </select>
    </div>

    {error && <div className="form-error">{error}</div>}

    <button
        type="submit"
        disabled={loading}
        className="form-submit-btn"
    >
        {loading ? "Opdaterer..." : "opdater dyr"}
    </button>
</form>
    );
}