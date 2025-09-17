import React from 'react'

const GetIntouch = () => {
    return (
        <>
            {/* <h1 style={{ fontSize: "5vh", fontWeight: "bolder", textAlign:"center"}}><span className="about-badge"></span> Get In Touch</h1>
            <div className="px-[12vh] py-[2vh]" style={{ boxShadow: "-1px 0px 11px 7px #050941", textAlign:"center" }}>
                
                
                <div className="get-conn py-[2vh]">
                    <small>write your query here-</small> <br /> <br />
                    <form action="">
                        <input type="text" placeholder='Enter your name' /> <br />
                        <input type="phone" placeholder='phone number' /> <br />
                        <input type="text" placeholder='Enter your Query' /> <br />
                        <input type="submit" className='proj-btn' style={{ width: "20vh" }} value="Send" />
                    </form>
                </div>
            </div> */}

            <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8 sm:py-12">
                {/* Heading */}
                <p className="text-xl sm:text-3xl md:text-3xl font-extrabold text-center mb-8 flex items-center justify-center gap-2">
                    <span className="w-2 h-10 bg-blue-800 rounded-l-md"></span>
                    Get In Touch
                </p>

                {/* Form Container */}
                <div className="bg-[#050941] shadow-lg shadow-[#050941]/50 px-6 sm:px-10 py-6 sm:py-8 rounded-md text-center">

                    <div className="get-conn mb-6">
                        <small className="text-gray-300">Write your query here:</small>
                    </div>

                    <form className="flex flex-col gap-4 sm:gap-6">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="p-3 rounded-md bg-#020421 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="p-3 rounded-md bg-#020421 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Enter your query"
                            className="p-3 rounded-md bg-#020421 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="cursor-pointer proj-btn bg-#020421-600 text-white font-bold py-3 px-6 rounded-md hover:bg-#020421-900 transition-colors w-full sm:w-[20vh] mx-auto"
                        />
                    </form>
                </div>
            </div>

        </>
    )
}

export default GetIntouch
