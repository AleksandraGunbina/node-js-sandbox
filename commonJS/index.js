const Square = require("./square");
const someSquare = new Square(5);
const areaOfSomeSquare = someSquare.area();
console.log(`Square area: `, areaOfSomeSquare);


const readline = require('readline');
const getCaseNumber = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

getCaseNumber.question('Choise case number: 1 - classic, 2 - async-await: ', (caseNumber) => {
    const caseNumberInt = parseInt(caseNumber)
  switch (caseNumberInt) {
    case 1:
      console.log((simplePromise = require("./classic-promis")));
      break;
    case 2:
      console.log((asyncCase = require("./async-awit")));
      break;
  }
  //getCaseNumber.close();
});


