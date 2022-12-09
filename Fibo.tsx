const fibo = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(10));

//Online compiler for this function
// https://www.typescriptlang.org/play?#code/PTBmEsCMHsDsEMDGjwAIDOBTAjgV07IpgLABQic6ALqhDKgLyoAUsAXKrLgLaSYBOASg5deAxgD5UAbzKpU4UC1ioAPEwCMgmXPmp+mKrn4qNAbl0BfXQaMnaUaK1QBaVFtQBqBzGduATIIWpJbBZBSw6NAANpgAdNHQAObMdE4aAAyCQUA
