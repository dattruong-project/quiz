import { ReactNode, useEffect, useState } from 'react'
import {  Topic, quiz } from '../data/QuizQuestions'
import { QuizContextTypes, Result, ScreenTypes } from '../types'
import { QuizContext, initialState } from './QuizContext'
import { QuizTopic, quizTopics } from '../data/quizTopics'

type QuizProviderProps = {
  children: ReactNode
}

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )
  const [quizCategory, setQuizCategory] = useState<QuizTopic[]>(quizTopics);

  const [quizLs, setQuiz] = useState<Record<string, Topic>>(quiz);
  
  const [questions, setQuestions] = useState(quizLs[initialState.quizTopic].questions)

  const {
    questions: quizQuestions,
    totalQuestions,
    totalTime,
    totalScore,
  } = quizLs[quizTopic]

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  const addQuiz = (newQuiz: Record<string, Topic>) => {
    setQuiz((prevQuizLs) => {
      const updatedQuizLs = {
        ...prevQuizLs,
        ...newQuiz,
      };
      console.log(updatedQuizLs);
      return updatedQuizLs;
    });
  };
  
  const getQuizCategory = () => quizCategory;
  const addQuizCategory = (newQuizCategory: QuizTopic) =>
   setQuizCategory((prevQuizCategories) => [...prevQuizCategories, newQuizCategory]);

  const getQuiz = () => quizLs;

  useEffect(() => {
    setTimer(totalTime);
    setQuestions(quiz["React"].questions)
  }, [quizTopic])

  const quizDetails = {
    totalQuestions,
    totalScore,
    totalTime,
    selectedQuizTopic: quizTopic,
  }

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
    addQuiz,
    getQuiz,
    getQuizCategory,
    addQuizCategory,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

export default QuizProvider
