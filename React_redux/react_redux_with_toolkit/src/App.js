import './styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,reset} from "./store/index";

function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();

  const incrementHandler=()=>{
    dispatch(increment());
  }

  const decrementHandler=()=>{
    dispatch(decrement());
  }

  const resetHandler=()=>{
    dispatch(reset());
  }
  
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
