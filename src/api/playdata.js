import client from './client';

export const getPlaydata = ({ payload }) => {
    const { chartId, userId } = payload;
    return client.get(`/api/record/${chartId}/user/${userId}`);
};