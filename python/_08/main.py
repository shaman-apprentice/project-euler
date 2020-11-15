# from os import linesep - surprisingly Python reads new lines of files as '\n' although in the file it should be '\r\n'
from functools import reduce

numberStr = "".join(open('files/08.txt').read().split('\n'))
digitSize = 13
products =  [ reduce(lambda acc, c: acc * int(c), list(s), 1) for s
  in (numberStr[i - digitSize:i] for i in range(digitSize, len(numberStr))) ]

print(max(products))
