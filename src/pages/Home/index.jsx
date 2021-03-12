import React from 'react'
import {Wrapper, LinkButton} from '../../styles'

const Home = () => (
  <Wrapper primary>
    <h1>Winner winner, chicken dinner!</h1>
    <p>Enter a list and spin the wheel to get a random winner each time. Ready to get started?</p>

    <div className="section">
      <LinkButton href="/create-list" primary>
        Create a list
      </LinkButton>
      {localStorage.length > 0 ? (
        <LinkButton href="/list" primary>
          See my existing list
        </LinkButton>
      ) : (
        <></>
      )}
    </div>
  </Wrapper>
)
export default Home
