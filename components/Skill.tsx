import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
type Props = {
    directionLeft?: boolean,
    skill:SkillType
}

export default function Skill({ directionLeft, skill }: Props) {
    return (

        <div className='group relative flex cursor-pointer '>
            <motion.img
                initial={{
                    // x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    opacity:1, x:0,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    duration: 2
                }}
                className='rounded border bg-gray-100  object-cover 
                w-12 h-12 xl:w-24 xl:h-24 filter 
                '
                src={urlFor(skill.image).url()}>

            </motion.img>

            <div className='absolute opacity-0 group-hover:opacity-70 transition duration-200 
            ease-in-out group-hover:bg-white w-12 h-12 xl:w-24 xl:h-24 rounded-full'>
                <div className='flex h-full items-center justify-center'>
                    <p className='text-sm lg:text-2xl text-black font-bold opacity-100'>
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    )
}