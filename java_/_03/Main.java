package java_._03;

import java.util.List;

import java_.utilities.Prime;
import java_.utilities.PrimeFactor;

public class Main {
  public static void main(String[] args) {
    List<PrimeFactor> primeFactorization = Prime.getPrimeFactorization(
      Prime.generatePrimes(),
      600851475143L
    );
    System.out.println(primeFactorization.get(primeFactorization.size() - 1).base);
  }
}
