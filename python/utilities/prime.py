def strikeThrough(sieve, prime, fstIndex):
  for i in range(fstIndex, len(sieve), prime):
    sieve[i] = None

def generatePrimes(sieveLength = 1000):
  """ Sieve of Eratosthenes 
      @param sieveLength: Length of sieve to hold in RAM
  """
  primes = []
  maxNumber = sieveLength

  sieve = list(range(2, sieveLength))
  fstRelevantSieveIndex = 0
  while True:
    foundPrime = False
    for i in range(fstRelevantSieveIndex, len(sieve)):
      if sieve[i] is not None:
        foundPrime = True
        nextPrime = sieve[i]
        primes.append(nextPrime)
        yield nextPrime

        fstRelevantSieveIndex = i + 1

        strikeThrough(sieve, nextPrime, i + nextPrime)

        break

    if not foundPrime:
      sieve = list(range(maxNumber, maxNumber + sieveLength))
      startNumber = sieve[0]
      for prime in primes: 
        primeRemainder = startNumber % prime
        fstIndexToStrikeThrough = 0 if primeRemainder == 0 else prime - primeRemainder
        strikeThrough(sieve, prime, fstIndexToStrikeThrough)
      maxNumber += sieveLength
      fstRelevantSieveIndex = 0

def getPrimes(max = 1000, sieveLength = 1000):
  primes = []
  for prime in generatePrimes(sieveLength):
    if prime > max:
      return primes

    primes.append(prime)

def getPrimeFactorization(primes, n):
  primeFactorization = []
  m = n

  for prime in primes:
    if m % prime == 0:
      exponent = 0
      while m % prime == 0:
        exponent += 1
        m = m / prime
      primeFactorization.append({ 'base': prime, 'exponent': exponent })

      if m == 1:
        return primeFactorization

  raise Exception('given primes {} are to low, to calc prime factorization of {}'.format(primes, n))
