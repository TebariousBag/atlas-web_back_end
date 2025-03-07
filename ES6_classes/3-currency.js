export default class Currency {
  constructor (code, name) {
    // validate first
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // set private properties
    this._name = name;
    this.code = code;
}
  // name getter setter
  get name() {
    return this._name;
  }

  set name(NewName) {
    if (typeof NewName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = NewName;
  }

  // code getter setter
  get code() {
    return this._code;
  }

  set code(NewCode) {
    if (typeof NewCode !== 'string') {
      throw new TypeErro ('Code must be a string');
    }
    this._code = NewCode;
  }

  // displayFullCurrency method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
