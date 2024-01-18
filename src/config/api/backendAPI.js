import { backendClient } from '@config/api/requests';

export const register = (data) => backendClient.post(`/register`, data);

export const login = (data) => backendClient.post(`/login`, data);

export const createList = (data) => backendClient.post(`/create-list`, data);

export const getLists = () => backendClient.get(`/get-user-lists`);
