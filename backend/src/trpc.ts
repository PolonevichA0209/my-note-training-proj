import { initTRPC } from "@trpc/server";

const notes = [
    {
        noteKey: "note-key-1",
        title: "Test title",
        description: "Test descrption",
        link: "note link",
    },
    {
        noteKey: "note-key-2",
        title: "Test title",
        description: "Test descrption",
        link: "note link",
    },
    {
        noteKey: "note-key-3",
        title: "Test title",
        description: "Test descrption",
        link: "note link",
    },
]


const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
    getNotes: trpc.procedure.query(() => {
        return { notes }
    })
});

export type TrpcRouter = typeof trpcRouter;