const classificarIMC = require("./classificacao");

describe("Happy Path", () => {
  test('classificarIMC deve ser uma Função - "Function"', () => {
    expect(classificarIMC).toBeInstanceOf(Function);
  });

  test('classificarIMC(18.5) deve retornar "Abaixo do peso"', () => {
    const esperado = "Abaixo do peso";

    expect(classificarIMC(18.5)).toBe(esperado);
  });

  test('classificarIMC(18.6) deve retornar "Abaixo do peso"', () => {
    const esperado = "Peso ideal (parabéns)";

    expect(classificarIMC(18.6)).toBe(esperado);
  });

  test('classificarIMC(25.0) deve retornar "Levemente acima do peso"', () => {
    const esperado = "Levemente acima do peso";

    expect(classificarIMC(25.0)).toBe(esperado);
  });

  test('classificarIMC(30.0) deve retornar "Obesidade grau 1"', () => {
    const esperado = "Obesidade grau 1";

    expect(classificarIMC(30.0)).toBe(esperado);
  });

  test('classificarIMC(35.0) deve retornar "Obesidade grau 2 (severa)"', () => {
    const esperado = "Obesidade grau 2 (severa)";

    expect(classificarIMC(35.0)).toBe(esperado);
  });

  test('classificarIMC(40.0) deve retornar "Obesidade grau 3 (mórbida)"', () => {
    const esperado = "Obesidade grau 3 (mórbida)";

    expect(classificarIMC(40.0)).toBe(esperado);
  });
});

describe("Unhappy Path", () => {
  test('classificarIMC() deve retornar Erro "Vazio - um número deve ser informado como parametro"', () => {
    const esperado =
      "Erro número não pode ser Vazio, Zero e deve ser um Número.";

    expect(classificarIMC()).toBe(esperado);
  });

  test('classificarIMC(0) deve retornar Erro "Zero - o número informado não pode ser zero"', () => {
    const esperado =
      "Erro número não pode ser Vazio, Zero e deve ser um Número.";

    expect(classificarIMC(0)).toBe(esperado);
  });

  test('classificarIMC("a") deve retornar Erro "Não é um número - um valor número deve ser informado como parametro"', () => {
    const esperado =
      "Erro número não pode ser Vazio, Zero e deve ser um Número.";

    expect(classificarIMC("a")).toBe(esperado);
  });
});
