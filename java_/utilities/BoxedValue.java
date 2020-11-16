package java_.utilities;

/** Function closures of streams enforces outer variable to be final or effectively final.
 * This little wrapper enables primitives to have a final memory / object reference.
 */
public class BoxedValue<T> {
  public T value;

  public BoxedValue(T value) {
    this.value = value;
  }

  public String toString() {
    return this.value.toString();
  }
}
