import { FormSessions } from "dynamic-builder-form";
import { loginSessionId, passwordId, usernameId } from "./constants";

export const loginSession: FormSessions = {
    [loginSessionId]: {
        fieldsById: [usernameId, passwordId],
        id: loginSessionId,
        submit: {
            label: "Login",
        }
    }
}