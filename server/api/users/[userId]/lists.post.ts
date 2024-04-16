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
    const body = await readBody(event);
    if (!body?.name || !userId) {
        throw createError({
            statusCode: 400,
            statusMessage: `Bad Request, missing ${!body?.name ? 'name' : 'userId'} in request body or path component`,
        })
    }
    const newList: List = {
        id: uuidv4(),
        name: body.name,
        status: 'active',
        userId,
    }
    const lists = JSON.parse(fs.readFileSync('server/lists.json', 'utf8'));
    lists.push(newList);
    fs.writeFileSync('server/lists.json', JSON.stringify(lists, null, 2));
    return newList;
})
