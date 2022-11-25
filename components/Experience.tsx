import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { ExperienceBody } from '../typings'
type Props = {
    experiences: ExperienceBody[]
}

export default function Experience({ experiences }: Props) {
    // console.log(experiences)
    return (
        <motion.div
            initial={{
                x: -300,
                // opacity: 0
            }}
            whileInView={{
                x: 0,
                // opacity: 1
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 1
            }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 max-w-7xl justify-center mx-auto items-center overflow-hidden'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-sm md:text-2xl z-20'>Work Experience</h3>
            <h3 className='absolute top-36 text-gray-500 text-xs z-20'>Swipe Right for more</h3>

            <div className='w-full h-full mt-52 md:mt-80 flex space-x-5 overflow-hidden overflow-x-scroll snap-x snap-mandatory scrollbar-track-gray-600 scrollbar-thumb-orange-600 scrollbar-thin z-0'>
                {
                    experiences.map((experience, i) => (
                        <ExperienceCard key={experience._id} experience={experience}></ExperienceCard>
                    ))
                }

            </div>
        </motion.div>
    )
}