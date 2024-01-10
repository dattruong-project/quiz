import { FormSession } from "dynamic-builder-form";
import { answerId, choicesId, codeId, questionId } from "./fields";

export const quizSessionId = "quizSession"

export const QuizSessions: FormSession = {
    fieldsById: [questionId,codeId, choicesId, answerId],
    id: quizSessionId,
    submit: {
        label: "Add"
    }
}
