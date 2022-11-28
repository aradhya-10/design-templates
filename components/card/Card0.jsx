import React from 'react'
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';

//Glassmorphism card uses Tilt
//npm install react-parallax-tilt
//Although NOT used, styles>globals has a class called card0 

function Card0() {
  return (
	<div className="bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
		<div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2/3 w-[66.66vh] rounded-full absolute -top-20 -left-80 transform rotate-180 animate-pulse"></div>
		<div className="bg-gradient-to-r from-blue-700 to-green-500 h-2/3 w-[66.66vh] rounded-full absolute top-80 -right-40 transform rotate-180 animate-pulse"></div>
      <Tilt>
        <div className="card container w-96 pb-2 bg-white bg-opacity-10 rounded-2xl shadow-2xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
			<div className="count container w-full absolute left-60 text-white text-8xl font-bold opacity-5">01</div>
			<div className="title container text-5xl text-center pt-12 font-bold text-white">Card Title</div>
			<div className="content py-8 px-12 text-gray-500"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima cupiditate eveniet aut libero ullam natus pariatur nam aliquam deserunt architecto tempore, blanditiis ipsum cumque voluptates quos laborum quasi numquam voluptas.</p></div>
			<div className="flex justify-center mb-8">
			<Link href='/' >
				<span className="container bg-white px-7 py-3 rounded-full ">Continue</span>
			</Link>
			</div>
        </div>
		</Tilt> 
		  {/* <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-poppins text-2xl tracking-widest'>Login form</div>
            <input type="text" placeholder='username' className='input-text'/>
            <input type="password" placeholder='password' className='input-text'/>
            <input type="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
          </form> */}
		  
    </div>
  )
}

export default Card0