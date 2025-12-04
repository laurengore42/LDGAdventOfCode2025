export class day02 {
  public static printResult = () => {
    let result = '<br />Day 2<br/>';
    const input = '2558912-2663749,1-19,72-85,82984-100358,86-113,193276-237687,51-69,779543-880789,13004-15184,2768-3285,4002-4783,7702278-7841488,7025-8936,5858546565-5858614010,5117615-5149981,4919-5802,411-466,126397-148071,726807-764287,7454079517-7454227234,48548-61680,67606500-67729214,9096-10574,9999972289-10000034826,431250-455032,907442-983179,528410-680303,99990245-100008960,266408-302255,146086945-146212652,9231222-9271517,32295166-32343823,32138-36484,4747426142-4747537765,525-652,333117-414840,13413537-13521859,1626-1972,49829276-50002273,69302-80371,8764571787-8764598967,5552410836-5552545325,660-782,859-1056';
    const testInput = '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124';
    let inputArray = input.split(',');
    //inputArray = testInput.split(',');

    const isCheapFakeId = (id: number) => {
      const stringId = id.toString();
      const maxSearchLength = Math.ceil(stringId.length / 2);
      let isFake = false;
      for (let i = 1; i <= maxSearchLength; i++) {
        let testRepeater = stringId.substring(0, i);
        let testBuilder = testRepeater;
        testBuilder = testBuilder + testRepeater;
        if (testBuilder === stringId) {
          return true;
        }
      }
      return isFake;
    }

    const isFakeId = (id: number) => {
      const stringId = id.toString();
      const maxSearchLength = Math.ceil(stringId.length / 2);
      let isFake = false;
      for (let i = 1; i <= maxSearchLength; i++) {
        let testRepeater = stringId.substring(0, i);
        let testBuilder = testRepeater + testRepeater;
        while (testBuilder.length < stringId.length) {
          testBuilder = testBuilder + testRepeater;
        }
        if (testBuilder === stringId) {
          return true;
        }
      }
      return isFake;
    }

    let fakes = 0;
    let fakeSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
      const range = inputArray[i];
      // result += 'Range: ' + range + '<br/>';
      const rangeStart = parseInt(range.split('-')[0]);
      // result += 'Start: ' + rangeStart + '<br/>';
      const rangeEnd = parseInt(range.split('-')[1]);
      for (let j = 0; j <= rangeEnd - rangeStart; j++) {
        const id = rangeStart + j;
        if (isCheapFakeId(id)) {
          //result += '--- fake: ' + id + '<br/>';
          fakes++;
          fakeSum += id;
        }
        else {
          //result += 'Real: ' + id + '<br/>';
        }
      }
      // result += 'End: ' + rangeEnd + '<br/>';
    }
    result += 'Fakes: ' + fakes + '<br/>';
    result += 'Sum: ' + fakeSum + '<br/>';

    fakes = 0;
    fakeSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
      const range = inputArray[i];
      // result += 'Range: ' + range + '<br/>';
      const rangeStart = parseInt(range.split('-')[0]);
      // result += 'Start: ' + rangeStart + '<br/>';
      const rangeEnd = parseInt(range.split('-')[1]);
      for (let j = 0; j <= rangeEnd - rangeStart; j++) {
        const id = rangeStart + j;
        if (isFakeId(id)) {
          // result += '--- fake: ' + id + '<br/>';
          fakes++;
          fakeSum += id;
        }
        else {
          //result += 'Real: ' + id + '<br/>';
        }
      }
      // result += 'End: ' + rangeEnd + '<br/>';
    }
    result += 'More fakes: ' + fakes + '<br/>';
    result += 'Sum: ' + fakeSum + '<br/>';
    
    document.writeln(result);
    console.log('Printed day 02');
  }
}