import { Context } from '@azure/functions';
import * as BlizzardOauthToken from './blizzard-oauth.service';

async function get({req, res}: Context) {
    await BlizzardOauthToken.set()
    const data = await BlizzardOauthToken.get();
    res.status(200).send(data);
}



const LeaderBoardService = {get: get}

export default LeaderBoardService;
