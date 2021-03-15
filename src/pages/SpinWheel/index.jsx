import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, SecondaryInternalLink, H3, P} from '../../styles'
import {Container, Wrapper, Title, ProgressContainer, SuccessMessage} from './styles'
const chance = require('chance').Chance()

const SpinWheel = () => {
  const [luckyIndex, setLuckyIndex] = useState(0)
  const [list, setList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const formatStringToArr = (string) => string.replace(/[\r\n]+/gm, ', ').split(', ')
      const shuffledArray = chance.shuffle(formatStringToArr(localStorage.list))
      setList(shuffledArray)
    }

    fetchData()
  }, [])

  const handleClick = () => {
    setLuckyIndex((luckyIndex) => (luckyIndex < list.length - 1 ? luckyIndex + 1 : null))
    console.log(luckyIndex)
  }

  const calculateWidth = () => (luckyIndex + 1) / list.length

  return (
    <Wrapper>
      <Container>
        <H3>Who's the lucky duck?</H3>
        <Title>{list[luckyIndex]}</Title>
      </Container>

      <ProgressContainer>
        <progress max="100" value={calculateWidth() * 100} />
        {luckyIndex === list.length - 1 ? (
          <SuccessMessage>
            <P>Hurrah! You've reached the last item.</P>
            <SecondaryInternalLink to="/list">Back to list</SecondaryInternalLink>
          </SuccessMessage>
        ) : (
          <Button onClick={handleClick} primary>
            Next spin
          </Button>
        )}
      </ProgressContainer>
    </Wrapper>
  )
}

export default withRouter(SpinWheel)
