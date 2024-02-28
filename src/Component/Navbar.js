import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
    const [hide, setHide] = useState(true)
    const [scrolled, setScrolled] = useState(false)

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
            link.addEventListener('click', handleSmoothScroll);
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleSmoothScroll);
            });

            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    return (
        <nav className={`${scrolled ? "bg-white" : "bg-transparent"}  fixed w-full z-20 top-0 left-0 `}>
            <div className="max-w-screen-xl flex flex-wrap items-center relative justify-between mx-auto p-4 px-18 gap-4 lg:gap-0">
                <div className='bg-[#ff6f59]  text-white font-bold text-3xl px-5 py-1 rounded-lg'>Yog Treatment</div>

                <div className={` ${hide ? "hidden" : "block"} items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky`}>

                    <ul className={`${scrolled ? "text-black font-medium" : "text-white font-bold"} flex flex-col  p-4 md:p-0 mt-4   rounded-lg md:flex-row md:space-x-5  md:mt-0 md:border-0  `}>
                        <li onClick={() => setHide(true)}>
                            <a href="#home" className="block py-2 pl-3 pr-4 text-center  text-xl hover:text-[#ff6f59] hover:bg-black md:hover:bg-transparent rounded md:bg-transparent ">
                                Home
                            </a>
                        </li>
                        <li onClick={() => setHide(true)}>
                            <a href="#about" className="block py-2 pl-3 pr-4 text-center text-xl hover:text-[#ff6f59]  hover:bg-black md:hover:bg-transparent rounded md:bg-transparent ">
                                About
                            </a>
                        </li>
                        <li onClick={() => setHide(true)}>
                            <a href="#services" className="block py-2 pl-3 pr-4 text-center text-xl hover:text-[#ff6f59]  hover:bg-black md:hover:bg-transparent  rounded md:bg-transparent ">
                                Services
                            </a>
                        </li>
                        <li onClick={() => setHide(true)}>
                            <a href="#contacts" className="block py-2 pl-3 pr-4 text-center text-xl hover:text-[#ff6f59]  hover:bg-black md:hover:bg-transparent  rounded md:bg-transparent ">
                                Contact
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="flex md:order-2 w-full md:w-auto text-center md:text-start justify-center md:justify-normal">
                    <a href='tel:+91-8961612991' className={`${hide ? "hidden" : "block"} bg-[#ff6f59]  text-white  font-medium rounded-lg text-sm px-4 py-2  md:flex mr-3 md:mr-0`}>
                        +91-8961612991
                    </a>
                </div>



                <button data-collapse-toggle="navbar-user" type="button"
                    className=" inline-flex items-center absolute top-2 right-2 p-2 w-10 h-10 justify-center md:hidden text-sm text-black rounded-lg  focus:outline-none  " aria-controls="navbar-user" aria-expanded="false"
                    onClick={() => setHide(!hide)}
                >

                    {
                        hide ?
                            <GiHamburgerMenu size={20} />
                            :
                            <RxCross2 size={20} />
                    }
                </button>
            </div>
        </nav>

    )
}

export default Navbar