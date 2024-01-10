import { createContext, useContext} from 'react'
import { QuizContextTypes, ScreenTypes } from '../types'
import { QuizTopic } from '../data/quizTopics'
import { Topic } from '../data/QuizQuestions'

export const initialState: QuizContextTypes = {
  currentScreen: ScreenTypes.QuestionScreen,
  setCurrentScreen: () => { },
  quizTopic: 'React',
  selectQuizTopic: () => { },
  questions: [],
  setQuestions: () => { },
  result: [],
  setResult: () => { },
  timer: 15,
  setTimer: () => { },
  endTime: 0,
  setEndTime: () => { },
  quizDetails: {
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'React',
  },
  addQuiz: () => { },
  getQuizCategory: () => null,
  addQuizCategory: (_newQuizCategory: QuizTopic): void => { },
  getQuiz: () => null
}

export const QuizContext = createContext<QuizContextTypes>(initialState)

export function useQuiz() {
  return useContext(QuizContext)
}
