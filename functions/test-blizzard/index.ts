import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { PVPBRACKETS, REGIONS } from '../enums/blizzard';
import * as BlizzardLeaderboardService from '../services/blizzard-leaderboard.service';
import * as BlizzardOauthService from '../services/blizzard-oauth.service';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  await BlizzardOauthService.set();
  const token = await BlizzardOauthService.get();

  const data = await BlizzardLeaderboardService.get(
    REGIONS.NorthAmerica,
    27,
    PVPBRACKETS.ARENA_3v3,
    token
  );

  context.res.status(200).send(data);
};

export default httpTrigger;
