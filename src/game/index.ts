type CardId = string;
type RowId = 1 | 2 | 3;
export type PlayerId = 1 | 2;

export interface Player {
  deck: CardId[];
  discard: CardId[];
  rows: Record<RowId, CardId[]>;
}

export interface WeatherState {
  rain: boolean;
  mist: boolean;
  fog: boolean;
}

export interface BoardState {
  Players: Record<1 | 2, Player>;
  weather: WeatherState;
}

type GwentAction = (b: BoardState) => BoardState;
type GwentScoreFn = (b: BoardState, player: PlayerId, row: RowId) => number;

export interface Card {
  id: string;
  displayName: string;
  quote: string;
  allowedRows: RowId[];
  spy: boolean;
  hero: boolean;
  onPlay: GwentAction;
  onRemove: GwentAction;
  getValue: GwentScoreFn;
}

type CardDict = Record<CardId, Card>;

type action =
  | { type: "playCard"; cardId: CardId; row: RowId; Player: Player }
  | { type: "decoy"; row: RowId; Player: Player; target: number }
  | { type: "factionAbility" }
  | { type: "weatherCard"; cardId: CardId };

const cardDict: CardDict = {};

function getRowScore(b: BoardState, player: PlayerId, row: RowId) {
  return b.Players[player].rows[row].reduce(
    (acc, val) => acc + cardDict[val]!.getValue(b, player, row),
    0,
  );
}

function getPlayerScore(b: BoardState, player: 1 | 2) {
  return ([1, 2, 3] as const).reduce(
    (acc, val) => acc + getRowScore(b, player, val),
    0,
  );
}
