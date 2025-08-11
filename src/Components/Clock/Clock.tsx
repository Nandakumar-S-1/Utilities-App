import React, { useEffect, useState } from 'react'

const Clock = () => {
    const [time,setTime]=useState<string>(new Date().toLocaleTimeString())

    useEffect(()=>{
        const Timer =  setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
        return()=>clearInterval(Timer)
    },[])
  return (
    <h2>{time}</h2>
  )
}

export default Clock
