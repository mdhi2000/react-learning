import React, { useState } from "react"
import styled from 'styled-components'

const MyDiv = styled.div`
  background-color: ${p => p.color};
`

const StateDemo = () => {
  const [value, setValue] = useState("")
  return (
    <>
      <MyDiv color="blue">{value}</MyDiv>
      <input value={value} type="text" onChange={e => setValue(e.target.value)} />
      <button onClick={() => setValue("")}>Reset</button>
    </>
  )
}

export default StateDemo
