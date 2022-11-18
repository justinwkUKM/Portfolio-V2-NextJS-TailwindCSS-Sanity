import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useForm, SubmitHandler } from "react-hook-form";
import { MainInfo } from '../typings';

type Props = {
    pageInfo:MainInfo
}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

export default function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:waqasobeidy@gmail?subject=FWB-${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`
    };
    // console.log(watch("example")) // watch input value by passing the name of it
    const [text, count] = useTypewriter(
        {
            words: ["Chat",
                "Talk",
                "Meet"],
            delaySpeed: 2000,
            loop: true,

        }
    )
    return (
        <div className='h-screen w-4/5 relative flex flex-col overflow-hidden text-left 
    md:flex-row md:max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-1'>
                <h4 className='md:text-4xl font-semibold dark:text-gray-200 text-gray-600 text-center md:mb-10'>
                    Find my website interesting? &nbsp;
                    <span className='decoration-amber-600 underline'>
                        Lets {text}!
                    </span>
                </h4>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='w-5 h-5 md:w-10 md:h-10 text-orange-600 animate-pulse' />
                    <p className='text-sm dark:text-gray-200 text-gray-600 md:text-2xl'>
                        {pageInfo.phoneNumber}
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='w-5 h-5 md:w-10 md:h-10 text-orange-600 animate-pulse' />
                    <p className='text-sm dark:text-gray-200 text-gray-600 md:text-2xl'>
                        {pageInfo.email}
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='w-5 h-5 md:w-10 md:h-10 text-orange-600 animate-pulse' />
                    <p className='text-sm  dark:text-gray-200 text-gray-600 md:text-2xl'>
                        {pageInfo.address}
                    </p>
                </div>
                <div>
                    <form className='flex flex-col items-start space-y-2 w-full mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col md:flex-row md:justify-evenly space-x-0 space-y-2 md:space-x-2 md:space-y-0 w-full '>
                            <input {...register('name')} placeholder='Name' className='contactInput md:w-full rounded' type="text"  />
                            <input {...register('email')} placeholder='Email' className='contactInput md:w-full rounded hidden' type="email" value="waqasobeidy@gmail.com"/>
                        </div>
                        <input {...register('subject')} placeholder='Subject' className='contactInput w-4/5 md:w-full rounded' type="text" />
                        <textarea {...register('message')} placeholder='Message' className='contactInput w-4/5 md:w-full rounded' />
                        <button type='submit' className='bg-orange-600 rounded-md py-2 md:py-5 md:px-10 text-black font-bold w-4/5 md:w-full' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}