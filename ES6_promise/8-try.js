export default function divideFunction(numerator, denominator) {
  // pretty self explanatory, if denominator is 0, throw an error
  if (denominator === 0) {
    throw Error('Cannot divide by 0');
  }
  return numerator / denominator;
}
