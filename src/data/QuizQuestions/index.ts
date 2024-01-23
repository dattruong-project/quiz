import { python } from './python'
import { react } from './react'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]
export type QuestionType = 'MCQs' | 'MAQs' | 'boolean'

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
}

export type Question = {
  question: string
  choices: Choice[]
  type: QuestionType
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: 'Basic' | 'Intermediate'
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  React: react,
  Python: python
}
