import { FormsProvider } from "dynamic-builder-form"
import { LoginForm } from "./loginForm"

export const LoginScreen = () => {
    return <FormsProvider>
        <LoginForm />
    </FormsProvider>
}