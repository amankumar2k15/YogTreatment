import React from 'react'
import Dot from '../Component/Dot'
import { Room, Treatment, Ayurveda, Rishikesh, Online, Divya, Yog } from "../assets/index"


const Services = () => {
    const boxes = [
        { src: Room, heading: "Haridwar Room Booking Service", para: "Inhale the future, exhale the past, and let yoga work its magic." },
        { src: Treatment, heading: "Ayurveda Treatment Haridwar", para: "Yoga isn't just a practice; it's a prescription for a healthier you." },
        { src: Ayurveda, heading: "Haridwar Ayurveda Booking", para: "Yoga: The natural remedy for aches, stress, and life's imbalances." },
        { src: Rishikesh, heading: "Rishikesh Ayurveda Booking", para: "Stretch your body, expand your mind, and transform your life with yoga." },
        { src: Online, heading: "Yog Tretment Online", para: "Yoga: The daily dose of peace and serenity you didn't know you needed." },
        { src: Divya, heading: "Ayurveda Divya Treatment Booking", para: "Yoga is not a workout; it's a work-in. It's a path to self-discovery and self-healing." },
    ]

    return (
        <div id="services" className='bg-white pt-28 sm:pt-36 flex flex-col justify-center items-center '>
            <div className='max-w-6xl relative flex flex-col justify-evenly items-center space-y-6 sm:space-y-12 px-4'>
                <h2 className='text-4xl sm:text-[42px] font-bold text-center text-[#393939]'>Services We Provide</h2>
                <Dot />

                <div className=' flex w-full justify-evenly flex-wrap'>
                    {boxes.map((box, index) => {
                        return (
                            <div key={index} className='flex flex-col  sm:max-w-[360px] justify-center items-center gap-4 pb-4 px-1  py-8 hover:scale-105 transition-all duration-200 ease-in-out'>
                                <div className='w-full' >
                                    <img className='cover h-[200px] w-full' src={box.src} alt='Img1' />
                                </div>
                                <div className='text-center mt-5'>
                                    <h2 className='text-[#393919] px-1 text-xl'>{box.heading}</h2>
                                    <p className='text-sm text-[#757575] px-1 mt-2'>{box.para}  </p>
                                </div>

                                <a href='#contacts' className='bg-[#ff6f59] hover:bg-gradient-to-l from-[#057ae1] to-[#00ed65] transition-all duration-400 ease-in-out cursor-pointer rounded-3xl w-[150px] text-white py-4 mt-4 text-sm text-center'>Send Enquiry</a>
                            </div>
                        )

                    })}

                </div>


            </div>
            <div className='pt-20 '>
                <img className='object-cover' src={Yog} alt='img3' />
            </div>
        </div>
    )
}

export default Services