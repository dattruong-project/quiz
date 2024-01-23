import { useEffect } from 'react'
import { ScreenTypes } from '../../types'
import SplashScreen from '../SplashScreen'
import { useTopic } from '../../context/topic/TopicContext'
import QuestionScreen from './QuestionScreen'
import QuizDetailsScreen from './QuizDetailsScreen'
import QuizTopicsScreen from './QuizTopicsScreen'
import ResultScreen from './ResultScreen'

const MainQuiz = () => {
  const { currentScreen, setCurrentScreen } = useTopic()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen)
    }, 1000)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default MainQuiz