package java_.utilities;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Prime {
  public static PrimeGenerator generatePrimes(int sieveLength) {
    return new PrimeGenerator(sieveLength);
  }

  public static PrimeGenerator generatePrimes() {
    return new PrimeGenerator(1000);
  }

  public static List<Integer> getPrimes(int max, int sieveLength) {
    return Stream.generate(Prime.generatePrimes(sieveLength)::next)
      .takeWhile(prime -> { return prime <= max; })
      .collect(Collectors.toList());
  }

  public static List<Integer> getPrimes(int max) {
    return Prime.getPrimes(max, 1000);
  }

  public static List<PrimeFactor> getPrimeFactorization(Iterable<Integer> primes, long n) {
    List<PrimeFactor> primeFactorization = new ArrayList<>();
    long m = n;

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
}
