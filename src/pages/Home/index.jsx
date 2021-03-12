import React from 'react'
import {InternalLink, P} from '../../styles'

const Home = () => (
  <>
    <h1>Winner winner, chicken dinner!</h1>
    <P>Enter a list and spin the wheel to get a random winner each time. Ready to get started?</P>

    <div className="section">
      <InternalLink to="/create-list">Create a list</InternalLink>
      {localStorage.length > 0 ? (
        <InternalLink to="/list">See my existing list</InternalLink>
      ) : (
        <></>
      )}
    </div>
  </>
)
export default Home
