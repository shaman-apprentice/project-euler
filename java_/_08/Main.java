package java_._08;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Main {
  public static void main(String[] args) throws IOException {
    int digitSize = 13;
    String numberStr = Files.lines(Paths.get("./files/08.txt"))
      .collect(Collectors.joining(""));
    
    double result = IntStream.range(digitSize, numberStr.length() + 1)
      .mapToObj(i -> numberStr.substring(i - digitSize, i))
      .map(s -> Arrays.stream(s.split(""))
        .map(Double::parseDouble)
        .reduce(1., (acc, i) -> acc * i)
      )
      .max(Comparator.naturalOrder()).get();

    System.out.println(String.format("%.0f\n", result));
  }
}
