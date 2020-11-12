const { 
  createPhi,
  getMutations,
  isMutation,
} = require('./main');

describe('`phi`', () => {
  const phi = createPhi(9);

  it('calcs phi(9)=6', () => {
    expect(phi(9)).toBe(6);
  });
});

describe('mutations', () => {
  it('calculates mutations of "1" correctly', () => {
    expect(getMutations('1')).toEqual([ '1' ]);
  });

  it('calculates mutations of "12" correctly', () => {
    expect(getMutations('12')).toEqual([ '12', '21' ]);
  });

  it('calculates mutations of "123" correctly', () => {
    const mutations = ['123', '132', '213', '231', '312', '321'];
    expect(getMutations('123').sort()).toEqual(mutations);
  });

  it ('verifies "87109" as mutation of "79180"', () => {
    expect(isMutation('87109', '87109')).toBe(true);
  });

  it ('verifies "87106" as not mutation of "79180"', () => {
    expect(isMutation('87106', '87109')).toBe(false);
  });
});
