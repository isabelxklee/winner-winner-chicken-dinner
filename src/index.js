import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import List from './components/List'
import EditListForm from './components/EditListForm'
import Generator from './components/Generator'
import CreateListForm from './components/CreateListForm'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import './index.css'

const API = "http://localhost:3001/lists"

let initialState = {
  lists: [],
  id: 0,
  title: "",
  people: []
}

let listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_ALL_LISTS":
      return {
        ...state,
        lists: action.payload
      }
    case "SET_LIST_DETAILS":
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        people: action.payload.people,        
      }
    case "CREATE_LIST":
      return {
        ...state,
        lists: [...state.lists, action.payload]
      }
    default:
      return state
  }
}

let singleObject = {
  listInfo: listsReducer
}

let rootReducer = combineReducers(singleObject)

let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>    
    <BrowserRouter>
      <div>
        <Route exact path="/"><Home localURL={API} /></Route>
        <Route exact path="/create-list"><CreateListForm localURL={API} /></Route>
        <Route exact path="/list"><List localURL={API} /></Route>
        <Route exact path="/edit-list"><EditListForm localURL={API} /></Route>
        <Route exact path="/spin-the-wheel"><Generator localURL={API} /></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)