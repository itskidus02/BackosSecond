import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Header from './components/Header'
// import Hero from './components/Hero'
import ThirdSec from './components/ThirdSec'
import How from './components/How'
// import Accordion from './components/Accordion'
import Bottom from './components/Bottom'
import { AccordionDemo } from './components/Demo/AccordionDemo'


function App() {
 

  return (
    <>
    {/* <Header/>
    <Hero/>  */}
    <ThirdSec/>
    <How/>
    
   <AccordionDemo/>

    
    <Bottom/>
      
    </>
  )
}

export default App
