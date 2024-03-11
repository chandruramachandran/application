import axios from "axios"
import { useState } from "react"
function App()
{
  const [deg,setdeg] = useState("238")
  const [city, setcity]= useState("France")
  const [desc,setdesc] =useState("Rainy")
  const [enteredvalue,setenteredvalue] = useState("")

  function handleInput(event)
  {
    console.log(event.target.value)
    setenteredvalue(event.target.value)


  }

  function getdata ()
  {
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=e44348f79a700181430417633b5ddd97`)
    
    weather.then (function(data){
      // console.log(data.data.main.temp)
      setdeg(data.data.main.temp)
      setdesc(data.data.weather[0].main)
      setcity(data.data.name)
      
    })
  }

  return(
<div  className = "flex flex-row justify-center h-[100vh] items-center"> 
   <div style={{backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} className= "p-2 rounded-md shadow"> 
      <h2 className ="font-mediums">Hey! 🌥️</h2>
      <p>Do you want the wheather report;)</p>
      <input  onChange = {handleInput}type ="text" className = "rounded-md h-6 text-sm mt-2 p-1 outline-none"  placeholder="City Name?" ></input>
      <br/>
      <button onClick={getdata} className = "bg-black text-white rounded-lg  p-1 text-xs mt-2">Get Report ⚡</button>
      <p text-xs mt-3> Degree : {deg}| City : {city}| Wheather : {desc}</p>
   </div>
</div>
  ) 
}
export default App