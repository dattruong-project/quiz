import { Dispatch, SetStateAction } from 'react'
import { Question, Topic } from '../data/QuizQuestions'
import { QuizTopic } from '../data/quizTopics'

export enum ScreenTypes {
  QuizTopicsScreen,
  QuizDetailsScreen,
  QuestionScreen,
  ResultScreen,
}

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>
  quizTopic: string
  selectQuizTopic: (type: string) => void
  questions: Question[]
  setQuestions: Dispatch<SetStateAction<any[]>>
  result: Result[]
  setResult: Dispatch<SetStateAction<any[]>>
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  endTime: number
  setEndTime: (type: number) => void
  quizDetails: {
    totalQuestions: number
    totalScore: number
    totalTime: number
    selectedQuizTopic: string
  },
  addQuiz : (newQuiz: Record<string, Topic>) => void,
  getQuiz: () => Record<string, Topic> | null,
  getQuizCategory: () => QuizTopic[] | null,
  addQuizCategory : (newQuizCategory: QuizTopic) => void
}
