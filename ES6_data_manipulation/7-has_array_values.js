export default function hasValuesFromArray(set, array) {
  // every() checks to see if set matches every value in array
  // loops through and if it matches true, if not then false
  return array.every((value) => set.has(value));
}
