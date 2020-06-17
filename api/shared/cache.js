const redis = require("redis");
const { promisify } = require("util");
let client = null;
let expireTime = 600;
let getAsync = null;

function setRedis() {
  client = redis.createClient(6380, process.env["REDISCACHEHOSTNAME"], {
    auth_pass: process.env["REDISCACHEKEY"],
    tls: { servername: process.env["REDISCACHEHOSTNAME"] },
  });
  getAsync = promisify(client.get).bind(client);
}

const getJson = async (key) => {
  const data = await getAsync(key);
  return JSON.parse(data);
};

const setJson = (key, value) => {
  client.set(key, JSON.stringify(value), () => {});
  client.expire(key, expireTime);
};

module.exports = { getJson, setJson, setRedis };
