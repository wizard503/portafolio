import React from 'react'

// import data
import { services } from '../helpers/data'
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../helpers/variants';


function Services() {
	const renderIcon = (iconComponent) => {
		const Icon = iconComponent;
		return <Icon className='text-gray-500 w-[80px] h-[80px]'/>;
	};
	return (
		<section className="pt-[14vh]" id='services'>
			<div className="max-w-6xl mx-auto px-5 py-2 ">
				<motion.div 
				variants={fadeIn('up',0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className="text-center "
				>
					<h2 className="h2 mb-4 text-accent">Mis Servicios</h2>
					<p className="p xl:w-4/4 lg:w-3/4 mx-auto">Ofrezco soluciones digitales personalizadas que combinan funcionalidad y diseño atractivo. A través de mi experiencia en desarrollo frontend y diseño de interfaces de usuario, puedo ayudarte a destacar en línea. Explora mis servicios a continuación y contáctame para discutir cómo puedo ayudarte</p>
					<div className="flex mt-6 justify-center">
						<div className="w-16 h-1 rounded-full gradient inline-flex">
						</div>
					</div>
				</motion.div>
				<div 		
				className="flex justify-center items-center flex-wrap xs:p-[0px] xs:min-h-[100vh] md:min-h-[80vh]"
				>
					{services.map((item,idx)=>{
						return(
							<motion.div 
							variants={fadeIn('down',0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{once:false,amount:0.7}}
							className="bg-[#287bff] flex justify-center items-start w-[300px] h-[450px] m-[30px] rounded-[20px] rounded-b-[160px] bg-gradient-to-b from-[#ff2ae0] to-[#3bace2] card" 
							key={idx}
							>
								<div className="relative w-[140px] h-[120px] bg-white rounded-b-[100px] z-1 flex justify-center items-start icon">
									<span>{renderIcon(item.icon)}</span>
								</div>
								<div className="absolute p-[40px] pt-[150px] text-center max-w-sm">
									<h3 className='h3 text-white mb-[15px]'>{item.title}</h3>
									<p className='p text-white leading-[1.3em] px-6'>{item.desciption}</p>
								</div>
							</motion.div>
						);
					})}
					
				</div>
			</div>
		</section>
	)
}

export default Services
