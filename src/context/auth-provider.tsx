// import React, { createContext, useContext, useState } from 'react';

// export type UserRole = 'admin' | 'user' | 'editor' | null;

// interface AuthContextProps {
//   isAuthenticated: boolean;
//   userRole: UserRole;
//   login: (role: UserRole) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [token, setToken] = useState('');
//   const [userRole, setUserRole] = useState<UserRole>(null);

//   const login = (role: UserRole) => {
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextProps => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
