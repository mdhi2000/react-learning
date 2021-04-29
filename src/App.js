import "./App.css"
import NewComponent from "./components/NewComponent"
import ChildrenDemo from "./components/ChildrenDemo"

const Comp = () => {
  return <div>testblgbsf</div>
}

function App() {
  return (
    <div className="App">
      <ChildrenDemo>
        <NewComponent name="mohammad" age={20} />
        <NewComponent name="ali" />
      </ChildrenDemo>
      <NewComponent name="reza" />
      <NewComponent name="react" />
    </div>
  )
}

export default App
