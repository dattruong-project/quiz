import { FormSession } from "dynamic-builder-form";
import { topicId, levelId, totalScoreId, totalQuestionsId, totalTimeId } from "../../../constants";

export const topicSessionId = "topicSession"

export const TopicSessions: FormSession = {
    fieldsById: [topicId, levelId, totalScoreId, totalQuestionsId, totalTimeId],
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