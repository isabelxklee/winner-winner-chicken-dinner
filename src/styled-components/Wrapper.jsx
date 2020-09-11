import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${props => props.secondary ? "2em 9em" : "11em 9em"};
  background: radial-gradient(#E3E73B, #FFF 65%);
  text-align: left;

  @media(max-width: 720px) {
    padding: ${props => props.primary ? "12em 3em" : "4em 3em"};
  }
`

export default Wrapper