import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div 
        initial={{
            opacity: 0.2,
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius:["10%","20%","50%","80%","20%",]
        }}
        transition={{
            duration:2.5
        }}

        className='relative group flex justify-center items-center z-1'>
            <div className='absolute border group-hover:border-2  border-orange-400/40 dark:border-gray-700 rounded-full h-[100px] w-[100px] mt-52 animate-ping ' />
            <div className='absolute border group-hover:border-2 border-orange-400/40 dark:border-gray-700 rounded-full h-[200px] w-[200px] mt-52 animate-ping ' />
            <div className='absolute border group-hover:border-2 border-orange-400/40 dark:border-gray-700 rounded-full h-[300px] w-[300px] mt-52 animate-ping ' />
            <div className='absolute border group-hover:border-4 border-orange-400 dark:border-yellow-800 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
        </ motion.div>
    )
}

export default BackgroundCircles 