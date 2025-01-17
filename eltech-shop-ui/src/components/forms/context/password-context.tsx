import React, { createContext, useContext, useState } from "react";

type PasswordContextType = {
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
};

const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);

export const PasswordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <PasswordContext.Provider
      value={{ isPasswordVisible, togglePasswordVisibility }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const usePasswordContext = () => {
  const context = useContext(PasswordContext);
  if (!context) {
    throw new Error(
      "usePasswordContext must be used within a PasswordProvider"
    );
  }
  return context;
};
