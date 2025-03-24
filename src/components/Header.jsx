import React, { useState, useEffect} from 'react'
//import header data
import { header } from '../helpers/data'

//import components
import Nav from './Nav'
import NavMobile from './NavMobile'

//import icons
import {RiMenu4Fill, RiCloseFill} from 'react-icons/ri'
import { HiMoon, HiSun } from "react-icons/hi";


function Header() {
	const getInitialTheme=()=>{
		if (typeof window !== "undefined") {
			const storedTheme = localStorage.getItem("theme");
			if (storedTheme) return storedTheme;
			return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
		}
		return "light"
	};

	const [theme, setTheme] = useState(getInitialTheme);

	const handleChangeTheme=()=>{
		setTheme(prevTheme=>prevTheme === "light"?"dark":"light")
	}

	useEffect(()=>{
		if(theme==="dark"){
			document.documentElement.classList.add('dark')
		}else{
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem("theme",theme)
	},[theme]);

	// Escuchar cambios en el sistema operativo en tiempo real
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	
		const handleSystemChange = (e) => {
			setTheme(e.matches ? "dark" : "light");
		};
	
		mediaQuery.addEventListener("change", handleSystemChange);
	
		return () => {
			mediaQuery.removeEventListener("change", handleSystemChange);
		};
	}, []);

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
	<header className={`${isActive ? 'bg-white/60 dark:bg-[#101424] backdrop-blur-[4px] py-[16px] ':' bg-white dark:bg-[#101424] py-[20px] '} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
		{/* Logo */}
		<a href="">
			<img className='h-[40px]' src={logo} alt="" />
		</a>
		{/* nav - initial hidden -  show on desktop */}
		<Nav/>
		<div className='flex'>
			<button onClick={()=>handleChangeTheme(!theme)} className='pr-16 xs:pr-10'>
				{
				theme==="light"?
				(<HiMoon className='w-6 h-6 text-gray-700'/>):
				(<HiSun className='w-6 h-6 text-white'/>)
				}
			</button>
			{/* btn - initial hidden -  show on desktop */}
			<div className='hidden xl:flex space-x-4'>
				<button className='btn btn-lg'>{btnWorkWme}</button>
			</div>

			{/* nav - menu botton -  hide on desktop */}
			<div onClick={()=>setNavMobile(!navMobile)} className='xl:hidden abosolute right-4 top-0'>
				{ 
				navMobile?
				(<RiCloseFill className='text-[#f5f5f5] text-3xl cursor-pointer'/> ):
				(<RiMenu4Fill className='text-accent text-3xl cursor-pointer'/>) 
				}
			</div>

			{/* nav mobile-  hide on desktop */}
			<NavMobile navMobile={navMobile}/>
		</div>
		
		
	</header>
	)
}
export default Header
