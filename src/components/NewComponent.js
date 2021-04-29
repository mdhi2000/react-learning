import React, { useState } from "react"

const NewComponent = ({ name, age }) => {
  const [state, setState] = useState(0)

  const handleClick = e => {
    setState(prev=>prev + 1)
  }

  console.log("rendered")

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick}>count</button>
    </div>
  )
}

const styles = {
  approve: { backgroundColor: "green" },
  denied:{
     backgroundColor: "red"
  }
}

export default NewComponent
