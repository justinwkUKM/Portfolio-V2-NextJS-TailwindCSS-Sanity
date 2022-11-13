import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

export default function ContactMe({ }: Props) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:waqasobeidy@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`
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
            <div className='flex flex-col space-y-10'>
                <h4 className='text-2xl font-semibold text-center'>
                    Find my website interesting? &nbsp;
                    <span className='decoration-amber-600 underline'>
                        Lets {text}!
                    </span>
                </h4>
                <div className='flex items-center justify-center space-x-5'>
                    <PhoneIcon className='w-10 h-10 text-orange-600 animate-pulse' />
                    <p>
                        +60166442676
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <EnvelopeIcon className='w-10 h-10 text-orange-600 animate-pulse' />
                    <p>
                        waqas@thelorry.com
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <MapPinIcon className='w-10 h-10 text-orange-600 animate-pulse' />
                    <p>
                        Lot 28, Jalan Puchong Prima, 47150.
                    </p>
                </div>
                <div>
                    <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                        </div>
                        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                        <textarea {...register('message')} placeholder='Message' className='contactInput' />
                        <button type='submit' className='bg-orange-600 rounded-md py-5 px-10 text-black font-bold' >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}