import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {Wrapper, Button, LinkButton} from '../../styles'
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
      <div className="lucky-duck">
        <h3>Who's the lucky duck?</h3>
        <h1 id="lucky-duck">{list[luckyIndex]}</h1>
      </div>

      <p>
        Progress: {luckyIndex + 1} / {list.length}
      </p>

      {luckyIndex === list.length - 1 ? (
        <LinkButton href="/list" primary>
          Back to list
        </LinkButton>
      ) : (
        <Button onClick={handleClick} primary>
          Next spin
        </Button>
      )}
    </Wrapper>
  )
}

export default withRouter(SpinWheel)
