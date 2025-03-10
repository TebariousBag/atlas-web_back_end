export default function getFullResponseFromAPI(success) {
	// function returns a Promise
	// Promise, has 2 parameters, a resolution and a rejection
	// in this case its just empty responses
	return new Promise((resolved, rejected) => {
	  resolved({
		status: 200,
		body: 'Success'
	  });
	  rejected(new Error('The fake API is not working currently'));
	});
  }
  