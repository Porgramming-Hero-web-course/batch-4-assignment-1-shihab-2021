{
  //
  // problem 1
  function sumArray(arr: number[]): number {
    let sum: number = 0;
    arr.forEach((element) => {
      sum += element;
    });
    return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
  //
}
