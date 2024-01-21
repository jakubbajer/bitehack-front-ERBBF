import { api } from ".";

export const createCheerup = (
    updateId: number,
    receiverId: number, 
    senderId: number, 
    content: string
) => api('/cheerups', {
    method: 'POST',
    body: JSON.stringify({
        updateId,
        receiverId,
        senderId,
        content
    }),
    headers: { "content-type": "application/json" },
})

export const getPastCheerups = (userId: number) => api(`/cheerups/user/${userId}`, {});