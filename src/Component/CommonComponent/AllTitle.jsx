import React from 'react'
import Flex from '../CommonComponent/Flex'

function AllTitle({Title }) {
  return (
    <>
      <h2 className='font-Rubik font-bold text-[45px] text-[#060640]'> 
       {Title ? Title : `How it works`} 
      </h2>
    </>
  )
}

export default AllTitle