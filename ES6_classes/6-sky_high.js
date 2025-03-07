import Building from './5-building';
// note to self to remove .js from import
export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
  // call parent for sqft
    super(sqft);
    // validate first
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    // set private properties
    this._floors = floors;
  }
  // getters
  get floors() {
    return this._floors;
  }

  get sqft() {
    return this._sqft;
  }
  // override evacuationWarningMessage and return string
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
