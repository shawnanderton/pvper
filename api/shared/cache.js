const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
let expireTime = 600;

const getJson = async (key) => {
  const data = await getAsync(key);
  return JSON.parse(data);
};

const setJson = (key, value) => {
  client.set(key, JSON.stringify(value), () => {});
  client.expire(key, expireTime);
};

module.exports = { getJson, setJson };
