import { useState } from 'react'  
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Suspense } from 'react'

function Welcome(){
  return(
    <div className='mx-auto overflow-hidden relative dark:bg-[#101424] dark:text-[#f5f5f5]'>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      {/*<div classNamVscGithube='h-[4000px]'></div>*/}
    </div>
  )
}
function App() {
  return (
    <Suspense fallback="Cargando Traducciones">
      <Welcome/>
    </Suspense>
  )
}

export default App