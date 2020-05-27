const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  // Adicione seu código aqui
  beforeEach(() => {
    console.log(`beforeEach executed
    alguém vai pro brejo :/`);
    adventure.randomAttack();
  });

  afterEach(() => {
    console.log(
      `afterEach executed
      grupo dos aventureiros remanescentes:`,
      adventure.specialists.map(warrior => warrior.nome).join(', '),
    );
  });

  afterAll(() => {
    console.log(
      `afterAll executed 
    :) Aventureito sobrevivente é ... `,
      adventure.specialists[0].nome,
    );
  });

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
