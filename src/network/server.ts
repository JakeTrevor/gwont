import { env } from "@/env";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: env.PUSHER_ID,
  secret: env.PUSHER_SECRET,
  key: env.NEXT_PUBLIC_PUSHER_KEY,
  cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true,
});

export async function send(channel: string, message: string) {
  await pusher.trigger(channel, "message", message);
}
