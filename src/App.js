import "./App.css";
import Body from "./components/body";
import Elements from "./components/elements";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Body />
      <div id="gradient"></div>
      <div className="contain">
        <Elements />
      </div>
    </div>
  );
}

export default App;
