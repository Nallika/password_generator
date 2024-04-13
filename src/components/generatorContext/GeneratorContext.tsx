import React, { createContext, useState, useContext } from 'react';

import { Criteria, Criterion, CriteriaEnum } from '../../types';
import { generate } from '../passwordGenerator';
import { DEFAULT_CRITERIA, DEFAULT_LENGTH } from '../../constants';

/**
 * Generates initial values for criteria list
 */
const getDefaultCriteria = () => {
  const defaultCriteria = {} as Criteria;

  Object.values(CriteriaEnum).forEach((criteria) => {
    defaultCriteria[criteria] = criteria === DEFAULT_CRITERIA;
  });

  return defaultCriteria;
};

const GeneratorContext = createContext<{
  password: string;
  length: number;
  criteria: Criteria;
  generatePassword: () => void;
  setLength: (length: number) => void;
  updateCriteria: (criteria: Criterion) => void;
  checkCriterionChangeAllowed: (criterion: Criterion) => boolean;
}>({
  password: '',
  length: DEFAULT_LENGTH,
  criteria: getDefaultCriteria(),
  generatePassword: () => {},
  setLength: () => {},
  updateCriteria: () => {},
  checkCriterionChangeAllowed: () => true,
});

export const GeneratorContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(DEFAULT_LENGTH);
  const [criteria, setCriteria] = useState<Criteria>(getDefaultCriteria());

  /**
   * Run acutal password generation by provided criteria
   */
  const generatePassword = () => {
    setPassword(generate(length, criteria));
  };

  /**
   * Check can we provide currenct criteria state change, if at least one of criteria should be selected
   */
  const checkCriterionChangeAllowed = (criterion: Criterion): boolean => {
    const newCriteriaValues = Object.values({
      ...criteria,
      ...criterion
    });

    return newCriteriaValues.some(value => value === true);
  };

  /**
   * Update criteria state with provided criterion
   */
  const updateCriteria = (criterion: Criterion) => {
    setCriteria({
      ...criteria,
      ...criterion
    });
  };

  return (
    <GeneratorContext.Provider value={{ 
        password,
        length,
        criteria,
        generatePassword,
        setLength,
        updateCriteria,
        checkCriterionChangeAllowed
      }}>
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGeneratorContext = () => useContext(GeneratorContext);