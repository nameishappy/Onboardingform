import React from 'react'

export default function temp() {
  return (
    <div>
      <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <div className='grid grid-cols-12 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'>
              <input class="col-span-11 flex-1 inline text-gray-600 outline-none leading-tight bg-gray-200" id="grid-last-name" type="text" placeholder="Doe" />
              <AiOutlineInfoCircle className='inline float-right pt-1' />
            </div>
            </div>
    </div>
  )
}
