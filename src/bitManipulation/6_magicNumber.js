function magicNumber(n, base) {
  let sum = 0;
  let i = 1;
  while (n > 0) {
    let lastBit = n & 1;
    sum += base ** i * lastBit;
    n >>= 1;
    i++;
  }
  return sum;
}

console.log(magicNumber(6, 5));
