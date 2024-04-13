import React, { createContext, useState, useContext, useRef } from 'react';

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

/**
 * Context for sotore password criteria and run password generation
 */
const GeneratorContext = createContext<{
  password: string;
  generatePassword: () => void;
  updateLength: (length: number) => void;
  updateCriteria: (criteria: Criterion) => void;
  checkCriterionChangeAllowed: (criterion: Criterion) => boolean;
}>({
  password: '',
  generatePassword: () => {},
  updateLength: () => {},
  updateCriteria: () => {},
  checkCriterionChangeAllowed: () => true,
});

export const GeneratorContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');

  // Use refs to avoid unneded re-renders
  const length = useRef(DEFAULT_LENGTH);
  const criteria = useRef(getDefaultCriteria());

  /**
   * Run acutal password generation by provided criteria
   */
  const generatePassword = () => {
    /**
     * Pick only selected criteria
     */
    const selectedCriteria = Object.keys(criteria.current).filter(
      (key) => criteria.current[key as CriteriaEnum]
    ) as CriteriaEnum[];

    setPassword(generate(length.current, selectedCriteria));
  };

  /**
   * Check can we provide currenct criteria state change, if at least one of criteria should be selected
   */
  const checkCriterionChangeAllowed = (criterion: Criterion): boolean => {
    const newCriteriaValues = Object.values({
      ...criteria.current,
      ...criterion
    });

    return newCriteriaValues.some(value => value === true);
  }

  /**
   * Update criteria state with provided criterion
   */
  const updateCriteria = (criterion: Criterion) => {
    criteria.current = {
      ...criteria.current,
      ...criterion
    };
  }

  /**
   * Update length state with provided value
   */
  const updateLength = (value: number) => {
    length.current = value;
  }

  return (
    <GeneratorContext.Provider value={{ 
        password,
        generatePassword,
        updateLength,
        updateCriteria,
        checkCriterionChangeAllowed
      }}>
      {children}
    </GeneratorContext.Provider>
  );
};

export const useGeneratorContext = () => useContext(GeneratorContext);