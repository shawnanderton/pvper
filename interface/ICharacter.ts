interface ICharacter {
  blizzardId: string;
  title: string;
  name: string;
  itemLevel: number;
  level: number;
  race: string;
  spec: string;
  faction: string;
  characterClass: string;
  guild: string;
  gender: string;
  realm: string;
  RatedPvp: IRatedPvp[];
  NonRatedPvp: IPvpStatistics[];
}
