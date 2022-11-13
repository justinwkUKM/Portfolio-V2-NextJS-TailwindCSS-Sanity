import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '../typings'
type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    return (
        <header className='sticky bg-[rgb(36,36,36)] top-0 flex items-center justify-between max-w-5xl mx-auto p-2 z-40 border-b border-gray-700 hover:border-orange-400 transition-all ease-in-out'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0.2,
                    scale: 0.3
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center '>
                {socials.map((social, i) => (
                    <SocialIcon className='hover:animate-[spin_1s_ease-in-out] ' key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
                ))}



            </motion.div>
            <Link href={'#contactme'}>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0.2,
                        scale: 0.3
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    className='flex text-gray-300 cursor-pointer pr-2 '>
                    <button className='uppercase md:inline-flex font-semibold'>Get in touch</button>
                    {/* <SocialIcon className='hover:animate-[spin_1s_ease-in-out] ' url='#contactme' fgColor='gray' bgColor='transparent' /> */}
                    
                </motion.div>
            </Link>


        </header>
    )
}

export default Header