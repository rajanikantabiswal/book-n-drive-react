import React from 'react'
import CarImage from '../assets/Cars/carImage.webp'
import Engine from '../assets/icons/engine.svg'
import Hybrid from '../assets/icons/hybridCar.svg'
import Road from '../assets/icons/road.svg'



function CarBox() {
  return (
    <div className='p-4 flex flex-col items-center'>
        <img src={CarImage} alt="" className='w-[85%]' />
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-3 gap-8 w-[50%]'>
                <div className='flex flex-col justify-between items-center'>
                    <img src={Road} alt=""/>
                    <span className='text-sm'>15KMPL</span>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <img src={Hybrid} alt=""/>
                    <span className='text-sm'>Petrol</span>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <img src={Engine} alt=""/>
                    <span className='text-sm'>Manual</span>
                </div> 
            </div>
        </div>   
    </div>
  )
}

export default CarBox