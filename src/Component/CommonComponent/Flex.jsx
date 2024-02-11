import React from 'react'

const Flex = ({className, children}) => {
  return (
    <>
    <div className={`flex  ${className}`}> {children ? children: 'children'} </div>
    </>
  )
}

export default Flex;