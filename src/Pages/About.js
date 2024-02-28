import React from 'react'
import Dot from '../Component/Dot'

const About = () => {
    return (
        <div id="about" className='bg-white pt-28  pb-20 sm:pb-0 sm:pt-36  flex flex-col justify-center items-center  px-4'>
            <div className='max-w-6xl relative flex flex-col justify-evenly items-center space-y-6 sm:space-y-12 px-4'>
                <h2 className='text-4xl sm:text-[42px] font-bold text-[#393939]'>About Us</h2>
                <Dot />
                <p className=' text-md text-justify  sm:text-[23px] sm:text-center  text-[#757575] leading-snug' >Under the holy guidance of world renowned yoga sages like Yogagram and Niramay Swami Ram-Dev Ji Maharaj and presently the greatest scholar of Ayurveda Acharya Bal-Krishna ji, now all integrative treatments of Yoga, Ayurveda, Panchakarma, Naturopathy, Acupressure, Acupuncture and Huh. Yagya therapy is available. , Haridwar city. Where all diseases from incurable diseases to lifestyle are being treated by Vaidyas and Physicians (Physicians) and Yogacharyas of Yogagram and Niramay. Many diseases like BP, Sugar, Constipation, Joint pain, Arthritis, Obesity, Weakness, Cervical pain, Back pain, Knee pain, Migraine, Parkinson, Gas acidity, Asthma, Thyroid, Fatty liver, Kidney problem, Skin problem Treatment is available here. ,Both IPD and OPD facilities are available.</p>
            </div>
        </div>
    )
}

export default About