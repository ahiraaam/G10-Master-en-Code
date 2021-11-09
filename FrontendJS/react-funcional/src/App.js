import "./App.css";
import Counter from "./components/Counter";
import HomeLista from "./components/HomeLista";

function App() {
  return (
    <div className="App">
      <Counter apellido="Cruz" edad={10} />
      <HomeLista />
    </div>
  );
}

export default App;
