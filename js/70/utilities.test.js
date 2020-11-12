const { 
  createPhi,
  isMutation,
} = require('./utilities');

describe('`phi`', () => {
  const phi = createPhi(9);

  it('calcs phi(9)=6', () => {
    expect(phi(9)).toBe(6);
  });
});

describe('mutations', () => {
  it ('verifies "87109" as mutation of "79180"', () => {
    expect(isMutation('87109', '87109')).toBe(true);
  });

  it ('verifies "87106" as not mutation of "79180"', () => {
    expect(isMutation('87106', '87109')).toBe(false);
  });
});
