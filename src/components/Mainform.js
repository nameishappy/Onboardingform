import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default function Mainform() {
  return (
    <div>
      <form className="w-full py-[32px]">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-first-name">
              Name
            </label>
            <div className="relative">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-[#333B48] dark:border-none dark:focus:bg-[#333B48] dark:text-white" id="grid-first-name" type="text" placeholder="Name" />
            <div className="absolute inset-y-0 right-[10px] flex items-center pl-3">
            <AiOutlineInfoCircle className='w-[20px] h-[20px]'/>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-first-name">
              Email*
            </label>
            <div className='relative'>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:bg-[#333B48] dark:border-none dark:focus:bg-[#333B48] dark:text-white" id="grid-first-name" type="text" placeholder="Email Address" />
            <div className="absolute inset-y-0 right-[10px] flex items-center pl-3">
            <AiOutlineInfoCircle className='w-[20px] h-[20px]'/>
            </div>
            </div>
            <p className="h-[20px] font-['inter] text-[14px] text-sm[20px] text-[#5F6D7E] dark:text-[#A5ACBA]">Please input a real Email Address</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between mb-6">
          <div className="md:pr-1 w-full md:w-1/2 md:mb-0 mb-[16px]">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-password">
              Password*
            </label>
            <div className="relative">
            <input className="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-[#333B48] dark:border-none dark:focus:bg-[#333B48] dark:text-white" id="grid-password" type="password" placeholder="Confirm Password" />
            <div className="absolute inset-y-0 right-[10px] flex items-center pl-3">
            <AiOutlineInfoCircle className='w-[20px] h-[20px]'/>
            </div>
            </div>
            <p className="h-[20px] font-['inter] text-[14px] text-sm[20px] text-[#5F6D7E] dark:text-[#A5ACBA]">Please enter your Password</p>
          </div>
          <div className="md:pl-1 w-full md:w-1/2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-white" htmlFor="grid-password">
              Confirm Password*
            </label>
            <div className="relative">
            <input className="appearance-none w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-[#333B48] dark:border-none dark:focus:bg-[#333B48] dark:text-white" id="grid-password" type="password" placeholder="Confirm Password" />
            <div className="absolute inset-y-0 right-[10px] flex items-center pl-3">
            <AiOutlineInfoCircle className='w-[20px] h-[20px]'/>
            </div>
            </div>
            <p className="h-[20px] font-['inter] text-[14px] text-sm[20px] text-[#5F6D7E] dark:text-[#A5ACBA]">Password need to match</p>
          </div>
        </div>
        <div className="flex items-center pb-[16px]">
          <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 border-2 rounded-2" />
          <label htmlFor="checked-checkbox" className="ml-2 font-[24px]">I accept the Terms and Privacy Policy</label>
        </div>
      </form>
    </div>
  )
}
