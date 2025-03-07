export default class Car {
  constructor (brand, motor, color) {
  // private
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  // getters
  get brand() {
    return this._brand;
  }
  get motor() {
    return this._motor;
  }
  get color() {
    return this._color;
  }
  // cloneCar method
  cloneCar() {
    const car = this.constructor;
    return new car(this._brand, this._motor, this._color);
  }
}
