import client from './client';

export const getChart = ({ payload }) => {
    const { id } = payload;
    return client.get(`/api/charts/${id}`);
};


export const getCharts = ({ payload }) => {
    return client.get(`/api/charts`);
};