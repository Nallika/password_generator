import React, { useState } from 'react';

import styles from './styles.module.scss';
import { DEFAULT_LENGTH, MAX_LENGTH, MIN_LENGTH } from '../../constants';
import { useGeneratorContext } from '../generatorContext';

const LengthRange: React.FC = () => {
  const [ length, setLength ] = useState(DEFAULT_LENGTH);
  const { updateLength } = useGeneratorContext();

  const onMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = Number((event.target as HTMLInputElement).value);
    setLength(value);
    updateLength(value);
  };

  return (
    <div className={styles.wrapper}>
      <label>Character length {length}</label>
      <input
        type='range'
        defaultValue={DEFAULT_LENGTH}
        min={MIN_LENGTH}
        max={MAX_LENGTH}
        onMouseUp={onMouseUp}
        />
    </div>
    
  );
};

export default LengthRange;