import React, { useState, useEffect} from 'react'
//import header data
import { header } from '../helpers/data'

//import components
import Nav from './Nav'
import NavMobile from './NavMobile'

//import icons
import {RiMenu4Fill, RiCloseFill} from 'react-icons/ri'

function Header() {
	//header state
	const [isActive,setIsActive]=useState(false);
	//nav mobile state
	const [navMobile, setNavMobile]=useState(false);

	//scroll event
	useEffect(()=>{
		window.addEventListener('scroll',()=>{window.scrollY>80?setIsActive(true):setIsActive(false)})
	})
	//destructure header data
	const {logo,btnWorkWme} = header
	return (
	<header className={`${isActive ? 'bg-white/60 backdrop-blur-[4px] py-[16px] ':' bg-white py-[20px] '} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
		{/* Logo */}
		<a href="">
			<img className='h-[40px]' src={logo} alt="" />
		</a>
		{/* nav - initial hidden -  show on desktop */}
		<Nav/>
		{/* btn - initial hidden -  show on desktop */}
		<div className='hidden xl:flex space-x-4'>
			<button className='btn btn-lg'>{btnWorkWme}</button>
		</div>

		{/* nav - menu botton -  hide on desktop */}
		<div onClick={()=>setNavMobile(!navMobile)} className='xl:hidden abosolute right-4 top-0'>
			{ 
			navMobile?
			(<RiCloseFill className='text-white text-3xl cursor-pointer'/> ):
			(<RiMenu4Fill className='text-accent text-3xl cursor-pointer'/>) 
			}
		</div>

		{/* nav mobile-  hide on desktop */}
		<NavMobile navMobile={navMobile}/>
	</header>
	)
}
export default Header
