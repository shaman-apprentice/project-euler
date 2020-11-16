package java_.utilities;

import java.util.Iterator;

public class Range implements Iterable<Integer>, Iterator<Integer> {
  private int nextN;
  private int end;

  public Range(int start, int end) {
    this.nextN = start;
    this.end = end;
  }

  public Range(int end) {
    this(1, end);
  }

  public Iterator<Integer> iterator() {
    return this;
  }

  public boolean hasNext() {
    return this.nextN <= this.end;
  }

  public Integer next() {
    return this.nextN++;
  }

  public int[] toList() {
    int[] result = new int[this.end - this.nextN + 1];
    int i = 0;
    for (int n : this)
      result[i++] = n;

    return result;
  }
}
