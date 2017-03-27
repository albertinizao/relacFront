
import { Relationship } from './relationship';

export class GenericCharacter {
  name: string;
  game?: string;
  user?: string;
  relationships: Relationship[] = [new Relationship()];
}
