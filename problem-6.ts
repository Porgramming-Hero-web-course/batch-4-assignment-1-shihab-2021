{
  //
  // problem 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (
    prevData: Profile,
    updateData: Partial<Profile>
  ): Profile => {
    return { ...prevData, ...updateData };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
  //
}
