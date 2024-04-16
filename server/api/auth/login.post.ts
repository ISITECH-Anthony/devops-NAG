import fs from 'fs'

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export default defineEventHandler(async (event) => {
    // Get parameters userId
    const {email, password} = await readBody(event);
    const users = JSON.parse(fs.readFileSync('server/users.json', 'utf8'));
    const user = users.find((user: User) => user.email === email && user.password === password);
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    } else {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    }
})
