const cache = require("./cache");

async function get(key) {
  return await cache.getJson(key);
}

function save(key, data) {
  cache.setJson(key, data);
}

module.exports = { get, save };
