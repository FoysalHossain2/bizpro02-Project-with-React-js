import React from 'react'
import Logo from '../../assets/Logo.png'
import Flex from '../CommonComponent/Flex'
import Button from '../CommonComponent/Button'

const Menu = () => {
  return (
   <div className='bg-[#ECF9FF] py-8'>
     <nav className='container max-w-[1270px]'>
      <div className='bg-[#ffffff] py-[35px] rounded-lg'>
           <Flex className='justify-between items-center'>
                <picture>
                    <img src={Logo} alt={Logo} className='pl-[35px]'/>
                </picture>
                <div>
                    <ul className='flex gap-[25px]'>
                        <li className='font-Rubik text-[#828297] text-[14px] font-medium'><a href="#">Home</a></li>
                        <li className='font-Rubik text-[#828297] text-[14px] font-medium'><a href="#">About</a></li>
                        <li className='font-Rubik text-[#828297] text-[14px] font-medium'><a href="#">Services</a></li>
                        <li className='font-Rubik text-[#828297] text-[14px] font-medium'><a href="#">Reviews</a></li>
                        <li className='font-Rubik text-[#828297] text-[14px] font-medium'><a href="#">Support</a></li>
                    </ul>
                </div>
                <div className='pr-[35px]'>
                    <Button className='text-[14px] font-medium text-black pr-[20px]'>
                        Sing In
                    </Button>

                    <Button className='bg-[#060640] py-5 px-[30px] text-white rounded-lg'>
                        Free Trial
                    </Button>
                </div>
            </Flex>
      </div>
    </nav>
   </div>
  )
}

export default Menu