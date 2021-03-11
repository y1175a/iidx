import client from './client';

export const login = () => client.get(`/api/auth/login/success`);

export const logout = () => client.get(`/api/auth/logout`);