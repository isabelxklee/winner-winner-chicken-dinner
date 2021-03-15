import styled from 'styled-components'

export const DangerZone = styled.div`
  background-color: rgb(208, 48, 0);
  padding: 3em;
  width: 90%;
  color: white;
  margin-top: 4rem;

  @media (max-width: 720px) {
    width: 100%;
    margin-top: 3em;
    padding: 2em;
  }
`
