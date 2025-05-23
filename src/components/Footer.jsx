import React from 'react'

//data
import { social } from '../helpers/data';

function Footer() {
	const renderIcon = (iconComponent) => {
		const Icon = iconComponent;
		return <Icon />;
	};
	return (
	<div className='text-center text-[#f5f5f5] mt-20'>
		<div className="flex justify-center gap-10 0 p-5 bg-neutral-800/90 dark:bg-slate-950/50">
			{social.map((item,idx)=>{
				return (
					<div className='items-center outline-red-50' key={idx}>
						<a href={item.href}>{renderIcon(item.icon)}</a>
					</div>
				)
			})}
		</div>
		<div className='text-center p-3 bg-neutral-800 dark:bg-slate-950'>
		© <span>{new Date().getFullYear()}</span> All Rights Reserved.
		</div>
	</div>
	)
}

export default Footer