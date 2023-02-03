import React from 'react'

const Title = ({txt , bg, ...props}) => {
  return (
    <div className='w-full mt-5 flex justify-center'>
      <div className='w-[90vw] flex items-center cursor-pointer'>
         <div  className={`clip px-3  flex items-center ${bg}`}> 
         {props.children}
         <h3 className='text-[20px]  pr-3 text-white'>{txt}</h3>
         </div>
      </div>
    </div>
  )
}

export default Title