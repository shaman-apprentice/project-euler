package java_._02;

import java.util.ArrayList;
import java.util.List;

public class Main {
  private static List<Integer> getFibs(int untilFibBiggerThan) {
    List<Integer> fibs = new ArrayList<>(List.of(1, 2));
    int i = 1;
    while (fibs.get(i) < untilFibBiggerThan)
      fibs.add(++i, fibs.get(i - 1) +  fibs.get(i - 2));

    return fibs.subList(0, i);
  }

  public static void main(String[] args) {
    System.out.println(
      Main.getFibs(4000000).stream()
        .filter(n -> n % 2 == 0)
        .reduce(0, (acc, n) -> acc + n)
    );
  }
}
