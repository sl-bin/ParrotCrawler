import { ParrotSearch } from './parrot-search';

export interface ParrotReturn {
  input: ParrotSearch;
  dimensions: {
    height: number;
    width: number;
  };
  results[]: {
    id: number;
    depth: number;
    title: string;
    url: string;
    dead: Boolean;
    found: Boolean;
    links: number;
    children[]: number;
  }
}
