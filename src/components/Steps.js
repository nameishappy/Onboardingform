import React from "react";
import { BiLockAlt, BiDollar } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FiThumbsUp } from "react-icons/fi";
export default function Steps() {
  return (
    <div className="p-[24px] rounded-t-2xl dark:bg-[#252D3C] ">
      <div className="flex justify-between">
        <div className="relative">
          <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center m-auto dark:bg-gray-700 dark:border-none">
            <BiLockAlt className="m-auto" />
          </div>
          <p>Acoount</p>
        </div>
        {/* <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div> */}
        <div>
          <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center m-auto dark:bg-gray-700 dark:border-none">
            <RxPerson className="m-auto" />
          </div>
          <p>Personel</p>
        </div>
        <div>
          <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center m-auto dark:bg-gray-700 dark:border-none">
            <BiDollar className="m-auto" />
          </div>
          <p>Billing</p>
        </div>
        <div>
          <div className="border-2 rounded-full h-8 w-8 flex items-center justify-center m-auto dark:bg-gray-700 dark:border-none">
            <FiThumbsUp className="m-auto" />
          </div>
          <p>Done</p>
        </div>
      </div>
    </div>
  );
}
