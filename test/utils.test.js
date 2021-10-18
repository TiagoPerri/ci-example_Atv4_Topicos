const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {

    describe('gerarNumeroAleatorio', () => {
        test('O início do intervalo é um valor negativo', () => {
            const res = gerarNumeroAleatorio(-2, 5);
            expect(res).toBe(-1);
        });

        test('O fim do intervalo é um valor negativo', () => {
            const res = gerarNumeroAleatorio(2, -3);
            expect(res).toBe(-1);
        });

        test('O início do intervalo é igual ao fim do intervalo', () => {
            const res = gerarNumeroAleatorio(6, 6);
            expect(res).toBe(-1);
        });

        test('Um intervalo válido [200, 3000] é fornecido', () => {
            const res = gerarNumeroAleatorio(200, 3000);
            expect(res > 200 && res < 3000);
        });
    });

    describe('acharCaracter', () => {
        test('Testando comprimento inválido', () => {
            expect(acharCaracter(-8, 'abcde', 'd')).toBe('Comprimento inválido!');
        });
    
        test('Testando quando o comprimento recebido é diferente do comprimento real', () => {
            expect(acharCaracter(20, 'abcde', 'a')).toBe('Ops... O comprimento recebido não é igual ao comprimento real.');
        });

        test('Caracter na posição 2', () => {
            expect(acharCaracter(5, 'abcde', 'b')).toBe(2);
        });
    
        test('Caracter na posição 4', () => {
            expect(acharCaracter(5, 'abcde', 'd')).toBe(4);
        });
    
        test('Caractere não existente', () => {
            expect(acharCaracter(5, 'abcde', 'z')).toBe("caracter não encontrado!");
        });
       
    });  
});