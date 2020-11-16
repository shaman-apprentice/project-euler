package java_._07;

import java.util.stream.Stream;

import java_.utilities.Prime;

public class Main {
  public static void main(String[] args) {
    System.out.println(Stream.generate(Prime.generatePrimes()::next)
      .skip(10000)
      .findFirst().get()
    );
  }
}
