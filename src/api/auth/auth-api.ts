import apiClient from '../api-client';

export type RoleResponse = {
  role: string;
};

export type RegisterData = {
  name: string;
  email: string;
  role: string;
  password: string;
  password_confirmation: string;
};

// type LoginResponse = {};

export type RegisterResponse =
  | {
      user: {
        id: number;
        name: string;
        email: string;
        facebook: string;
        whatsapp: string;
        phone: string;
        website: string;
        role: string;
        created_at: string;
      };
      token: string;
    }
  | { error: string };

// Sing In
// export const signIn = (email: string, password: string): Promise<LoginResponse> => {
//   return apiClient.post('/api/', { email, password });
// };

// Sign Up
export const signUp = (userData: RegisterData): Promise<RegisterResponse> =>
  apiClient.post('/register', userData);
