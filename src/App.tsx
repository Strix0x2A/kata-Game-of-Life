import { Provider } from "react-redux";
import GameOfLife from "./components/GameOfLife/GameOfLife";

import "./css/App.scss";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">What I love to do !</header>
        <div className="App-main">
          <div className="content-describer">
            <div className="hero-primary">Kata</div>
            <div className="hero-secondary">ReactJS and Typescript</div>
          </div>
          <div className="content">
            <GameOfLife />
          </div>
        </div>
        <footer className="App-footer">
          <div className="author">© Clémence BERGON</div>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
