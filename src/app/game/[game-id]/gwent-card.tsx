import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { lookup } from "@/game/card";

export function GwentCard({ cid }: { cid: string }) {
  const card = lookup(cid);

  return (
    <Card className="h-32 w-24">
      <CardHeader>
        <CardTitle className="text-xs">{card.displayName}</CardTitle>
      </CardHeader>
    </Card>
  );
}
