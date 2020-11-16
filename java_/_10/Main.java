package java_._10;

import java_.utilities.Prime;

public class Main {
  public static void main(String[] args) {
    System.out.println(String.format("%.0f", Prime.getPrimes(2000000).stream()
      .map(Double::valueOf)
      .reduce(0., (acc, p) -> acc + p)));
  }
}
