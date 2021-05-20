import React, { useState } from "react"

const NewComponent = ({ name, age }) => {
  const [count, setCount] = useState(0)

  const handleClick = e => {
    setCount(prev=>prev + 1)
  }
  console.log(count)

  console.log("rendered")

  return (
    <div>
      <h1>{count}</h1>
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
