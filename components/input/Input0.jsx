import React from 'react'

//Animation where label mover to top of the input from inside the input box.
function Input0() {
  return (
    <div className='relative'>
      <input id='input0' className='border-[1.5px] border-[#9e9e9e] bg-transparent rounded-[1rem] transition-[border] duration-[150ms] p-4 text-[1rem] ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-gray-400 peer' />
      <label htmlFor='input0' className='absolute left-[16px] pointer-events-none transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] peer-focus:scale-[0.8] peer-focus:-translate-y-2/4 peer-focus:px-[0.2rem] z-10 peer-focus:bg-white top-4 peer-focus:top-0'>Username</label>
    </div>
  )
}

export default Input0