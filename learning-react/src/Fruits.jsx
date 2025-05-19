import { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState(["Apple", "Orange", "Banana"]);

  function addFruit() {
    const newFruit = document.getElementById("newFruit").value;
    document.getElementById("newFruit").value = "";

    setFruits(f => [...f, newFruit]);
  }
  function removeFruit(index) {
    setFruits(f => f.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => <li key={index} onClick={() => removeFruit(index)}>{fruit}</li>)}
      </ul>

      <br />
      <input type="text" id="newFruit"/>
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
}

export default Fruits;
