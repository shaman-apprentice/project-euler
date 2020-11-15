# If uses 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19 as step size instead of 1
# and start with it instead of 2520, Python is faster as JS with this alg.
# This shows that Python's internals are generally faster,
# but standard Python interpreter has no JIT.

dividers = list(range(2, 21))
candidate = 2520
while not all(candidate % divider == 0 for divider in dividers):
  candidate += 1 

print(candidate)
