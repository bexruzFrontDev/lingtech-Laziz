import React from 'react'
import './footerdo.css'
const Footerdo = () => {
    return (
        <>
            <div className="container">
                <div className="ff-main">
                    <div className="ff-left">
                        <h4  className='www'>User Contact</h4>
                        <h1>Contact Us for those interested.</h1>
                        <p>The standard chunk of Lorem Ipsum used since the is <br /> reproduced below for those interested.</p>
                    </div>

                    <div className="ff-right">
                        <input type="text" placeholder='Enter your email address' />
                        <button className='sub'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footerdo