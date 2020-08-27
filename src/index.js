import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import List from './components/List'
import EditList from './components/EditList'
import {BrowserRouter, Route} from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import './index.css'

let initialState = {
  lists: []
}

let listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_ALL_LISTS":
      return {
        ...state,
        lists: action.payload
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
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/edit-list" component={EditList} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)