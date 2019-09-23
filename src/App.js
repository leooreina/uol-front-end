import React from 'react'
import List from './components/List'
import Episodes from './components/Episodes'
import { Route } from 'react-router-dom'
import './css/title.css'

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Star Wars Gallery</h1>
      <Route
        exact path='/'
        component={List}
      />
      <Route
        path='/episode/:episode'
        component={Episodes}
      />
    </div>
  )
}

export default App
