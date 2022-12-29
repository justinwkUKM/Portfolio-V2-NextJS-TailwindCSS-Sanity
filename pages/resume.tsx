import React from 'react'
type Props = {}

function Resume({ }: Props) {
    return (
        <div className=' flex justify-center items-center bg-white overflow-y-scroll scrollbar-thin '>
            <div className='h-screen'>
                <video autoPlay loop muted className="object-contain xl:h-screen">
                    <source
                        src="assets/ResumeVideo.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </div>
    )
}

export default Resume