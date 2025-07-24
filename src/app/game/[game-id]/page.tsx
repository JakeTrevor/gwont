import { use } from "react";
import { Board } from "./board";

export default function GamePage({
  params,
}: {
  params: Promise<{ "game-id": string }>;
}) {
  const { "game-id": _gameId } = use(params);
  return (
    <>
      <div className="fixed h-full w-50 bg-orange-50">Sidebar</div>
      <div className="mx-50 flex h-[100vh] w-full flex-col bg-red-50">
        <Board />
        <div className="mt-auto bg-green-50">My Cards</div>
      </div>
    </>
  );
}
