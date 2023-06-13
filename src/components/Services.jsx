import React from 'react'

// import data
import { services } from '../helpers/data'


function Services() {
	const renderIcon = (iconComponent) => {
		const Icon = iconComponent;
		return <Icon className='text-gray-500 w-[80px] h-[80px]'/>;
	};
	return (
		<section className="text-gray-900" id='services'>
			<div className="max-w-6xl mx-auto px-5 py-2 ">
				<div className="text-center ">
					<h2 className="h2 mb-4 text-accent">Specializing in</h2>
					<p className="p xl:w-2/4 lg:w-3/4 mx-auto">L'informatique est vaste et les langages naissent presque à tout moment, je fais tout mon possible pour être à la hauteur afin de répondre au besoin de mes clients et d'apporter de l'aide aux nouveaux développeurs.</p>
					<div className="flex mt-6 justify-center">
						<div className="w-16 h-1 rounded-full gradient inline-flex">
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center flex-wrap p-[10px] min-h-[100vh]">
					{services.map((item,idx)=>{
						return(
							<div className="bg-[#287bff] flex justify-center items-start w-[300px] h-[450px] m-[30px] rounded-[20px] rounded-b-[160px] bg-gradient-to-b from-[#ff2ae0] to-[#3bace2] card" key={idx}>
								<div className="relative w-[140px] h-[120px] bg-white rounded-b-[100px] z-1 flex justify-center items-start icon">
									<span>{renderIcon(item.icon)}</span>
								</div>
								<div className="absolute p-[40px] pt-[150px] text-center max-w-sm">
									<h3 className='h3 text-white mb-[15px]'>{item.title}</h3>
									<p className='p text-white leading-[1.3em] px-6'>{item.desciption}</p>
								</div>
							</div>
						);
					})}
					
				</div>
			</div>
		</section>
	)
}

export default Services
