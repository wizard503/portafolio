import React from 'react'
import { Link } from 'react-scroll'

//type animation
import {TypeAnimation } from 'react-type-animation'
// CV
import cv from "../utils/cv/curriculum-jose-duran.pdf";
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../helpers/variants';
import { useTranslation } from 'react-i18next'

function Banner() {
	const {t,i18n}=useTranslation(["translation"]);
	const Spline = React.lazy(() => import('@splinetool/react-spline'));

	return (
	<section className='xs:min-h-[76vh] lg:min-h-[0vh] flex justify-around xs:pt-[9em] xl:pt-[10em]' id='home'>
		<div>
			<div className="flex flex-col lg:flex-row lg:items-center ">
				{/* img */}
				<motion.div 
				variants={fadeIn('down',0.4)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className="hidden xl:flex max-w-[320px] xl:max-w-[3202px] "
				>
					<div className='bg-gradient-to-r from-fuchsia-500 opacity-[66%] -rotate-45 w-[60vh] h-[60vh] rounded-full left-0 bottom-0'>
					</div>
				</motion.div>
				{/* text */}
				<div className='flex-1 text-center font-quaternary xl:text-left xl:ml-20 right-0'>
					<motion.h1 
					variants={fadeIn('up',0.3)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once:false,amount:0.7}}
					className='text-[55px] text-neutral-800 font-bold leading-[0.8] lg:text-[110px] dark:text-[#f5f5f5]'
					>
					JOSÉ <span>DURÁN</span>
					</motion.h1>
					<motion.div
					variants={fadeIn('up',0.5)}
					initial='hidden'
					whileInView={'show'}
					viewport={{once:false,amount:0.7}}
					className='mb-6 text-[36px] lg:text-[60px] font-quaternary font-semibold uppercase leading-[1]'
					>
					<span className='text-cyan-400 mr-4'>{t('Iam.i')}</span>
					<TypeAnimation 
					sequence={[
						`${t('Iam.dev')}`,
						2000,
						`${t('Iam.designer')}`,
						2000,
					]}
					speed={50}
					className='text-accent'
					wrapper='span'
					repeat={Infinity}
					/>
				</motion.div>
				<motion.div 
				variants={fadeIn('up',0.6)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className='xs:px-5'
				>
					
					<p className='mb-8 max-w-lg mx-auto lg:mx-0' >
					{/* description */}
					{t('Banner.description')}
					</p>
					<br />
				</motion.div>
				<motion.div 
				variants={fadeIn('up',0.6)}
				initial='hidden'
				whileInView={'show'}
				viewport={{once:false,amount:0.7}}
				className='flex max-w-max gap-x-6 items-center mb-12 mx-auto xl:mx-0'
				>
					<a className='btn btn-lg flex items-center' href={cv}>{t('Banner.button1')}</a>
					<Link to='contact' className='text-gradient btn-link cursor-pointer'>{t('Banner.button2')}</Link>
				</motion.div>
				{/* resume skills */}

				</div>
			</div>
		</div>
	</section>
	)
}

export default Banner