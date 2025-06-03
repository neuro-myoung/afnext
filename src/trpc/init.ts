import { initTRPC } from '@trpc/server';
import { getPayload } from 'payload';
import { cache } from 'react';
import config from "@payload-config"
import superjson from 'superjson';

export const createTRPCContext = cache(async () => {
    return {userId:'user_123'};
});

const t = initTRPC.create({
    transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
const getPayloadInstance = cache(() => getPayload({ config }));
export const baseProcedure = t.procedure.use(async ({ next }) => {
    try {
        const payload = await getPayloadInstance();
        return next({ ctx: { payload } });
   } catch (error) {
        console.error('Failed to get Payload instance:', error);
        throw new Error('Internal server error');
    }
});