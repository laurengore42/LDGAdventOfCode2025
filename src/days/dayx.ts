export class dayx {
  public static printResult = () => {
    let result = '<br />Day x<br/>';
    const input = '';
    const testInput = '';
    let inputArray = input.split(';');
    inputArray = testInput.split(';');

    result += 'Result: ';
    result += inputArray;
    result += '<br />';
    
    document.writeln(result);
    console.log('Printed day x');
  }
}