const redis = require("redis");
const { promisify } = require("util");
let client = null;

function setRedis() {
  try {
    client = redis.createClient(6380, process.env.REDISCACHEHOSTNAME, {
      auth_pass: process.env.REDISCACHEKEY,
      tls: { servername: process.env.REDISCACHEHOSTNAME },
    });
  } catch (err) {
    throw err;
  }
}
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

module.exports = { getJson, setJson, setRedis };
