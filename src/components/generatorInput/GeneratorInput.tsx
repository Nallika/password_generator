import React from 'react';
import { useGeneratorContext } from '../generatorContext';

const GeneratorInput: React.FC = () => {
  const { password } = useGeneratorContext();

  return (
    <textarea
      value={password}
      placeholder='Click "Generate" to generate a password'
    />
  );
};

export default GeneratorInput;