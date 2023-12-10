import {FormEvent} from "react";

export default function LoginForm() {
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit}>
            <label>ID:<input type={"text"}/></label>
            <label>PW:<input type={"password"}/></label>
        </form>
    )
}