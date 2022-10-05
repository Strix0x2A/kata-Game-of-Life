export interface Coord {
	x: number;
	y: number;
}

export type CellState = "newborn" | "living" | "dead";

export interface Stated {
	state: CellState;
}

export type CellsConfig =  Coord & Stated;

export type Cell = Stated;