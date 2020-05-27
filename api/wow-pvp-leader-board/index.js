const { getToken, getUrl } = require("../shared/blizzard");
const axios = require("axios");

module.exports = async function (context, req) {
  const { region, season, bracket } = req.params;

  const baseUrl = getUrl(region);
  let testData = {
    _links: {
      self: {
        href:
          "https://us.api.blizzard.com/data/wow/pvp-season/29/pvp-leaderboard/2v2?namespace=dynamic-us",
      },
    },
    season: {
      key: {
        href:
          "https://us.api.blizzard.com/data/wow/pvp-season/29?namespace=dynamic-us",
      },
      id: 29,
    },
    name: "2v2",
    bracket: {
      id: 0,
      type: "ARENA_2v2",
    },
    entries: [
      {
        character: {
          name: "Niarbtw",
          id: 174454355,
          realm: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
            },
            name: "Sargeras",
            id: 76,
            slug: "sargeras",
          },
          _links: {
            self: {
              href:
                "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw?namespace=profile-us",
            },
          },
          gender: {
            type: "FEMALE",
            name: "Female",
          },
          faction: {
            type: "ALLIANCE",
            name: "Alliance",
          },
          race: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-8.3.0_32861-us",
            },
            name: "Human",
            id: 1,
          },
          character_class: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-class/2?namespace=static-8.3.0_32861-us",
            },
            name: "Paladin",
            id: 2,
          },
          active_spec: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-specialization/65?namespace=static-8.3.0_32861-us",
            },
            name: "Holy",
            id: 65,
          },
          guild: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/guild/sargeras/dog-squad?namespace=profile-us",
            },
            name: "dog squad",
            id: 74195425,
            realm: {
              key: {
                href:
                  "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
              },
              name: "Sargeras",
              id: 76,
              slug: "sargeras",
            },
            faction: {
              type: "ALLIANCE",
              name: "Alliance",
            },
          },
          level: 120,
          experience: 0,
          achievement_points: 13600,
          achievements: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/achievements?namespace=profile-us",
          },
          titles: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/titles?namespace=profile-us",
          },
          pvp_summary: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/pvp-summary?namespace=profile-us",
          },
          encounters: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/encounters?namespace=profile-us",
          },
          media: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/character-media?namespace=profile-us",
          },
          last_login_timestamp: 1590570507000,
          average_item_level: 479,
          equipped_item_level: 477,
          specializations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/specializations?namespace=profile-us",
          },
          statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/statistics?namespace=profile-us",
          },
          mythic_keystone_profile: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/mythic-keystone-profile?namespace=profile-us",
          },
          equipment: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/equipment?namespace=profile-us",
          },
          appearance: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/appearance?namespace=profile-us",
          },
          collections: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/collections?namespace=profile-us",
          },
          active_title: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/title/402?namespace=static-8.3.0_32861-us",
            },
            name: "Notorious Gladiator",
            id: 402,
            display_string: "Notorious Gladiator {name}",
          },
          reputations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/reputations?namespace=profile-us",
          },
          quests: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/quests?namespace=profile-us",
          },
          achievements_statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/achievements/statistics?namespace=profile-us",
          },
          professions: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/niarbtw/professions?namespace=profile-us",
          },
        },
        faction: {
          type: "ALLIANCE",
        },
        rank: 1,
        rating: 3028,
        season_match_statistics: {
          played: 638,
          won: 543,
          lost: 95,
        },
        tier: {
          key: {
            href:
              "https://us.api.blizzard.com/data/wow/pvp-tier/6?namespace=static-8.3.0_32861-us",
          },
          id: 6,
        },
      },
      {
        character: {
          name: "Drakebtw",
          id: 173960664,
          realm: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
            },
            name: "Sargeras",
            id: 76,
            slug: "sargeras",
          },
          _links: {
            self: {
              href:
                "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw?namespace=profile-us",
            },
          },
          gender: {
            type: "FEMALE",
            name: "Female",
          },
          faction: {
            type: "ALLIANCE",
            name: "Alliance",
          },
          race: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-8.3.0_32861-us",
            },
            name: "Human",
            id: 1,
          },
          character_class: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-class/10?namespace=static-8.3.0_32861-us",
            },
            name: "Monk",
            id: 10,
          },
          active_spec: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-specialization/269?namespace=static-8.3.0_32861-us",
            },
            name: "Windwalker",
            id: 269,
          },
          guild: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/guild/sargeras/dog-squad?namespace=profile-us",
            },
            name: "dog squad",
            id: 74195425,
            realm: {
              key: {
                href:
                  "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
              },
              name: "Sargeras",
              id: 76,
              slug: "sargeras",
            },
            faction: {
              type: "ALLIANCE",
              name: "Alliance",
            },
          },
          level: 120,
          experience: 0,
          achievement_points: 10895,
          achievements: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/achievements?namespace=profile-us",
          },
          titles: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/titles?namespace=profile-us",
          },
          pvp_summary: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/pvp-summary?namespace=profile-us",
          },
          encounters: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/encounters?namespace=profile-us",
          },
          media: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/character-media?namespace=profile-us",
          },
          last_login_timestamp: 1590568799000,
          average_item_level: 479,
          equipped_item_level: 477,
          specializations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/specializations?namespace=profile-us",
          },
          statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/statistics?namespace=profile-us",
          },
          mythic_keystone_profile: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/mythic-keystone-profile?namespace=profile-us",
          },
          equipment: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/equipment?namespace=profile-us",
          },
          appearance: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/appearance?namespace=profile-us",
          },
          collections: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/collections?namespace=profile-us",
          },
          active_title: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/title/79?namespace=static-8.3.0_32861-us",
            },
            name: "Dread Gladiator",
            id: 79,
            display_string: "Dread Gladiator {name}",
          },
          reputations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/reputations?namespace=profile-us",
          },
          quests: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/quests?namespace=profile-us",
          },
          achievements_statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/achievements/statistics?namespace=profile-us",
          },
          professions: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/drakebtw/professions?namespace=profile-us",
          },
        },
        faction: {
          type: "ALLIANCE",
        },
        rank: 2,
        rating: 3027,
        season_match_statistics: {
          played: 512,
          won: 426,
          lost: 86,
        },
        tier: {
          key: {
            href:
              "https://us.api.blizzard.com/data/wow/pvp-tier/6?namespace=static-8.3.0_32861-us",
          },
          id: 6,
        },
      },
      {
        character: {
          name: "Thugonomicz",
          id: 181527443,
          realm: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/realm/59?namespace=dynamic-us",
            },
            name: "Mal'Ganis",
            id: 59,
            slug: "malganis",
          },
          _links: {
            self: {
              href:
                "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz?namespace=profile-us",
            },
          },
          gender: {
            type: "MALE",
            name: "Male",
          },
          faction: {
            type: "HORDE",
            name: "Horde",
          },
          race: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-race/2?namespace=static-8.3.0_32861-us",
            },
            name: "Orc",
            id: 2,
          },
          character_class: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-class/9?namespace=static-8.3.0_32861-us",
            },
            name: "Warlock",
            id: 9,
          },
          active_spec: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-specialization/267?namespace=static-8.3.0_32861-us",
            },
            name: "Destruction",
            id: 267,
          },
          guild: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/guild/malganis/didnt-ask?namespace=profile-us",
            },
            name: "didnt ask",
            id: 90787213,
            realm: {
              key: {
                href:
                  "https://us.api.blizzard.com/data/wow/realm/59?namespace=dynamic-us",
              },
              name: "Mal'Ganis",
              id: 59,
              slug: "malganis",
            },
            faction: {
              type: "HORDE",
              name: "Horde",
            },
          },
          level: 120,
          experience: 0,
          achievement_points: 15875,
          achievements: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/achievements?namespace=profile-us",
          },
          titles: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/titles?namespace=profile-us",
          },
          pvp_summary: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/pvp-summary?namespace=profile-us",
          },
          encounters: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/encounters?namespace=profile-us",
          },
          media: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/character-media?namespace=profile-us",
          },
          last_login_timestamp: 1590590007000,
          average_item_level: 482,
          equipped_item_level: 477,
          specializations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/specializations?namespace=profile-us",
          },
          statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/statistics?namespace=profile-us",
          },
          mythic_keystone_profile: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/mythic-keystone-profile?namespace=profile-us",
          },
          equipment: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/equipment?namespace=profile-us",
          },
          appearance: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/appearance?namespace=profile-us",
          },
          collections: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/collections?namespace=profile-us",
          },
          active_title: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/title/142?namespace=static-8.3.0_32861-us",
            },
            name: "Wrathful Gladiator",
            id: 142,
            display_string: "Wrathful Gladiator {name}",
          },
          reputations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/reputations?namespace=profile-us",
          },
          quests: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/quests?namespace=profile-us",
          },
          achievements_statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/achievements/statistics?namespace=profile-us",
          },
          professions: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/malganis/thugonomicz/professions?namespace=profile-us",
          },
        },
        faction: {
          type: "HORDE",
        },
        rank: 3,
        rating: 2857,
        season_match_statistics: {
          played: 339,
          won: 310,
          lost: 29,
        },
        tier: {
          key: {
            href:
              "https://us.api.blizzard.com/data/wow/pvp-tier/6?namespace=static-8.3.0_32861-us",
          },
          id: 6,
        },
      },
      {
        character: {
          name: "Korlicbtw",
          id: 174628032,
          realm: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
            },
            name: "Sargeras",
            id: 76,
            slug: "sargeras",
          },
          _links: {
            self: {
              href:
                "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw?namespace=profile-us",
            },
          },
          gender: {
            type: "FEMALE",
            name: "Female",
          },
          faction: {
            type: "ALLIANCE",
            name: "Alliance",
          },
          race: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-race/1?namespace=static-8.3.0_32861-us",
            },
            name: "Human",
            id: 1,
          },
          character_class: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-class/2?namespace=static-8.3.0_32861-us",
            },
            name: "Paladin",
            id: 2,
          },
          active_spec: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-specialization/70?namespace=static-8.3.0_32861-us",
            },
            name: "Retribution",
            id: 70,
          },
          guild: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/guild/sargeras/dog-squad?namespace=profile-us",
            },
            name: "dog squad",
            id: 74195425,
            realm: {
              key: {
                href:
                  "https://us.api.blizzard.com/data/wow/realm/76?namespace=dynamic-us",
              },
              name: "Sargeras",
              id: 76,
              slug: "sargeras",
            },
            faction: {
              type: "ALLIANCE",
              name: "Alliance",
            },
          },
          level: 120,
          experience: 0,
          achievement_points: 22555,
          achievements: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/achievements?namespace=profile-us",
          },
          titles: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/titles?namespace=profile-us",
          },
          pvp_summary: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/pvp-summary?namespace=profile-us",
          },
          encounters: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/encounters?namespace=profile-us",
          },
          media: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/character-media?namespace=profile-us",
          },
          last_login_timestamp: 1590517663000,
          average_item_level: 479,
          equipped_item_level: 476,
          specializations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/specializations?namespace=profile-us",
          },
          statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/statistics?namespace=profile-us",
          },
          mythic_keystone_profile: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/mythic-keystone-profile?namespace=profile-us",
          },
          equipment: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/equipment?namespace=profile-us",
          },
          appearance: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/appearance?namespace=profile-us",
          },
          collections: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/collections?namespace=profile-us",
          },
          active_title: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/title/402?namespace=static-8.3.0_32861-us",
            },
            name: "Notorious Gladiator",
            id: 402,
            display_string: "Notorious Gladiator {name}",
          },
          reputations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/reputations?namespace=profile-us",
          },
          quests: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/quests?namespace=profile-us",
          },
          achievements_statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/achievements/statistics?namespace=profile-us",
          },
          professions: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/sargeras/korlicbtw/professions?namespace=profile-us",
          },
        },
        faction: {
          type: "ALLIANCE",
        },
        rank: 4,
        rating: 2834,
        season_match_statistics: {
          played: 393,
          won: 283,
          lost: 110,
        },
        tier: {
          key: {
            href:
              "https://us.api.blizzard.com/data/wow/pvp-tier/6?namespace=static-8.3.0_32861-us",
          },
          id: 6,
        },
      },
      {
        character: {
          name: "Caprise",
          id: 196961673,
          realm: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/realm/11?namespace=dynamic-us",
            },
            name: "Tichondrius",
            id: 11,
            slug: "tichondrius",
          },
          _links: {
            self: {
              href:
                "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise?namespace=profile-us",
            },
          },
          gender: {
            type: "FEMALE",
            name: "Female",
          },
          faction: {
            type: "HORDE",
            name: "Horde",
          },
          race: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-race/2?namespace=static-8.3.0_32861-us",
            },
            name: "Orc",
            id: 2,
          },
          character_class: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-class/7?namespace=static-8.3.0_32861-us",
            },
            name: "Shaman",
            id: 7,
          },
          active_spec: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/playable-specialization/263?namespace=static-8.3.0_32861-us",
            },
            name: "Enhancement",
            id: 263,
          },
          guild: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/guild/tichondrius/blur?namespace=profile-us",
            },
            name: "Blur",
            id: 7669755,
            realm: {
              key: {
                href:
                  "https://us.api.blizzard.com/data/wow/realm/11?namespace=dynamic-us",
              },
              name: "Tichondrius",
              id: 11,
              slug: "tichondrius",
            },
            faction: {
              type: "HORDE",
              name: "Horde",
            },
          },
          level: 120,
          experience: 0,
          achievement_points: 11845,
          achievements: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/achievements?namespace=profile-us",
          },
          titles: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/titles?namespace=profile-us",
          },
          pvp_summary: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/pvp-summary?namespace=profile-us",
          },
          encounters: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/encounters?namespace=profile-us",
          },
          media: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/character-media?namespace=profile-us",
          },
          last_login_timestamp: 1590611121000,
          average_item_level: 479,
          equipped_item_level: 473,
          specializations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/specializations?namespace=profile-us",
          },
          statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/statistics?namespace=profile-us",
          },
          mythic_keystone_profile: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/mythic-keystone-profile?namespace=profile-us",
          },
          equipment: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/equipment?namespace=profile-us",
          },
          appearance: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/appearance?namespace=profile-us",
          },
          collections: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/collections?namespace=profile-us",
          },
          active_title: {
            key: {
              href:
                "https://us.api.blizzard.com/data/wow/title/191?namespace=static-8.3.0_32861-us",
            },
            name: "Vicious Gladiator",
            id: 191,
            display_string: "Vicious Gladiator {name}",
          },
          reputations: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/reputations?namespace=profile-us",
          },
          quests: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/quests?namespace=profile-us",
          },
          achievements_statistics: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/achievements/statistics?namespace=profile-us",
          },
          professions: {
            href:
              "https://us.api.blizzard.com/profile/wow/character/tichondrius/caprise/professions?namespace=profile-us",
          },
        },
        faction: {
          type: "HORDE",
        },
        rank: 5,
        rating: 2811,
        season_match_statistics: {
          played: 198,
          won: 147,
          lost: 51,
        },
        tier: {
          key: {
            href:
              "https://us.api.blizzard.com/data/wow/pvp-tier/6?namespace=static-8.3.0_32861-us",
          },
          id: 6,
        },
      },
    ],
  };

  try {
    //token = await getToken();
    // const url = `${baseUrl}/data/wow/pvp-season/${season}/pvp-leaderboard/${bracket}?namespace=dynamic-us&locale=en_US&access_token=${token}`;
    // const response = await axios.get(url);

    context.res.status(200).send(testData);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
