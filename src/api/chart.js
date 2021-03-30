import client from './client';

export const getChart = ({ payload }) => {
    const { id } = payload;
    return client.get(`/api/charts/${id}`);
};


export const getCharts = ({ payload }) => {
    const { page } = payload;
    return page ? client.get(`/api/charts?page=${page}`) : client.get(`/api/charts`);
};