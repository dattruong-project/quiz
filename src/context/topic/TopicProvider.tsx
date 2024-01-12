import { ReactNode, useEffect, useState } from 'react'
import { Question, Result, Topic, quiz } from '../../data/QuizQuestions'
import { TopicContext, initialState } from './TopicContext'
import { ScreenTypes } from '../../types'
import { TopicContextTypes } from './TopicContext.type'

type TopicProviderProps = {
  children: ReactNode
}

const QuizProvider = ({ children }: TopicProviderProps) => {
  //initialState
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [selectedTopic, setQuizTopic] = useState<string>("React")
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )
  //logic handler
  const [topics, setTopics] = useState<Record<string, Topic>>(quiz);
  const selectTopic = (topic: string) => setQuizTopic(topic);
  const selectedTopicDetails = topics[selectedTopic];
  const [currentAddedTopic, setCurrentAddedTopic] = useState("");


  useEffect(() => {
    if (selectedTopicDetails) {
      setTimer(selectedTopicDetails.totalTime);
    }
  }, [selectedTopicDetails])

  const addTopic = (values: any) => {
    const { level, topic, totalScore, totalQuestions, totalTime, ...rest } = values;

    const selectedLevel = level.find((item: any) => item.selected) ?? "Basic";

    const updatedValues = { ...rest, topic: topic, level: selectedLevel, totalScore: Number(totalScore), totalQuestions: Number(totalQuestions), totalTime: Number(totalTime) };

    // Update the topics state
    setTopics((prevTopics) => {
      const newTopic = { ...prevTopics, [topic]: updatedValues };
      //trigger saved topic
      setCurrentAddedTopic(topic);
      return newTopic;
    });
  };

  const addQuestionToTopic = (topic: string, questions: Question[]) => {
    setTopics((prevTopics) => {
      const newTopics = {
        ...prevTopics, [topic]: {
          ...prevTopics[topic],
          questions: questions
        }
      }
      return newTopics;
    })
  }

  const quizContextValue: TopicContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic: selectedTopic,
    topics,
    selectTopic,
    result,
    setResult,
    timer,
    setTimer,
    endTime,
    setEndTime,
    selectedTopicDetails,
    addTopic,
    addQuestionToTopic,
    currentAddedTopic
  }

  return <TopicContext.Provider value={quizContextValue}>{children}</TopicContext.Provider>
}

export default QuizProvider
