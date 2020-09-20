import { Tedis } from "tedis";

  const REDISCACHEHOSTNAME = process.env.REDISCACHEHOSTNAME;
  const REDISCACHEKEY =  process.env.REDISCACHEKEY;

  let tedis = new Tedis({
        host: REDISCACHEHOSTNAME,
        port: 6379
      });
        

  async function set<T>(key: string, data: T, expiresInSeconds) {
    const value = JSON.stringify(data);

    await tedis.set(key, value);
    tedis.expire(key, expiresInSeconds);
  }

 async function get(key: string) {
      const value = await tedis.get(key);
      return JSON.parse(value as string);
  }

export {set, get}