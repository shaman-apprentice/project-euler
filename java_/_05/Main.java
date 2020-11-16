package java_._05;

import java.util.Arrays;
import java.util.stream.IntStream;

import java_.utilities.BoxedValue;

public class Main {
  public static void main(String[] args) {
    int[] dividers = IntStream.range(2, 21).toArray();
    BoxedValue<Integer> candidate = new BoxedValue<>(2520);
    while(!(Arrays.stream(dividers).allMatch(divider -> candidate.value % divider == 0)))
      candidate.value += 1;

    System.out.println(candidate);
  }
}
