const host = "api.blizzard.com";

let blizzardOauth = null;

const testData = [
  {
    name: "Niarbtw",
    faction: "ALLIANCE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "Notorious Gladiator",
    characterClass: {
      id: 2,
      name: "Paladin",
    },
    realm: {
      id: 76,
      name: "sargeras",
    },
    ARENA_2v2: {
      rank: 1,
      rating: 3028,
      played: 638,
      won: 543,
      lost: 95,
    },
    spec: {
      id: 65,
      name: "Holy",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 74195425,
      name: "dog squad",
    },
  },
  {
    name: "Drakebtw",
    faction: "ALLIANCE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "Dread Gladiator",
    characterClass: {
      id: 10,
      name: "Monk",
    },
    realm: {
      id: 76,
      name: "sargeras",
    },
    ARENA_2v2: {
      rank: 2,
      rating: 3027,
      played: 512,
      won: 426,
      lost: 86,
    },
    spec: {
      id: 269,
      name: "Windwalker",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 74195425,
      name: "dog squad",
    },
  },
  {
    name: "Thugonomicz",
    faction: "HORDE",
    gender: "Male",
    level: 120,
    itemLevel: 482,
    title: "Wrathful Gladiator",
    characterClass: {
      id: 9,
      name: "Warlock",
    },
    realm: {
      id: 59,
      name: "malganis",
    },
    ARENA_2v2: {
      rank: 3,
      rating: 2857,
      played: 339,
      won: 310,
      lost: 29,
    },
    spec: {
      id: 267,
      name: "Destruction",
    },
    race: {
      id: 2,
      name: "Orc",
    },
    guild: {
      id: 90787213,
      name: "didnt ask",
    },
  },
  {
    name: "Korlicbtw",
    faction: "ALLIANCE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "Notorious Gladiator",
    characterClass: {
      id: 2,
      name: "Paladin",
    },
    realm: {
      id: 76,
      name: "sargeras",
    },
    ARENA_2v2: {
      rank: 4,
      rating: 2834,
      played: 393,
      won: 283,
      lost: 110,
    },
    spec: {
      id: 70,
      name: "Retribution",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 74195425,
      name: "dog squad",
    },
  },
  {
    name: "Caprise",
    faction: "HORDE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "Vicious Gladiator",
    characterClass: {
      id: 7,
      name: "Shaman",
    },
    realm: {
      id: 11,
      name: "tichondrius",
    },
    ARENA_2v2: {
      rank: 5,
      rating: 2818,
      played: 199,
      won: 148,
      lost: 51,
    },
    spec: {
      id: 263,
      name: "Enhancement",
    },
    race: {
      id: 2,
      name: "Orc",
    },
    guild: {
      id: 7669755,
      name: "Blur",
    },
  },
  {
    name: "Genji",
    faction: "HORDE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "Sinister Gladiator",
    characterClass: {
      id: 12,
      name: "Demon Hunter",
    },
    realm: {
      id: 1190,
      name: "baelgun",
    },
    ARENA_2v2: {
      rank: 6,
      rating: 2808,
      played: 287,
      won: 191,
      lost: 96,
    },
    spec: {
      id: 577,
      name: "Havoc",
    },
    race: {
      id: 10,
      name: "Blood Elf",
    },
  },
  {
    name: "Stylebenderx",
    faction: "ALLIANCE",
    gender: "Female",
    level: 120,
    itemLevel: 479,
    title: "",
    characterClass: {
      id: 5,
      name: "Priest",
    },
    realm: {
      id: 60,
      name: "stormrage",
    },
    ARENA_2v2: {
      rank: 7,
      rating: 2790,
      played: 312,
      won: 214,
      lost: 98,
    },
    spec: {
      id: 256,
      name: "Discipline",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 85568547,
      name: "ad hoc",
    },
  },
  {
    name: "Blindgator",
    faction: "ALLIANCE",
    gender: "Male",
    level: 120,
    itemLevel: 479,
    title: "Dread Gladiator",
    characterClass: {
      id: 10,
      name: "Monk",
    },
    realm: {
      id: 11,
      name: "tichondrius",
    },
    ARENA_2v2: {
      rank: 8,
      rating: 2783,
      played: 431,
      won: 311,
      lost: 120,
    },
    spec: {
      id: 270,
      name: "Mistweaver",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 78581032,
      name: "ddosed",
    },
  },
  {
    name: "Dethosis",
    faction: "HORDE",
    gender: "Male",
    level: 120,
    itemLevel: 479,
    title: "",
    characterClass: {
      id: 10,
      name: "Monk",
    },
    realm: {
      id: 66,
      name: "dalaran",
    },
    ARENA_2v2: {
      rank: 9,
      rating: 2780,
      played: 178,
      won: 141,
      lost: 37,
    },
    spec: {
      id: 269,
      name: "Windwalker",
    },
    race: {
      id: 2,
      name: "Orc",
    },
    guild: {
      id: 82830867,
      name: "Warcry",
    },
  },
  {
    name: "Brownbtw",
    faction: "ALLIANCE",
    gender: "Female",
    level: 120,
    itemLevel: 480,
    title: "Vindictive Gladiator",
    characterClass: {
      id: 2,
      name: "Paladin",
    },
    realm: {
      id: 1280,
      name: "black-dragonflight",
    },
    ARENA_2v2: {
      rank: 10,
      rating: 2765,
      played: 415,
      won: 275,
      lost: 140,
    },
    spec: {
      id: 65,
      name: "Holy",
    },
    race: {
      id: 1,
      name: "Human",
    },
    guild: {
      id: 79194552,
      name: "Vice",
    },
  },
];

const getToken = async () => {
  if (blizzardOauth !== null && !blizzardOauth.expired()) {
    return Promise.resolve(blizzardOauth.token.access_token);
  }

  const credentials = {
    client: {
      id: process.env["BLIZZARD-CLIENT-ID"],
      secret: process.env["BLIZZARD-CLIENT-SECRET"],
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
  const url = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${name.toLowerCase()}?namespace=profile-us&locale=en_US&access_token=${token}`;
  const response = await require("axios").get(url);
  return response.data;
};

const convertBracket = async (entries, bracket, region, token) => {
  let characters = [];
  try {
    for (const entry of entries) {
      const profile = await getChacaterProfile(
        region,
        entry.character.realm.slug,
        entry.character.name,
        token
      );
      let character = {
        name: entry.character.name,
        faction: entry.faction.type,
        gender: profile.gender.name,
        level: profile.level,
        itemLevel: profile.average_item_level,
        title: profile.active_title ? profile.active_title.name : "",

        characterClass: {
          id: profile.character_class.id,
          name: profile.character_class.name,
        },
        realm: {
          id: entry.character.realm.id,
          name: entry.character.realm.slug,
        },
        [bracket]: {
          rank: entry.rank,
          rating: entry.rating,
          played: entry.season_match_statistics.played,
          won: entry.season_match_statistics.won,
          lost: entry.season_match_statistics.lost,
        },
      };

      if (profile.active_spec) {
        character.spec = {
          id: profile.active_spec.id,
          name: profile.active_spec.name,
        };
      }

      if (profile.race) {
        character.race = {
          id: profile.race.id,
          name: profile.race.name,
        };
      }

      if (profile.guild) {
        character.guild = {
          id: profile.guild.id,
          name: profile.guild.name,
        };
      }
      characters.push(character);
    }
  } catch (err) {
    console.log("errrroorrrrrrrrrrrrrrrrrrrrrrrrrr", err);
    throw err;
    return;
  }
  return characters;
};

module.exports = { getToken, getUrl, convertBracket, testData };
