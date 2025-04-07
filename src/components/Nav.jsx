import React from 'react';

// import data
import { nav } from '../helpers/data';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Nav = () => {
	const { t } = useTranslation();
	const getNavItems = nav(t);

	return (
		<nav className='hidden xl:flex'>
			<ul className='flex text-black dark:text-[#f5f5f5] gap-x-8'>
				{getNavItems.map((item,idx)=>{
					return (
					<li key={idx}>
						<Link className='hover:text-accent dark:hover:text-cyan-400 transition-all cursor-pointer' to={item.to}>{item.name}</Link>
					</li>
					);
					})}
			</ul>
		</nav>
	);
};

export default Nav