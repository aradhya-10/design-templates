import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";

//Submit Button transitions to green check/tick after clicking aimation.
//styles>Global has a class called submit0
function Submit0() {
  return (
    <button className='relative w-[70px] h-[30px] text-[10px] bg-[#202231] text-white border-0 rounded-[4px] transition-all duration-500 group focus:rounded-[50%] focus:w-[30px] focus:bg-[#44c08a]'>
      <span className='group-focus:opacity-0 submit0'>
        Submit
      </span>
      <AiOutlineCheck className='opacity-0 group-focus:opacity-100 group-focus:delay-500 submit0 text-[18px]' />
    </button>
  )
}

export default Submit0