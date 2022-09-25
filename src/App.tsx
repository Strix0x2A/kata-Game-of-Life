import GameOfLife from "./components/GameOfLife/GameOfLife";

import "./css/App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Kata - React Typescript - Game of Life
				</p>
			</header>
			<div className="App-main">
				<div className="content-wrapper">
					<GameOfLife />
				</div>
			</div>
			<footer className="App-footer">
				<div className="author">
					Clémence BERGON
				</div>
			</footer>
		</div>
	);
}

export default App;
