function App() {
  return (
      <main>
          <h1 className="title">Tenzies</h1>
          <h2 className="description"> 
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </h2>
          <div className="tenzies">
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
            <div className="tenzy">1</div>
          </div>
          <button className="roll-btn">Roll</button>
      </main>
  );
}

export default App;
