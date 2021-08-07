import client from './client';

export const getUsers = () => client.get(`/api/users`);

export const getUser = ({ payload }) => {
    const { id } = payload;
    return client.get(`/api/user/${id}`);
};

export const updateUserInfo = ({ payload }) => {
    const { id } = payload;
    return client.patch(`/api/user/${id}`, payload);
};