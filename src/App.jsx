import React from 'react'
import Portafolio from './components/portafolio/Portafolio'
import Navbar from './components/portafolio/Navbar/Navbar'
import './app.css'

const App = () => {
  return (
    <>
    <Navbar/>
    <Portafolio/>
    <Portafolio className='modal'/>
    </>
  )
}

export default App