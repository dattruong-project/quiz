import { ValidateRule } from "dynamic-builder-form"

export const usernameValidation = {
    usernameRequired: {
        value: true,
        message: "Username Required",
        key: ValidateRule.required,
    },
}

export const passwordValidation = {
    passwordRequired: {
        value: true,
        message: 'Password Required',
        key: ValidateRule.required,
    },
}