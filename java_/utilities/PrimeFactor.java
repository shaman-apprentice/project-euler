package java_.utilities;

public class PrimeFactor {
  public int base;
  public int exponent;

  public PrimeFactor(int base, int exponent) {
    this.base = base;
    this.exponent = exponent;
  }

  public String toString() {
    return String.format(
      "{ base: %d, exponent: %d}",
      this.base, this.exponent
    );
  }
}
