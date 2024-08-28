import logo from "./logo.svg";
import "./App.css";
import Hookcounter from "./useState/Hookcounter";
import UseStateObject from "./useStateObject/UseStateObject";
import UseStateArray from "./useStateArray/UseStateArray";

function App() {
  return (
    <div className="App">
      {/* <Hookcounter/> */}
      {/* <UseStateObject /> */}
      <UseStateArray />
    </div>
  );
}

export default App;
