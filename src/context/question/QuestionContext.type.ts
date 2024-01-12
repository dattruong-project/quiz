import { UseFormReturn } from "dynamic-builder-form/dist/form-controller";
import { Question } from "../../data/QuizQuestions";

export interface QuestionWithContext extends Question  {
    context?: UseFormReturn;
}

export type QuestionContextTypes = {
    questions: QuestionWithContext[];
    addQuestion: () => void,
    removeQuestion: (index: number) => void,
    onSubmit: (values: any) => void
}