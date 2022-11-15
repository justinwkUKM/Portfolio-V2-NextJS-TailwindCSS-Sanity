import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { MainInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: MainInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter(
        {
            words: [`Hi, My name is ${pageInfo?.name}`,
                "Guy who like to build and scale digital products",
                "<I Learn Everyday />"],
            delaySpeed: 2000,
            loop: true,

        }
    )
    return (
        <div className='flex  flex-col justify-center items-center h-screen text-center overflow-hidden'>
            <BackgroundCircles></BackgroundCircles>
            <img className='mb-1 relative rounded-full h-32 w-32 max-auto  object-cover hover:scale-125  dark:border-orange-600 border-orange-600 hover:border-4'
                src={urlFor(pageInfo?.heroImage).url()}
                alt='profile-photo-on-hero'>
            </img>
            <div className='z-20'>

                <h2 className='text-sm uppercase  dark:text-gray-400 text-gray-400 p-4 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='dark:text-gray-200 text-gray-600 text-4xl lg:text-5xl font-semibold px-10'>
                    <span className=''>
                        {text}
                    </span>
                    <Cursor cursorColor='orange' ></Cursor>
                </h1>
                <div>
                    <Link href={`#about`}>
                        <button className='heroButton'>About</button>

                    </Link>
                    <Link href={`#experience`}>
                        <button className='heroButton'>Experience</button>

                    </Link>
                    <Link href={`#projects`}>
                        <button className='heroButton'>Projects</button>

                    </Link>
                    <Link href={pageInfo?.cv}>
                        <button className='heroButton'>Download CV</button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero