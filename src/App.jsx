import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import SpinWheel from './pages/SpinWheel'
import List from './pages/List'
import CreateList from './pages/CreateList'
import Header from './components/Header'
import Footer from './components/Footer'
import {GlobalStyle, Wrapper} from './styles'

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-list">
          <CreateList />
        </Route>
        <Route exact path="/list">
          <List />
        </Route>
        <Route exact path="/edit-list">
          <CreateList />
        </Route>
        <Route exact path="/spin-the-wheel">
          <SpinWheel />
        </Route>
      </Switch>
    </Wrapper>
    <Footer />
  </>
)
export default App
