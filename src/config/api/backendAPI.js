import { backendClient } from '@config/api/requests';

export const register = (data) => backendClient.post(`/register`, data);

export const login = (data) => backendClient.post(`/login`, data);

export const changePersonalData = (data) => backendClient.post(`/change-personal-data`, data);

export const changeAdditionalData = (data) => backendClient.post(`/change-additional-data`, data);

export const changePasswordData = (data) => backendClient.post('/change-password', data);

export const createList = (data) => backendClient.post(`/create-list`, data);

export const getLists = () => backendClient.get(`/get-user-lists`);

export const updateListPositions = (data) => backendClient.post(`/update-list-positions`, data);

export const getUserPersonalData = () => backendClient.get(`/get-user-personal-data`);
