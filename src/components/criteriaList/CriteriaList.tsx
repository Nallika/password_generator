import React from 'react';

import styles from './styles.module.scss';
import { CriterionSelector } from '../criterionSelector';
import { CriteriaEnum } from '../../types';

/**
 * Render list of checkboxes for password criteria (use uppercase, lowercase, numbers, special characters)
 */
const CriteriaList: React.FC = () => (
  <div className={styles.wrapper}>
    {Object.values(CriteriaEnum).map((type) => (
      <CriterionSelector key={type} type={type} />
    ))}
  </div>
);

export default CriteriaList;