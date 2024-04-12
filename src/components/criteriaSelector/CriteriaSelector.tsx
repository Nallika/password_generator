import React from 'react';

const CriteriaSelector: React.FC<{ type: string }> = ({ type }) => {
  const onChange = () => { console.log('set criteria ', type)};

  return (
    <input type='checkbox' onChange={onChange} />
  );
};

export default CriteriaSelector;