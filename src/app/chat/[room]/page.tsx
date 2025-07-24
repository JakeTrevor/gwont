"use client";

import { makeListener } from "@/network/client";
import { api } from "@/trpc/react";
import { use, useEffect, useState, type Usable } from "react";

export default function Page({ params }: { params: Usable<{ room: string }> }) {
  const { room } = use(params);

  const [messages, setMessages] = useState<string[]>([]);

  const [newMsg, setNewMsg] = useState("");
  const { mutateAsync: sendMsg } = api.sendMsg.useMutation();

  useEffect(() => {
    makeListener(room, (msg) => {
      console.log(msg);
      setMessages((x) => [...x, msg]);
    });
  }, [room]);

  return (
    <div>
      <div className="flex flex-col">
        {messages.map((e, i) => (
          <span key={i}>{e}</span>
        ))}
      </div>
      <input
        className="h-10 w-100 bg-orange-50"
        type="text"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />
      <button
        onClick={async () => {
          await sendMsg({ channel: room, message: newMsg }).then(() =>
            setNewMsg(""),
          );
        }}
      >
        send
      </button>
    </div>
  );
}
