const calcularIMC = (peso, altura) => {
  const isNumberUndefined = peso === undefined || altura === undefined;
  const isNotNumber = isNaN(peso) || isNaN(altura);
  const isNumberZero = peso < 0 || altura < 0;
  const isNumberMax = peso >= 300 || altura >= 3.0;

  if (isNumberUndefined) {
    return "Vazio - Não foram informados valores como parametros";
  } else if (isNotNumber) {
    return "Não é um número - Números devem ser informados como parametros";
  } else if (isNumberZero) {
    return "Valor Negativo - Números negativos não são válidos";
  } else if (isNumberMax) {
    return "Valor máximo atingido - Números informados estão fora do limite";
  } else {
    return Number((peso / altura ** 2).toFixed(2));
  }
};

module.exports = calcularIMC;
