const mockFunctions = require('../src/mockFunctions');
jest.mock('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  // Crie suas mock functions aqui
  test('testa soma', () => {
    mockFunctions.add.mockImplementation((a, b) => a + b);
    mockFunctions.add(2, 2);

   expect(mockFunctions.add).toHaveBeenCalled();
   expect(mockFunctions.add).toHaveBeenCalledTimes(1);
   expect(mockFunctions.add).toHaveBeenCalledWith(2, 2);
   expect(mockFunctions.add(2, 2)).toBe(4);
  });

  test('testa subtração', () => {
    mockFunctions.subtract.mockImplementation((a, b) => a - b);
    mockFunctions.subtract(5, 2);

   expect(mockFunctions.subtract).toHaveBeenCalled();
   expect(mockFunctions.subtract).toHaveBeenCalledTimes(1);
   expect(mockFunctions.subtract).toHaveBeenCalledWith(5, 2);
   expect(mockFunctions.subtract(5, 2)).toBe(3);
  });

  test('testa multiplicação', () => {
    mockFunctions.multiply.mockImplementation((a, b) => a * b);
    mockFunctions.multiply(5, 2);

   expect(mockFunctions.multiply).toHaveBeenCalled();
   expect(mockFunctions.multiply).toHaveBeenCalledTimes(1);
   expect(mockFunctions.multiply).toHaveBeenCalledWith(5, 2);
   expect(mockFunctions.multiply(5, 2)).toBe(10);
  });

  test('testa divisão', () => {
    mockFunctions.divide.mockImplementation((a, b) => a / b);
    mockFunctions.divide(20, 4);

   expect(mockFunctions.divide).toHaveBeenCalled();
   expect(mockFunctions.divide).toHaveBeenCalledTimes(1);
   expect(mockFunctions.divide).toHaveBeenCalledWith(20, 4);
   expect(mockFunctions.divide(20, 4)).toBe(5);
  });

  test('testa power', () => {
    mockFunctions.power.mockImplementation((a, b) => Math.pow(a, b))
    mockFunctions.power(2, 10);

   expect(mockFunctions.power).toHaveBeenCalled();
   expect(mockFunctions.power).toHaveBeenCalledTimes(1);
   expect(mockFunctions.power).toHaveBeenCalledWith(2, 10);
   expect(mockFunctions.power(2, 10)).toBe(1024);
  });

  test('testa factorial', () => {
    mockFunctions.factorial.mockImplementation((a) => {
      let fact = 1;
      while (a > 1) {
        fact *= a;
        a--;
      }
      return fact;
    });
    mockFunctions.factorial(5);

   expect(mockFunctions.factorial).toHaveBeenCalled();
   expect(mockFunctions.factorial).toHaveBeenCalledTimes(1);
   expect(mockFunctions.factorial).toHaveBeenCalledWith(5);
   expect(mockFunctions.factorial(5)).toBe(120);
  });

  test('testa função add', () => {
    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
