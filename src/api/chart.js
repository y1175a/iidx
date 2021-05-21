import client from './client';

export const getChart = ({ payload }) => {
    const { id } = payload;
    return client.get(`/api/chart/${id}`);
};


export const getCharts = ({ payload }) => {
    return client.get(`/api/charts`);
};