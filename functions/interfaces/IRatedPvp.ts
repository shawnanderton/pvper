import { PVPBRACKETS } from "../enums/blizzard";
import { IPvpStatistics } from "./IPvpStatistics";

export interface IRatedPvp extends IPvpStatistics {
  rating: number;
}

export interface IRatedPvpGroup {
  [PVPBRACKETS.ARENA_2v2]: IRatedPvp;
  [PVPBRACKETS.ARENA_3v3]: IRatedPvp;
  [PVPBRACKETS.RGB]: IRatedPvp;
}
