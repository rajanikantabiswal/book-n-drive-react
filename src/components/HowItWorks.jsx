import React from 'react'
import IconRed from '../assets/icon1-red.svg'
import IconGreen from '../assets/icon2-green.svg'
import IconOrange from '../assets/icon3-orange.svg'

function HowItWorks() {
  return (
    <div className='w-full mx-auto text-center py-10 px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col gap-5'>
        <h2 className='w-full text-4xl font-bold'>How It Works</h2>
        <p className='w-8/12 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptates iure dolor nihil sit minima praesentium modi error tempore, in repudiandae ipsam explicabo id consectetur.</p>
        <div className="flex justify-around flex-col sm:flex-row gap-y-10 gap-x-8">
            <div className='flex flex-col items-center w-full gap-4'>
                <img src={IconRed} alt="" />
                <h3 className='text-2xl font-bold'>Choose Location</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dignissimos recusandae, assumenda suscipit numquam, debitis quam omnis dolorum excepturi ad natus repudiandae aliquid nobis sapiente?</p>
            </div>
            <div className='flex flex-col items-center w-full gap-4'>
                <img src={IconGreen} alt="" />
                <h3 className='text-2xl font-bold'>Choose Pickup Date</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut atque voluptate aliquid ratione aspernatur sed et saepe? Dicta mollitia, nam at nostrum commodi esse voluptate!</p>
            </div>
            <div className='flex flex-col items-center w-full gap-4'>
            <img src={IconOrange} alt="" />
            <h3 className='text-2xl font-bold'>Find your Car</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor veniam maxime vero magnam. Dignissimos odit reiciendis earum reprehenderit? Nisi neque laudantium repudiandae obcaecati voluptatibus.</p>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks