import {
  getRoles,
  LoginData,
  LoginResponse,
  logOut,
  RegisterData,
  RegisterResponse,
  RoleResponse,
  signIn,
  signUp,
} from 'src/api/auth/auth-api';

// handling user login
export const handleSignInService = async (userData: LoginData): Promise<LoginResponse> => {
  try {
    const response = await signIn(userData);
    console.log(response);
    return response;
  } catch (error) {
    if (error?.response?.data?.error) throw error.response.data.error;
    throw new Error(error);
  }
};

// handling user registration
export const handleSignUpService = async (userData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await signUp(userData);
    return response;
  } catch (error) {
    if (error?.response?.data?.error) throw error.response.data.error;
    throw new Error(error);
  }
};

// handling get all roles
export const handleGetRoleService = async (): Promise<RoleResponse> => {
  try {
    const response = await getRoles();
    return response;
  } catch (error) {
    if (error?.response?.data?.error) throw error.response.data.error;
    throw new Error(error);
  }
};

//handling logout
export const handleLogoutService = async (token: string): Promise<{ error: string } | null> => {
  try {
    const response = await logOut(token);
    return response;
  } catch (error) {
    if (error?.response?.data?.error) throw error.response.data.error;
    throw new Error(error);
  }
};
