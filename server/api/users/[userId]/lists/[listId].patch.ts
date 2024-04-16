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
    // Get parameters userId
    const userId = getRouterParam(event, 'userId');
    const listId = getRouterParam(event, 'listId');
    const {status} = await readBody(event);
    if (!status || !listId || !userId) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad Request, missing ${!status ? 'status' : !listId ? 'listId' : 'userId'} in request body or path component`,
        })
    }
    if (status !== 'active' && status !== 'completed') {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad Request, status must be either 'active' or 'completed'`,
        })
    }
    const lists = JSON.parse(fs.readFileSync('server/lists.json', 'utf8'));
    const newList = lists.find((list: List) => list.id === listId && list.userId === userId);
    if (!newList) {
        throw createError({
            statusCode: 404,
            statusMessage: `List not found`,
        })
    }
    newList.status = status;
    fs.writeFileSync('server/lists.json', JSON.stringify(lists, null, 2));
    return newList;
})
