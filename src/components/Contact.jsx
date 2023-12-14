import React from 'react'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../helpers/variants'

function Contact() {
	return (
	<div className='section xs:pt-[4em] lg:pt-[10em] lg:mt-[25em] xl:mt-[0em] ' id='contact'>
		<div className='container mx-auto'>
			<div className='flex flex-col lg:flex-row'>
				{/* text */}
				<motion.div 
				variants={fadeIn('right',0.5)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className='flex-1 flex justify-start items-center'
				>
					<div>
						<h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide xs:text-center'>
							Ponte en contacto
						</h4>
						<h2 className='text-[45px] lg:text-[90px] leading-none mb-10 xs:text-center'>
							Vamos a trabajar !juntos¡
						</h2>
					</div>
				</motion.div>
				<motion.form 
				variants={fadeIn('left',0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-15 p-6 items-start'
				>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="text" placeholder='Tú nombre'/>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="email" placeholder='Tú correo electrónico'/>
					<textarea className='bg-transparent border-b py-12 focus:outline-none w-full focus:border-accent transition-all resize-none mb-9' placeholder='Tú mensaje'></textarea>
					<button className='btn btn-lg'>Enviar mensaje</button>
				</motion.form>
			</div>
		</div>
	</div>
	)
}

export default Contact