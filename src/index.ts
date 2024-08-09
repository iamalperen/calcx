class CalcX {
  /*
   * Calculation of distance between two points (x1,y1) <----> (x2,y2)
   * @param x1 : x-coordinate of the first point
   * @param y1 : y-coordinate of the first point
   * @param x2 : x-coordinate of the second point
   * @param y2 : y-coordinate of the second point
   * @return distance between the two points
   */
  static distanceBetweenPoints(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  /*
   * Calculation of center coordinates of three points (x1,y1) (x2,y2) (x3,y3)
   * @param x1 : x-coordinate of the first point
   * @param y1 : y-coordinate of the first point
   * @param x2 : x-coordinate of the second point
   * @param y2 : y-coordinate of the second point
   * @param x3 : x-coordinate of the third point
   * @param y3 : y-coordinate of the third point
   * @return center coordinates of the three points
   */
  static centroid(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
  ) {
    return {
      x: (x1 + x2 + x3) / 3,
      y: (y1 + y2 + y3) / 3,
    };
  }

  /*
   * Calculation of area of a circle by given radius
   * @param r : Radius of the circle
   * @return area of the circle
   */
  static areaOfCircle(r: number): number {
    return Math.PI * r * r;
  }

  /*
   * Calculation of perimeter of a circle by given radius
   * @param r : Radius of the circle
   * @return perimeter of the circle
   */
  static perimeterOfCircle(r: number): number {
    return 2 * Math.PI * r;
  }

  /*
   * Calculation of hypotenuse by given legs
   * @param x : First leg
   * @param y : Second leg
   * @return hypotenuse of the triangle
   */
  static pythagorean(x: number, y: number): number {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  }

  /*
   * Calculation of simplified interest rate
   * @param C : Initial deposit
   * @param r : Interest rate (expressed as a fraction: e.g. 0.06)
   * @param t : Number of years invested
   * @return future value of money
   */
  static simplifiedInterest(C: number, r: number, t: number): number {
    return C * Math.pow(1 + r, t);
  }

  /*
   * Calculation of compound interest rate
   * @param C : Initial deposit
   * @param r : Interest rate (expressed as a fraction: e.g. 0.06)
   * @param n : Number of times per year interest is compounded
   * @param t : Number of years invested
   * @return future value of money
   */
  static compoundInterest(C: number, r: number, n: number, t: number): number {
    return C * Math.pow(1 + r / n, n * t);
  }

  /*
   * Conversion of decimal to binary
   * @param num : Decimal number
   * @return binary form of the number
   */
  static decimalToBinary(num: number): string {
    return num.toString(2);
  }

  /*
   * Conversion of decimal to octal
   * @param num : Decimal number
   * @return octal form of the number
   */
  static decimalToOctal(num: number): string {
    return num.toString(8);
  }

  /*
   * Conversion of decimal to hexadecimal
   * @param num : Decimal number
   * @return hexadecimal form of the number
   */
  static decimalToHex(num: number): string {
    return num.toString(16);
  }

  /*
   * Calculation of logarithm
   * @param value : Number value
   * @param base : Base of the logarithm
   * @return logarithm value
   */
  static log(value: number, base: number): number {
    return Math.log(value) / Math.log(base);
  }

  /*
   * Calculation of logarithm by base e
   * @param value : Number value
   * @return logarithm value of base e
   */
  static ln(value: number): number {
    return Math.log(value);
  }

  /*
   * Calculation of area of a square
   * @param side : Value of the side
   * @return area of the square
   */
  static areaOfSquare(side: number): number {
    return Math.pow(side, 2);
  }

  /*
   * Calculation of factorial value of a number
   * @param n : Value of the number
   * @return factorial result
   */
  static factorial(n: number): number {
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }

  /*
   * Calculation of permutation of a number
   * @param n : Value of the number
   * @param r : Permutation number
   * @return permutation result
   */
  static permutation(n: number, r: number): number {
    return this.factorial(n) / this.factorial(n - r);
  }

  /*
   * Calculation of combination of a number
   * @param n : Value of the number
   * @param r : Combination number
   * @return combination result
   */
  static combination(n: number, r: number): number {
    return this.factorial(n) / (this.factorial(n - r) * this.factorial(r));
  }

  /*
   * Calculation of area of a rectangle
   * @param width : Width of the rectangle
   * @param height : Height of the rectangle
   * @return area of the rectangle
   */
  static areaOfRectangle(width: number, height: number): number {
    return width * height;
  }

  /*
   * Calculation of perimeter of a rectangle
   * @param width : Width of the rectangle
   * @param height : Height of the rectangle
   * @return perimeter of the rectangle
   */
  static perimeterOfRectangle(width: number, height: number): number {
    return 2 * (width + height);
  }

  /*
   * Calculation of area of a triangle
   * @param base : Base of the triangle
   * @param height : Height of the triangle
   * @return area of the triangle
   */
  static areaOfTriangle(base: number, height: number): number {
    return (base * height) / 2;
  }

  /*
   * Calculation of perimeter of a triangle given three sides
   * @param a : First side of the triangle
   * @param b : Second side of the triangle
   * @param c : Third side of the triangle
   * @return perimeter of the triangle
   */
  static perimeterOfTriangle(a: number, b: number, c: number): number {
    return a + b + c;
  }

  /*
   * Calculation of surface area of a sphere
   * @param r : Radius of the sphere
   * @return surface area of the sphere
   */
  static surfaceAreaOfSphere(r: number): number {
    return 4 * Math.PI * Math.pow(r, 2);
  }

  /*
   * Calculation of volume of a sphere
   * @param r : Radius of the sphere
   * @return volume of the sphere
   */
  static volumeOfSphere(r: number): number {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
  }

  /*
   * Calculation of surface area of a cylinder
   * @param r : Radius of the base of the cylinder
   * @param h : Height of the cylinder
   * @return surface area of the cylinder
   */
  static surfaceAreaOfCylinder(r: number, h: number): number {
    return 2 * Math.PI * r * (r + h);
  }

  /*
   * Calculation of volume of a cylinder
   * @param r : Radius of the base of the cylinder
   * @param h : Height of the cylinder
   * @return volume of the cylinder
   */
  static volumeOfCylinder(r: number, h: number): number {
    return Math.PI * Math.pow(r, 2) * h;
  }

  /*
   * Calculation of area of an ellipse
   * @param a : Semi-major axis
   * @param b : Semi-minor axis
   * @return area of the ellipse
   */
  static areaOfEllipse(a: number, b: number): number {
    return Math.PI * a * b;
  }

  /*
   * Calculation of sum of an arithmetic series
   * @param a : First term of the series
   * @param d : Common difference
   * @param n : Number of terms
   * @return sum of the arithmetic series
   */
  static sumOfArithmeticSeries(a: number, d: number, n: number): number {
    return (n / 2) * (2 * a + (n - 1) * d);
  }

  /*
   * Calculation of sum of a geometric series
   * @param a : First term of the series
   * @param r : Common ratio
   * @param n : Number of terms
   * @return sum of the geometric series
   */
  static sumOfGeometricSeries(a: number, r: number, n: number): number {
    if (r === 1) return a * n;
    return (a * (1 - Math.pow(r, n))) / (1 - r);
  }

  /*
   * Calculation of exponential growth
   * @param P : Initial amount
   * @param r : Growth rate
   * @param t : Time period
   * @return amount after exponential growth
   */
  static exponentialGrowth(P: number, r: number, t: number): number {
    return P * Math.exp(r * t);
  }

  /*
   * Calculation of exponential decay
   * @param P : Initial amount
   * @param r : Decay rate
   * @param t : Time period
   * @return amount after exponential decay
   */
  static exponentialDecay(P: number, r: number, t: number): number {
    return P * Math.exp(-r * t);
  }
}

export default CalcX;
