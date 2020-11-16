package java_._03;

import java.util.List;

import java_.utilities.Prime;
import java_.utilities.PrimeFactor;

public class Main {
  public static void main(String[] args) {
    List<PrimeFactor> pfs = Prime.getPrimeFactorization(Prime.getPrimes(22, 1000), 22);
    pfs.forEach(pf -> System.out.println(pf.base + "^" + pf.exponent) );
  }
}
