import React, { useEffect, useState } from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../helpers/variants";

function About() {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});
	
	return (
		<section
			className="section max-w-7xl xs:pt-[5vh] lg:pt-[40vh] xl:pt-[30vh] mx-auto"
			id="about"
			ref={ref}
		>
			<div className="mx-auto xs:px-1">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
					{/* img */}
					<motion.div 
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 pr-10 sm:justify-center xs:justify-center bg-about bg-contain bg-no-repeat h-[320px] mix-blend-lighten dark:text-[#c7c7c7]">
						<div>
						<blockquote class="flex gap-2 pt-2 text-3xl md:text-4xl lg:pt-0 lg:text-5xl sm:justify-center xs justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								role="img"
								fill="currentColor"
								class="-mt-1 h-10 md:-mt-3 md:h-16 lg:h-24 text-black dark:text-[#f5f5f5]"
							>
								<path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
							</svg>
							<span class="flex flex-col">
								<span class="leading-[1.15]	">
									<em>Cada</em>{" "}
								</span>
								<span class="flex items-center gap-1 leading-[1.15] lg:gap-4">
									<span class="mt-1 h-0.5 w-8 rounded-full bg-slate-400 lg:h-1 lg:w-24 dark:bg-slate-500"></span>
									<span>
										<strong class="font-extrabold text-sky-400">
											linea
										</strong>{" "}
										de{" "}
										<strong class="font-extrabold text-sky-400">
											código{""}
										</strong>
									</span>
									<span class="mt-1 h-0.5 w-6 rounded-full bg-slate-400 lg:h-1 lg:w-14 dark:bg-slate-500"></span>
								</span>
								<span class="text-right leading-[1.15]">
									<em>es un trazo</em>{" "}
								</span>
								<span class="leading-[1.15]">
									en el{" "}
									<strong class="relative font-extrabold text-[#f5f5f5] dark:text-[#f5f5f5] lg:leading-[1.5]">
										<span class="absolute -left-0.5 bottom-0 right-0 top-1 z-[-1] rounded-md px-1 lg:-left-1.5 lg:-right-0.5 lg:bottom-1 lg:top-1 bg-fuchsia-500"></span>
										lienzo digital
									</strong>
								</span>
								
							</span>
						</blockquote>
						</div>
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="flex-1 lg:text-left md:text-center sm:text-center xs:text-center"
					>
						<h2 className="h2 text-accent">Acerca de mi</h2>
						<h3 className="h3 mb-4">Hola 👋</h3>
						<p className="p mb-6 md:px-0 xs:px-5">
							Me gusta leer y me apasiona el arte, especialmente el dibujo y la
							pintura, me considero alguien apasionado y soñador aunque algo
							introvertido. Disfruto de la tranquilidad pero aprecio una buena
							compañia y una buena conversacion.
						</p>
						<p className="p mb-6 md:px-0 xs:px-5">
							Tengo profundo interes por el universo, me encanta observar el
							cielo nocturno asi como los rayos en medio de una tormeta. Soy
							selectivo en mis relaciones personales,amo la lluvia y mi bebida
							favorita es el café.
						</p>
						<p className="p mb-6 md:px-0 xs:px-5">
							Además, me esfuerzo por hacer las cosas de la mejor manera
							posible, mostrando paciencia y dedicación en todo lo que hago.
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12 lg:justify-normal md:justify-center xs:gap-x-3 xs:justify-center">
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={2} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
									Años de <br />
									Experiencia
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={5} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
									Proyectos
									<br />
									Realizados
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={4} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
									Sitios Desplegados
									<br />
									Completamente
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default About;
