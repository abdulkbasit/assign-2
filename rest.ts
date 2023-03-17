function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum(10, 20)); // Output: 30
  console.log(sum(2, 4, 6)); // Output: 12
  