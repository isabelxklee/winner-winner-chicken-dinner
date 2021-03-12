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
    // luckyIndex < list.length ? setLuckyIndex + 1 : null
    console.log(luckyIndex)
  }

  const remainingItems = list.length - (luckyIndex - 1)

  return (
    <Wrapper>
      <div className="lucky-duck">
        <h3>Who's the lucky duck?</h3>
        <h1 id="lucky-duck">{list[luckyIndex]}</h1>
      </div>

      {remainingItems === 1 ? (
        <p>
          There is <strong>{remainingItems} left.</strong>
        </p>
      ) : (
        <p>
          There are <strong>{remainingItems} left.</strong>
        </p>
      )}

      {remainingItems === 0 ? (
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

// class Generator extends Component {
//   state = {
//     luckyIndex: 0,
//     array: [],
//   }

//   componentDidMount() {
//     this.formatLocalStorage()
//   }

//   formatStringToArr = (string) => {
//     return string.replace(/[\r\n]+/gm, ', ').split(', ')
//   }

//   formatLocalStorage = () => {
//     let peopleArray = this.formatStringToArr(localStorage.people)
//     peopleArray = chance.shuffle(peopleArray)
//     localStorage.setItem('people', peopleArray.join(', '))

//     this.setState({
//       array: peopleArray,
//     })
//   }

//   handleChange = () => {
//     let arrLength = this.state.array.length

//     if (this.state.luckyIndex < arrLength) {
//       this.setState({
//         luckyIndex: this.state.luckyIndex + 1,
//       })
//     }
//   }

//   render() {
//     let peopleLeft = this.state.array.length - this.state.luckyIndex - 1

//     return (
//       <Wrapper primary>
//         <div className="lucky-duck">
//           <h3>Who's the lucky duck?</h3>
//           <h1 id="lucky-duck">{this.state.array[this.state.luckyIndex]}</h1>
//         </div>

//         {peopleLeft === 1 ? (
//           <p>
//             There is <strong>{peopleLeft} left.</strong>
//           </p>
//         ) : (
//           <p>
//             There are <strong>{peopleLeft} left.</strong>
//           </p>
//         )}

//         {peopleLeft === 0 ? (
//           <LinkButton href="/list" primary>
//             Back to list
//           </LinkButton>
//         ) : (
//           <Button onClick={this.handleChange} primary>
//             Next spin
//           </Button>
//         )}
//       </Wrapper>
//     )
//   }
// }

export default withRouter(SpinWheel)
