const { 
  isRelativePrime,
  phi,
  getMutations,
  isMutation,
} = require('./main');

describe('`isRelativePrime`', () => {
  it('verifies 1 as relativePrime to everything', () => {
    expect(isRelativePrime(1, 8)).toBe(true);
  });

  it('verifies 4 as relative prime to 9', () => {
    expect(isRelativePrime(4, 9)).toBe(true);
  });

  it('verifies 3 as not relative prime to 6', () => {
    expect(isRelativePrime(3, 6)).toBe(false);
  });
});

describe('`phi`', () => {
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
