import React from 'react'
import CarImage from '../assets/Cars/carImage.webp'
import Engine from '../assets/icons/engine.svg'
import Hybrid from '../assets/icons/hybridCar.svg'
import Road from '../assets/icons/road.svg'
import { FaCheck } from "react-icons/fa6";



function CarBox() {
  return (
    <div className='p-4 flex flex-col items-center'>
        <img src={CarImage} alt="" className='w-[85%]' />
        <div className='flex flex-col items-center bg-[#e5e7eb] py-6'>
            <div className='grid grid-cols-3 gap-8 w-[60%]'>
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
            <div className="border-t border-slate-400 mt-3 py-3 w-[85%] grid grid-cols-2 text-sm" >
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                <span className='flex align-middle'><FaCheck className='mt-1 mr-1'/>Auto Drive</span>
                
                
            </div>
        </div>   
    </div>
  )
}

export default CarBox