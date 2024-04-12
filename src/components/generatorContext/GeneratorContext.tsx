import React, { createContext, useState, useContext } from 'react';

const GeneratorContext = createContext<{
  password: string;
  generatePassword: () => string;
}>({
  password: '',
  generatePassword: () => '',
});

export const GeneratorContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');

  const generatePassword = (): string => {
    setPassword('123');
    return '123';
  };

  return (
    <GeneratorContext.Provider value={{ password, generatePassword }}>
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGeneratorContext = () => useContext(GeneratorContext);