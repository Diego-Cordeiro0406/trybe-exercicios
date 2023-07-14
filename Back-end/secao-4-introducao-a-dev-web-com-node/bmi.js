const readline = require('readline-sync');

const bmiCalculator = () => {
  const weight = readline.questionFloat(`What's your weight? `);
  const height = readline.questionInt(`What's your height? `);
  const heightInMeters = height / 100;
  const heightsqrt = heightInMeters ** 2;
  const bmi = Number((weight / heightsqrt).toFixed(2));

  if (bmi <= 18.5) {
    return `You're underweight`;
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return `Your body mass index is ${bmi}, and You're in the normal weight range`;
  } else if (bmi > 25.0 && bmi <= 29.9) {
    return `Your body mass index is ${bmi}, and You're overweight`;
  } else if (bmi > 30.0 && bmi <= 34.9) {
    return `Your body mass index is ${bmi}, and You have obesity level 1`;
  } else if (bmi > 35.0 && bmi <= 39.99) {
    return `Your body mass index is ${bmi}, and You have obesity level 2`;
  } else if (bmi > 40.0) {
    return `Your body mass index is ${bmi}, and You have obesity level 3 and 4`;
  }
};

console.log(bmiCalculator());
