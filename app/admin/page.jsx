"use client"

import { LoginAction } from "./action"
import { useActionState } from "react"

const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}

export default function LoginPage(){
    const [state, formAction, isPending] = useActionState(LoginAction, initialState)
    return(
        <>
        <h1>log ind</h1>

        <form action={formAction}>
            <div>
                <label htmlFor="username">Brugernavn:</label>
                <input type="text" name="username" id="username" defaultValue={state.values.username}/>
                {state.errors?.username && <p>{state.errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Adganskode:</label>
                <input type="password" name="password" id="password" defaultValue={state.values.password} />
                {state.errors?.password && <p>{state.errors.password}</p>}
            </div>
            {state.errors?.form && (<p>{state.errors.form}</p>)}
            <button type="submit" disabled={isPending}>{isPending ? "Logger ind..." : "Log ind"}</button>
        </form>
        </>
    )
}