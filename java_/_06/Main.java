package java_._06;

import java.util.stream.IntStream;

public class Main {
  public static void main(String[] args) {
    double sumOfSquares = IntStream.range(1, 101).asDoubleStream()
      .reduce(0, (acc, n) -> acc + Math.pow(n, 2));
    double squareOfSums = Math.pow(100 * 101 / 2, 2);
    System.out.println(String.format("%.0f\n", squareOfSums - sumOfSquares));
  }
}
