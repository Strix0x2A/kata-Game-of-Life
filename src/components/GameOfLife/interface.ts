export interface Coord {
	x: number;
	y: number;
}

export interface Stated {
	state: "living" | "dead";
}

export type InitCell =  Coord & Stated;

export type Cell = {} & Stated;