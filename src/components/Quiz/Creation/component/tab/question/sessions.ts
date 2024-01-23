import { FormSession } from "dynamic-builder-form";
import { answerGroup, answerId, codeId, questionId, questionSessionId, typeId } from "../../../constants";

export const QuizSessions: FormSession = {
    fieldsById: [questionId,codeId, typeId, answerGroup],
    id: questionSessionId,
    submit: {
        label: "Add"
    },
    hiddenButton: true
}
