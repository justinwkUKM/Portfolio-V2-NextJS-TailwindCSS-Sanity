import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MainInfo, Social } from '../typings'
import { useTheme } from 'next-themes'

type Props = {
    socials: Social[],
    pageInfo: MainInfo
}

function Header({ socials, pageInfo }: Props) {
    const { systemTheme, theme, setTheme } = useTheme();
    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        console.log(currentTheme)
    }
    return (
        <header className='sticky bg-gray-100 dark:bg-[rgb(36,36,36)] top-0 flex items-center justify-between max-w-5xl mx-auto p-2 z-40 border-b border-gray-700 hover:border-orange-400 transition-all ease-in-out'>
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
                <SocialIcon className='hover:animate-[spin_1s_ease-in-out] ' url='#hero' network='vsco' label="Our portfolio" fgColor='gray' bgColor='transparent' />

                {socials.map((social, i) => (
                    <SocialIcon className='hover:animate-[spin_1s_ease-in-out] ' key={social._id} url={social.url} fgColor='gray' bgColor='transparent' />
                ))}

                    {/* {renderThemeChanger()} */}

            </motion.div>
            <Link href={pageInfo?.cv}>
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
                    className='flex text-gray-500 cursor-pointer pr-2 space-x-2 '>
                    <button className='uppercase md:inline-flex font-semibold'>CV</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500 hover:animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </motion.div>
            </Link>
            {/* {renderThemeChanger()} */}

            <div className='flex'>

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
                        className='flex text-gray-500 cursor-pointer pr-2 space-x-2 '>
                        <button className='uppercase md:inline-flex font-semibold'>Get in touch</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </motion.div>
                </Link>
                
            </div>

        </header>
    )
}

export default Header