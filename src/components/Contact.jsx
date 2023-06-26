import React from 'react'

function Contact() {
	return (
	<div className='pt-20 lg:section mt-[40vh]' id='contact'>
		<div className='container mx-auto lg:mx-40'>
			<div className='flex flex-col lg:flex-row'>
				{/* text */}
				<div className='flex-1 flex justify-start items-center'>
					<div>
						<h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
							Ponte en contacto
						</h4>
						<h2 className='text-[45px] lg:text-[90px] leading-none mb-10'>
							Vamos a trabajar !juntos¡
						</h2>
					</div>
				</div>
				<form className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-15 p-6 items-start'>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="text" placeholder='Tú nombre'/>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="email" placeholder='Tú correo electrónico'/>
					<textarea className='bg-transparent border-b py-12 focus:outline-none w-full focus:border-accent transition-all resize-none mb-9' placeholder='Tú mensaje'></textarea>
					<button className='btn btn-lg'>Enviar mensaje</button>
				</form>
			</div>
		</div>
	</div>
	)
}

export default Contact