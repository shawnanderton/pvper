import axios from 'axios';
import { parseItem } from '../action-utils';
import API from '../config';

export const getleaderBoardApi = async (options) => {
  console.log(API);
  const response = await axios.get(
    `${API}/leaderboards/us/29/${options.bracket}?page=${options.page}&limit=${options.limit}`,
  );
  return parseItem(response, 200);
};
