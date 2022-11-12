import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    // const projects = [
    //     { name: "UPS Clone", duration: "2 years", description: " you have full control over customizing the logic in this service worker, by creating your own src/service-worker.js file, or customizing the one added by the cra-template-pwa (or cra-template-pwa-typescript) template." },
    //     { name: "Twitter Clone", duration: "6 months", description: "Starting with Create React App 4, you have full control over customizing the logic in this service worker, by creating your own src/service-worker.js file, or customizing the one added by the cra-template-pwa (or cra-template-pwa-typescript) template." },
    //     { name: "Facebook Clone", duration: "3 years", description: "customizing the logic in this service worker, by creating your own src/service-worker.js file, or customizing the one added by the cra-template-pwa (or cra-template-pwa-typescript) template." },
    // ]


    return (
        <motion.div


            className='h-screen relative flex flex-col overflow-hidden text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <motion.div

                className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects?.map((project, i) => (
                    <motion.div
                        key={project._id}

                        className='w-screen flex-shrink-0 flex flex-col items-center space-y-4 justify-center p-20 md:p-44 h-screen snap-center'>
                        <motion.img initial={{
                            y: -300,
                            opacity: 0
                        }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1
                            }}


                            className='rounded-lg max-h-48 max-w-48' src={urlFor(project?.image).url()} alt='' />
                        <div>
                            <h4 className='text-2xl text-center font-semibold'>
                                <span className='underline'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>
                                &nbsp; {project?.title}
                            </h4>
                            <div className='flex space-x-2 justify-center items-center '>
                                {project?.technologies?.map((skill, i) =>
                                    <img key={skill._id} className='max-h-10 rounded-full p-1' src={urlFor(skill.image).url()}>
                                    </img>
                                )}


                            </div>

                            <h4 className='mt-5 '>
                                {project?.summary}
                            </h4>
                        </div>
                    </motion.div>
                )
                )}
            </motion.div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
    -skew-y-12'>

            </div>
        </motion.div>
    )
}