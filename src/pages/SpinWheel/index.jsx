import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, InternalLink} from '../../styles'
import {Container, Wrapper, Title, ProgressContainer} from './styles'
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

  const calculateWidth = () => (
    (luckyIndex + 1) / list.length
  )

  return (
    <Wrapper>
      <Container>
        <h3>Who's the lucky duck?</h3>
        <Title>{list[luckyIndex]}</Title>
      </Container>

      <ProgressContainer>
        <progress max="100" value={calculateWidth() * 100} />
      </ProgressContainer>

      {luckyIndex === list.length - 1 ? (
        <InternalLink to="/list">Back to list</InternalLink>
      ) : (
        <Button onClick={handleClick} primary>
          Next spin
        </Button>
      )}
    </Wrapper>
  )
}

export default withRouter(SpinWheel)
