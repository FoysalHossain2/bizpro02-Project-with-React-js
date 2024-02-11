import React from 'react'
import Button from '../CommonComponent/Button'
import Flex from '../CommonComponent/Flex'
import banner from '../../assets/banner.png'
import quota from '../../assets/quota.png'
import star from '../../assets/star.png'
import Group from '../../assets/Group.png'
import './Banner.css'

import { FaPlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-bgColor py-[110px]'> 
        <div>       
          <div className="container max-w-[1270px]">
                <Flex className='justify-between '>
                  <div>
                      <h1 className='font-bold text-[50px] font-Rubik text-[#060640] max-w-[423px] mt-[100px]'>
                        <span className='beforeImg'>Perfect</span>
                         place for your business promotion
                      </h1>
                      <p className='font-normal text-[16px] text-[#9090A7] font-Rubik max-w-[400px] mt-5'>
                        Businesses generally promote their brand, products, and services by identifying audience.
                      </p>

                     <Flex className='items-center gap-[30px]'>
                        <Button className='bg-[#060640] py-[22px] px-[35px] font-medium text-[14px] font-Rubik text-white rounded-md mt-8'>
                            Get Started
                          </Button>
                          <Button className='p-5 mt-8 bg-white rounded-[60px] '>
                            <FaPlay className='text-[#00E5CC] w-5' />
                          </Button>
                     </Flex>

                     <div className='max-w-[418px] h-[136px] bg-white rounded-[14px] mt-[70px] p-[22px] '>                    
                        <Flex className='justify-between  '>
                          <img src={quota} alt={quota} />
                          <div>
                          <Flex className='gap-4'>
                          <img src={star} alt="" />
                            <p>4.9</p>
                          </Flex>
                          </div>               
                        </Flex>
                        <p className='max-w-[388px] w-[388px]  text-[#9090A7] text-base font-Rubik font-normal mt-[14px]'>
                          There’s no shortage of ideas, what’s missing is the will to execute them – <span className='font-medium'>Seth Godin</span>
                        </p>
                     </div>
                     
                  </div>
                  <div className=' bannerImg1'>
                    <picture>
                      <img src={banner} alt={banner} className='ml-[-20px]' />
                    </picture>
                    <img src={Group} alt={Group} className='mt-[-340px] mr-[-100px]'/>
                  </div>
                </Flex>
            </div>
        </div>
    </section>
  )
}

export default Banner