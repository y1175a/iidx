import client from './client';

export const getUsers = () => client.get(`/api/user`);