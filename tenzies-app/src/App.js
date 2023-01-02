import Die from './Die'
function App() {
  return (
      <main>
          <h1 className="title">Tenzies</h1>
          <h2 className="description"> 
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </h2>
          <Die />
          <button className="roll-btn">Roll</button>
      </main>
  );
}

export default App;
