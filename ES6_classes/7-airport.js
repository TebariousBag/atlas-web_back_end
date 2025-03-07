export default class Airport {
	constructor (name, code) {
    // validate first
    if (typeof name !== 'string') {
      throw new TypeError ('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError ('Code must be a string');
    }
    // set private properties
    this._name = name;
    this._code = code;
	}
  // sybol toStringTag
  // return code
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
