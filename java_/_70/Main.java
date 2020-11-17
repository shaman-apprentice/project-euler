package java_._70;

import java.time.Duration;
import java.time.Instant;
import java.util.function.Function;
import java.util.stream.IntStream;

public class Main {
  public static void main(String[] args) {
    Instant startTime = Instant.now();

    Double max = Math.pow(10, 7);
    Function<Long, Double> phi = Utilities.createPhi(max.intValue());

    PhiRatio min = new PhiRatio(-1, max);
    for (Double n : IntStream.range(2, max.intValue()).asDoubleStream().toArray()) {
      Double phiOfN = phi.apply(n.longValue());
      Double nDividedThroughPhi = n / phiOfN;
      if (nDividedThroughPhi < min.nDividedThroughPhi && Utilities.isMutation(n, phiOfN)) 
        min = new PhiRatio(phiOfN, nDividedThroughPhi);
    }

    System.out.println(Duration.between(startTime, Instant.now())); // PT29M0.3684058S
    System.out.println(min); // { n: 8313928, nDividedThroughPhi: 1,000709 }
  }
}
