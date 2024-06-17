import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserEmailContext = createContext();

// Create a provider component
export const UserEmailProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));

  return (
    <UserEmailContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserEmailContext.Provider>
  );
};

// Custom hook to access user email
export const useUserEmail = () => {
  return useContext(UserEmailContext);
};