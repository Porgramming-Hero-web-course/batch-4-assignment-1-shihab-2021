{
  //
  // problem 3
  const countWordOccurrences = (sentence: string, word: string): number => {
    let numOfAppear: number = 0;
    const wordArr: string[] = sentence.toLowerCase().split(" ");
    wordArr.forEach((element) => {
      if (element.includes(word.toLocaleLowerCase())) numOfAppear++;
    });

    return numOfAppear;
  };

  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );
  //
}
