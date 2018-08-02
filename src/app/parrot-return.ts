import { ParrotSearch } from './parrot-search';
import { ParrotDems } from './parrot-dems';
import { ParrotNode } from './parrot-node';

export interface ParrotReturn {
  input: ParrotSearch;
  dimensions: ParrotDems;
  results: ParrotNode[];
}
