import { useState } from 'react'
import MyLogo from './assets/My Logo.png'
import './App.css'

function App() {

  return (
    <>
      <div>
        
        <img src={MyLogo} className="logo" style={{width: "500px", height: "500px"}} alt="Summer's Logo" />
      
      </div>
      <h1>Summer's Portfolio</h1>
      <p>
        Work In Progress
      </p>
    </>
  )
}

export default App
