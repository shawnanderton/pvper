const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./cosmos-db");
const dbContext = require("./databaseContext");

const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });

const database = client.database(databaseId);
const container = database.container(containerId);

// Make sure Tasks database is already setup. If not, create it.
async function init() {
    await dbContext.create(client, databaseId, containerId);
}

async function create(newItem) {
  try {
    const { resource: createdItem } = await container.items.create(newItem);

    console.log(
      `\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function get(key) {
  try {
    const { resource } = await container.item(key, undefined).read()
    return resource;
  } catch (err) {
    console.error("Error",err);
    throw err;
  }
}

module.exports = { init, create, get };
