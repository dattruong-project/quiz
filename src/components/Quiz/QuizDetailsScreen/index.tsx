import styled from 'styled-components'
import { StartIcon } from '../../../config/icons'
import { PageCenter, CenterCardContainer, LogoContainer, HighlightedText } from '../../../styles/Global'
import { ScreenTypes } from '../../../types'
import { convertSeconds } from '../../../utils/helpers'
import Button from '../../ui/Button'
import { useTopic } from '../../../context/topic/TopicContext'


const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, selectedTopicDetails } = useTopic()

  const { totalQuestions, totalScore, totalTime } = selectedTopicDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer/>
        <DetailTextContainer>
          <DetailText>
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
          <DetailText>
            To save time, you can skip questions. Skipped questions will show up at the
            end of the quiz.
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
