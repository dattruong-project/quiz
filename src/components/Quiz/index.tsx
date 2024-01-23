import QuizProvider from "../../context/topic/TopicProvider"
import MainLayout from "../Dashboard/layout";
import MainQuiz from "./quizScreen"

const QuizScreen = () => {
    return <QuizProvider>
        <MainLayout>
           <MainQuiz/>
        </MainLayout>
    </QuizProvider>
}

export default QuizScreen;