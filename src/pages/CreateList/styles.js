import styled from 'styled-components'

export const DangerZone = styled.div`
  background-color: #D03000;
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

export const Error = styled.div`
  margin-bottom: 16px;
  color: #D03000;
  font-size: 16px;
`