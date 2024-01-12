import { FormSession } from "dynamic-builder-form";
import { answerId, codeId, questionId, typeId } from "./fields";

export const quizSessionId = "quizSession"

export const QuizSessions: FormSession = {
    fieldsById: [questionId,codeId, typeId, answerId],
    id: quizSessionId,
    submit: {
        label: "Add"
    },
    hiddenButton: true
}
