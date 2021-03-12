import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Generator from './pages/Generator'
import Footer from './components/Footer'
import List from './pages/List'
// import EditList from './components/EditList'
import CreateList from './pages/CreateList'
import './App.css'

const App = () => (
  <>
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
      {/* <Route exact path="/edit-list">
        <EditList />
      </Route> */}
      <Route exact path="/spin-the-wheel">
        <Generator />
      </Route>
    </Switch>
    <Footer />
  </>
)
export default App
