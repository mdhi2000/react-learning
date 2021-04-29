import React from 'react'

const ChildrenDemo = ({children}) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      {children}
    </div>
  )
}

export default ChildrenDemo
