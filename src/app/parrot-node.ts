export interface ParrotNode {
  id: number;
  depth: number;
  title: string;
  url: string;
  dead: Boolean;
  found: Boolean;
  links: number;
  children: number[];
}
