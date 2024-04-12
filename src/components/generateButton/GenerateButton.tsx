import React from 'react';

import { useGeneratorContext } from '../generatorContext';

const GenerateButton: React.FC = () => {
  const { generatePassword } = useGeneratorContext();

  const onClick = () => {
    generatePassword();
  };

  return (
    <button onClick={onClick}>{'Generate'}</button>
  );
};

export default GenerateButton;