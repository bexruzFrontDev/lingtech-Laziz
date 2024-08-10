import React from 'react'
import './header.css'
const Header = () => {
  return (
    <>
       <div className="container">
        <div className="h-main">
          <div className="h-left">
            <h4 className='h4'>Favorite brands</h4>
            <br /><br />
            <br />
            <h1 className='h1'> <span>An exciting place </span>
            for the whole family  to shop.</h1>
            <br />
            <br />
            <p className='p'>The standard chunk of Lorem Ipsum used since the 1500s is <br /> reproduced below for those interested.</p>
            <button className='btn-shop'>Shop Now</button>
          </div>
          <div className="h-right">
            <img src="./img5.png" alt="" />
          </div>
        </div>
       </div>
    </>
  )
}

export default Header