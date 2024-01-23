import { ExtraValidation } from "dynamic-builder-form"

export const questionExtraValidation: ExtraValidation = {
  validateCardArr : () => (fieldValue: string[]) => {
    return fieldValue && fieldValue.length !== 0;
  }
}