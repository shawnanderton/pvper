 const cache = require("./cache");
const axios = require("axios");
const characterProfileCache = require("./characterProfileCache");

const host = "api.blizzard.com";
let blizzardOauth = null;

const defaultProfile = {
  gender: {},
  character_class: {},
  active_spec: {},
  race: {},
  guild: {},
  active_title: {},
};

const getToken = async () => {
  if (blizzardOauth !== null && !blizzardOauth.expired()) {
    return Promise.resolve(blizzardOauth.token.access_token);
  }

  const credentials = {
    client: {
      id: process.env["BLIZZARDCLIENTID"],
      secret: process.env["BLIZZARDCLIENTSECRET"],
    },
    auth: {
      tokenHost: "https://us.battle.net",
    },
  };

  try {
    const oauth2 = require("simple-oauth2").create(credentials);
    blizzardOauth = await oauth2.clientCredentials
      .getToken()
      .then(oauth2.accessToken.create);
  } catch (err) {
    console.log(err);
  }
  return blizzardOauth.token.access_token;
};

const getUrl = (region = "us") => {
  return `https://${region}.${host}`;
};

const getChacaterProfile = async (region, realm, name, token) => {
  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name.toLowerCase()}?namespace=profile-us&locale=en_US`;
  try {
    const response = await axios.get(`${url}&access_token=${token}`);
    return response.data;
  } catch (error) {
    console.error("getChacaterProfile", error);
    return defaultProfile;
  }
};

const getLeaderBoards = async (region, season, bracket, token) => {
  const url = `https://${region}.api.blizzard.com//data/wow/pvp-season/${season}/pvp-leaderboard/${bracket}?namespace=dynamic-us&locale=en_US`;
  const key = `${region}-${season}-${bracket};`;
  const data = await cache.getJson(key);
  if (data) return data;
  const response = await axios.get(`${url}&access_token=${token}`);
  cache.setJson(key, response.data);
  return response.data;
};

const convertBracket = async (entries, bracket, region, token) => {
  let characters = [];

  try {
    for (const entry of entries) {
      const key = `${region}-${entry.character.realm.slug}-${entry.character.name}`;
      let data = await characterProfileCache.get(key);

      if (data) {
        let character = data;
        character[bracket] = {
          rank: entry.rank,
          rating: entry.rating,
          played: entry.season_match_statistics.played,
          won: entry.season_match_statistics.won,
          lost: entry.season_match_statistics.lost,
        };

        characters.push(character);
        continue;
      }

      let character = {
        name: entry.character.name,
        faction: entry.faction.type,
        realm: {
          id: entry.character.realm.id,
          name: entry.character.realm.slug,
        },
        ["2v2"]: {},
        ["3v3"]: {},
        ["rbg"]: {},
      };

      character[bracket] = {
        rank: entry.rank,
        rating: entry.rating,
        played: entry.season_match_statistics.played,
        won: entry.season_match_statistics.won,
        lost: entry.season_match_statistics.lost,
      };

      let profile = await getChacaterProfile(
        region,
        entry.character.realm.slug,
        entry.character.name,
        token
      );

      character.gender = profile.gender.name;
      character.level = profile.level;
      character.itemLevel = profile.average_item_level;
      character.title = profile.active_title ? profile.active_title.name : "";

      character.characterClass = {
        id: profile.character_class.id,
        name: profile.character_class.name,
      };

      character.spec = {
        id: profile.active_spec.id,
        name: profile.active_spec.name,
      };

      character.race = {
        id: profile.race.id,
        name: profile.race.name,
      };
      if (profile.guild) {
        character.guild = {
          id: profile.guild.id,
          name: profile.guild.name,
        };
      }

      characterProfileCache.save(key, character);
      characters.push(character);
    }
  } catch (err) {
    console.log("erorr", err);
    throw err;
  }

  return characters;
};

module.exports = {
  getToken,
  getUrl,
  convertBracket,
  getLeaderBoards,
};
