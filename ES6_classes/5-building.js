export default class Building {
	constructor (sqft) {
		// validate first
		if (typeof sqft !== 'number') {
			throw new TypeError ('Sqft must be a number');

			this._sqft = sqft
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

	evacuationWarningMessage() {
		throw new Error('extending Building must override evacuationWarningMessage');
	}
}
