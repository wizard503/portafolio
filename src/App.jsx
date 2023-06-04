import { useState } from 'react'  
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden relative'>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      {<div className='h-[4000px]'></div>}
    </div>
  )
}

export default App