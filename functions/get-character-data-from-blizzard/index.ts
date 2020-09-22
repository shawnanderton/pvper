import { AzureFunction, Context } from '@azure/functions';
import { wait } from '../helpers/utils';

const timerTrigger: AzureFunction = async function (
  context: Context,
  myTimer: any
): Promise<void> {
  if (myTimer.isPastDue) {
    context.log('Timer function is running late!');
  }
  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20];

  for (let t of test) {
    var timeStamp = new Date().toISOString();

    context.log(`${t} - Timer trigger function ran! `, timeStamp);
    await wait(100);
  }
};

export default timerTrigger;
