export default class Car {
  constructor (brand, motor, color) {
    // validate first
    if (typeof brand !== 'string') {
      throw new TypeError ('Brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError ('Motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError ('Color must be a string')
    }
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
    return new Car(this._brand, this._motor, this._color);
  }
}
