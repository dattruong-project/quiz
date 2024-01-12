import { FC } from 'react'
import styled from 'styled-components'

import { device } from '../../../../styles/BreakPoints'
import { HighlightedText } from '../../../../styles/Global'
import { convertSeconds } from '../../../../utils/helpers'
import { Result } from '../../../../data/QuizQuestions'
import { useTopic } from '../../../../context/topic/TopicContext'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { selectedTopicDetails, endTime } = useTopic()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / selectedTopicDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {selectedTopicDetails.totalQuestions}
      </p>
      <p>
        Score secured:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {selectedTopicDetails.totalScore}
      </p>
      <p>
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p>
        Status:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export default ResultOverview
