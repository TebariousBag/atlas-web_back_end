export default function handleResponseFromAPI(promise) {
  // start of the promise chain
  // where we establish the handlers for the promise
  return promise
  // then is how we handle success cases
  .then(resolves => {
    console.log('Got a response from the API');
    return { status: 200,
      body: 'success' };
  })
  // catch is how we handle failure cases
  .catch(fails => {
    console.log('Got a response from the API');
    return new Error;
  })
}
