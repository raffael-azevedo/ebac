import minMax from "../min-max-index.js";
describe("Testes na função de calcular o mínimo e máximo índice de um array", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = jest.spyOn(global.console, "log");
  });
  afterEach(() => {
    logSpy.mockRestore();
  });
  it("deve retornar os indices para um array correto", () => {
    const inputArray = [10, 45, 11, 1098];
    expect(minMax(inputArray)).toEqual({ max: 3, min: 0 });
  });

  it("deve retornar -1 para os índices se um dos valores é um string", () => {
    const inputArray = [10, 45, "invalid", 11, 1098];
    expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
  });

  it("deve retornar o mesmo índice para um array de um elemento", () => {
    const inputArray = [42];
    expect(minMax(inputArray)).toEqual({ max: 0, min: 0 });
  });

  it("deve retornar -1 para os índices se o array está vazio", () => {
    const inputArray = [];
    expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
  });

  it("deve retornar os indices para um array correto (números negativos)", () => {
    const inputArray = [-5, -2, -10, -1];
    expect(minMax(inputArray)).toEqual({ max: 3, min: 2 });
  });

  it("deve retornar -1 para os índices se um dos valores é undefined", () => {
    const inputArray = [10, 45, undefined, 11, 1098];
    expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
  });

  it("deve retornar -1 para os índices se um dos valores é um NaN", () => {
    const inputArray = [10, 45, NaN, 11, 1098];
    expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
  });

  it("deve retornar -1 para os índices se um dos valores é null", () => {
    expect(minMax(null)).toEqual({ max: -1, min: -1 });
    expect(logSpy).toHaveBeenCalledWith("O input não é um array.");
  });

  it("deve retornar -1 para os índices se o array é undefined", () => {
    expect(minMax(undefined)).toEqual({ max: -1, min: -1 });
    expect(logSpy).toHaveBeenCalledWith("O input não é um array.");
  });

  it("deve retornar -1 para os índices se o array é um string", () => {
    expect(minMax("n0ll")).toEqual({ max: -1, min: -1 });
    expect(logSpy).toHaveBeenCalledWith("O input não é um array.");
  });

  it("deve retornar -1 para os índices se o array é um objeto", () => {
    expect(minMax({ key: "value" })).toEqual({ max: -1, min: -1 });
    expect(logSpy).toHaveBeenCalledWith("O input não é um array.");
  });
});
