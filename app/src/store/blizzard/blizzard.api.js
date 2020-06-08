import axios from 'axios';
import { parseItem } from '../action-utils';
import API from '../config';

export const getleaderBoardApi = async (options) => {
  const response = await axios.get(
    `${API}/leader-boards/us/29/${options.bracket}?page=${options.page}&limit=${options.limit}`,
  );
  return parseItem(response, 200);
};
