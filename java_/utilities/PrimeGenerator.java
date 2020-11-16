package java_.utilities;

import java.util.List;
import java.util.stream.IntStream;
import java.util.ArrayList;
import java.util.Iterator;

public class PrimeGenerator implements Iterable<Integer>, Iterator<Integer> {
  private List<Integer> primes;
  private int maxNumber;
  private int sieveLength;
  private int[] sieve;
  private int fstRelevantIndex;

  public PrimeGenerator(int sieveLength) {
    this.primes = new ArrayList<>();
    this.sieveLength = sieveLength;
    this.maxNumber = sieveLength;
    this.sieve = IntStream.range(2, sieveLength + 1).toArray();
    this.fstRelevantIndex = 0;
  }

  public Iterator<Integer> iterator() {
    return this;
  }

  public boolean hasNext() {
    return true;
  }

  public Integer next() {
    return this.shakeNextPrime();
  }

  private int shakeNextPrime() {
    for (int i = this.fstRelevantIndex; i < this.sieve.length; i++) {
      if (this.sieve[i] != -1) {
        int nextPrime = sieve[i];
        this.primes.add(nextPrime);
        this.fstRelevantIndex = i + 1;

        this.strikeThrough(nextPrime, i + nextPrime);

        return nextPrime;
      }
    }

    this.shiftSieve();

    return this.shakeNextPrime();
  }

  private void strikeThrough(int prime, int fstIndex) {
    for (int i = fstIndex; i < this.sieve.length; i += prime)
      this.sieve[i] = -1;
  }

  private void shiftSieve() {
    this.sieve = IntStream.range(this.maxNumber + 1, this.maxNumber + this.sieveLength + 1).toArray();
    int startNumber = this.sieve[0];
    this.primes.forEach(prime -> {
      int primeRemainder = startNumber % prime;
      int fstIndexToStrikeThrough = primeRemainder == 0
        ? 0
        : prime - primeRemainder;
      this.strikeThrough(prime, fstIndexToStrikeThrough);
    });
    this.maxNumber += this.sieveLength;
    this.fstRelevantIndex = 0;
  }
}
