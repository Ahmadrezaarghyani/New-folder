import React from 'react'

const ProductCard = ({onClick , item , btnclss , parentClss}) => {
  const  { url , model , price } = item
  return ( 
        <div className={`sm:pl-0 h-full ${parentClss}`}>
                <img src={url} className="md:w-[100%] md:h-[50%] md:m-0 md:pt-0 m-auto  pt-7  w-[70%] h-[60%] " alt={model} />
                <p className='text-[16px] pt-4 px-8'>{model}</p>
                <p className='pt-1'>{price}تومان</p>
                <button onClick={onClick} className={`mt-3 w-[70%] border-2 p-3  rounded-md text-white ${btnclss} hover:shadow-inner`}>افزودن به سبد خرید</button>
              </div>
 
  )
}

export default ProductCard