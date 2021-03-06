import { Post } from "./entitites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
    path: path.join(__dirname, './migrations'), 
    pattern: /^[\w-]+\d+\.[tj]s$/, 
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',

    // when not in prod, debug on  
    debug: process.env.NODE_ENV !== 'production',
} as Parameters<typeof MikroORM.init>[0];
   