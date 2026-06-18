"use server";
 
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createAnimalApi, deleteAnimalApi, updateAnimalApi} from "../actions/animalApi"
 
function validateAdminCookie(token, validUntil) {
    if (!token) redirect("/admin");
 
    const expires = Number(validUntil);
    if (!validUntil || Number.isNaN(expires) || expires < Date.now()) redirect("/admin");
}
 
export async function createAnimal(formData) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const validUntil = cookieStore.get("validUntil")?.value;
 
    validateAdminCookie(token, validUntil);
 
    const animalData = {
        name: formData.get("name"),
        description: formData.get("description"),
        age: Number(formData.get("age")),
        assetId: Number(formData.get("assetId")),
    };
 
    try {
        await createAnimalApi(animalData, token);
        revalidatePath("/admin/dashboard");
    }
 catch (error) {
    console.error(error);
    return;
}
 
redirect("/admin/dashboard");
}