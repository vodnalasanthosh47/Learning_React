import List from './List.jsx'

function App() {
  const fruits = [{id: 1, name:"Apple"},
                  {id: 2, name:"Strawberry"},
                  {id: 3, name:"Banana"}];
  
  const veggies = [];
  return (
    <>
      <List category="Fruits" items={fruits}/>
      {veggies.length > 0 && <List category="Veggies" items={veggies}/>}
    </>
  );
}

export default App;
