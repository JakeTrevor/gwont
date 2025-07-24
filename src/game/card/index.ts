import type { Card } from "..";

const cardDict: Record<string, Card> = {
  "poor-fucking-infantry": {
    id: "poor-fucking-infantry",
    displayName: "Poor Fucking Infantry",
    spy: false,
    hero: false,
    quote: "",
    allowedRows: [1],
    onPlay: (b) => b,
    onRemove: (b) => b,
    getValue: (b) => 0,
  },
};

export function lookup(cid: string): Card {
  if (!Object.keys(cardDict).includes(cid)) throw new Error("Unknown card");

  return cardDict[cid]!;
}
