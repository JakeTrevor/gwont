import { GwentCard } from "./gwent-card";

export function Board() {
  const rows: string[][] = [
    ["poor-fucking-infantry"],
    ["poor-fucking-infantry"],
    ["poor-fucking-infantry"],
    ["poor-fucking-infantry", "poor-fucking-infantry", "poor-fucking-infantry"],
    ["poor-fucking-infantry"],
    ["poor-fucking-infantry"],
  ];
  return (
    <div className="flex w-full flex-col gap-1">
      {rows.map((row, i) => (
        <div key={i} className="flex w-full flex-row justify-center gap-2">
          {row.map((card, i) => (
            <GwentCard key={i} cid={card} />
          ))}
        </div>
      ))}
    </div>
  );
}
