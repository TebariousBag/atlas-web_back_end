import Currency from './3-currency';
// no .js on import
export default class Pricing {
	constructor (amount, currency) {
		// validate first
		if (typeof amount !== 'number') {
			throw new TypeError('Amount must be a number');
		}

		// private properties
		this._currency = currency;
		this._amount = amount;
	}

	// currency getter setter
	get currency () {
		return this._currency;
	}

	set currency (NewCurrency) {
		this._currency = NewCurrency;
	}

	// amount getter setter
	get amount() {
		return this._amount;
	}
	set amount(NewAmount) {
		if (typeof NewAmount !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		this._amount = NewAmount;
	}

	// displayFullPrice method
	// display amount currency_name and currency_code
	displayFullPrice() {
	return `${this._amount} ${this._currency.name} ${(this._currency.code)}`;
	}
}
