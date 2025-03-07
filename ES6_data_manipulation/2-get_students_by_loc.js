export default function getStudentsByLocation(students, city) {
  // check if students is array
  if (Array.isArray(students)) {
    // filter students  by chosen city, if person city is true it will be added to new array
    return students.filter((person) => person.location === city);
  }
  // if not return empty array
  return [];
}
