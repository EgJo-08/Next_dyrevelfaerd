"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import z from "zod"

const loginSchema = z.object({
    username: z.string().min(1, "Brugernavn skal udfyldes"),
    password: z.string().min(4, "Password skal være mindst 4 karakter")
})


export async function LoginAction(previousState, formdata) {
    const cookieStore = await cookies()
    const username = formdata.get("username")
    const password = formdata.get("password")


    const result = loginSchema.safeParse({username, password})

    if(!result.success){
        return{
            values: {
                username, password
            },
            errors: z.flattenError(result.error).fieldErrors
        }
    }



    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })




    if(!response.ok) {
        return{
            values: {username, password},
            errors:     {form: ["forkert brugernavn eller adganskode"]}
        }
    }


    const data = await response.json()
    cookieStore.set("token", data.token)
    cookieStore.set("validUntil", data.validUntil)
    redirect("/admin/dashboard")
}