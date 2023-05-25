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
    <>
      <div>
        <Header/>
        <Banner/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App