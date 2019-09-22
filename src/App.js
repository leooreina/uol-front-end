import React from 'react'
import List from './components/List'
import Episodes from './components/Episodes'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Star Wars Gallery</h1>
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
