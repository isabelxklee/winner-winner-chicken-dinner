import React from 'react'
import {LinkButton, P} from '../../styles'

const Home = () => (
  <>
    <h1>Winner winner, chicken dinner!</h1>
    <P>Enter a list and spin the wheel to get a random winner each time. Ready to get started?</P>

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
  </>
)
export default Home
