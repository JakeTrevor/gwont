import { env } from "@/env";
import Pusher from "pusher-js";

const pusher = new Pusher(env.NEXT_PUBLIC_PUSHER_KEY, {
  cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
});

export function makeListener(name: string, cb: (x: string) => void) {
  const channel = pusher.subscribe(name);
  channel.bind("message", cb);
}
