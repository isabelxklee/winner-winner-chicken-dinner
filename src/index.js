import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import List from './components/List'
import EditList from './components/EditList'
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/list" component={List} />
    <Route exact path="/edit-list" component={EditList} />
  </div>
  </BrowserRouter>,
  document.getElementById('root')
)