import React from 'react'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { MainInfo } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    pageInfo:MainInfo
}

function About({pageInfo }: Props) {
    const [text, count] = useTypewriter(
        {
            words: ["a little",
                "some"],
            delaySpeed: 2000,
            loop: true,

        }
    )
    return (
        <div
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row px-10 max-w-7xl justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover  rounded-full md:rounded-lg'
                src={urlFor(pageInfo?.profilePic).url()} >

            </motion.img>
            <div className='space-y-10 px-5 md:px:10'>

                <h2 className='text-4xl font-semibold text-gray-300' >
                    Here is <span className='underline decoration-yellow-700'>{text}</span> background
                </h2>
                <p className='text-gray-400 text-justify text-sm md:text-lg'>{pageInfo?.backgroundInformation}</p>
            </div>
        </div>
    )
}

export default About