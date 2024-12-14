import apiClient from '../api-client';

// ---------------------------------------------------------
// Schema's

// Role schema
export type RoleResponse = {
  roles: string[];
};

// Sign up schema
export type RegisterData = {
  name: string;
  email: string;
  role: string;
  password: string;
  password_confirmation: string;
};

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

// Sign in schema
export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
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
  access_token: string;
  token_type: string;
  expires_in: string;
};

// ---------------------------------------------------------
// Call API

// Sing In
export const signIn = (userData: LoginData): Promise<LoginResponse> =>
  apiClient.post('/login', userData);

// Sign Up
export const signUp = (userData: RegisterData): Promise<RegisterResponse> =>
  apiClient.post('/register', userData);

// Get Roles
export const getRoles = (): Promise<RoleResponse> => apiClient.get('/roles');

// Logout
export const logOut = (token: string): Promise<{ error: string } | null> =>
  apiClient.post('/logout', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
