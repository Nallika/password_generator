import React from 'react';

import styles from './styles.module.scss';
import { useGeneratorContext } from '../generatorContext';
import { CriteriaEnum } from '../../types';
import { DEFAULT_CRITERIA } from '../../constants';

/**
 * Render checkbox for password criteria (use uppercase, lowercase, numbers, special characters)
 */
const CriterionSelector: React.FC<{ type: CriteriaEnum }> = ({ type }) => {
  const { updateCriteria, checkCriterionChangeAllowed } = useGeneratorContext();
  const defaultChecked = type === DEFAULT_CRITERIA;

  const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const criterion = { [type]: (event.target as HTMLInputElement).checked };

    // At leas one criteria should be selected, abort change if we try unselect last one 
    if (!checkCriterionChangeAllowed(criterion)) {
      event.preventDefault();
      return;
    }

    updateCriteria(criterion);
  };

  return (
    <div className={styles.wrapper}>
      <input type='checkbox' onClick={onClick} defaultChecked={defaultChecked} />
      <label>Include {type}</label>
    </div>
  );
};

export default CriterionSelector;