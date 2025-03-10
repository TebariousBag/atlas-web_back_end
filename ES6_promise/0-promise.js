export default function getResponseFromAPI() {
  // function returns a Promise
  // Promise, has 2 parameters, a resolution and a rejection
  // in this case its just empty responses
  return new Promise((resolved, rejected) => {
    resolved();
    rejected();
  });
}
