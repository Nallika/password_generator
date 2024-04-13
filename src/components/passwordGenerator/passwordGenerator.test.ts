import { CriteriaEnum } from '../../types';
import generate from './passwordGenerator';

describe('generate', () => {
  it('should return a string of the specified length', () => {
    const length = 10;
    const selectedCriteria = [CriteriaEnum.lowercase, CriteriaEnum.uppercase, CriteriaEnum.symbol, CriteriaEnum.number];
    const password = generate(length, selectedCriteria);
    expect(password).toHaveLength(length);
  });

  it('should only contain characters from the selected criteria', () => {
    const length = 10;
    const selectedCriteria = [CriteriaEnum.lowercase, CriteriaEnum.uppercase];
    const password = generate(length, selectedCriteria);
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      expect(char).toMatch(/[a-zA-Z]/);
    }
  });
});