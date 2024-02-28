import React from 'react'

const ContactForm = () => {
    return (
        <form action="#" className="space-y-8 w-full lg:w-1/2">
            <div>
                <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Full Name"
                    required
                />
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-4 justify-evenly '>
                <input type="email" id="email" className="block p-3 sm:w-2/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
                    placeholder="Your Email"
                    required
                />
                <input type="email" id="email" className="block p-3 sm:w-2/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm "
                    placeholder="Your Email"
                    required
                />
            </div>
            <div className="sm:col-span-2">
                <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 "
                    placeholder="Leave a comment..."
                    defaultValue={""}
                />
            </div>
            <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#ff6f59] sm:w-fit hover:bg-primary-800 "
            >
                Send message
            </button>
        </form>


    )
}

export default ContactForm