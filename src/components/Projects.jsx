import React from 'react'

//data
import { workfirst,worksecond } from '../helpers/data'

function Projects() {
	return (
	<section className='section mx-auto lg:pt-48 lg:mx-40' id='projects'>
		<div className="container mx-auto">
			<div className='flex flex-col lg:flex-row gap-x-10'>
				<div className='flex-1 flex flex-col gap-y-10 mb-1	0 lg:mb-0'>
					{/* text */}
					<div className='justify-center'>
						<h2 className='h2 leading-tight text-accent py-3 lg:text-start sm:text-center xs:text-center'>
							Mis <br/>
							Proyectos
						</h2>
						<p className='lg:max-w-sm lg:text-start sm:text-center xs:text-center mb-12'>
						Explora mis proyectos destacados donde podras encontrar una muestra de mi experiencia y cómo combino tecnología y diseño para crear soluciones digitales funcionales y visualmente atractivas.
						</p>
					</div>
					{workfirst.map((item,idx)=>{
						return (
							<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' key={idx}>		
								{/* overlay */}
								<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
								</div>
								{/* img */}
								<img loading='lazy' className='group-hover:scale-125 transition-all duration-500' src={item.img} alt=''/>
								{/* title */}
								<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
									<span className='text-2xl text-gradient'>{item.title}</span>
								</div>
								{/* description */}
								<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
									<span className='text-white'>{item.desciption}</span>
								</div>
							</div>
						);
					})}
				</div>

				<div className='flex-1 flex flex-col gap-y-20'>
					{worksecond.map((item,idx)=>{
						return (
							<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl' key={idx}>		
								{/* overlay */}
								<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
								</div>
								{/* img */}
								<img className='group-hover:scale-125 transition-all duration-500' src={item.img} alt=''/>
								{/* title */}
								<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
									<span className='text-2xl text-gradient'>{item.title}</span>
								</div>
								{/* desciption */}
								<div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
									<span className='text-white'>{item.desciption}</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	</section>
	)
}

export default Projects