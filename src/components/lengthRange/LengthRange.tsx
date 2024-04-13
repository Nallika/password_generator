import React from 'react';

import styles from './styles.module.scss';
import { MAX_LENGTH, MIN_LENGTH } from '../../constants';
import { useGeneratorContext } from '../generatorContext';

const LengthRange: React.FC = () => {
  const { length, setLength } = useGeneratorContext();

  const onMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    setLength(Number((event.target as HTMLInputElement).value));
  };

  return (
    <div className={styles.wrapper}>
      <label>Character length {length}</label>
      <input
        type='range'
        defaultValue={length}
        min={MIN_LENGTH}
        max={MAX_LENGTH}
        onMouseUp={onMouseUp}
        />
    </div>
    
  );
};

export default LengthRange;