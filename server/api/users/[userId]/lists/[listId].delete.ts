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
    if (!listId || !userId) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad Request, missing ${!listId ? 'listId' : 'userId'} in path component`,
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
    lists.splice(lists.indexOf(newList), 1);

    fs.writeFileSync('server/lists.json', JSON.stringify(lists, null, 2));
    setResponseStatus(event, 204);
    return {};
})
