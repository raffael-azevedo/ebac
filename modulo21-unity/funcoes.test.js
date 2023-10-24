import soma from './funcoes'

describe('funções matemáticas', () => {
    it('soma de dois valores', () => {
        expect(soma(2,5)).toBe(7)
        expect(soma(null, 2)).toBe(2)
    })
})