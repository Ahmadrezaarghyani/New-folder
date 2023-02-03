import React from 'react'
import { Link } from 'react-router-dom'



const Navlist = (props) => {
  return (
    <nav>
   <ul className='flex justify-between  cursor-pointer w-[325px] '>
   <Link to={"/"}>
   <li className=' hover:bottom-[2px]  relative hover:text-[#e2e2e2]'>{props.first}</li>
   </Link> 
    <li className=' hover:bottom-[2px]  relative hover:text-[#e2e2e2]'>{props.second}</li>
    <li className=' hover:bottom-[2px]  relative hover:text-[#e2e2e2]'>{props.third}</li>
    <li className=' hover:bottom-[2px]  relative hover:text-[#e2e2e2]'>{props.fourth}</li>
   </ul>
    </nav>
  )
}

export default Navlist