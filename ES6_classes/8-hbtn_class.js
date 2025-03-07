export default class HolbertonClass {
  constructor(size, location) {
    // validate first
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    // set private properties after validate
    this._size = size;
    this._location = location;
  }
  // getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
