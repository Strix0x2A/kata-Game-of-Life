import Board from "./Board";
import { CellsConfig } from "./interface";

import "./../../css/GameOfLife.scss";

const GameOfLife = () => {
  // Initialisation
  const introduction =
    "This application is based on simple rules. A cell is either dead or alive according to the number of neighbours it had in the previous generation. To add a little flavour, living cell have a different colour depending on her stage : was it alive the previous generation ?";

  // Stated functional component
  const cellsConfig: CellsConfig[] = [
    { state: "living", x: 1, y: 1 },
    { state: "newborn", x: 2, y: 1 },
    { state: "newborn", x: 1, y: 2 },
  ];
  return (
    <div className="GameOfLife">
      <div className="describer">
        <div className="title">
          <span className="title-primary">Life </span>
          <span className="title-secondary">- Cells finding their way</span>
        </div>
        <div>{introduction}</div>
      </div>
	  {/* <Settings /> */}
      <Board cellsConfig={cellsConfig} />
    </div>
  );
};

export default GameOfLife;
