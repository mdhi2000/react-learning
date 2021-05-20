import React from "react"
import styled from "styled-components"

const CrossSign = styled.div`
  width: 30px;
  height: 1px;
  position: absolute;
  background-color: black;
  transform: rotate(${p => p.rotate}deg);
`
const CircleSign = styled.div`
  width: 30px;
  height: 30px;
  border-style: solid;
  border-color: black;
  border-radius: 50%;
  border-width: 2px;
`

const CustomButton = styled.button`
  height: 50px;
  width: 50px;
  position: relative;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: btn${p => "" + p.row + p.col};
`

const TicTacToeButton = ({ gameGrid, setGameGrid, row, col, turn }) => {
  const handleClick = () => {
    if (gameGrid[row][col] === 0) {
      if (turn === 1)
        setGameGrid(prev =>
          prev.map((r, i) =>
            r.map((c, j) => {
              if (i === row && j === col) return 1
              else return prev[i][j]
            })
          )
        )
      if (turn === 2)
        setGameGrid(prev =>
          prev.map((r, i) =>
            r.map((c, j) => {
              if (i === row && j === col) return 2
              else return prev[i][j]
            })
          )
        )
    }
  }

  return (
    <CustomButton onClick={handleClick} {...{ row, col }}>
      {gameGrid[row][col] === 1 ? (
        <>
          <CrossSign rotate={45} />
          <CrossSign rotate={-45} />
        </>
      ) : gameGrid[row][col] === 2 ? (
        <CircleSign />
      ) : null}
    </CustomButton>
  )
}

export default TicTacToeButton
