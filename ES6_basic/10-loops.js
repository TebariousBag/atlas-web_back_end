export default function appendToEachArrayValue(array, appendString) {
  const narray = [];
  for (const i of array) {
    narray.push(appendString + i);
  }
  return narray;
}
