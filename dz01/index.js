"use strict";

import process from "node:process";
import { argv, stdout, stderr } from "node:process";

const coefficients = argv.slice(2).map(Number);

//the coefficients of the equation
const a = coefficients[0];
const b = coefficients[1] == undefined ? 0 : coefficients[1];
const c = coefficients[2] == undefined ? 0 : coefficients[2];

//this function will use for displaying of the equation
const onEquationCoeffView = (coeff) => {
  if (coeff === 0) {
    return "";
  } else if (coeff > 0) {
    return "+" + coeff;
  } else {
    return coeff;
  }
};

if (coefficients.length < 1) {
  stdout.write("Коэффициенты не введены\n");
  process.exit(1);
} else if (coefficients.length > 3) {
  stdout.write("Введено слишком много коэффициентов\n");
  process.exit(40);
} 
else if (a === 0) {
  stderr.write(
    "Это не квадратное уравнение, старший коэффициент не может быть равен нулю\n"
  );
  process.exit(41);
} else if (coefficients.every(item => !isNaN(item)) == false) {
  stderr.write("Один из введенных коэффициент не является числом\n");
  process.exit(42);
} else {
  console.log(
    "Исходное уравнение:",
    "\n",
    `${a}x^2${onEquationCoeffView(b) == '' ? '' : onEquationCoeffView(b)+'x'}${onEquationCoeffView(c)}`
  );
  const discriminant = b ** 2 - 4 * a * c;
  switch (true) {
    case discriminant > 0: {
      const solutionFirst = ((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(3);
      const solutionSecond = ((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(3);
      stdout.write(
        `Уравнение имеет два решения: ${solutionFirst} и ${solutionSecond}\n`
      );
      process.exit(0);
    }
    case discriminant === 0: {
      const solution = (-b / (2 * a)).toFixed(3);
      stdout.write(`Уравение иммет одно (два одинаковых) решение: ${solution}\n`);
      process.exit(0);
    }
    case discriminant < 0: {
      stderr.write("Уравнение не имеет решений\n");
      process.exit(50);
    }
  }
}
