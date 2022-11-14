import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'

type Props = {
    skills: SkillType[]
}

export default function Skills({skills }: Props) {
    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration: 1.5
        }}
            className='h-screen flex flex-col 
        relative text-center md:text-left md:flex-row px-10 
        max-w-[2000px] justify-evenly
        mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-36 uppercase tracking-[5px] text-gray-500 text-sm md:text-lg'>Hover over a skill to know more</h3>
            <div className='grid grid-cols-6 lg:grid-cols-7 gap-5'>
                {
                    skills.map((skill,i) => (<Skill key={skill._id} skill={skill} />))
                }
            </div>
        </motion.div>
    )
}