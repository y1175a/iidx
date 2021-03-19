import client from './client';

export const getUsers = () => client.get(`/api/user`);

export const getUser = ({ payload }) => {
    const { uid } = payload;
    return client.get(`/api/user/userid/${uid}`);
};