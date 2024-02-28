import React from 'react'
import Dot from '../Component/Dot'
import ContactForm from '../Component/ContactForm'

const Contacts = () => {

    return (
        <div id="contacts" className='bg-gradient-to-l from-[#057ae1]  to-[#00ed65] pt-28 pb-20  flex flex-col justify-center items-center  px-4'>
            <div className='max-w-6xl relative w-full flex flex-col justify-evenly items-center space-y-6 sm:space-y-12 px-4'>
                <h2 className='text-4xl sm:text-[42px] font-bold text-white'>Contact us</h2>
                <Dot />
                <div className='w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10  lg:gap-32'>
                    <ContactForm />
                    <div className='w-full lg:w-1/2 text-white flex flex-col sm:flex-row  gap-5 sm:gap-3 items-start justify-between '>
                        <div className='text-2xl text-bold sm:w-[300px] text-[#231f1f]'>Quick Links
                            <ul className='flex flex-col gap-3 mt-4 text-lg text-white'>
                                <li className='hover:text-[#231f1f]'><a href='#home'>Home</a></li>
                                <li className='hover:text-[#231f1f]'><a href='#about'>About</a></li>
                                <li className='hover:text-[#231f1f]'><a href='#services'>Services</a></li>
                                <li className='hover:text-[#231f1f]'><a href='#contacts'>Contacts</a></li>
                            </ul>
                        </div>

                        <div className=' text-2xl text-bold text-[#231f1f]'>
                            Address
                            <address className='text-lg text-white'>
                                302-Nr, Dayanand Gram,
                                Bahadarabad, Haridwar,
                                Uttarakhand:249405
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts