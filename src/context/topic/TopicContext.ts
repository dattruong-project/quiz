import { createContext, useContext} from 'react'
import { ScreenTypes } from '../../types'
import { TopicContextTypes } from './TopicContext.type'

export const initialState: TopicContextTypes = {
  currentScreen: ScreenTypes.QuestionScreen,
  setCurrentScreen: () => { },
  result: [],
  setResult: () => { },
  timer: 15,
  setTimer: () => { },
  endTime: 0,
  setEndTime: () => { },
  quizTopic: '',
  selectTopic: () => {},
  selectedTopicDetails: {
    topic: 'React',
    level: 'Basic',
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    questions: []
  },
  addTopic: () => {},
  addQuestionToTopic: () => {},
  topics: {},
  currentAddedTopic: ""
}

export const TopicContext = createContext<TopicContextTypes>(initialState)

export function useTopic() {
  return useContext(TopicContext)
}
