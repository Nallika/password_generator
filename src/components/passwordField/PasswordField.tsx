import React from 'react';

import styles from './styles.module.scss';
import { useGeneratorContext } from '../generatorContext';

/**
 * Display the generated password, with copy button
 */
const PasswordField: React.FC = () => {
  const { password } = useGeneratorContext();

  return (
    <div className={styles.wrapper}>
      <input
        value={password}
        placeholder='Click "Generate" to generate a password'
      />
    </div>
  );
};

export default PasswordField;