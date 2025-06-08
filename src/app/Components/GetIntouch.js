import React from 'react'

const GetIntouch = () => {
    return (
        <>
        <h1 style={{ fontSize: "5vh", fontWeight: "bolder", textAlign:"center"}}><span className="about-badge"></span> Get In Touch</h1>
            <div className="px-[12vh] py-[2vh]" style={{ boxShadow: "-1px 0px 11px 7px #050941", textAlign:"center" }}>
                
                <small>write your query here-</small>
                <div className="get-conn py-[2vh]">
                    <form action="">
                        <input type="text" placeholder='Enter your name' /> <br />
                        <input type="phone" placeholder='phone number' /> <br />
                        <input type="text" placeholder='Enter your Query' /> <br />
                        <input type="submit" className='proj-btn' style={{ width: "20vh" }} value="Send" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default GetIntouch
