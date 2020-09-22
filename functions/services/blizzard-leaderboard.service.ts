import axios from 'axios';
import { PVPBRACKETS, REGIONS, Namespace } from '../enums/blizzard';

async function get(
  region: REGIONS,
  pvpSeasonId: number,
  pvpBracket: PVPBRACKETS,
  token: string
) {
  const url = getUrl(region, pvpSeasonId, pvpBracket, token);
  const response = await axios.get(url);
  return response.data;
}
function getUrl(
  region: REGIONS,
  pvpSeasonId: number,
  pvpBracket: PVPBRACKETS,
  token: string
) {
  return `https://${region}.api.blizzard.com/data/wow/pvp-season/${pvpSeasonId}/pvp-leaderboard/${pvpBracket}?namespace=${Namespace.Dynamic}-${region}&access_token=${token}`;
}

export { get };
