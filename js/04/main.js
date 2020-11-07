const candidates = [];
for (let i = 999; i > 100; i--)
  for (let j = i; j > 100; j--) {
    const product = String(i * j);
    const reversed = product.split('').reverse().join('');
    if (reversed === product) 
      candidates.push(product);
  }

console.log(Math.max(...candidates));
