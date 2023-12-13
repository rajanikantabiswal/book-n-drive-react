import React from 'react'
import Button from './Button'

function BookingBar() {
  return (
    <div className="w-full mx-auto flex px-4 sm:px-6 md:px-10 lg:px-24 pb-12 justify-center">
        <div className="w-11/12 p-8 bg-[#f8f7f7] rounded-lg shadow-2xl -mt-10">
            <form action="">
                <div className='grid grid-cols-12 gap-4 items-center'>
                    <div className="col-span-12 lg:col-span-3 ">
                        <label htmlFor="" className='block'>City</label>
                        <select name="" id="" className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option value="bhubaneswar">Bhubaneswar</option>
                        </select>
                    </div>
                    <div className="col-span-12 lg:col-span-3">
                    <label htmlFor="" className='block'>Pickup Address</label>
                        <select name="" id="" className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option value="bhubaneswar">Ravitalkies parking</option>
                        </select>
                    </div>
                    <div className="col-span-12 lg:col-span-4 flex gap-4">
                        <div className="w-1/2">
                        <label htmlFor="" className='block'>From Date</label>
                        <input type="datetime" name="" id="" placeholder='DD-MM-YYYY' className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 '/>
                        </div>
                        <div className="w-1/2">
                        <label htmlFor="" className='block'>To Date</label>
                        <input type="datetime" name="" id="" placeholder='DD-MM-YYYY' className='block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'/>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-2 mt-4">
                    <Button btnText="Search Car" />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BookingBar