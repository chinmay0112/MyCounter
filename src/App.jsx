import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>
  );
}

export default App;
