import { DictionaryComponentType, FormFields } from "dynamic-builder-form";

export const questionId = "question";
export const codeId = "code";
export const choicesId = "choices";
export const typeId = "type";
export const correctAnswerId = "correctAnswer";
export const addChoiceBtnId = "addChoice";
export const scoreId = "score";
export const answerId = "answers";
export const questionCardId = "questions";

export const QuestionLs = [{
    label: "Multiple choice",
    value: "MCQs"
}, {
    label: "Multiple Answers",
    value: "MAQs"
}, {
    label: "True/ False Question",
    value: "boolean"
}]

export const QuestionFields: FormFields = {
    [questionId]: {
        id: questionId,
        meta: {
            placeholder: "Please Input your Question",
        },
        type: DictionaryComponentType.Input
    },
    [codeId]: {
        id: codeId,
        meta: {
            placeholder: "Please Input your code",
            rows: 10
        },
        type: "area",
    },
    [choicesId]: {
        id: choicesId,
        data: QuestionLs,
        meta: {
            placeholder: "Please Select your choice",
            defaultOptions: QuestionLs[0],
        },
        type: DictionaryComponentType.Select,
        grid: {
            lg: 12
        }
    },
    [answerId]: {
        id: answerId,
        type: "question-created"
    }
}