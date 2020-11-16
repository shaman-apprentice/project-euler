package java_.utilities;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import java_.utilities.Range;
import java_.utilities.BoxedValue;
import java_.utilities.PrimeFactor;

public class Prime {
  public static Stream<Integer> generatePrimes(int sieveLength) {
    List<Integer> primes = new ArrayList<>();

    // BoxedValue is used as workaround, that Java's closure enforces final or effectively final
    BoxedValue<Integer> maxNumber = new BoxedValue<>(sieveLength);
    BoxedValue<int[]> sieve = new BoxedValue<>(new Range(2, sieveLength).toList());
    BoxedValue<Integer> fstRelevantSieveIndex = new BoxedValue<>(0);

    return Stream.generate(() -> {
      while (true) {
        for (int i = fstRelevantSieveIndex.value; i < sieve.value.length; i++) {
          if (sieve.value[i] != -1) {
            int nextPrime = sieve.value[i];
            primes.add(nextPrime);
            fstRelevantSieveIndex.value = i + 1;

            Prime.strikeThrough(sieve.value, nextPrime, i + nextPrime);

            return nextPrime;
          }
        }

        // no prime found in existing sieve -> shift sieve
        sieve.value = new Range(maxNumber.value + 1 , maxNumber.value + sieveLength).toList();
        int startNumber = sieve.value[0]; // save in case it gets struck through
        primes.forEach(prime -> { // sieve through multiples of already known primes
          int primeRemainder = startNumber % prime;
          int fstIndexToStrikeThrough = primeRemainder == 0
            ? 0
            : prime - primeRemainder;
          Prime.strikeThrough(sieve.value, prime, fstIndexToStrikeThrough);
        });
        maxNumber.value = maxNumber.value + sieveLength;
        fstRelevantSieveIndex.value = 0;
      }
    });    
  }

  public static List<Integer> getPrimes(int max, int sieveLength) {
    return Prime.generatePrimes(sieveLength)
      .takeWhile(prime -> { return prime <= max; })
      .collect(Collectors.toList());
  }

  public static List<PrimeFactor> getPrimeFactorization(List<Integer> primes, int n) {
    List<PrimeFactor> primeFactorization = new ArrayList<>();
    int m = n;

    for (int prime : primes) {
      if (m % prime == 0) {
        int exponent = 0;
        while (m % prime == 0) {
          exponent += 1;
          m = m / prime;
        }
        primeFactorization.add(new PrimeFactor(prime, exponent));
      }

      if (m == 1)
        return primeFactorization;
    }

    throw new RuntimeException(String.format(
      "given primes %s are to low to calc prime factorization of of %d",
      primes.toString(), n
    ));
  }

  private static void strikeThrough(int[] sieve, int prime, int fstIndex) {
    for (int i = fstIndex; i < sieve.length; i += prime)
      sieve[i] = -1;
  }
}
