export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    // reduce, using the theSum to hold the value. we are starting at 0
    // thePerson is the current person in the array
    // then we add thePerson.id to theSum and keep going until we have gone through all the people
    return students.reduce((theSum, thePerson) => theSum + thePerson.id, 0);
  }
  return 0;
}
