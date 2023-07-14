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
		<div className="mx-auto xs:px-1">
			<div className="flex flex-col gap-y-10 lg:flex-row">
				{/* img */}
				<div className='flex-1 bg-about bg-contain bg-no-repeat h-[440px] mix-blend-lighten bg-top'></div>
				{/* text */}
				<div className='flex-1 lg:text-left xs:text-center sm:text-center'>
					<h2 className='h2 text-accent'>
						Acerca de mi
					</h2>
					<h3 className='h3 mb-4'>
						Hola 👋
					</h3>
					<p className='p mb-6 md:px-0 xs:px-5'>
						Me gusta leer y me apasiona el arte, especialmente el dibujo y la pintura, me considero alguien apasionado y soñador aunque algo introvertido. Disfruto de la tranquilidad pero aprecio una buena compañia y una buena conversacion.
					</p>
					<p className='p mb-6 md:px-0 xs:px-5'>
						Tengo profundo interes por el universo, me encanta observar el cielo nocturno asi como los rayos en medio de una tormeta. Soy selectivo en mis relaciones personales,amo la lluvia y mi bebida favorita es el café.
					</p>
					<p className='p mb-6 md:px-0 xs:px-5'>
						Además, me esfuerzo por hacer las cosas de la mejor manera posible, mostrando paciencia y dedicación en todo lo que hago.
					</p>
					{/* stats */}
					<div className='flex gap-x-6 lg:gap-x-10 mb-12 lg:justify-normal md:justify-center xs:gap-x-3 xs:justify-center'>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={1} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm xs:text-xs tracking-[2px]'>
									Años de <br/>
									Experiencia
								</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={5} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm xs:text-xs tracking-[2px]'>
									Proyectos<br/>
									Realizados
								</div>
						</div>
						<div>
							<div className='text-[40px] font-tertiary text-gradient py-2'>
								{inView ? <CountUp start={0} end={4} duration={5}/>:null}
								</div>
								<div  className='font-primary text-sm xs:text-xs tracking-[2px]'>
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