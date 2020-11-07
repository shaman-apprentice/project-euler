def getFibs(untilBiggerThan):
  fibs = [ 1, 2 ]
  i = 1
  while (fibs[i] < untilBiggerThan):
    i += 1
    fibs.append(fibs[i - 2] + fibs[i - 1])
  
  return fibs[:-1]

print(
  sum([n for n in getFibs(4000000) if n % 2 == 0])
)
