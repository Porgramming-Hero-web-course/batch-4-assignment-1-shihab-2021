{
  //
  // problem 5
  const getProperty = <DataObj, Prop extends keyof DataObj>(
    obj: DataObj,
    key: Prop
  ): DataObj[Prop] => {
    return obj[key];
  };

  const person: { name: string; age: number } = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
  //
}
