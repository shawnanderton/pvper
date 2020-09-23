import { IPvpStatistics } from './IPvpStatistics';
import { IRatedPvp, IRatedPvpGroup } from './IRatedPvp';

export interface ICharacter {
  blizzardId: number;
  title?: string;
  name: string;
  itemLevel: number;
  level: number;
  race: string;
  spec: string;
  faction: string;
  characterClass: string;
  guild?: string;
  gender: string;
  realm: string;
  ratedPvp?: IRatedPvpGroup;
  nonRatedPvp?: IPvpStatistics[];
}
