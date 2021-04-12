function cashierHelp(cashAmount, price) {
  const cashNotes = [
    200,
    100,
    50,
    20,
    10,
    5,
    2,
    1,
    0.5,
    0.2,
    0.1,
    0.05,
    0.02,
    0.01,
  ];
  let result = [];
  let restAmount = cashAmount - price;

  if (restAmount === 0) {
          return "No change required.";
}

if (restAmount < 0) {
    return `price: ${price}, paid amount ${cashAmount}.`;
}    

  for (note of cashNotes) {
    // get amount of a needed note
    let amountOfNote = Math.trunc(restAmount / note);
    // put note and its amount into a result array
    if (amountOfNote !== 0) {
      result.push(`Note: ${note} \t -> ${amountOfNote}x`);
      // get new rest value to go through the notes again
      // due to javascript floating point issues we turn the value into a string (with toFixed()) and then turn it again into a number with Number()
      restAmount = Number((restAmount - note * amountOfNote).toFixed(2));
  }
  }
  const output = result.join('\n');
  return output;
}

console.log(cashierHelp(50, 3.75)); // 50, 3.75 -->  2x 20, 1x 5, 1x 1, 1x 0.2, 1x 0.05
console.log('-------')
console.log(cashierHelp(200, 85.99));
console.log('-------')
console.log(cashierHelp(50, 64.8));
console.log('-------')
console.log(cashierHelp(64.8, 64.8));