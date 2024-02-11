import React from 'react'
import Flex from '../CommonComponent/Flex'

const Card = ({img , cardTitle , cardDesc}) => {
  return (
    <div className='max-w-[370px] h-[308px] 
    bg-white mt-[70px] border-[1px] 
      rounded-[14px] hover:bg-opacity-[4%] 
      transition hover:scale-105 hover:shadow-2xl
       ease-in duration-300 shadow-shadow '>

      <Flex className=' ml-[30px] mt-[30px]'>
        <div className='flex justify-center items-center bg-[#ECF9FFCC] w-[70px] h-[70px] rounded-[10px]'>
          <img src={img} alt={img} className=' leading-[70px] ' />
        </div>
      </Flex>

      <h4 className='text-[24px] text-[#060640] font-medium font-Rubik mt-[50px] ml-[30px]'> 
         {cardTitle ? cardTitle : `Choose packages`}
       </h4>
      <p className='font-Rubik text-[16px] text-[#9090A7] font-normal mt-2 ml-[30px]'> 
        {cardDesc ? cardDesc : ` Businesses generally promote their brand, products, and services by identifying audience or users. `}
       </p>

    </div>
  )
}

export default Card