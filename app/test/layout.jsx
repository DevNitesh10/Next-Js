import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <div>This is second header</div>

    {children}
    
    <div>This is second footer</div>
    </>
  )
}

export default layout