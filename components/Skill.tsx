import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    directionLeft?: boolean,
    skill: SkillType
}

export default function Skill({ directionLeft, skill }: Props) {
    return (

        <div className='group flex flex-col justify-center items-center '>

            <div className='group relative flex cursor-pointer hover:animate-wiggle'>
                <motion.img
                    initial={{
                        // x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1, x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 2
                    }}
                    className='rounded p-1 bg-gray-100 border-2 border-gray-300 dark:bg-gray-100  object-cover 
                w-12 h-12 xl:w-24 xl:h-24 filter ease-in-out duration-300 
                '
                    src={urlFor(skill.image).url()}>

                </motion.img>

                <div className='absolute opacity-0 group-hover:opacity-70 transition 
            ease-in-out group-hover:bg-gray-300 w-12 h-12 xl:w-24 xl:h-24 rounded '>
                    <div className='flex h-full items-center justify-center'>
                        <p className='text-sm lg:text-2xl text-black font-bold opacity-100'>
                            {skill.progress}%
                        </p>
                    </div>
                </div>

            </div>
            <motion.div
                    initial={{
                        y:100,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        y:0,

                    }}
                    
                    transition={{
                        duration: 1
                    }} className='text-gray-500 hidden group-hover:inline-flex group-hover:visible group-hover:opacity-70 ease-in-out duration-100'>
                <h1 className='text-xs'>{skill.title}</h1>
            </motion.div>
        </div>
    )
}