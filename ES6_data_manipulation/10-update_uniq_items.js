export default function updateUniqItems(map) {
  // check if arg is a map
  if (map instanceof Map) {
    // iterate through map and update all 1's to 100
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
    // if arg is not a map, throw error
  }
  throw new Error('Cannot process');
}
