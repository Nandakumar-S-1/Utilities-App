import React, { useState } from 'react'
import Clock from './Components/Clock/Clock'
 
const App = () => {
  const [activeTab,setActiveTab]=useState<"clock"|"stopwatch"|"calculator">("clock")

  return (
    <div style={{textAlign :"center",marginTop:"5rem"}}> 
      <h1>utility Hub</h1>
      <div style={{marginTop:"2rem", display:'flex',alignItems:"center", justifyContent:"space-evenly"}}>
        <button >⏱ Stopwatch</button>
        <button onClick={()=>setActiveTab}>🕒 Clock</button>
        <button>🧮 Calculator</button>
      </div>
      {activeTab==='clock' && <Clock/>}
      {activeTab==='stopwatch'}
    </div>
  )
}

export default App
