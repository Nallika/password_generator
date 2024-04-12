import React from 'react';

const LengthRange: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('set range ', event.target.value);
  };

  return (
    <input type='range' onChange={onChange} />
  );
};

export default LengthRange;