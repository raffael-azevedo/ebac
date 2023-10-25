import mdc from "../mdc.js";

describe("Testa a função de calcular o MDC entre dois números", () => {
  it("dois argumentos válidos", () => {
    let result;
    result = mdc(20, 24);
    expect(result).toEqual(4);
    result = mdc(6, 18);
    expect(result).toEqual(6);
  });
  it("dois argumentos: o primeiro é string", () => {
    expect(mdc("foo", 2)).toEqual("Um dos argumentos não é um número.");
  });
  it("dois argumentos: o segundo é string", () => {
    expect(mdc(1, "bar")).toEqual("Um dos argumentos não é um número.");
  });
  it("nenhum argumento", () => {
    expect(mdc()).toEqual("Um dos argumentos não é um número.");
  });
  it("dois argumentos inválidos: null", () => {
    expect(mdc(null, null)).toEqual("Um dos argumentos não é um número.");
  });
  it("dois argumentos inválidos: string", () => {
    expect(mdc("foo", "bar")).toEqual("Um dos argumentos não é um número.");
  });
  it("um dos argumentos inválidos: null", () => {
    expect(mdc(null, 2)).toEqual("Um dos argumentos não é um número.");
  });
  it("um dos argumentos inválidos: undefined", () => {
    expect(mdc(undefined, 2)).toEqual("Um dos argumentos não é um número.");
  });
  it("um dos argumentos inválidos: NaN", () => {
    expect(mdc(NaN, 2)).toEqual("Um dos argumentos não é um número.");
  });
});
