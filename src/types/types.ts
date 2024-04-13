/**
 * List of available criteria for password generation
 */
export enum CriteriaEnum {
  lowercase = "lowercase",
  uppercase = "uppercase",
  symbol = "symbol",
  number = "number",
}

/**
 * Single criterion 
 */
export type Criterion = {
  [K in CriteriaEnum]?: boolean;
}

/**
 * List of all criteria
 */
export type Criteria = {
  [K in CriteriaEnum]: boolean;
};
