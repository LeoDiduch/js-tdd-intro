const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  it("isSquare(): Check returns true on instance created with two sides of the same length otherwise return false", () => {
    let rect1 = new Rectangle(9, 9);
    assert.strictEqual(rect1.isSquare(), true);
    let rect2 = new Rectangle(9, 5);
    assert.strictEqual(rect2.isSquare(), false);
  });

  it("getArea(): Check that it returns the surface of the rectangle (ex: 25 for a rectangle of 5 by 5).", () => {
    let rect3 = new Rectangle(5, 5);
    assert.strictEqual(rect3.getArea(), 25);
  });

  it("rectangle.getPerimeter(): Check that it returns well the surface of the rectangle (ex: 20 for a rectangle of (5 + 5) * 2 ).", () => {
    let rect4 = new Rectangle(5, 5);
    assert.strictEqual(rect4.getPerimeter(), 20);
  });
});
