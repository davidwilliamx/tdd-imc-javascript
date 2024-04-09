const calcularIMC = require("./imc");

describe("Happy Path", () => {
  test('calcularIMC deve ser uma Função - "Function"', () => {
    expect(calcularIMC).toBeInstanceOf(Function);
  });

  test("calcularIMC(50, 1) deve ser igual a 50", () => {
    expect(calcularIMC(50, 1)).toBe(50);
  });

  test("calcularIMC(75, 1.78) deve retornar 23.67", () => {
    expect(calcularIMC(75, 1.78)).toBe(23.67);
  });
});

describe("Unhappy Path", () => {
  test('calcularIMC() sem parametros passados deve retornar "Vazio - Não foram informados valores como parametros"', () => {
    expect(calcularIMC()).toBe(
      "Vazio - Não foram informados valores como parametros"
    );
  });

  test('calcularIMC(a, b) deve retornar "Não é um número - Números devem ser informados como parametros"', () => {
    const atual = calcularIMC("a", "b");
    const esperado =
      "Não é um número - Números devem ser informados como parametros";

    expect(atual).toBe(esperado);
  });

  test('calcularIMC(-1, -1) deve retornar "Valor Negativo - Números negativos não são válidos"', () => {
    const esperado = "Valor Negativo - Números negativos não são válidos";

    expect(calcularIMC(-1, -1)).toBe(esperado);
  });

  test('calcularIMC(300, 3.00) deve retornar "Valor máximo atingido - Números informados estão fora do limite"', () => {
    const esperado =
      "Valor máximo atingido - Números informados estão fora do limite";

    expect(calcularIMC(300, 3.0)).toBe(esperado);
  });
});
