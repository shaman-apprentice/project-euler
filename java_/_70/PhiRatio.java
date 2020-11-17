package java_._70;

public class PhiRatio {
  public double n;
  public double nDividedThroughPhi;

  public PhiRatio(double n, double nDividedThroughPhi) {
    this.n = n;
    this.nDividedThroughPhi = nDividedThroughPhi;
  }

  public String toString() {
    return String.format("{ n: %.0f, nDividedThroughPhi: %f }",
      this.n, this.nDividedThroughPhi
    );
  }
}
