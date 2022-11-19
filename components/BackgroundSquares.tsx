import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundSquares({ }: Props) {
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

        className='relative group flex justify-center items-center z-0'>
            <div className='absolute border group-hover:border-2  border-gray-400/20 dark:border-gray-700 rounded-lg h-[50px] w-[100px] mt-60
             animate-ping ' />
            <div className='absolute border group-hover:border-2 border-gray-400/20 dark:border-gray-700 rounded-lg h-[150px] w-[300px] mt-60
             animate-ping ' />
            <div className='absolute border group-hover:border-2 border-gray-400/30 dark:border-gray-700 rounded-lg h-[250px] w-[500px] mt-60
             animate-ping ' />
            <div className='absolute hidden md:inline-flex md:visible border-2 group-hover:border-4 border-orange-300 dark:border-yellow-800 rounded-lg h-[500px] w-[1200px] mt-60
             animate-pulse' />
        </ motion.div>
    )
}

export default BackgroundSquares 