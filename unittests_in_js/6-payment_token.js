function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({data: 'Successful response from the API' })
  }
  else {
    return
  }
}

module.exports = getPaymentTokenFromAPI;
