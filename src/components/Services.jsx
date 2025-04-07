import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/variants';
import { useTranslation } from 'react-i18next';
import { HiCode } from "react-icons/hi";
import { MdOutlineRocketLaunch, MdOutlineDesignServices } from "react-icons/md";

const icons = [HiCode, MdOutlineRocketLaunch, MdOutlineDesignServices];

function Services() {
    const { t } = useTranslation(["translation"]);
    const services = t("Services.list", { returnObjects: true });

    const renderIcon = (idx) => {
        const Icon = icons[idx];
        return <Icon className='text-gray-500 dark:text-[#f5f5f5] w-[80px] h-[80px]' />;
    };

    return (
        <section className="pt-[14vh]" id='services'>
            <div className="max-w-6xl mx-auto px-5 py-2">
                <motion.div 
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-center"
                >
                    <h2 className="h2 mb-4 text-accent">{t("Services.title")}</h2>
                    <p className="p xl:w-4/4 lg:w-3/4 mx-auto">{t("Services.description")}</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full gradient inline-flex"></div>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center flex-wrap xs:p-[0px] xs:min-h-[100vh] md:min-h-[80vh]">
                    {Object.values(services).map((item, idx) => (
                        <motion.div 
                            variants={fadeIn('down', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="bg-[#287bff] flex justify-center items-start w-[300px] h-[450px] m-[30px] rounded-[20px] rounded-b-[160px] bg-gradient-to-b from-[#ff2ae0] to-[#3bace2] card"
                            key={idx}
                        >
                            <div className="relative w-[140px] h-[120px] bg-white dark:bg-[#101424] rounded-b-[100px] z-1 flex justify-center items-start icon">
                                <span>{renderIcon(idx)}</span>
                            </div>
                            <div className="absolute p-[40px] pt-[150px] text-center max-w-sm">
                                <h3 className='h3 text-[#f5f5f5] mb-[15px]'>{item.title}</h3>
                                <p className='p text-[#f5f5f5] leading-[1.3em] px-6'>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
