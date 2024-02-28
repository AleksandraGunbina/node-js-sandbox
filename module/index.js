import * as readline from "node:readline";
import classicPromis from './classic-promis.js'
import asyncAwait from './async-await.js';


const getCaseNumber = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

getCaseNumber.question('Choise case number: 1 - classic, 2 - async-await: ', (caseNumber) => {
    const caseNumberInt = parseInt(caseNumber)

  switch (caseNumberInt) {
    case 1:
      console.log(classicPromis())
      break;
    case 2:
      console.log(asyncAwait());
      break;
    default: {
      console.log('don\'t find this case')
      break
    }
  }
  //getCaseNumber.close();
});

