import python.utilities.prime as prime

i = 1
for p in prime.generatePrimes():
  if i == 10001:
    print(p)
    break

  i += 1
  