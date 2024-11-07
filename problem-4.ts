{
  //
  // problem 4
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shapeProp: Circle | Rectangle): number => {
    if (shapeProp.shape === "circle") {
      const area = Math.PI * shapeProp.radius * shapeProp.radius;
      return Number(area.toFixed(2));
    } else {
      const area = shapeProp.height * shapeProp.width;
      return Number(area.toFixed(2));
    }
  };

  console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  console.log(
    calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
  );
  //
}
