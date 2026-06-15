import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function DashboardPage(){

    const cookieStore = await cookies()

    const token = false

    if(!cookieStore.has("token")) redirect('/admin')




    return(
        <>
        <h2>Her kommer dyr</h2>
        </>
    )
}