package java_._01;

public class Main {
  public static void main(String[] args) {
    int acc = 0;
    for (int i = 0; i < 1000; i++)
      if (i % 3 == 0 || i % 5 == 0)
        acc += i;

    System.out.println(acc);
  }
}
