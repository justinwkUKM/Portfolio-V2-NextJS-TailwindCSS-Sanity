import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceBody } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    experience: ExperienceBody
}

export default function ExperienceCard({ experience }: Props) {
    // console.log(experience)
    return (
        <article className='flex flex-col  rounded-lg bg-gray-200 dark:bg-[#292929] justify-center 
        items-center flex-shrink-0 p-2 w-[500px] 
        md:w-[600px] xl:w-[900px] snap-center 
        opacity-70 hover:opacity-100 cursor-pointer transition-opacity 
        duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    x: -100,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 1
                }}
                className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center animate-wiggle-3s'
                src={urlFor(experience?.companyImage).url()}
                alt='profile'
            />
            <div className='px-0 md:px-10 flex flex-col justify-center items-center'>
                <h4 className='text-2xl xl:text-4xl text-gray-500 font-bold py-1 mt-2'>{experience.jobTitle}</h4>
                <h4 className='text-xl xl:text-2xl text-gray-500 font-semibold py-1'>{experience.company}</h4>
                <div className='flex space-x-2 my-2 items-center justify-center'>
                    {experience.skills.map((skill, i) => (<img key={skill._id} className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-yellow-400 object-cover' 
                    src={urlFor(skill?.image).url()}></img>))}
                </div>
                <p className='uppercase py-5 text-gray-500 text-sm md:text:xl'>
                    {new Date(experience?.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-sm text-gray-500 md:text-lg text-left max-h-44  overflow-y-scroll scrollbar-thin scrollbar-track-slate-500 '>
                    {experience?.points?.map((point, i) => (
                    <li key={i} className='text-sm'>
                        {point}
                    </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}