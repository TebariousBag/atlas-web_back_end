export default function cleanSet(set, startString) {
  // if startString is not string, or is empty, return empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  // empty array to hold value
  const holder = [];
  // loop through set and see if it starts with startString
  for (const i of set) {
    if (typeof i === 'string' && i.startsWith(startString)) {
      // if it does, push it to holder array
      // slice the startString from the string
      // slicing the length of characters it is
      holder.push(i.slice(startString.length));
    }
  }
  // return holder joined by -
  return holder.join('-');
}
