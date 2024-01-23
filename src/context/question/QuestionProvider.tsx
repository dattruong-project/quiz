import { ReactNode, useState } from "react"
import { QuestionContext } from "./QuestionContext"
import { QuestionContextTypes, QuestionWithContext } from "./QuestionContext.type"
import { useTopic } from "../topic/TopicContext"

type QuestionProps = {
    children: ReactNode
}

const QuestionProvider = ({ children }: QuestionProps) => {
    const { addQuestionToTopic, currentAddedTopic } = useTopic();

    const questionDefault: QuestionWithContext = {
        question: "",
        choices: [],
        type: "MCQs",
        correctAnswers: [],
        score: 10,
        code: ""
    }

    const [questions, setQuestion] = useState<QuestionWithContext[]>([]);

    const addQuestion = () => {
        const newQuestion = [...questions, questionDefault];
        setQuestion(newQuestion);
    };

    const generateQuestion = () => {
        const {totalQuestions,totalScore} = currentAddedTopic;
        const newQuestions = Array.from({ length: totalQuestions }, () => ({ ...questionDefault,...{score: totalScore / totalQuestions} }));
        setQuestion((prevQuestions) => [...prevQuestions, ...newQuestions]);
    }

    const removeQuestion = (index: number) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestion(updatedQuestions);
    };

    const onSubmit = () => {
        questions.map((data: any) => {
            const value: any = data.context?.getValues();
            if (value) {
                const {question,choices, correctAnswers, types, code} = value;
                data.choices = choices;
                data.correctAnswers = correctAnswers;
                data.question = question;
                data.code = code;
                const selectedQuestionType = types.find((type: any) => type.selected);
                if (selectedQuestionType) {
                    data.type = selectedQuestionType.type;
                }
            }
        });
        const {topic} = currentAddedTopic;
        addQuestionToTopic(topic,questions);
    }

    const questionContextValue: QuestionContextTypes = {
        questions: questions,
        addQuestion,
        removeQuestion,
        onSubmit,
        generateQuestion
    }

    return <>
        <QuestionContext.Provider value={questionContextValue}>
            {children}
        </QuestionContext.Provider>
    </>
}

export default QuestionProvider;