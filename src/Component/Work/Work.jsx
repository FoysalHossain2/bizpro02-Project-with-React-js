import React from 'react'
import AllTitle from '../CommonComponent/AllTitle'
import Card from '../CommonComponent/Card'
import Box from '../../assets/Box.png'
import calendar from '../../assets/calendar.png'
import statistics from '../../assets/statistics.png'
import Flex from '../CommonComponent/Flex'

const Work = () => {
  return (
    <section className='bg-white py-[108px]'>
        <div className='container max-w-[1270px]'>

            <Flex className='flex-col justify-center items-center'>
            <AllTitle Title='How it works' />
            <p className='font-normal font-Rubik text-[16px] text-[#9090A7] text-center max-w-[431px] mt-3'>
                Businesses generally promote their brand, products, and services by identifying audience.
            </p>
          </Flex>

            <Flex className='justify-between'>
              <Card img={Box}  />
              <Card img={calendar} />
              <Card img={statistics} />
            </Flex>
        </div>
    </section>
  )
}

export default Work