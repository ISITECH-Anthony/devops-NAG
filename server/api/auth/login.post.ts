export default defineEventHandler((event) => {
    return new Promise(async (resolve) => {
        // Get parameters userId
        const body = await readBody(event)
        return {body}
    })
})
