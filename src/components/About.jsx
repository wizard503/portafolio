import React, { useEffect, useState } from "react";
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../helpers/variants";
import { useTranslation } from 'react-i18next'

function About() {
	const {t,i18n}=useTranslation(["translation"]);
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
						<blockquote className="flex gap-2 pt-2 text-3xl md:text-4xl lg:pt-0 lg:text-5xl sm:justify-center xs justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								role="img"
								fill="currentColor"
								className="-mt-1 h-10 md:-mt-3 md:h-16 lg:h-24 text-black dark:text-[#f5f5f5]"
							>
								<path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z"></path>
							</svg>
							<span className="flex flex-col">
								<span className="leading-[1.15]	">
									<em>{t('About.frase.a')}</em>{" "}
								</span>
								<span className="flex items-center gap-1 leading-[1.15] lg:gap-4">
									<span className="mt-1 h-0.5 w-8 rounded-full bg-slate-400 lg:h-1 lg:w-24 dark:bg-slate-500"></span>
									<span>
										<strong className="font-extrabold text-sky-400">
											{t('About.frase.b')}
										</strong>{" "}
											{t('About.frase.c')}{" "}
										<strong className="font-extrabold text-sky-400">
											{t('About.frase.d')}{""}
										</strong>
									</span>
									<span className="mt-1 h-0.5 w-6 rounded-full bg-slate-400 lg:h-1 lg:w-14 dark:bg-slate-500"></span>
								</span>
								<span className="text-right leading-[1.15]">
									<em>{t('About.frase.e')}</em>{" "}
								</span>
								<span className="leading-[1.15]">
									{t('About.frase.f')}{" "}
									<strong className="relative font-extrabold text-[#f5f5f5] dark:text-[#f5f5f5] lg:leading-[1.5]">
										<span className="absolute -left-0.5 bottom-0 right-0 top-1 z-[-1] rounded-md px-1 lg:-left-1.5 lg:-right-0.5 lg:bottom-1 lg:top-1 bg-fuchsia-500"></span>
										{t('About.frase.g')}
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
						<h2 className="h2 text-accent">{t('About.title')}</h2>
						<h3 className="h3 mb-4">{t('About.sub')} 👋</h3>
						<p className="p mb-6 md:px-0 xs:px-5">
							{t("About.description.paraph1")}
						</p>
						<p className="p mb-6 md:px-0 xs:px-5">
							{t("About.description.paraph2")}
						</p>
						<p className="p mb-6 md:px-0 xs:px-5">
							{t("About.description.paraph3")}
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12 lg:justify-normal md:justify-center xs:gap-x-3 xs:justify-center">
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={2} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
								{t("About.year1")}
								<br />
								{t("About.year2")}
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={5} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
									{t("About.projects1")}
									<br />
									{t("About.projects2")}
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient py-2">
									{inView ? <CountUp start={0} end={4} duration={5} /> : null}
								</div>
								<div className="font-primary text-sm xs:text-xs tracking-[2px]">
									{t("About.sites1")}
									<br />
									{t("About.sites2")}
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
