const config = {
  endpoint: process.env.COSMOSDBURL,
  key: process.env.COSMOSDBKEY,
  databaseId: "Blizzard",
  containerId: "Characters",
};

module.exports = config;
