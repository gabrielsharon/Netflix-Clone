import React from 'react'
import NavBar from './Component/NavBar/NavBar'
import Banner from './Component/Banner/Banner'
import RowPost from './Component/Rowpost/RowPost'
import {orginals,action } from './urls'
import './App.css'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginal'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}

export default App
