import React from 'react'

//import data
import { nav } from '../helpers/data'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';


function NavMobile({navMobile}) {
	const { t } = useTranslation();
	const getNavItems = nav(t);

	return (
		<nav className={`${navMobile ? 'min-h-[20em]' : 'min-h-0'} xl:hidden w-full font-bold bg-gray-800/50 backdrop-blur-[10px] fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}>
			<ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
				{getNavItems.map((item,idx)=>{
					return (
					<li key={idx}>
						<Link className='text-[#f5f5f5] text-body-md cursor-pointer' to={item.to} >{item.name}</Link>
					</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default NavMobile