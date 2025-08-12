import React, { useCallback, useReducer } from 'react'

type State ={
    weather:any,
    city:string,
    error:string
}
const InitialState:State ={
    weather:null,
    city:"",
    error:""
}

type Action = 
    |{type: "SET_WEATHER";payload:any}
    |{type: "SET_CITY";payload:string}
    |{type:"SET_ERROR";payload:string}
    |{type:"RESET"}

    function reducer(state:State,action:Action):State{
        switch(action.type){
            case "SET_WEATHER":
                return {...state,weather:action.payload,error:""}
            case "SET_CITY":
                return {...state,city:action.payload}
            case "SET_ERROR":
                return {...state,error:action.payload,weather:null}
            case "RESET":
                return InitialState
            default :
                return state
        }
    }
// React.FC is a TypeScript type provided by React to describe functional components.
const Weather : React.FC = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string
    const [state,dispatch] = useReducer(reducer,InitialState)
    
    const fetchWeather = useCallback(async () => {
        if(!state.city){
            dispatch({type:"SET_ERROR",payload:"Enter the name of your city"})
            return 
        }
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${state.city}&appid=${API_KEY}&units=metric`
            )
            const data = await res.json()
            if(data.cod ==="404"){
                dispatch({type:"SET_ERROR",payload:"City is not found"})
            }else{
                dispatch({type:"SET_WEATHER",payload:data})
            }
        } catch (error) {
            dispatch({type:"SET_ERROR",payload:"Failed to fetch weather data"})
        }
    },[state.city,API_KEY])
    return (
    <div>
      <h1>🌤 Weather</h1>
      <input type="text" value={state.city} placeholder='Enter your City Name' onChange={(e)=>dispatch({type:"SET_CITY",payload:e.target.value})}/>
        <button onClick={fetchWeather}> Update Weather</button>

        {state.error && <p style={{color:"darkred", fontStyle:"italic"}}>{state.error}</p>}
    
        {state.weather && (
            <div style={{marginTop:"2rem"}}>
                <h2>{state.weather.name},{state.weather.sys.country}</h2>
                <p>🌡 Temperature:{state.weather.main.temp} °C</p>
                <p>☁ Condition:{state.weather.weather[0].description}</p>
                <p>💨Wind Speed: {state.weather.wind.speed} m/s </p>
            </div>
        )}
    </div>
  )
}

export default Weather
