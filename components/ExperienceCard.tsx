import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceBody } from '../typings'
type Props = {
    experience: ExperienceBody
}

export default function ExperienceCard({ experience }: Props) {
    console.log(experience)
    return (
        <article className='flex flex-col  rounded-lg bg-[#292929] justify-center 
        items-center space-y-7 flex-shrink-0 p-4 w-[500px] 
        md:w-[600px] xl:w-[900px] snap-center 
        opacity-50 hover:opacity-100 cursor-pointer transition-opacity 
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
                className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src='profile.jpeg'
                alt='profile'
            />
            <div className='px-0 md:px-10 flex flex-col justify-center items-center'>
                <h4 className='text-4xl font-bold py-2 mt-2'>{experience.jobTitle}</h4>
                <h4 className='text-2xl font-semibold py-2'>{experience.company}</h4>
                <div className='flex space-x-2 my-2 items-center justify-center'>
                    {experience.skills.map((skill, i) => (<img key={skill._id} className='w-10 h-10 rounded-full bg-yellow-400 object-cover' src='vercel.svg'></img>))}
                </div>
                <p className='uppercase py-5 text-gray-500'>
                    {new Date(experience?.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg text-left max-h-80  overflow-y-scroll scrollbar-thin scrollbar-track-slate-500 '>
                    {experience?.points?.map((point, i) => (
                    <li key={i}>
                        {point}
                    </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}