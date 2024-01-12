import { FormSchema } from "dynamic-builder-form";
import { QuestionFields } from "./fields";
import { QuizSessions, quizSessionId } from "./sessions";

export const questionSchema: FormSchema = {
    fields: {...QuestionFields},
    sessions: {
        [quizSessionId]: QuizSessions
    },
    sessionsById: [quizSessionId],
}