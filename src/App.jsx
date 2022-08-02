import { useState, useEffect } from 'react'
import bg2 from './assets/bg2.jpg'
import './App.css'
import Bg from './Components/Bg'
import Card from './Components/Card'

function App() {
  

  const [coords, setcoords] = useState('')
 

  useEffect(() => {

const succes = pos => {
const latlon = {
  lat: pos.coords.latitude,
  lon: pos.coords.longitude
}
setcoords(latlon)
}


    navigator.geolocation.getCurrentPosition(succes)
  
   
  }, [])
  
  console.log(coords);

  return (
    <div className="App">
 < Bg />
 < Card  lon={coords?.lon} lat={coords?.lat}/>
    </div>
  )
}

export default App
