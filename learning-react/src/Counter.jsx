import { useState } from "react";
import MyButton from "./myButton";

function incrementCount({ count, setCount }) {
  setCount(count + 1);
}
function decrementCount({ count, setCount }) {
  setCount(count - 1);
}
function resetCount({ count, setCount }) {
  setCount(0);
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <MyButton title="Increase" onclick={() => incrementCount({count, setCount})} />
      <MyButton title="Decrease" onclick={() => decrementCount({count, setCount})} />
      <MyButton title="Reset" onclick={() => resetCount({count, setCount})} />
    </>
  );
}

export default Counter;
