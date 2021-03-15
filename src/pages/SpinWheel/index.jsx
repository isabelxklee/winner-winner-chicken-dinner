import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, InternalLink, P} from '../../styles'
import {Container, Wrapper} from './styles'
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

  return (
    <Wrapper>
      <Container>
        <h3>Who's the lucky duck?</h3>
        <h1 id="lucky-duck">{list[luckyIndex]}</h1>
      </Container>

      <P>
        Progress: {luckyIndex + 1} / {list.length}
      </P>

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
