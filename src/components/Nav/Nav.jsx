import React from 'react'
import './nav.css'
const Nav = () => {
  return (
    <>
    <nav>
   
        <div className="container">
        <div className="n-main">
          <div className="n-left">
            <img className='img1'  src="./img1.png" alt="" />
            </div>
            <div className="n-center">
                <a href="">Home</a>
                <a href="">Aboute</a>
                <a href="">Product</a>
                <a href="">blog</a>
                <a href="">shop</a>
                <a href="">Contact us</a>
            </div>
              <div className="n-right">
                <img src="./img2.png" alt="" />
                <img src="./img3.png" alt="" />
                <img src="./img4.png" alt="" />
              </div>
        
        </div>
        </div>
    </nav>
    </>
  )
}

export default Nav