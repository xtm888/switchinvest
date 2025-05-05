// Defines the structure for translation objects
// We use 'any' for now to keep it flexible, but this can be refined
// later for stricter type checking if needed.
export interface Translation {
  [key: string]: any;
}
