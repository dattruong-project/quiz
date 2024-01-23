import { FormsProvider } from "dynamic-builder-form"
import { LoginForm } from "./loginForm"

const LoginScreen = () => {
    return <FormsProvider>
        <LoginForm />
    </FormsProvider>
}

export default LoginScreen;