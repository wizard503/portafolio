import React from 'react';
//countup
import CountUp  from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//motion
import {motion} from 'framer-motion'
//variants
import { fadeIn } from '../helpers/variants';

function About() {
	const[ref,inView]=useInView({
		threshold:0.5,
	})
	return (
	<section className='section max-w-7xl pt-40' id='about' ref={ref}>
		<div className="mx-auto">
			<div className="flex flex-col gap-y-10 lg:flex-row">
				{/* img */}
				<div className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'></div>
				{/* text */}
				<div className='flex-1'>
					<h2 className='h2 text-accent'>
						Acerca de mi
					</h2>
					<h3 className='h3 mb-4'>
						Hola 👋
					</h3>
					<p className='p mb-6 '>
						Soy Ingeniero de Sistemas y me dedico al desarrollo web, poseo experiencia en desarrollo frontend y diseño de interfaces de usuario, amante del diseño, me apasiona la tecnología y la programación.
					</p>
					{/* stats */}
					<div className='flex gap-x-6 lg:gap-x-10 mb-12'>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={1} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm tracking-[2px]'>
									Años de <br/>
									Experiencia
								</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={4} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm tracking-[2px]'>
									Proyectos<br/>
									Realizados
								</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={4} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm tracking-[2px]'>
									Sitios Desplegados<br/>
									Completamente
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}

export default About