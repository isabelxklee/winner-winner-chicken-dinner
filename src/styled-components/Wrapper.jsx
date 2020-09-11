import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${props => props.secondary ? "2em 9em 13em" : "11em 11em 14em 11em"};
  background: radial-gradient(#E3E73B, #FFF 65%);
  text-align: left;

  @media(max-width: 720px) {
    padding: ${props => props.primary ? "12em 3em 16em" : "4em 3em 14em 3em"};
  }
`

export default Wrapper