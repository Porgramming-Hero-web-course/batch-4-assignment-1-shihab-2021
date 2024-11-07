{
  //
  // problem 2
  const removeDuplicates = (arr: number[]): number[] => {
    let newArr: number[] = [];
    arr.forEach((element) => {
      if (!newArr.includes(element)) newArr.push(element);
    });

    return newArr;
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  //
}
