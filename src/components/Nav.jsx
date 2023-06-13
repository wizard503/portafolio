import React from 'react';

// import data
import { nav } from '../helpers/data';
import { Link } from 'react-scroll';

const Nav = () => {
	return (
		<nav className='hidden lg:flex'>
			<ul className='flex text-black gap-x-8'>
				{nav.map((item,idx)=>{
					return (
					<li key={idx}>
						<Link className='hover:text-accent transition-all cursor-pointer' to={item.to}>{item.name}</Link>
					</li>
					);
					})}
			</ul>
		</nav>
	);
};

export default Nav