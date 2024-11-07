{
  //
  // problem 8
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    /* keys.forEach((element) => {
      if (!(element in obj)) {
        return false;
      }
    }); */
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return true;
  };

  type Person = { name: string; age: number; email: string };

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys<Person>(person, ["name", "age"]));
  // console.log(validateKeys<Person>(person, ["name", "age", "wrongKey"]));
  //
}
