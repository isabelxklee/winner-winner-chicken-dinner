import styled from 'styled-components'

const Wrapper = styled.div`
  padding: ${props => props.secondary ? "11em 7em" : "3em 9em"};
  background: radial-gradient(#E3E73B, #FFF 65%);
  text-align: ${props => props.secondary ? "center" : "left"};

  @media(max-width: 720px) {
    padding: 4em;
  }
`

export default Wrapper