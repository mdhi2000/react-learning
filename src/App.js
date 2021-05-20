import "./App.css"
import NewComponent from "./components/NewComponent"
import ChildrenDemo from "./components/ChildrenDemo"
import StateDemo from "./components/StateDemo"
import TicTacToe from "./components/TicTacToe"

const Comp = () => {
  return <div>testblgbsf</div>
}

function App() {
  return (
    <div className="App">
      {/* <ChildrenDemo>
        <NewComponent name="mohammad" age={20} />
        <NewComponent name="ali" />
      </ChildrenDemo>
      <NewComponent name="reza" />
      <NewComponent name="react" />
      <StateDemo /> */}
      <TicTacToe />
    </div>
  )
}

export default App
