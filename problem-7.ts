{
  //
  // problem 7
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {}

    public getCarAge(): number {
      const currentYear = new Date();
      return currentYear.getFullYear() - this.year;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
  //
}
