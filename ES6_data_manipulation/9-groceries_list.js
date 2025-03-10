export default function groceriesList() {
  // map stores key value pairs
  // set adds/updates values
  const groceriesList = new Map();
  groceriesList.set('Apples', 10);
  groceriesList.set('Tomatoes', 10);
  groceriesList.set('Pasta', 1);
  groceriesList.set('Rice', 1);
  groceriesList.set('Banana', 5);
  return groceriesList;
}
