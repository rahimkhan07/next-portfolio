"use client"

import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {

    // const [isWhiteTheme, setIsWhiteTheme] = useState(false)

    // const toggleTheme = () => {
    //     setIsWhiteTheme(true) // Only switch to white when clicked
    // }

    // useEffect(() => {
    //     const root = document.documentElement
    //     if (isWhiteTheme) {
    //         root.style.setProperty('--bg-color', '#ffffff')
    //         root.style.setProperty('--text-color', '#020421')
    //     } else {
    //         root.style.setProperty('--bg-color', '#020421')
    //         root.style.setProperty('--text-color', '#ffffff')
    //     }
    // }, [isWhiteTheme])

    
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setAnimate(true);
//     }, 100); // Delay so the animation triggers after mount

//     return () => clearTimeout(timer);
//   }, []);


    return (
        <>
            <div className='header'>
                 <nav>
                    {/* <div>RK</div> */}
                    <ul>
                        <li id='navhover'>
                            <Link

                                href='/'>
                                <b>R.KHAN</b>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/Blog'>
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href='/About'>
                                About Us
                            </Link>

                        </li>

                        {/* <li>
                            <button onClick={toggleTheme}>
                                Change to White
                            </button>
                        </li> */}

                    </ul>

                </nav>
            </div>

        </>
    )
}

export default Navbar
