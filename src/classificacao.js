const classificarIMC = (imc) => {
  const isImcUndefined = imc === undefined;
  const isImcZero = imc === 0;
  const isNotNumber = isNaN(imc);
  if (isImcUndefined || isImcZero || isNotNumber) {
    return "Erro número não pode ser Vazio, Zero e deve ser um Número.";
  } else if (imc <= 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.6 && imc <= 24.9) {
    return "Peso ideal (parabéns)";
  } else if (imc >= 25 && imc <= 29.9) {
    return "Levemente acima do peso";
  } else if (imc >= 30.0 && imc <= 34.9) {
    return "Obesidade grau 1";
  } else if (imc >= 35.0 && imc <= 39.9) {
    return "Obesidade grau 2 (severa)";
  } else if (imc >= 40.0) {
    return "Obesidade grau 3 (mórbida)";
  }
};
module.exports = classificarIMC;
