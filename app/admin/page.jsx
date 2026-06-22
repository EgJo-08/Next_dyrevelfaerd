"use client"

import { LoginAction } from "../../actions/adminaction"
import { useActionState } from "react"
import "./admin.css"

const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(LoginAction, initialState)

    return (
        <div className="admin-login-page">
            <div className="login-card">
                <h1 className="login-title">Log ind</h1>

                <form action={formAction} className="login-form">
                    <div className="field">
                        <label htmlFor="username" className="field-label">
                            Brugernavn:
                        </label>

                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="input"
                            defaultValue={state.values.username}
                        />

                        {state.errors?.username && (
                            <p className="error">{state.errors.username}</p>
                        )}
                    </div>

                    <div className="field">
                        <label htmlFor="password" className="field-label">
                            Adgangskode:
                        </label>

                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input"
                            defaultValue={state.values.password}
                        />

                        {state.errors?.password && (
                            <p className="error">{state.errors.password}</p>
                        )}
                    </div>

                    {state.errors?.form && (
                        <p className="error">{state.errors.form}</p>
                    )}

                    <div className="actions">
                        <button
                            type="submit"
                            className="btn"
                            disabled={isPending}
                        >
                            {isPending ? "Logger ind..." : "Log ind"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}