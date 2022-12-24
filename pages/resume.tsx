import React from 'react'
type Props = {}

function Resume({ }: Props) {
    return (
        <div className=' flex justify-center items-center bg-white overflow-y-scroll scrollbar-thin '>
            <video autoPlay loop muted className="object-cover">
                <source
                    src="assets/ResumeVideo.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default Resume