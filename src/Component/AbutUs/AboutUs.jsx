import React from 'react'
import AllTitle from '../CommonComponent/AllTitle'
import Flex from '../CommonComponent/Flex'
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import AboutImg from '../../assets/AboutImg.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <section className='bg-white py-[50px]'>
        <div className="container max-w-[1270px]">
         
         <Flex className='justify-between'>
            <div>
                <div>
                    <AllTitle Title='About us' />
                    <p className='font-normal font-Rubik text-[16px] text-[#9090A7]  max-w-[431px] mt-3 text-left mb-[40px]'>
                        No wonder that promotion strategy is one of the most important processes in marketing.
                        In fact, it supports your marketing voices to reach your target audience, creates interest, and helps you to engage with them.
                    </p>
                </div>
                <Flex>
                    <img src={Frame2} alt={Frame2} className='mr-[25px]' />
                    <div>
                        <h4 className='text-[#060640] text-[20px] font-medium'>
                            Safe and secured
                        </h4>
                        <p className='font-normal font-Rubik text-[16px] text-[#9090A7] max-w-[371px]'>
                            Safe and secured promotion strategy is one of the most important processes in marketing.
                        </p>
                    </div>
                </Flex>
                <Flex className='mt-[30px]'>
                    <img src={Frame1} alt={Frame1} className='mr-[25px] ' />
                    <div>
                        <h4 className='text-[#060640] text-[20px] font-medium'>
                            Highly expert team
                        </h4>
                        <p className='font-normal font-Rubik text-[16px] text-[#9090A7] max-w-[371px]'>
                        We supports your marketing voices to reach your target audience, creates interest.
                        </p>
                    </div>
                </Flex>
                </div>

                <div  className='imgBefore'>
                    <img src={AboutImg} alt={AboutImg}  />
                    <div className='w-[233.33px] h-[217px] bg-black border-gray-500 mt-[-150px] mrl-[-100px]'>
                        aerwftawergtfwearg
                    </div>
                </div>
         </Flex>

        </div>
    </section>
  )
}

export default AboutUs