import somaMultiplos from "../soma-multiplos.js";

describe("Testa a função de soma de múltiplos", () => {
  it("Deve somar os múltiplos de 3 e 5 até 10 (positivo)", () => {
    expect(somaMultiplos(3, 5, 10)).toEqual(23); // 3 + 5 + 6 + 9 = 23
  });

  it("Deve somar os múltiplos de 2 e 4 até 20 (positivo)", () => {
    expect(somaMultiplos(2, 4, 20)).toEqual(90); // 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 = 90
  });

  it("Deve lidar com números não válidos (negativo)", () => {
    expect(somaMultiplos("foo", 2, 10)).toEqual(
      "Um dos argumentos não é um número."
    );
    expect(somaMultiplos(3, null, 10)).toEqual(
      "Um dos argumentos não é um número."
    );
    expect(somaMultiplos(3, 5, undefined)).toEqual(
      "Um dos argumentos não é um número."
    );
  });

  it("Deve retornar 0 quando max é 1 (positivo)", () => {
    expect(somaMultiplos(3, 5, 1)).toEqual(0);
  });

  it("Deve retornar 0 quando não há múltiplos (positivo)", () => {
    expect(somaMultiplos(7, 11, 3)).toEqual(0);
  });

  it("Deve somar múltiplos de 3 e 5 até 100 (positivo)", () => {
    expect(somaMultiplos(3, 5, 100)).toEqual(2318);
  });
  it("Deve somar múltiplos de 3 e 11 até 10 (positivo)", () => {
    expect(somaMultiplos(3, 11, 10)).toEqual(18);
  });

  it("Deve somar múltiplos de 2 e 3 até 50 (positivo)", () => {
    expect(somaMultiplos(2, 3, 50)).toEqual(792);
  });
});
