const {
  getToken,
  getLeaderBoards,
  convertBracket,
} = require("../shared/blizzard");

module.exports = async function (context, req) {
  try {
    const { region, season, bracket } = req.params;
    let { limit = 15, page = 0 } = req.query;

    const token = await getToken(region);

    const leaderboard = await getLeaderBoards(region, season, bracket, token);
    limit = parseInt(limit);
    const begin = page * limit;
    const end = begin + limit;

    const data = {
      total: leaderboard.entries.length,
    };

    const entries = await convertBracket(
      leaderboard.entries.sort((a, b) => a.rank - b.rank).slice(begin, end),
      bracket,
      region,
      token
    );

    data.entries = entries;

    context.res.status(200).send(data);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
