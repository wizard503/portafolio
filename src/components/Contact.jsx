import React from 'react'
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../helpers/variants'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'

function Contact() {
	const {t,i18n}=useTranslation(["translation"]);
	
	const handleSubmit = async (event)=> {
		event.preventDefault();
		
		// Obtener los datos del formulario
		const formData = new FormData(event.target);
		
		// Construir el objeto de datos que deseas enviar
		const data = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});

		// Lógica personalizada para enviar el formulario
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					access_key: 'abcf4c1f-2801-44f6-82c3-2d837986765b',
					...data,
				}),
			});

			if (response.ok) {
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 4000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.onmouseenter = Swal.stopTimer;
						toast.onmouseleave = Swal.resumeTimer;
					}
				});
				Toast.fire({
					icon: "success",
					title: "Mensaje enviado correctamente"
				});
			
				document.querySelector('form').reset();

			} else {
				const Toast = Swal.mixin({
					toast: true,
					position: "top-end",
					showConfirmButton: false,
					timer: 4000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.onmouseenter = Swal.stopTimer;
						toast.onmouseleave = Swal.resumeTimer;
					}
				});
				Toast.fire({
					icon: "error",
					title: "No se pudo enviar tu mensaje"
				});
			}

		} catch (error) {
			Swal.fire({
				title: 'Error!',
				text: 'Error de red',
				icon: 'warning',
				confirmButtonText: 'OK'
			})

		}finally{
			document.querySelector('form').reset();
		}
	}
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
							{t("Contact.title")}
						</h4>
						<h2 className='text-[45px] lg:text-[90px] leading-none mb-10 xs:text-center'>
							{t("Contact.description")}
						</h2>
					</div>
				</motion.div>
				<motion.form 
				id='form'
				variants={fadeIn('left',0.3)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-15 p-6 items-start'
				action='https://api.web3forms.com/submit'
				method='POST'
				onSubmit={handleSubmit}
				>
					<input type="hidden" name="access_key" value="abcf4c1f-2801-44f6-82c3-2d837986765b"/>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="text" name='name' placeholder={t("Contact.place.a")} required/>
					<input className='bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all' type="email" name='email' placeholder={t("Contact.place.b")} required/>
					<textarea className='bg-transparent border-b py-12 focus:outline-none w-full focus:border-accent transition-all resize-none mb-9' name="message" placeholder={t("Contact.place.c")} required></textarea>				
					<button className='btn btn-lg' type='submit'>Enviar mensaje</button>
				</motion.form>
			</div>
		</div>
	</div>
	)
}

export default Contact