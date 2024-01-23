import { FormSchema } from "dynamic-builder-form";
import { QuestionFields } from "./fields";
import { QuizSessions } from "./sessions";
import { questionSessionId } from "../../../constants";

export const questionSchema: FormSchema = {
    fields: {...QuestionFields},
    sessions: {
        [questionSessionId]: QuizSessions
    },
    sessionsById: [questionSessionId]
}