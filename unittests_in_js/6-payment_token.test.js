const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
	it('is it true', async() => {
		// wait for the response of true
		const answer = await getPaymentTokenFromAPI(true);
		// deep equal for content, strict equal for identity
		expect(answer).to.deep.equal({data: 'Successful response from the API' })
	});
});
