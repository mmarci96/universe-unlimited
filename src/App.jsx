import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/HomePage'
import SolarSystemPage from './scenes/SolarSystemPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/solar-system' element={<SolarSystemPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
