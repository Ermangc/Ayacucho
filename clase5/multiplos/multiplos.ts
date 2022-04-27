let index: number;
let chain: string;

for (index = 1; index <= 100; index++) {
  if (index % 2 === 0 || index % 3 === 0) {
    chain = chain + index + " ";
  }
}
console.log(chain);
