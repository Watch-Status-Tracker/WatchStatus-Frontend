import { backendClient } from '@config/api/requests';

export const register = (data) => backendClient.post(`/register`, data);

export const login = (data) => backendClient.post(`/login`, data);
