import React from 'react'
import Navbar from '../Component/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div id="home" className='homeBgImg relative text-white  h-[658px] flex flex-col justify-center items-center gap-4 px-4'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl font-medium'>Yoga</h2>
                <p className='text-xl text-center sm:text-2xl lg:text-4xl' >Where stress goes to die and wellness comes to life</p>
            </div>
        </>
    )
}

export default Home