import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import List from './components/List'
import EditListForm from './components/EditListForm'
import Generator from './components/Generator'
import CreateListForm from './components/CreateListForm'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/create-list"><CreateListForm /></Route>
        <Route exact path="/list"><List /></Route>
        <Route exact path="/edit-list"><EditListForm /></Route>
        <Route exact path="/spin-the-wheel"><Generator /></Route>
      </div>
    </BrowserRouter>,
  document.getElementById('root')
)