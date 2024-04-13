import React from 'react';
import styles from './styles.module.scss';

import { GeneratorContextProvider } from '../generatorContext';
import { GenerateButton } from '../generateButton';
import { CriteriaList } from '../criteriasList';
import { PasswordField } from '../passwordField';
import { LengthRange } from '../lengthRange';

/**
 * Main component, contains all the other components
 */
const Shell = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <GeneratorContextProvider>
        <PasswordField />
        <LengthRange />
        <CriteriaList />
        <GenerateButton />
      </GeneratorContextProvider>
    </div>
  </div>
);

export default Shell;
