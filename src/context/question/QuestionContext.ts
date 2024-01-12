import { createContext, useContext} from 'react'
import { QuestionContextTypes } from './QuestionContext.type'

export const initialState: QuestionContextTypes = {
    questions: [],
    addQuestion: () => {},
    removeQuestion:  () => {},
    onSubmit: () => {}
}

export const QuestionContext = createContext<QuestionContextTypes>(initialState)

export function useQuestion() {
  return useContext(QuestionContext)
}
