package java_._70;

import java.util.Arrays;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

import java_.utilities.Prime;

public class Utilities {
  public static Function<Long, Double> createPhi(int max) {
    List<Integer> primes = Prime.getPrimes(max);

    return (n) -> Prime.getPrimeFactorization(primes, n).stream()
      .reduce(
        1.,
          (acc, pF) -> {
          double pToPowerOfK = Math.pow(pF.base, pF.exponent);
          return acc * (pToPowerOfK - pToPowerOfK / pF.base);
        },
        (a, b) -> a * b
      );
  }

  public static boolean isMutation(Double n, Double m) {
    return Utilities.sortByChar(n).equals(Utilities.sortByChar(m));
  }

  public static String sortByChar(Double n) {
    return Arrays.stream(String.valueOf(n.intValue()).split(""))
      .map(Integer::parseInt)
      .sorted()
      .map(String::valueOf)
      .collect(Collectors.joining(""));
  }
}
