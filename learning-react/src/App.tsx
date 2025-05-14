import Avengers from "./Avengers"

function App() {
  return (
    <>
      <Avengers name="Tony Stark" title="Iron Man" isAvenger={true}/>
      <Avengers name="Steve Rogers" title="Captain America" isAvenger={true}/>
      <Avengers name="Natasha Romanaff" title="Black Window" isAvenger={true}/>
      <Avengers name="Bob" title="Centry" isAvenger={false}/>
      <Avengers/>
    </>
  );
}

export default App;
