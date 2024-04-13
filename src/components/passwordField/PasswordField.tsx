import React from 'react';

import copy_icon from '../../icons/copy-icon.svg';
import styles from './styles.module.scss';
import { useGeneratorContext } from '../generatorContext';

/**
 * Display the generated password, with copy button
 */
const PasswordField: React.FC = () => {
  const { password } = useGeneratorContext();

  /**
   * Copy the password to the clipboard
   */
  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.field}
        value={password}
        readOnly
        placeholder='Click "Generate" to generate a password'
      />
      <img className={styles.icon} src={copy_icon} alt='copy icon' onClick={handleCopyClick} />
    </div>
  );
};

export default PasswordField;