def isPythagoreanTriplet(a, b, c):
  return a**2 + b**2 == c**2

targetSum = 1000
for a in range(1, targetSum):
  for b in range(a, targetSum):
    c = targetSum - a - b
    if isPythagoreanTriplet(a, b, c):
      print(a * b * c)
      exit()
