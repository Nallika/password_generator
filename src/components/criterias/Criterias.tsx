import React from 'react';
import { CriteriaSelector } from '../criteriaSelector';

const Criterias: React.FC = () => {
  return (
    <div>
      <CriteriaSelector type='uppercase' />
      <CriteriaSelector type='lowercase' />
      <CriteriaSelector type='numbers' />
      <CriteriaSelector type='symbols' />
    </div>
  );
};

export default Criterias;