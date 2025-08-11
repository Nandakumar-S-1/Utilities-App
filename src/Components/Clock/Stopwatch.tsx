import React, { useRef, useState } from 'react'

const Stopwatch = () => {
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
      
    </div>
  )
}

export default Stopwatch
