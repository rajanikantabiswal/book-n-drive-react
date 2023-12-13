import React from 'react'
import CarBox from './CarBox'


function CarListHome() {
  return (
    <div className='w-full mx-auto text-center py-10 px-4 sm:px-6 md:px-10 lg:px-24 flex flex-col gap-5 bg-white'>
        <h2 className='w-full text-4xl font-bold'>How It Works</h2>
        <p className='w-8/12 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur voluptates iure dolor nihil sit minima praesentium modi error tempore, in repudiandae ipsam explicabo id consectetur.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" gap-4>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
            <CarBox/>
        </div>
    </div>
  )
}

export default CarListHome