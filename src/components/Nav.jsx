import React from 'react';

// import data
import { nav } from '../data';

const Nav = () => {
	return (
		<nav className='hidden lg:flex'>
			<ul className='flex text-black gap-x-8'>
				{nav.map((item,idx)=>{
					return (
					<li key={idx}>
						<a className='hover:text-accent transition' href={item.href}>{item.name}</a>
						</li>
					);
					})}
			</ul>
		</nav>
	);
};

export default Nav