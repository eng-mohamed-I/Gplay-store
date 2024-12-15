import React, { createContext, useContext, useState, useMemo } from 'react';

export type UserRole = 'admin' | 'user' | 'editor' | null;

export interface AuthContextProps {
  isAuthenticated: boolean;
  userRole: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);

  const login = (role: UserRole) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      userRole,
      login,
      logout,
    }),
    [isAuthenticated, userRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
