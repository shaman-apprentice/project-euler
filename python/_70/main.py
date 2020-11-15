from datetime import datetime
from python._70.utilities import createPhi, isMutation

startTime = datetime.now()

max = 10 ** 7 - 1
phi = createPhi(max)

min = { 'n': -1, 'nDividedThroughPhi': max }
for n in range(2, max):
  phiOfN = phi(n)
  nDividedThroughPhi = n / phiOfN
  if nDividedThroughPhi < min['nDividedThroughPhi'] and isMutation(str(n), str(phiOfN)):
    min = { 'n': n, 'nDividedThroughPhi': nDividedThroughPhi }

print(datetime.now() - startTime) # 7:52:02.6929 (h:mm:ss:mmmm)
print(min) # {'n': 8319823, 'nDividedThroughPhi': 1.0007090511248113}
