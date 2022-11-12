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
                    x: directionLeft ? -200 : 200,
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
                className='rounded-full border border-gray-500 object-cover 
                w-24 h-24 xl:w-32 xl:h-32 filter 
                '
                src={urlFor(skill.image).url()}>

            </motion.img>

            <div className='absolute opacity-0 group-hover:opacity-70 transition duration-200 
            ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full'>
                <div className='flex h-full items-center justify-center'>
                    <p className='text-3xl text-black font-bold opacity-100'>
                        {skill.progress}%
                    </p>
                </div>
            </div>
        </div>
    )
}