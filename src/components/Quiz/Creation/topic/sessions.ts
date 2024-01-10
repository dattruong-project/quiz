import { FormSession } from "dynamic-builder-form";
import { titleId, levelId, totalScoreId, totalQuestionsId, totalTimeId } from "../constants";

export const topicSessionId = "topicSession"

export const TopicSessions: FormSession = {
    fieldsById: [titleId, levelId, totalScoreId, totalQuestionsId, totalTimeId],
    id: topicSessionId,
    meta: {
        tab : {
            label: "Add Topic"
        }
    },
    submit: {
        label: "Add"
    }
}