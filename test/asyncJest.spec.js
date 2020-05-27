const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', () => {
    expect(answerPhone(false)).rejects.toBe(
      'Infelizmente não podemos atender...',
    );
  });
});
