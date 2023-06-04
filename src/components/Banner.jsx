import React from 'react'

//type animation
import {TypeAnimation } from 'react-type-animation'


function Banner() {
	return (
	<section className='min-h-[85vh] lg:min-h-[78vh] flex justify-around pt-36' id='home'>
		<div className="container">
			<div className="flex flex-col lg:flex-row lg:items-center ">
				{/* img */}
				<div className="hidden lg:flex max-w-[320px} lg:max-w-[482px] ">
					<div className='bg-gradient-to-r from-fuchsia-500 to-pink-500/0 opacity-[66%] -rotate-45 w-[60vh] h-[60vh] rounded-full left-0 bottom-0'>
					</div>
				</div>
				{/* text */}
				<div className='flex-1 text-center font-quaternary lg:text-left lg:ml-36 right-0'>
					<h1 
					className='text-[55px] text-neutral-800 font-bold leading-[0.8] lg:text-[110px]'
					>
					JOSÉ <span>DURÁN</span>
					</h1>
					<div
					className='mb-6 text-[36px] lg:text-[60px] font-quaternary font-semibold uppercase leading-[1]'
					>
					<span className='text-cyan-400 mr-4'>I am a </span>
					<TypeAnimation 
					sequence={[
						'Developer',
						2000,
						'Designer UI',
						2000,
					]}
					speed={50}
					className='text-accent'
					wrapper='span'
					repeat={Infinity}
					/>
				</div>
				{/* description */}
				<p 
				className='mb-8 max-w-lg mx-auto lg:mx-0' 
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, praesentium iste tempore esse rerum.
				</p>
				<div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
					<button className='btn btn-lg'>Download CV</button>
					<a href="" className='text-gradient btn-link'>Contact me</a>
				</div>
				{/* resume skills */}

				</div>
			</div>
		</div>
	</section>
	)
}

export default Banner