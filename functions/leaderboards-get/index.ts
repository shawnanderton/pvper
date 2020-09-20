import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import LeaderBoardService from '../services/leaderboard.service';
import * as data from '../mockData/leaderboards.json';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const { region, season, bracket } = req.params;
  let { limit = '15', page = '0' } = req.query;
  const tempLimit = parseInt(limit);
  const tempPage = parseInt(page);

  const begin = tempPage * tempLimit;
  const end = begin + tempLimit;

  const entries = data[bracket].entries
     .sort((a, b) => a.rank - b.rank)
     .slice(begin, end);

  context.res
    .status(200)
    .send({ total: data[bracket].total, entries: entries });

  //await LeaderBoardService.get(context);
};

export default httpTrigger;
