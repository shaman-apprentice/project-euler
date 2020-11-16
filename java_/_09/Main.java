package java_._09;

public class Main {

  private static boolean isPythagoreanTriplet(int a, int b, int c) {
    return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2);
  }
  public static void main(String[] args) {
    int targetSum = 1000;
    for (int a = 1; a < targetSum; a++)
      for (int b = a; b < targetSum; b++) {
        int c = targetSum - a - b;
        if (isPythagoreanTriplet(a, b, c)) {
          System.out.println(a * b * c);
          System.exit(0);
        }
      }
  }
}
