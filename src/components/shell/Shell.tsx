import React from 'react';
import styles from './styles.module.scss';

import { GeneratorContextProvider } from '../generatorContext';
import { GenerateButton } from '../generateButton';
import { Criterias } from '../criterias';
import { GeneratorInput } from '../generatorInput';
import { LengthRange } from '../lengthRange';

const Shell = () => (
  <div className={styles.wrapper}>
    <GeneratorContextProvider>
      <GeneratorInput />
      <LengthRange />
      <Criterias />
      <GenerateButton />
    </GeneratorContextProvider>
  </div>
);

export default Shell;
