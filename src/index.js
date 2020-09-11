import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import List from './components/List'
import EditListForm from './components/EditListForm'
import Generator from './components/Generator'
import CreateListForm from './components/CreateListForm'
import Footer from './styled-components/Footer'
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
        
        <div className="phantom"></div>
        <Footer>
          <a href="https://github.com/isabelxklee/winner-winner-chicken-dinner" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.kleetime.com" target="_blank" rel="noopener noreferrer" className="footer-link">Made by Isabel K. Lee</a>
        </Footer>
      </div>
    </BrowserRouter>,
  document.getElementById('root')
)