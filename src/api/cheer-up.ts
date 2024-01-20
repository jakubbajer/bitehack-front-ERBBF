import { api } from ".";

export const createCheerup = (
    updateId: number,
    recieverId: number, 
    senderId: number, 
    content: string
) => api('/cheerups', {
    method: 'POST',
    body: JSON.stringify({
        updateId,
        recieverId,
        senderId,
        content
    })
})