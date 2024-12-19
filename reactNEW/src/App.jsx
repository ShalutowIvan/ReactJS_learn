// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
// import Example_method from './components/example_method'
// import Button from './components/Button/button'
import { useState } from 'react'
import MassivSection from './components/Section_massiv'
import Json_example_section from './components/Section_button'




function App() {

  // const stateArray = useState("Нажми на кнопку")//создали состояние  
  // const content = stateArray[0]
  // const setContent = stateArray[1]
  // const [contentType, setContentType] = useState(null)
  
  // const t_now = new Date()
  // const [time_now, setTime_now] = useState(t_now)
  // console.log(time_now)
  

  console.log("Отобразили компонент App")
  // console.log(stateArray)
  // let param = "asd"

  // let tabContent = null
  // if (contentType){
  //   tabContent = <p>{json_example[contentType]}</p>
  // }
  // else{
  //   tabContent = <p>Нажми на кнопку</p>
  // }

  
  
  return (
    <div>

      <Header />
       

      <main>
        
        <MassivSection />

        <Json_example_section />

      </main>
    </div>
  )
}

export default App
