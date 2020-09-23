import { PVPBRACKETS } from '../enums/blizzard';
import { IPvpLeaderboardEntry } from '../interfaces/IBlizzard';
import { ICharacter } from '../interfaces/ICharacter';
function updatePvperCharacter(
  entry: IPvpLeaderboardEntry,
  pvperCharacter: ICharacter,
  pvpBracket: PVPBRACKETS
): ICharacter {
  pvperCharacter.blizzardId = entry.character.id;
  pvperCharacter.name = entry.character.name;
  pvperCharacter.title = '';
  pvperCharacter.itemLevel = 2;
  pvperCharacter.level = 2;
  pvperCharacter.race = '';
  pvperCharacter.spec = '';
  pvperCharacter.faction = entry.faction.type;
  pvperCharacter.characterClass = '';
  pvperCharacter.guild = '';
  pvperCharacter.gender = '';
  pvperCharacter.realm = entry.character.realm.slug;

  pvperCharacter.ratedPvp[pvpBracket] = {
    rating: entry.rating,
    name: pvpBracket,
    lost: entry.season_match_statistics.lost,
    won: entry.season_match_statistics.won,
    played: entry.season_match_statistics.played,
  };

  return pvperCharacter;
}
