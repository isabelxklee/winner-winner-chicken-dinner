import styled from 'styled-components'

export const DangerZone = styled.div`
  background-color: #D03000;
  padding: 48px;
  width: 90%;
  color: #fff;
  margin-top: 64px;

  @media (max-width: 720px) {
    width: calc(100% - 64px);
    margin-top: 48px;
    padding: 32px;
  }
`

export const Error = styled.div`
  margin-bottom: 16px;
  color: #D03000;
  font-size: 16px;
`