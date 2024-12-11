import { RegisterData, RegisterResponse, signUp } from 'src/api/auth/auth-api';

// // Business logic for handling user login
// export const handleSignIn = async (email: string, password: string): Promise<User> => {
//   try {
//     const response = await signIn(email, password);
//     localStorage.setItem('authToken', response.token);
//     return response.user;
//   } catch (error) {
//     throw new Error('Login failed');
//   }
// };

// Business logic for handling user registration
export const handleSignUpService = async (userData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await signUp(userData);
    return response;
  } catch (error) {
    if (error?.response?.data?.error) throw error.response.data.error;
    throw new Error(error);
  }
};
