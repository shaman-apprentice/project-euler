import python.utilities.prime as prime

def _calcPhi(primeFactorization):
  tmp = 1
  for factor in primeFactorization:
    pToPowerOfK = factor['base'] ** factor['exponent']
    tmp *= (pToPowerOfK - pToPowerOfK // factor['base'])

  return tmp

def createPhi(max):
  """  @param max max-value for n """
  primes = prime.getPrimes(max)

  return lambda n: _calcPhi(prime.getPrimeFactorization(primes, n))

def isMutation(s, t):
  return sorted(list(s)) == sorted(list(t))
