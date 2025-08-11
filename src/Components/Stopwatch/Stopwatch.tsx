import React, { useRef, useState } from 'react'

const Stopwatch = () => {
  console.log('-------------------');
  
    const [beginTime,setBeginTime]=useState<number | null>(null)
    const [now,setNow]=useState<number|null>(null)
    const intervalRef=useRef<number|null>(null)

    function handleStart(){
      setBeginTime(Date.now())
      setNow(Date.now())

      if(intervalRef.current){
        clearInterval(intervalRef.current)
      }

      intervalRef.current = window.setInterval(()=>{
        setNow(Date.now())
      },10)
    }

    function handleStop(){
      if(intervalRef.current){
        clearInterval(intervalRef.current)
      }
    }

    let secondsCompleated = 0
    if(beginTime !==null && now !== null){
      secondsCompleated = (now-beginTime)/100
    }
    
    return (
    <div>
      <h2>Time Passed: {secondsCompleated.toFixed(3)}s</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Stopwatch
