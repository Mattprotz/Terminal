import React from 'react'

export default function Home() {
  return (
    <div className='home-body'>
       <img src={`${process.env.PUBLIC_URL}/Home.gif`} alt="Home" className="home-gif" />
    </div>
  )
}

