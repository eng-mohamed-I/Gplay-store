import React, { createContext, useState, useMemo } from 'react';

export type UserRole = 'admin' | 'buyer' | 'broker' | 'seller' | 'reseller' | null;

export type UserProps = {
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

export interface AuthContextProps {
  isAuthenticated: boolean;
  accessToken: string;
  user: UserProps | null;
  login: (userInfo: UserProps, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (token: any, userInfo: any) => {
    setIsAuthenticated(true);
    setAccessToken(token);
    setUser(userInfo);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAccessToken('');
    setUser(null);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      accessToken,
      user,
      login,
      logout,
    }),
    [isAuthenticated, accessToken, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
