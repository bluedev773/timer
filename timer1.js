//process.stdout.write('\x07'); //beep

//get input
const input = process.argv.slice(2);
//filter input that cant be converted to number or is negative
const filteredInput = input.filter(item => (typeof Number(item) === "number") && (Number(item) > -1));
//convert strings to numbers
const numberInput = filteredInput.map(item => Number(item));
//sort
sortedNumberInput = numberInput.sort((a,b) => {
  return a-b;
});


sortedNumberInput.forEach((element, index) => {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(element * 1000);
    }, element * 1000);
})

