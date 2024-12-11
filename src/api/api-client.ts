import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// Configure
const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.royalcar.taxi/api', // Base API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for token
// apiClient.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers!['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// handle response globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default apiClient;
