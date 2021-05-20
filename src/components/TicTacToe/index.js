import React, { useEffect, useState } from "react"
import styled from "styled-components"
import TicTacToeButton from "./components/TicTacToeButton"

const StyledContainer = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-areas: "btn00 btn01 btn02" "btn10 btn11 btn12" "btn20 btn21 btn22";
  justify-content: center;
`

const TicTacToe = () => {
  const [gameGrid, setGameGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
  const [turn, setTurn] = useState(1)
  const [winner, setWinner] = useState(0)

  useEffect(() => {
    for(let i = 0; i < 3; i++){
      if((gameGrid[i][0] === gameGrid[i][1] === gameGrid[i][2]) !== 0){
        setWinner(gameGrid[i][0])
        console.log("i",gameGrid[i][0])
      }
    }
    for(let j = 0; j < 3; j++){
      if((gameGrid[0][j] === gameGrid[1][j] === gameGrid[2][j]) !== 0){
        setWinner(gameGrid[0][j])
        console.log("j",gameGrid[0][j])
      }
    }
    setTurn(prev => (prev === 1 ? 2 : 1))
  }, [gameGrid])

  return (
    <div>
      <StyledContainer>
        {gameGrid.map((row, i) =>
          row.map((col, j) => <TicTacToeButton {...{ gameGrid, setGameGrid, turn }} row={i} col={j} />)
        )}
      </StyledContainer>
      <p>{turn === 1 ? "player 1" : "player 2"}</p>
      <p>{winner === 1 ? "player 1 is the winner" : "player 2 is the winner"}</p>
      <button
        onClick={() =>
          setGameGrid([
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ])
        }
      >
        reset
      </button>
    </div>
  )
}

export default TicTacToe
