import fs from 'fs'
// @ts-ignore
import {v4 as uuidv4} from 'uuid';

interface List {
    id: string;
    name: string;
    status: 'active' | 'completed';
    userId: string;
}

export default defineEventHandler(async (event) => {
    // List all lists of user
    const userId = getRouterParam(event, 'userId');
    if (!userId) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad Request, missing userId in path component`,
        })
    }
    const lists = JSON.parse(fs.readFileSync('server/lists.json', 'utf8'));
    return lists.filter((list: List) => list.userId === userId);
})
