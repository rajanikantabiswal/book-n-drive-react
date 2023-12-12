import React from 'react'

function BookingBar() {
  return (
    <div className="w-full mx-auto flex px-4 sm:px-6 md:px-10 lg:px-24 pb-12 justify-center">
        <div className="w-11/12 p-10 bg-white rounded-lg shadow-2xl -mt-10">
            <form action="">
                <div className='grid grid-cols-12 gap-4 items-center'>
                    <div className="col-span-3">
                        <label htmlFor="" className='block'>City</label>
                        <select name="" id="" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option value="bhubaneswar">Bhubaneswar</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                    <label htmlFor="" className='block'>Pickup Address</label>
                        <select name="" id="" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                            <option value="bhubaneswar">Ravitalkies parking</option>
                        </select>
                    </div>
                    <div className="col-span-4 flex">
                        <div className="w-1/2">From Date</div>
                        <div className="w-1/2">To Date</div>
                    </div>
                    <div className="col-span-2">
                    <a href="#" className="px-6 py-3 rounded-sm w-fit lg:w-1/3 text-center text-white font-semibold uppercase bg-red-600">Find Car</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default BookingBar