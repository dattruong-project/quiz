import { DictionaryComponentType, FormSchema } from "dynamic-builder-form";
import { loginSessionId, passwordId, usernameId } from "./constants";
import { loginSession } from "./sessions";
import { passwordValidation, usernameValidation } from "./validations";

export const loginSchema: FormSchema = {
    fields: {
        [usernameId]: {
            id: usernameId,
            meta: {
                placeholder: "Please Input Username",
            },
            type: DictionaryComponentType.Input,
            validation: usernameValidation,
            grid: {
                xs: 12
            }
        },
        [passwordId]: {
            id: passwordId,
            type: DictionaryComponentType.Input,
            meta: {
                placeholder: "Please Input Password"
            },
            validation: passwordValidation,
            grid: {
                xs: 24
            }
        },
    },
    sessions: loginSession,
    sessionsById: [loginSessionId]
}