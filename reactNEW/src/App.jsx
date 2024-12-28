// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header/Header'
// import Example_method from './components/example_method'
// import Button from './components/Button/button'
import { useState } from 'react'
import MassivSection from './components/Section_massiv'
import Json_example_section from './components/Section_button'
// import { Fragment } from 'react'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import EffectSection from './components/EffectSection'


// function App() {
//   const [tab, setTab] = useState('feedback')

//   // const stateArray = useState("Нажми на кнопку")//создали состояние  
//   // const content = stateArray[0]
//   // const setContent = stateArray[1]
//   // const [contentType, setContentType] = useState(null)
  
//   // const t_now = new Date()
//   // const [time_now, setTime_now] = useState(t_now)
//   // console.log(time_now)
  

//   console.log("Отобразили компонент App")
//   // console.log(stateArray)
//   // let param = "asd"

//   // let tabContent = null
//   // if (contentType){
//   //   tabContent = <p>{json_example[contentType]}</p>
//   // }
//   // else{
//   //   tabContent = <p>Нажми на кнопку</p>
//   // }
    
//   return (
//     <>
//       <Header />
//       <main>
//         <IntroSection />

//         <TabsSection active={tab} izmenenie={(current) => setTab(current)} />

//         {tab === 'main' && (
//           <>
//             <MassivSection />
//             <Json_example_section />
//           </>
//         )}

//         {tab === 'feedback' && <FeedbackSection />}



        
//       </main>
//     </>
//   )
// }

// export default App



function App() {
  // const [visible, setVisible] = useState(true)

  const [tab, setTab] = useState('effect')
    
  // setTimeout(() => {
  //   setVisible(false)
  // }, 3000)
  


  return (
    <>
      {/*{visible && <Header />}*/}
      <Header />
      <main>
        <IntroSection />

        <TabsSection active={tab} izmenenie={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <MassivSection />
            <Json_example_section />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
        
        {tab === 'effect' && <EffectSection /> }

      </main>
    </>
  )
}

export default App