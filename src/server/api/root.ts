import { postRouter } from "@/server/api/routers/post";
import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import z from "zod";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  sendMsg: publicProcedure
    .input(
      z.object({
        channel: z.string(),
        message: z.string(),
      }),
    )
    .mutation(async ({ ctx: { pusher }, input: { channel, message } }) => {
      console.log("triggered!");

      await pusher.trigger(channel, "message", message);
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
