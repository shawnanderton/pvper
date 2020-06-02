const {
  getToken,
  getUrl,
  getLeaderBoards,
  convertBracket,
} = require("../shared/blizzard");

module.exports = async function (context, req) {
  const { region, season, bracket } = req.params;
  try {
    const token = await getToken(region);
    const leaderboard = await getLeaderBoards(region, season, "2v2", token);
    const leaderboardConverted = await convertBracket(
      leaderboard.entries.splice(0, 5),
      "ARENA_2v2",
      region,
      token
    );
    context.res.status(200).send(leaderboardConverted);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
