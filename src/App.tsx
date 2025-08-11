import React, { useState } from 'react'
import Clock from './Components/Clock/Clock'
import Stopwatch from './Components/Stopwatch/Stopwatch'
import Calculator from './Components/Calculator/Calculator'
 
const App = () => {

  const [activeTab,setActiveTab]=useState<"clock"|"stopwatch"|"calculator">("clock")
  console.log(activeTab,'----------');
  
  return (
    <div style={{textAlign :"center",marginTop:"5rem"}}> 
      <h1>utility Hub</h1>
      <div style={{marginTop:"2rem", display:'flex',alignItems:"center", justifyContent:"space-evenly"}}>
        <button onClick={()=>setActiveTab('stopwatch')}>⏱ Stopwatch</button>
        <button onClick={()=>setActiveTab("clock")}>🕒 Clock</button>
        <button onClick={()=>setActiveTab('calculator')}>🧮 Calculator</button>
      </div>
      
      {activeTab==='clock' && <Clock/>}
      {activeTab==='stopwatch' && <Stopwatch/>}
      {activeTab==='calculator' && <Calculator/>}
    </div>
  )
}

export default App
