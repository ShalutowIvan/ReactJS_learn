import { useState } from 'react'
import eagle from '../img/eagle.jpg'

export default function Header() {
  
  const [time_now, setTime_now] = useState(new Date())  
  // const time_now = new Date()
  // console.log("Привет")

  // setInterval(() => setTime_now(new Date(), 1000))
     
    return(
      <header>
        <img src={eagle} alt={"eagle"} />
        
        
        <span>Время сейчас { time_now.toLocaleTimeString() }</span>
      </header>
    )
}






