import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 5rem;
`

export const Wrapper = styled.div`
  text-align: center;
`

export const Title = styled.h2`
  font-family: 'GT Flexa Trial', sans-serif;
  font-weight: 900;
  font-size: 6rem;

  @media (max-width: 720px) {
    font-size: 3.4rem;
  }
`

export const ProgressContainer = styled.div`
  progress[value] {
    width: 100%;
    border: 2px solid #000;
    height: 32px;
  }

  progress[value]::-webkit-progress-bar {
    background: transparent;
  }

  progress[value]::-webkit-progress-value {
    background: #000;
  }
`
