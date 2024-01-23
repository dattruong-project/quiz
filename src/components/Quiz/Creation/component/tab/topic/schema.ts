import { FormSchema } from "dynamic-builder-form";
import { TopicFields } from "./fields";
import { topicSessionId, TopicSessions } from "./sessions";

export const topicSchema: FormSchema = {
    fields: {...TopicFields},
    sessions: {
        [topicSessionId]: TopicSessions
    },
    sessionsById: [topicSessionId]    
}