import { Dispatch, SetStateAction } from "react"
import { Topic, Question, Result } from "../../data/QuizQuestions"
import { ScreenTypes } from "../../types"
import { QuizTab } from "../../components/Quiz/Creation"

export type TopicContextTypes = {
    currentScreen: ScreenTypes
    setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>
    quizTopic: string,
    topics: Record<string, Topic>
    selectTopic: (type: string) => void
    result: Result[]
    setResult: Dispatch<SetStateAction<any[]>>
    timer: number
    setTimer: Dispatch<SetStateAction<number>>
    endTime: number
    setEndTime: (type: number) => void
    selectedTopicDetails: Topic,
    addTopic: (newTopic: Topic) => void,
    addQuestionToTopic : (topic: string, questions: Question[]) => void,
    currentAddedTopic: any;
    setQuizTab: (tab: QuizTab) => void;
    quizTab: string
  }