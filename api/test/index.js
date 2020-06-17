const characterProfileDB = require("../shared/character-profile-db");

module.exports = async function (context, req) {
  try {
    const newItem = {
      id: "3",
      category: "fun",
      name: "Cosmos DB",
      description: "Complete Cosmos DB Node.js Quickstart ⚡",
      isComplete: false,
    };

    await characterProfileDB.create(newItem);
    context.res.status(200).send("hello world");
  } catch (error) {
    context.res.status(500).send(error);
  }
};
