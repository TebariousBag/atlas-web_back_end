export default class Building {
	constructor (sqft) {
		// validate first
		if (typeof sqft !== 'number') {
			throw new TypeError ('Sqft must be a number');
        // after validate then set
			this._sqft = sqft
		}
        // if the constructor is not Building and the evacuationWarningMessage is not a function
		if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
			throw new Error('Class extending Building must override evacuationWarningMessage');
		}
	  
	}

	// getter and setter
	get sqft() {
		return this._sqft;
	}
	set sqft(NewSqft) {
		if (typeof NewSqft !== 'number') {
			throw new TypeError ('Sqft must be a number');
		}
		this._sqft = NewSqft;
	}
}
