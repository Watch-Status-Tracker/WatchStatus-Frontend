import { authPath } from '@routing/Paths';
import axios from 'axios';

export const movieClient = axios.create({
  baseURL: '/movieAPI',
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'application/json',
    Authorization: import.meta.env.VITE_movieApiAuthToken || '',
  },
  timeout: 5000,
});

export const backendClient = axios.create({
  baseURL: '/backendAPI',
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

backendClient.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

backendClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = authPath;
    }

    return Promise.reject(error.response);
  }
);

export async function getRequest(client, url, params) {
  const response = await client.get(client, url, { params });
  return response;
}

export async function postRequest(client, url, payload, config) {
  const response = await client.post(client, url, payload, config);
  return response;
}

export async function putRequest(client, url, data) {
  const response = await client.put(client, url, data);
  return response;
}

export async function deleteRequest(client, url) {
  const response = await client.delete(url);
  return response;
}
