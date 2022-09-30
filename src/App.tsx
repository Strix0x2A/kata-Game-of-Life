import { GameOfLife, Grid } from "./components/GameOfLife";

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
					<GameOfLife grid={new Grid()} />
				</div>
			</div>
			<footer className="App-footer">
				<div className="date">
					28 septembre 2022
				</div>
			</footer>
		</div>
	);
}

export default App;
