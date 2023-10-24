import minMax from '../min-max-index.js'
describe('Testes na função de calcular o mínimo e máximo índice de um array', () => {
    let logSpy;
    beforeEach(() => {
        logSpy = jest.spyOn(global.console, 'log');
    })
    afterEach(() => {
        logSpy.mockRestore();
    })
    it('should return the correct max value and -1 for min index for a valid numeric array', () => {
        const inputArray = [10, 45, 11, 1098];
        expect(minMax(inputArray)).toEqual({ max: 3, min: 0 });
      });
    
      it('should return the correct max value and -1 for min index when the input array contains non-numeric values', () => {
        const inputArray = [10, 45, 'invalid', 11, 1098];
        expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
      });
    
      it('should handle arrays with only one element and return the same max value and -1 for min index', () => {
        const inputArray = [42];
        expect(minMax(inputArray)).toEqual({ max: 0, min: 0 });
      });
    
      it('should handle an empty array and return -1 for both max value and min index', () => {
        const inputArray = [];
        expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
      });
    
      it('should return the correct max value when the input array contains negative numbers', () => {
        const inputArray = [-5, -2, -10, -1];
        expect(minMax(inputArray)).toEqual({ max: 3, min: 2 });
      });
    
      it('should return the correct max value and -1 for min index when the input array contains undefined values', () => {
        const inputArray = [10, 45, undefined, 11, 1098];
        expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
      });
    
      it('should return the correct max value and -1 for min index when the input array contains NaN values', () => {
        const inputArray = [10, 45, NaN, 11, 1098];
        expect(minMax(inputArray)).toEqual({ max: -1, min: -1 });
      });
    
      it('should return the correct max value and -1 for min index when the input array is null', () => {
        expect(minMax(null)).toEqual({ max: -1, min: -1 });
        expect(logSpy).toHaveBeenCalledWith('O input não é um array.');
      });
    
      it('should return the correct max value and -1 for min index when the input array is undefined', () => {
        expect(minMax(undefined)).toEqual({ max: -1, min: -1 });
        expect(logSpy).toHaveBeenCalledWith('O input não é um array.');
            });
    
      it('should return the correct max value and -1 for min index when the input array is a string', () => {
        expect(minMax('n0ll')).toEqual({ max: -1, min: -1 });
        expect(logSpy).toHaveBeenCalledWith('O input não é um array.');
            });
    
      it('should return the correct max value and -1 for min index when the input array is an object', () => {
        expect(minMax({ key: 'value' })).toEqual({ max: -1, min: -1 });
        expect(logSpy).toHaveBeenCalledWith('O input não é um array.');
    });
    });