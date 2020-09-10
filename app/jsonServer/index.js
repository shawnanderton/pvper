const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('./db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/leaderboards/:region/:season/:bracket', (req, res) => {
  const { region, season, bracket } = req.params;
  let { limit, page, classes, factions } = req.query;

  limit = parseInt(limit);
  const begin = page * limit;
  const end = begin + limit;

  const factionList = factions.replace(/_/g, ' ').split('-');
  const classList = classes.replace(/_/g, ' ').split('-');
  console.log(classList);
  const leaderboard = data[`leaderboard_${bracket}`];
  let entries = leaderboard.entries.filter((l) => {
    console.log(l.characterClass.name.toLowerCase());
    return classList.includes(l.characterClass.name.toLowerCase());
  });

  entries = entries.filter((l) => {
    return factionList.includes(l.faction.toLowerCase());
  });

  entries = entries.sort((a, b) => a.rank - b.rank).slice(begin, end);
  res.jsonp({ total: 100, entries });
});

// Use default router
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/leaderboards/:region/:season/:bracket':
      '/leaderboards/:region/:season/:bracket',
  }),
);

server.listen(3001, () => {
  console.log('JSON Server is running');
});
