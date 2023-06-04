import React from 'react'

//import data
import { nav } from '../data'

function NavMobile({navMobile}) {
	return (
		<nav className={`${navMobile ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-800 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
			<ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
				{nav.map((item,idx)=>{
					return (
					<li key={idx}>
						<a className='text-white text-body-md' href={item.href}>{item.name}</a>
					</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavMobile