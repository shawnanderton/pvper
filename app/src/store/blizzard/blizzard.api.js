import axios from 'axios';
import { parseItem } from '../action-utils';
import API from '../config';

export const getleaderBoardApi = async (options) => {
  const classes = options.classes.join('-').replace(/ /g, '_');
  const factions = options.factions.join('-');
  const response = await axios.get(
    `${API}/leaderboards/us/29/${options.bracket}?page=${options.page}&limit=${options.limit}&classes=${classes}&factions=${factions}`,
  );
  return parseItem(response, 200);
};
