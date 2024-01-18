import { backendClient } from '@config/api/requests';

export const register = (data) => backendClient.post(`/register`, data);

export const login = (data) => backendClient.post(`/login`, data);

export const changePersonalData = (data) => backendClient.post(`/change-personal-data`, data);

export const changeAdditionalData = (data) => backendClient.post(`/change-additional-data`, data);

export const changePasswordData = (data) => backendClient.post(`/change-password-data`, data);
