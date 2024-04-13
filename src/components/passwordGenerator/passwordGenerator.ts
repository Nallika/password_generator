import { CriteriaEnum } from "../../types";

/**
 * Get random number by provided limiter
 */
const getRandom = (limiter: number): number => {
  return Math.floor(Math.random() * limiter);
}

/**
 * Class to store charachter sets and iterate them
 */
class CharSet {
  /**
   * Map of available charachter sets
   */
  private charSetsMap = {
    [CriteriaEnum.lowercase]: 'abcdefghijklmnopqrstuvwxyz',
    [CriteriaEnum.uppercase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    [CriteriaEnum.symbol]: '!@##$%^&*()_+{}:<>?|[];/',
    [CriteriaEnum.number]: '0123456789'
  }

  private selectedCriteria: CriteriaEnum[];

  /**
   * List of currently selected charachter sets
   */
  private charSets: Set<string> = new Set();

  constructor(selectedCriteria: CriteriaEnum[]) {
    this.selectedCriteria = selectedCriteria;
    this.initCharSets();
  }

  /**
   * Initialize/reset currently selected charachter sets
   */
  private initCharSets() {
    this.selectedCriteria.forEach((criteria) => {
      this.charSets.add(this.charSetsMap[criteria]);
    });
  }

  /**
   * Return next random charachter set from currently selected
   */
  getNextSet(): string {
    if (this.charSets.size === 0) {
      this.initCharSets();
    }

    const nextIndex = getRandom(this.charSets.size);
    const nextSet = Array.from(this.charSets)[nextIndex];

    // Remove currntly used set from selected sets list to be sure that all sets will be used before repeat
    this.charSets.delete(nextSet);

    return nextSet;
  }
}


/**
 * Generate password by provided criteria
 */
const generate = (length: number, selectedCriteria: CriteriaEnum[]): string => {
  let password = '';

  const charSet = new CharSet(selectedCriteria);

  for (let i = 0; i < length; i++) {
    const randomCharSet = charSet.getNextSet();
    const randomChar = randomCharSet[getRandom(randomCharSet.length)];
    password += randomChar;
  }

  return password;
}

export default generate;