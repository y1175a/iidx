import client from './client';

export const getPlaydata = ({ payload }) => {
    const { chartId, userId } = payload;
    return client.get(`/api/playdata/${chartId}/user/${userId}`);
};