import "./styles/App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer.counter);
  const isToggle=useSelector((state)=>state.toggleReducer.istoggle);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type:"increment"});
  };

  const decrement = () => {
    dispatch({type:"decrement"});
  };

  const reset = () => {
    dispatch({type:"reset"});
  };

  const toogle=()=>{
    dispatch({type:"toggle"});
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div>
        <button onClick={toogle}>toggle</button>
        {
        isToggle&&<div className="toggle">{isToggle}</div>
        }
      </div>
    </div>
  );
}

export default App;
