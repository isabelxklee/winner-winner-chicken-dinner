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

  const lineBreak = (string) => {
    // split string into array
    // insert line break at x index
    // array back into string

    const array = string.split('')
    const splitNumber = 5

    for (let i = 0; i < array.length; i++) {
      if (i % splitNumber === 0 && i > 0) {
        array.splice(i, 0, `\n`)
      }
    }

    return array.join('')
  }

  const calculateWidth = () => (luckyIndex + 1) / list.length

  return (
    <Wrapper>
      <Container>
        <H3>Who's the lucky duck?</H3>
        {/* {list[luckyIndex] ? <Title>{lineBreak(list[luckyIndex])}</Title> : null} */}

        <Title>{list[luckyIndex]}</Title>
      </Container>

      <ProgressContainer>
        <progress max="100" value={calculateWidth() * 100} />
      </ProgressContainer>

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
    </Wrapper>
  )
}

export default withRouter(SpinWheel)
