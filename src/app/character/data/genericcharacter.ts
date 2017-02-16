
import { Relationship } from './relationship';

export class GenericCharacter {
  name: string;
  user?: string;
  relationships: Relationship[] = [new Relationship()];
}
