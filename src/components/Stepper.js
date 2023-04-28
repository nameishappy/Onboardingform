import React from "react";
import { BiLockAlt, BiDollar } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
export default function stepper() {
  return (
    <div className="p-[24px] rounded-t-2xl dark:bg-[#252D3C]">
          <div class="flex items-center">
            <div class="flex items-center text-teal-600 relative">
              <div class="rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 border-teal-600 dark:bg-gray-700 dark:border-none">
              <BiLockAlt className="m-auto" />
              </div>
              <p>Account</p>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
            <div class="flex items-center text-white relative">
              <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
              <RxPerson className="m-auto" />
              </div>
              <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
                Personel
              </div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
              <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <BiDollar className="m-auto" />
              </div>
              <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                Billing
              </div>
            </div>
            <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            <div class="flex items-center text-gray-500 relative">
              <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
              <FiThumbsUp className="m-auto" />
              </div>
              <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                Done
              </div>
            </div>
          </div>
        </div>
  );
}

