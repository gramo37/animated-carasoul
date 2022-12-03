import React from 'react'
// import { Carasoul1 } from './components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carasoul from './containers/Carasoul';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Carasoul />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App