import { CosmosClient } from "@azure/cosmos";

const endpoint = process.env.CORE_API_URL;
const masterKey = process.env.CORE_API_KEY;
const databaseDefName = "character-db";
const charactersContainerName = "characters";

const client = new CosmosClient({ endpoint, key: masterKey });

const containers = {
  characters: client.database(databaseDefName).container(charactersContainerName),
};

export default containers;
