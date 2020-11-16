package java_._04;

import java.util.Comparator;
import java.util.stream.IntStream;

public class Main {
  public static void main(String[] args) {
    System.out.println(IntStream.range(1, 1000)
      .boxed()
      .flatMap(i -> IntStream.range(i, 1000).mapToObj(j -> new int[] { i, j }))
      .map(ij -> ij[0] * ij[1])
      .filter(product -> {
        String reversed = new StringBuilder().append(product).reverse().toString();
        return reversed.equals(String.valueOf(product));
      })
      .max(Comparator.naturalOrder())
      .get()
    );
  }
}
