import client from './client';

export const login = () => client.get(`/api/auth/login`);