import React from 'react';

import styles from './styles.module.scss';
import { useGeneratorContext } from '../generatorContext';

/**
 * Button to run password generation
 */
const GenerateButton: React.FC = () => {
  const { generatePassword } = useGeneratorContext();

  return (
    <button className={styles.btn} onClick={generatePassword}>Generate</button>
  );
};

export default GenerateButton;