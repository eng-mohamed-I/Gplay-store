// import { signIn, signUp } from 'src/api/auth/auth-api';

// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

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

// // Business logic for handling user registration
// export const handleSignUp = async (userData: {
//   email: string;
//   password: string;
//   confirmPassword: string;
//   name: string;
//   role: string;
// }): Promise<User> => {
//   try {
//     const response = await signUp(userData);
//     return response.user;
//   } catch (error) {
//     throw new Error('Registration failed');
//   }
// };
