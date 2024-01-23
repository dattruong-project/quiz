import { DictionaryComponentType, FormFields } from "dynamic-builder-form";
import { topicId, levelId, totalScoreId, totalQuestionsId, totalTimeId } from "../../../constants";

const defaultLevel = [
    {
        label: "Basic",
        value: "basic"
    },
    {
        label: "Intermediate",
        value: "intermediate"
    }
]

export const TopicFields: FormFields = {
    [topicId]: {
        id: topicId,
        meta: {
            placeholder: "Please Input your Topic",
        },
        type: DictionaryComponentType.Input
    },
    [levelId]: {
        id: levelId,
        data: defaultLevel,
        type: DictionaryComponentType.Select,
        meta: {
            defaultOptions: defaultLevel[0],
        }
    },
    [totalScoreId]: {
        id: totalScoreId,
        type: DictionaryComponentType.Input,
        meta: {
            placeholder: "ToTal Score",
        },
    },
    [totalQuestionsId]: {
        id: totalQuestionsId,
        type: DictionaryComponentType.Input,
        meta: {
            placeholder: "ToTal Question",
        },
    },
    [totalTimeId]: {
        id: totalTimeId,
        type: DictionaryComponentType.Input,
        meta: {
            placeholder: "ToTal Time",
        },
    }
}
